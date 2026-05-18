import { ShieldCheck, Headphones, Cable, TrendingUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "99.9% Uptime Guarantee", desc: "Backed by a financially-binding SLA across all enterprise tiers." },
  { icon: Headphones, title: "24/7 Dedicated Support", desc: "In-house NOC engineers reachable in under 60 seconds." },
  { icon: Cable, title: "Next-Gen Fiber Infrastructure", desc: "10G-PON ready backbone with redundant national routing." },
  { icon: TrendingUp, title: "Scalable Business Solutions", desc: "From 10 Mbps to 100 Gbps — upgrade without re-architecting." },
];

export function WhyChoose() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((i) => (
        <div key={i.title} className="flex flex-col">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <i.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-5 text-base font-semibold text-foreground">{i.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{i.desc}</p>
        </div>
      ))}
    </div>
  );
}
