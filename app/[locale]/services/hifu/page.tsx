import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HIFU Treatment | Urban Spa Etobicoke",
  description: "Experience advanced skin tightening with HIFU (High-Intensity Focused Ultrasound) at Urban Spa Etobicoke. Non-surgical facelift alternative for natural rejuvenation.",
  openGraph: {
    title: "HIFU Treatment | Urban Spa Etobicoke",
    description: "Experience advanced skin tightening with HIFU at Urban Spa Etobicoke. Non-surgical facelift alternative for natural rejuvenation.",
    images: ["/images/services/hifu.jpg"],
  },
};

export default function HifuPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          HIFU Treatment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Advanced non-surgical skin tightening and lifting with High-Intensity Focused Ultrasound
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              About HIFU
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              HIFU (High-Intensity Focused Ultrasound) is an advanced non-surgical treatment that uses ultrasound energy to stimulate collagen production 
              and tighten skin at multiple depths. This technology provides a natural alternative to surgical facelifts.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits of HIFU
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Non-surgical skin tightening</li>
              <li>Reduces fine lines and wrinkles</li>
              <li>Lifts and contours facial features</li>
              <li>Stimulates natural collagen production</li>
              <li>No downtime required</li>
              <li>Long-lasting results</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Areas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Forehead and brow area</li>
              <li>Under-eye region</li>
              <li>Cheeks and midface</li>
              <li>Jawline and neck</li>
              <li>Double chin</li>
              <li>Décolletage area</li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/hifu.jpg"
              alt="HIFU Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for HIFU?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>State-of-the-art HIFU technology</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Experienced HIFU specialists</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customized treatment protocols</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Comprehensive skin assessment</span>
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
                How long do results last?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Results can last up to 12-18 months, with some clients experiencing benefits for even longer. Annual maintenance treatments are recommended.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is HIFU painful?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most clients experience mild discomfort during treatment. We offer comfort measures to ensure a comfortable experience.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                When will I see results?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Some clients notice immediate improvements, with optimal results developing over 2-3 months as collagen production increases.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How many sessions will I need?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most clients achieve their desired results with a single treatment, though some may benefit from additional sessions based on their goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 