import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dermal Fillers | Urban Spa Etobicoke",
  description: "Enhance your natural beauty with premium dermal fillers at Urban Spa Etobicoke. Expert facial contouring and volume restoration for natural-looking results.",
  openGraph: {
    title: "Dermal Fillers | Urban Spa Etobicoke",
    description: "Enhance your natural beauty with premium dermal fillers at Urban Spa Etobicoke. Expert facial contouring and volume restoration.",
    images: ["/images/services/fillers.jpg"],
  },
};

export default function FillersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Dermal Fillers
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Restore volume and enhance your natural features with premium dermal fillers
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              About Dermal Fillers
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Dermal fillers are injectable treatments that restore volume, smooth wrinkles, and enhance facial contours. 
              At Urban Spa, we use premium hyaluronic acid fillers to achieve natural-looking results that complement your features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits of Fillers
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Instant volume restoration</li>
              <li>Smoothing of fine lines and wrinkles</li>
              <li>Enhanced facial contours</li>
              <li>Natural-looking results</li>
              <li>Minimal downtime</li>
              <li>Long-lasting effects</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Areas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Lips and lip lines</li>
              <li>Cheeks and midface</li>
              <li>Nasolabial folds</li>
              <li>Under-eye hollows</li>
              <li>Jawline and chin</li>
              <li>Temple area</li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/fillers.jpg"
              alt="Dermal Filler Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for Fillers?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Expert injectors with advanced training</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Premium FDA-approved fillers</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customized treatment approach</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Natural-looking enhancement</span>
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
                How long do fillers last?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Results typically last 6-18 months depending on the type of filler used, treatment area, and individual factors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is the treatment painful?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use topical numbing cream and fillers containing local anesthetic to ensure your comfort during treatment.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                When will I see results?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Results are immediate, with optimal results visible once any initial swelling subsides, typically within 1-2 weeks.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is there any downtime?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Minimal downtime is required. Some clients may experience mild swelling or bruising for 3-7 days, which can be covered with makeup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 