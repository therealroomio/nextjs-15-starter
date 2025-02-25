import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Advanced Skin Treatments | Urban Spa Etobicoke",
  description: "Transform your skin with our advanced skin treatments at Urban Spa Etobicoke. Customized solutions for all skin types and concerns. Book your consultation today.",
  openGraph: {
    title: "Advanced Skin Treatments | Urban Spa Etobicoke",
    description: "Transform your skin with our advanced skin treatments at Urban Spa Etobicoke. Customized solutions for all skin types and concerns.",
    images: ["/images/services/skin-treatment.jpg"],
  },
};

export default function SkinTreatmentPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Advanced Skin Treatments
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Revitalize and rejuvenate your skin with our comprehensive range of advanced treatments
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Skin Treatments
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              At Urban Spa, we offer a comprehensive range of advanced skin treatments designed to address various skin concerns. 
              Our expert practitioners use state-of-the-art technology and premium products to deliver exceptional results.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Options
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Chemical Peels</li>
              <li>Microdermabrasion</li>
              <li>Hydrafacial</li>
              <li>LED Light Therapy</li>
              <li>Micro-needling</li>
              <li>Custom Facial Treatments</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Skin Concerns We Address
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Acne and acne scarring</li>
              <li>Fine lines and wrinkles</li>
              <li>Hyperpigmentation</li>
              <li>Uneven skin texture</li>
              <li>Enlarged pores</li>
              <li>Dryness and dehydration</li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/skin-treatment.jpg"
              alt="Skin Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for Skin Treatments?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Advanced technology and premium products</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Expert skincare professionals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Comprehensive skin analysis</span>
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
                How often should I get a skin treatment?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Treatment frequency varies depending on your skin type and concerns. We typically recommend treatments every 4-6 weeks for optimal results.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What results can I expect?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Results vary by treatment but generally include improved skin texture, tone, and clarity. Some treatments show immediate results, while others develop over time.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is there any downtime?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Downtime varies by treatment. Some treatments have no downtime, while others may require 1-3 days of recovery time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How do I prepare for my treatment?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We&apos;ll provide specific pre-treatment instructions, but generally recommend avoiding sun exposure and certain skincare products before your treatment.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 