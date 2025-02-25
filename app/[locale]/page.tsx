import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Urban Spa - Luxury Beauty & Wellness Center in Etobicoke",
  description: "Experience premium medical spa treatments in Etobicoke. Transform your beauty journey with expert care and advanced procedures including Botox, fillers, and skin treatments.",
  openGraph: {
    title: "Urban Spa - Luxury Beauty & Wellness Center",
    description: "Transform your beauty journey with our expert care and advanced procedures",
    images: ["/images/hero-bg.jpg"],
  },
};

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Verified Client",
    content: "The team at Urban Spa provided exceptional service. My skin has never looked better!",
    image: "/images/testimonials/sarah.jpg"
  },
  {
    name: "Michael Chen",
    role: "Verified Client",
    content: "Professional staff and amazing results. Highly recommend their body contouring treatments.",
    image: "/images/testimonials/michael.jpg"
  },
  {
    name: "Emily Davis",
    role: "Verified Client",
    content: "The attention to detail and personalized care is outstanding. A truly luxurious experience.",
    image: "/images/testimonials/emily.jpg"
  }
];

const faqs = [
  {
    question: "What treatments do you offer?",
    answer: "We offer a wide range of treatments including Botox, dermal fillers, skin treatments, body contouring, and more. Each treatment is personalized to meet your specific needs and goals."
  },
  {
    question: "How long do results typically last?",
    answer: "Results vary depending on the treatment. Botox typically lasts 3-4 months, dermal fillers can last 6-18 months, and skin treatments may require maintenance sessions for optimal results."
  },
  {
    question: "Is there any downtime after treatments?",
    answer: "Downtime varies by treatment. Many of our treatments have minimal to no downtime, allowing you to return to your daily activities immediately. We'll discuss specific recovery expectations during your consultation."
  },
  {
    question: "Are your treatments safe?",
    answer: "Yes, all our treatments are FDA-approved and performed by licensed medical professionals. We prioritize your safety and comfort throughout your treatment journey."
  }
];

export default function HomePage() {
  const t = useTranslations('common');

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.jpg"
            alt="Urban Spa Hero"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="font-playfair text-5xl md:text-7xl mb-6 leading-tight">
            Experience Luxury
            <br />
            <span className="text-[hsl(var(--spa-gold))]">Beauty & Wellness</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Premium medical spa treatments in Etobicoke. Transform your beauty journey with our expert care and advanced procedures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-[hsl(var(--spa-gold))] hover:bg-[hsl(var(--spa-gold))]/90 text-[hsl(var(--spa-brown))]"
            >
              <Link href="/book">{t("bookNow")}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              <Link href="/services">{t("learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-[hsl(var(--spa-beige))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-4 text-[hsl(var(--spa-brown))]">
            Our Premium Services
          </h2>
          <p className="text-center text-lg mb-12 text-muted-foreground max-w-2xl mx-auto">
            Discover our range of luxury treatments designed to enhance your natural beauty
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Botox",
                description: "Reduce fine lines and wrinkles",
                image: "/images/services/botox.jpg",
                href: "/services/botox"
              },
              {
                title: "Fillers",
                description: "Restore volume and enhance features",
                image: "/images/services/fillers.jpg",
                href: "/services/fillers"
              },
              {
                title: "Skin Treatment",
                description: "Revitalize your skin's natural glow",
                image: "/images/services/skin-treatment.jpg",
                href: "/services/skin-treatment"
              },
              {
                title: "Body Contouring",
                description: "Sculpt and define your body",
                image: "/images/services/body-contouring.jpg",
                href: "/services/body-contouring"
              }
            ].map((service, index) => (
              <Card key={index} className="group overflow-hidden">
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-playfair mb-2">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                  <Link 
                    href={service.href}
                    className="text-[hsl(var(--spa-gold))] hover:text-[hsl(var(--spa-brown))] transition-colors mt-4 inline-block"
                  >
                    Learn more →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-[hsl(var(--spa-brown))]">
            Why Choose Urban Spa
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Licensed medical professionals with years of experience",
                icon: "👨‍⚕️"
              },
              {
                title: "Luxury Experience",
                description: "Premium facilities and personalized care",
                icon: "✨"
              },
              {
                title: "Advanced Technology",
                description: "State-of-the-art equipment and procedures",
                icon: "🔬"
              }
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="font-playfair">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[hsl(var(--spa-beige))]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-[hsl(var(--spa-brown))]">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="italic text-muted-foreground">{testimonial.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-playfair text-center mb-16 text-[hsl(var(--spa-brown))]">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-playfair">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[hsl(var(--spa-gold))]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair mb-6 text-white">
            Start Your Beauty Journey Today
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Book your consultation and experience the luxury of Urban Spa
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-[hsl(var(--spa-gold))] hover:bg-white/90"
          >
            <Link href="/book">Book Your Appointment</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
