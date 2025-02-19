import MDXComponents from "@/components/mdx/MDXComponents";
import { Locale } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import fs from "fs/promises";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

async function getMDXContent(locale: string) {
  const filePath = path.join(
    process.cwd(),
    "content",
    "about",
    `${locale}.mdx`
  );
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading MDX file: ${error}`);
    return "";
  }
}

type MetadataProps = {
  params: { locale: string; slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return constructMetadata({
    page: "About",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/about`,
  });
}

type Params = Promise<{
  locale: string;
}>;

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params;
  const content = await getMDXContent(locale);

  return (
    <article className="w-full md:w-3/5 px-2 md:px-12">
      <MDXRemote
        source={content}
        components={MDXComponents}
        options={options}
      />
    </article>
  );
}
