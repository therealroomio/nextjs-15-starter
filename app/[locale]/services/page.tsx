import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Beauty & Wellness Services | Urban Spa Etobicoke",
  description: "Discover our comprehensive range of beauty and wellness treatments at Urban Spa Etobicoke. From Botox to laser treatments, experience premium medical spa services.",
  openGraph: {
    title: "Beauty & Wellness Services | Urban Spa Etobicoke",
    description: "Discover our comprehensive range of beauty and wellness treatments at Urban Spa Etobicoke.",
    images: ["/images/services-hero.jpg"],
  },
};

const services = [
  {
    title: "Botox",
    description: "Reduce fine lines and wrinkles with our premium Botox treatments. Safe and effective wrinkle reduction by certified professionals.",
    href: "/services/botox",
    image: "/images/services/botox-treatment.jpg",
    icon: "✨"
  },
  {
    title: "Skin Treatment",
    description: "Transform your skin with our advanced skincare solutions. Customized treatments for all skin types and concerns.",
    href: "/services/skin-treatment",
    image: "/images/services/skin-treatment.jpg",
    icon: "🌟"
  },
  {
    title: "Body Contouring",
    description: "Sculpt and define your body with non-invasive treatments. Advanced technology for targeted fat reduction and skin tightening.",
    href: "/services/body-contouring",
    image: "/images/services/body-contouring.jpg",
    icon: "💫"
  },
  {
    title: "Facial Thread",
    description: "Natural-looking lift and rejuvenation with PDO thread treatments. Minimally invasive solution for facial rejuvenation.",
    href: "/services/facial-thread",
    image: "/images/services/facial-thread.jpg",
    icon: "🎯"
  },
  {
    title: "Fillers",
    description: "Enhance your features with premium dermal fillers. Expert volume restoration and facial contouring.",
    href: "/services/fillers",
    image: "/images/services/fillers.jpg",
    icon: "💎"
  },
  {
    title: "HIFU",
    description: "Advanced skin tightening with High-Intensity Focused Ultrasound. Non-surgical facelift alternative.",
    href: "/services/hifu",
    image: "/images/services/hifu.jpg",
    icon: "⚡"
  },
  {
    title: "Laser Removal",
    description: "Safe and effective laser hair and tattoo removal. Advanced technology for all skin types.",
    href: "/services/laser-removal",
    image: "/images/services/laser-removal.jpg",
    icon: "🔆"
  },
  {
    title: "PRP Facial Rejuvenation",
    description: "Natural rejuvenation using your body's own healing factors. Revolutionary treatment for skin regeneration.",
    href: "/services/prp-facial",
    image: "/images/services/prp-facial.jpg",
    icon: "✨"
  }
];

export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Services
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Experience our comprehensive range of premium beauty and wellness treatments
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card key={service.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <Link href={service.href}>
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={`${service.title} at Urban Spa`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{service.icon}</span>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {service.title}
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <Button variant="link" className="text-purple-600 hover:text-purple-700 p-0">
                  Learn More →
                </Button>
              </div>
            </Link>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <section className="mt-16 text-center">
        <div className="bg-purple-50 dark:bg-gray-800 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Beauty Journey?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Book a consultation with our experts to discover the perfect treatment plan for your unique needs.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/book">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
} 