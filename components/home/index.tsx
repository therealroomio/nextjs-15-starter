import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Link from "next/link";

export default function HomeComponent() {
  const t = useTranslations("Home");

  const services = [
    {
      title: "Botox",
      description: "Reduce fine lines and wrinkles with our premium Botox treatments",
      href: "/services/botox",
      icon: "✨"
    },
    {
      title: "Skin Treatment",
      description: "Revitalize your skin with our advanced skincare solutions",
      href: "/services/skin-treatment",
      icon: "🌟"
    },
    {
      title: "Body Contouring",
      description: "Sculpt and define your body with non-invasive treatments",
      href: "/services/body-contouring",
      icon: "💫"
    },
    {
      title: "Facial Thread",
      description: "Natural-looking lift and rejuvenation with thread treatments",
      href: "/services/facial-thread",
      icon: "🎯"
    },
    {
      title: "Fillers",
      description: "Enhance your features with premium dermal fillers",
      href: "/services/fillers",
      icon: "💎"
    },
    {
      title: "HIFU",
      description: "Advanced skin tightening with High-Intensity Focused Ultrasound",
      href: "/services/hifu",
      icon: "⚡"
    },
    {
      title: "Laser Removal",
      description: "Safe and effective laser hair and tattoo removal",
      href: "/services/laser-removal",
      icon: "🔆"
    },
    {
      title: "PRP Facial Rejuvenation",
      description: "Natural rejuvenation using your body's own healing factors",
      href: "/services/prp-facial",
      icon: "✨"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm"></div>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to <span className="text-purple-600 dark:text-purple-400">Urban Spa</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Etobicoke&apos;s premier destination for advanced beauty treatments and medical spa services.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
              <Link href="/book">Book Appointment</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Experience our comprehensive range of beauty and wellness treatments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300">
                <Link href={service.href} className="block p-6">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Transform Your Beauty Journey
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of luxury and advanced medical aesthetics at Urban Spa Etobicoke.
            Book your consultation today.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
