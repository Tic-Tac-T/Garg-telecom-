import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { ServicesGrid } from "@/components/ServicesGrid";
import { WhyChoose } from "@/components/WhyChoose";
import { Testimonials } from "@/components/Testimonials";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Garg Telecom — Broadband, VoIP & Enterprise Networking" },
      {
        name: "description",
        content:
          "India's trusted telecom partner. High-speed fiber, enterprise networks, cloud VoIP, and data center connectivity with a 99.9% uptime SLA.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Connectivity built for what's next"
            subtitle="From last-mile fiber to multi-cloud on-ramps, our portfolio is engineered for businesses that can't afford to slow down."
          />
          <div className="mt-12">
            <ServicesGrid />
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Why Garg Telecom"
            title="Reliability our customers measure in nines"
          />
          <div className="mt-12">
            <WhyChoose />
          </div>
        </div>
      </section>

      <section className="bg-background pt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="Early customers"
            title="A few words from the businesses we work with"
          />
        </div>
        <div className="mt-12">
          <Testimonials />
        </div>
      </section>

      <section className="bg-primary py-20 text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center px-4 text-center lg:px-8">
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to upgrade your connectivity?
          </h2>
          <p className="mt-4 max-w-xl text-primary-foreground/80">
            Get a custom proposal in 24 hours — no obligation.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/contact">
              Talk to Sales <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
