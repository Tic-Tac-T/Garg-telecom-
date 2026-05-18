import { Star } from "lucide-react";

const logos = [
  "AXIOM", "NORTHWIND", "VERTEX", "HELIOS", "QUANTA", "STELLAR", "ORION", "CIPHER",
];

const reviews = [
  {
    quote:
      "Garg Telecom transitioned our 40-branch network to managed SD-WAN in under three weeks. Zero downtime since.",
    name: "Rajiv Mehta",
    role: "CIO, Northwind Industries",
  },
  {
    quote:
      "Their NOC team flagged and resolved a peering issue before our monitoring even alerted. That's real partnership.",
    name: "Priya Sharma",
    role: "Head of Infrastructure, Axiom Labs",
  },
  {
    quote:
      "Predictable pricing, gigabit symmetric, and engineers who actually pick up the phone. Best telecom partner we've had.",
    name: "Anand Kapoor",
    role: "Founder, Vertex Software",
  },
];

export function Testimonials() {
  return (
    <div>
      <div className="overflow-hidden border-y border-border bg-secondary/50 py-8">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...logos, ...logos].map((l, i) => (
            <span
              key={i}
              className="text-2xl font-bold tracking-[0.2em] text-muted-foreground/60"
            >
              {l}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto grid gap-6 px-4 py-16 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
        {reviews.map((r) => (
          <figure
            key={r.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card"
          >
            <div className="flex gap-1 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
              "{r.quote}"
            </blockquote>
            <figcaption className="mt-6 border-t border-border pt-4">
              <div className="text-sm font-semibold text-foreground">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
