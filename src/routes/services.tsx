import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SectionHeading } from "@/components/SectionHeading";
import { Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Garg Telecom" },
      {
        name: "description",
        content:
          "Explore Garg Telecom's broadband, fiber, VoIP, and managed networking services for homes and enterprises.",
      },
      { property: "og:title", content: "Services — Garg Telecom" },
      {
        property: "og:description",
        content: "Broadband, VoIP, enterprise networking and data center connectivity.",
      },
    ],
  }),
  component: ServicesPage,
});

const detailed = [
  {
    title: "High-Speed Broadband & Fiber",
    features: [
      "Symmetric 50 – 300 Mbps plans",
      "Static IP available on request",
      "Router included with installation",
      "On-site setup by our technicians",
    ],
  },
  {
    title: "Enterprise Network Solutions",
    features: [
      "Office & branch connectivity",
      "Site-to-site VPN setup",
      "Wi-Fi planning and access points",
      "Basic network monitoring",
    ],
  },
  {
    title: "Cloud & VoIP Telephony",
    features: [
      "SIP trunking for small teams",
      "Cloud-hosted phone system",
      "Call logs and recording",
      "Softphone & mobile apps",
    ],
  },
  {
    title: "Data Center Connectivity",
    features: [
      "Point-to-point links",
      "Cloud on-ramp assistance",
      "Colocation last-mile",
      "Backup routing setup",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Our Services</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            A complete connectivity stack — from the last-mile fiber to the cloud.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <ServicesGrid />
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            eyebrow="What's included"
            title="Every plan, engineer-grade"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {detailed.map((d) => (
              <div
                key={d.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-card"
              >
                <h3 className="text-lg font-semibold text-foreground">{d.title}</h3>
                <ul className="mt-4 space-y-3">
                  {d.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
