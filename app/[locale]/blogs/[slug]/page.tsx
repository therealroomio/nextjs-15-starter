import { Callout } from "@/components/mdx/Callout";
import MDXComponents from "@/components/mdx/MDXComponents";
import { Locale } from "@/i18n/routing";
import { getPosts } from "@/lib/getBlogs";
import { constructMetadata } from "@/lib/metadata";
import { BlogPost } from "@/types/blog";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{
  locale: string;
  slug: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale, slug } = await params;
  let { posts }: { posts: BlogPost[] } = await getPosts(locale);
  const post = posts.find((post) => post.slug === "/" + slug);

  if (!post) {
    return constructMetadata({
      title: "404",
      description: "Page not found",
      noIndex: true,
      locale: locale as Locale,
      path: `/blogs/${slug}`,
    });
  }

  return constructMetadata({
    page: "blogs",
    title: post.title,
    description: post.description,
    images: post.image ? [post.image] : [],
    locale: locale as Locale,
    path: `/blogs/${slug}`,
    // canonicalUrl: `/blogs/${slug}`,
  });
}

export default async function BlogPage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  let { posts }: { posts: BlogPost[] } = await getPosts(locale);

  const post = posts.find((item) => item.slug === "/" + slug);

  if (!post) {
    return notFound();
  }

  return (
    <div className="w-full md:w-3/5 px-2 md:px-12">
      <h1 className="break-words text-4xl font-bold mt-6 mb-4">{post.title}</h1>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded-sm w-full h-auto"
        />
      )}
      {post.tags && post.tags.split(",").length ? (
        <div className="flex flex-wrap gap-2">
          {post.tags.split(",").map((tag) => {
            return (
              <div
                key={tag}
                className={`rounded-md bg-gray-200 hover:!no-underline dark:bg-[#24272E] flex px-2.5 py-1.5 text-sm font-medium hover:text-black hover:dark:bg-[#15AFD04C] hover:dark:text-[#82E9FF] text-gray-500 dark:text-[#7F818C] outline-none focus-visible:ring transition`}
              >
                {tag.trim()}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
      {post.description && <Callout>{post.description}</Callout>}
      <MDXRemote source={post?.content || ""} components={MDXComponents} />
    </div>
  );
}

export async function generateStaticParams() {
  let posts = (await getPosts()).posts;

  // Filter out posts without a slug
  posts = posts.filter((post) => post.slug);

  return posts.map((post) => {
    // Remove the leading '/blogs' from the slug and split the rest into an array
    const slugArray = post.slug
      ?.replace(/^\/blogs/, "")
      .split("/")
      .filter(Boolean);

    return {
      slug: slugArray,
    };
  });
}
