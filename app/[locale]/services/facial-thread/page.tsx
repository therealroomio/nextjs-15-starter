import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facial Threading Treatment | Urban Spa Etobicoke",
  description: "Experience natural facial rejuvenation with PDO threading at Urban Spa Etobicoke. Safe, effective lifting and contouring for a younger-looking appearance.",
  openGraph: {
    title: "Facial Threading Treatment | Urban Spa Etobicoke",
    description: "Experience natural facial rejuvenation with PDO threading at Urban Spa Etobicoke. Safe, effective lifting and contouring.",
    images: ["/images/services/facial-thread.jpg"],
  },
};

export default function FacialThreadPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Facial Threading Treatment
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Achieve natural-looking facial rejuvenation with our advanced threading techniques
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              About Facial Threading
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Facial threading is a minimally invasive treatment that uses PDO (Polydioxanone) threads to lift and tighten sagging skin. 
              This innovative procedure stimulates collagen production, resulting in natural-looking facial rejuvenation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits of Threading
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Immediate lifting effect</li>
              <li>Natural-looking results</li>
              <li>Stimulates collagen production</li>
              <li>Minimal downtime</li>
              <li>Long-lasting results</li>
              <li>Customizable treatment options</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Areas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Eyebrows and forehead</li>
              <li>Cheeks and midface</li>
              <li>Jawline and neck</li>
              <li>Nasolabial folds</li>
              <li>Marionette lines</li>
              <li>Under-eye area</li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/facial-thread.jpg"
              alt="Facial Threading Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for Facial Threading?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Expert threading practitioners</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Premium PDO threads</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customized treatment plans</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Natural-looking results</span>
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
                Results typically last 12-18 months, with some clients experiencing benefits for up to 2 years depending on the type of threads used and individual factors.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is the procedure painful?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We use local anesthesia to ensure your comfort during the procedure. Most clients report minimal discomfort and can return to their daily activities shortly after.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                When will I see results?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                You&apos;ll notice an immediate lifting effect after the procedure, with results continuing to improve over 2-3 months as collagen production increases.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is there any downtime?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Minimal downtime is required. Some clients may experience mild swelling or bruising for 3-5 days, which can be easily concealed with makeup.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 