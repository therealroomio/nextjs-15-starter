import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Body Contouring | Urban Spa Etobicoke",
  description: "Transform your body with non-invasive body contouring treatments at Urban Spa Etobicoke. Safe, effective body sculpting solutions for targeted fat reduction and skin tightening.",
  openGraph: {
    title: "Body Contouring | Urban Spa Etobicoke",
    description: "Transform your body with non-invasive body contouring treatments at Urban Spa Etobicoke. Expert body sculpting solutions.",
    images: ["/images/services/body-contouring.jpg"],
  },
};

export default function BodyContouringPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Body Contouring
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Sculpt and define your body with our advanced non-invasive treatments
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              About Body Contouring
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Body contouring at Urban Spa uses advanced technology to target stubborn fat deposits and tighten skin. 
              Our non-invasive treatments help you achieve your desired body shape without surgery or downtime.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Benefits
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Reduces stubborn fat deposits</li>
              <li>Improves body shape and contours</li>
              <li>Tightens loose skin</li>
              <li>Non-invasive with minimal downtime</li>
              <li>Long-lasting results</li>
              <li>Boosts confidence and self-image</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Areas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Abdomen and waistline</li>
              <li>Thighs and hips</li>
              <li>Arms and back</li>
              <li>Love handles</li>
              <li>Double chin</li>
              <li>Buttocks and flanks</li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/body-contouring.jpg"
              alt="Body Contouring Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for Body Contouring?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Latest body sculpting technology</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Experienced body contouring specialists</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Proven results and satisfied clients</span>
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
                How many sessions will I need?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                The number of sessions varies based on your goals and treatment areas. Most clients see optimal results with 4-6 sessions spaced 2-4 weeks apart.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is body contouring painful?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Our treatments are generally comfortable with minimal discomfort. Many clients describe the sensation as a warm massage.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                When will I see results?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Many clients notice improvements after their first session, with optimal results visible 8-12 weeks after completing the treatment series.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How long do results last?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Results can be long-lasting when maintained with a healthy lifestyle. We recommend periodic maintenance sessions to maintain optimal results.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 