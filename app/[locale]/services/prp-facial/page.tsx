import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PRP Facial Rejuvenation | Urban Spa Etobicoke",
  description: "Experience natural facial rejuvenation with PRP (Platelet-Rich Plasma) treatment at Urban Spa Etobicoke. Harness your body's natural healing factors for radiant, youthful skin.",
  openGraph: {
    title: "PRP Facial Rejuvenation | Urban Spa Etobicoke",
    description: "Experience natural facial rejuvenation with PRP treatment at Urban Spa Etobicoke. Natural healing for radiant, youthful skin.",
    images: ["/images/services/prp-facial.jpg"],
  },
};

export default function PrpFacialPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          PRP Facial Rejuvenation
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Natural skin rejuvenation using your body&apos;s own healing and regenerative factors
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              About PRP Facial Rejuvenation
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              PRP (Platelet-Rich Plasma) facial rejuvenation uses your body&apos;s own growth factors to stimulate collagen production 
              and cell renewal. This revolutionary treatment harnesses your natural healing abilities for skin regeneration.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Benefits of PRP Treatment
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Improves skin texture and tone</li>
              <li>Reduces fine lines and wrinkles</li>
              <li>Enhances skin firmness</li>
              <li>Minimizes acne scars</li>
              <li>Natural and long-lasting results</li>
              <li>Stimulates collagen production</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Treatment Areas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
              <li>Full face rejuvenation</li>
              <li>Under-eye area</li>
              <li>Neck and décolletage</li>
              <li>Acne scarring</li>
              <li>Fine lines and wrinkles</li>
              <li>Areas of skin laxity</li>
            </ul>
          </section>
        </div>

        <div className="space-y-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/services/prp-facial.jpg"
              alt="PRP Facial Treatment at Urban Spa"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>

          <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Why Choose Urban Spa for PRP Treatment?
            </h3>
            <ul className="space-y-3 text-gray-600 dark:text-gray-400">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Medical-grade PRP equipment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Experienced medical professionals</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Sterile treatment environment</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Customized treatment plans</span>
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
                How does PRP work?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                PRP uses your own blood plasma, enriched with platelets and growth factors, to stimulate natural healing and regeneration in your skin.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is PRP treatment safe?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, PRP is very safe as it uses your body&apos;s own natural healing factors. There&apos;s no risk of allergic reaction or rejection.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                How many treatments will I need?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Most clients benefit from a series of 3-4 treatments spaced 4-6 weeks apart, followed by maintenance treatments every 6-12 months.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Is there any downtime?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Minimal downtime is required. Some redness and mild swelling may occur for 1-3 days. Most clients return to normal activities the next day.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 