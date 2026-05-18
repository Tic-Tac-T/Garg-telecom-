import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Headphones, MessageSquare, FileText } from "lucide-react";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support — Garg Telecom" },
      {
        name: "description",
        content:
          "24/7 NOC support, FAQs, and ticket assistance from Garg Telecom's in-house engineering team.",
      },
      { property: "og:title", content: "Support — Garg Telecom" },
      { property: "og:description", content: "Reach our NOC 24/7 — engineers, not bots." },
    ],
  }),
  component: SupportPage,
});

const channels = [
  { icon: Headphones, title: "Call NOC", desc: "Live engineer in under 60 seconds.", value: "+91 98110 24593" },
  { icon: MessageSquare, title: "Email", desc: "Tracked tickets with priority routing.", value: "support@gargtelecom.in" },
  { icon: FileText, title: "Knowledge Base", desc: "Setup guides, FAQs, and runbooks.", value: "Browse articles" },
];

const faqs = [
  { q: "What is your standard uptime SLA?", a: "All enterprise contracts include a 99.9% uptime SLA with service credits." },
  { q: "How fast can you provision a new circuit?", a: "Most metro fiber circuits are live within 7–14 business days after site survey." },
  { q: "Do you offer static IPs?", a: "Yes — single static IPs are included on business plans, and /29 to /28 blocks are available on request." },
  { q: "Is there a dedicated account manager?", a: "Every enterprise customer is paired with a named account manager and a backup engineer." },
];

function SupportPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Support</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Our NOC is staffed 24 / 7 / 365 by in-house engineers — never outsourced.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-3">
            {channels.map((c) => (
              <div key={c.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <p className="mt-4 text-sm font-semibold text-accent">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto max-w-3xl px-4 lg:px-8">
          <SectionHeading eyebrow="FAQ" title="Common questions" />
          <Accordion type="single" collapsible className="mt-10">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link to="/contact">Open a Support Ticket</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
