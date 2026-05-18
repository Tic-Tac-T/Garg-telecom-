import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Building2, Globe2, Lock, Gauge, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/enterprise")({
  head: () => ({
    meta: [
      { title: "Enterprise Solutions — Garg Telecom" },
      {
        name: "description",
        content:
          "Carrier-grade SD-WAN, MPLS, private connectivity, and managed services for enterprises across India.",
      },
      { property: "og:title", content: "Enterprise Solutions — Garg Telecom" },
      {
        property: "og:description",
        content: "Built for multi-site businesses with strict uptime, security, and compliance needs.",
      },
    ],
  }),
  component: EnterprisePage,
});

const pillars = [
  { icon: Building2, title: "Multi-site Networking", desc: "Connect every branch, warehouse, and DC under one managed fabric." },
  { icon: Globe2, title: "Global Reach", desc: "International private leased circuits with carrier-grade SLAs." },
  { icon: Lock, title: "Zero-Trust Security", desc: "Built-in DDoS protection, segmentation, and SASE-ready architecture." },
  { icon: Gauge, title: "Performance Visibility", desc: "Real-time telemetry and per-application QoS dashboards." },
];

function EnterprisePage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Enterprise Solutions</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Designed for organizations where downtime isn't an option.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <div>
            <SectionHeading
              center={false}
              eyebrow="Industries we serve"
              title="Built for regulated, high-throughput businesses"
              subtitle="BFSI, IT/ITES, manufacturing, healthcare, retail, and government — every vertical with its own compliance and routing requirements."
            />
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-foreground">
              {["Banking & Finance", "IT Services", "Manufacturing", "Healthcare", "Retail Chains", "Public Sector", "Logistics", "Media & Broadcast"].map((i) => (
                <li key={i} className="rounded-lg border border-border bg-card px-3 py-2">{i}</li>
              ))}
            </ul>
            <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
              <Link to="/contact">Request a Proposal <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80"
            alt="Enterprise network operations center"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-elevated"
          />
        </div>
      </section>
    </>
  );
}
