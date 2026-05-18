import { Star } from "lucide-react";

const logos = [
  "AXIOM", "NORTHWIND", "VERTEX", "HELIOS", "QUANTA", "STELLAR", "ORION", "CIPHER",
];

const reviews = [
  {
    quote:
      "Switched our office to Garg Telecom last quarter. Installation was clean and the line has been steady.",
    name: "Rajiv Mehta",
    role: "Operations Lead, Northwind Traders",
  },
  {
    quote:
      "What I appreciate most is that someone actually picks up the phone when there's an issue.",
    name: "Priya Sharma",
    role: "Admin Manager, Axiom Studio",
  },
  {
    quote:
      "Straightforward pricing and a fair plan for our small team. No surprises on the invoice.",
    name: "Anand Kapoor",
    role: "Founder, Vertex Co.",
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
