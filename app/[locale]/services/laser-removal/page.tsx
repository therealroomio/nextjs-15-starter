import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Laser Hair & Tattoo Removal | Urban Spa Etobicoke",
  description: "Professional laser removal services at Urban Spa Etobicoke. Safe and effective removal of unwanted hair and tattoos using advanced laser technology.",
  openGraph: {
    title: "Laser Hair & Tattoo Removal | Urban Spa Etobicoke",
    description: "Professional laser removal services at Urban Spa Etobicoke. Safe and effective removal using advanced laser technology.",
    images: ["/images/services/laser-removal.jpg"],
  },
};

export default function LaserRemovalPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Laser Removal Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Advanced laser technology for safe and effective removal of unwanted hair and tattoos
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Our Laser Services
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              At Urban Spa, we use state-of-the-art laser technology for both hair and tattoo removal. 
              Our advanced systems are safe for all skin types and provide optimal results with minimal discomfort.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits of Laser Treatment
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Permanent hair reduction</li>
              <li>Effective tattoo removal</li>
              <li>Safe for most skin types</li>
              <li>Precise and targeted treatment</li>
              <li>Minimal discomfort</li>
              <li>Fast treatment sessions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Areas
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Hair Removal:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Face and neck</li>
                  <li>Arms and underarms</li>
                  <li>Chest and back</li>
                  <li>Legs and bikini area</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Tattoo Removal:</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  <li>All body areas</li>
                  <li>Multiple ink colors</li>
                  <li>Professional and amateur tattoos</li>
                  <li>Partial or complete removal</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/laser-removal.jpg"
              alt="Laser Removal Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for Laser Removal?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Advanced laser technology</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Experienced laser specialists</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Safe for all skin types</span>
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
                Hair removal typically requires 6-8 sessions, while tattoo removal may need 8-12 sessions depending on the ink, colors, and size.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is laser removal painful?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most clients describe the sensation as mild discomfort. We use cooling technology and can provide numbing cream if needed.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How should I prepare for treatment?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Avoid sun exposure, tanning, and certain skincare products before treatment. We&apos;ll provide detailed pre-treatment instructions.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                What results can I expect?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Hair removal results in permanent reduction, while tattoo removal progressively fades the ink until it&apos;s no longer visible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 