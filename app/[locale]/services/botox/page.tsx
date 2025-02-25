import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Botox Treatment | Urban Spa Etobicoke",
  description: "Experience premium Botox treatments at Urban Spa Etobicoke. Safe, effective wrinkle reduction by certified professionals. Book your consultation today.",
  openGraph: {
    title: "Botox Treatment | Urban Spa Etobicoke",
    description: "Experience premium Botox treatments at Urban Spa Etobicoke. Safe, effective wrinkle reduction by certified professionals.",
    images: ["/images/services/botox-treatment.jpg"],
  },
};

export default function BotoxPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Botox Treatment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Achieve a naturally youthful appearance with our premium Botox treatments
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              What is Botox?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Botox is a safe and effective treatment that temporarily reduces or eliminates facial fine lines and wrinkles. 
              The treatment works by relaxing the muscles that cause wrinkles, resulting in smoother, younger-looking skin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits of Botox
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Reduces appearance of fine lines and wrinkles</li>
              <li>Prevents formation of new wrinkles</li>
              <li>Quick treatment with minimal downtime</li>
              <li>Natural-looking results</li>
              <li>FDA-approved and safe when administered by professionals</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Areas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Forehead lines</li>
              <li>Frown lines between eyebrows</li>
              <li>Crow&apos;s feet around eyes</li>
              <li>Bunny lines on nose</li>
              <li>Lip lines</li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/botox-treatment.jpg"
              alt="Botox Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for Botox?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Certified and experienced practitioners</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Premium, FDA-approved products</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Personalized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>State-of-the-art facility</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/book">Book Your Consultation</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How long does Botox last?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Botox typically lasts 3-4 months, though results may vary depending on the individual and treatment area.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is Botox safe?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, Botox is FDA-approved and safe when administered by qualified professionals like our team at Urban Spa.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                When will I see results?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Results typically begin to appear within 3-5 days, with full results visible after 2 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is there any downtime?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                There is minimal downtime. Most patients return to their normal activities immediately after treatment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 