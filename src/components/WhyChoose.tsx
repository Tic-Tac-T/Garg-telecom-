import { ShieldCheck, Headphones, Cable, TrendingUp } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Reliable Connectivity", desc: "Stable links with proactive monitoring so issues are caught early." },
  { icon: Headphones, title: "Responsive Support", desc: "Talk to a real engineer — no long queues, no scripted replies." },
  { icon: Cable, title: "Modern Fiber Setup", desc: "Clean installations using current-gen fiber and routing hardware." },
  { icon: TrendingUp, title: "Plans That Scale", desc: "Start small and upgrade your bandwidth as your business grows." },
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
