import { Wifi, Network, Phone, Server, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "Broadband & Fiber",
    description:
      "Reliable fiber connections for homes and offices, installed by our own technicians.",
  },
  {
    icon: Network,
    title: "Office Networking",
    description:
      "Wi-Fi, routers, and small-office network setup done properly the first time.",
  },
  {
    icon: Phone,
    title: "Cloud & VoIP Calling",
    description:
      "Simple cloud phone systems for small teams, with mobile and desktop apps.",
  },
  {
    icon: Server,
    title: "Business Connectivity",
    description:
      "Point-to-point links and backup lines for offices that need a steady connection.",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <article
          key={s.title}
          className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 shadow-card transition-all hover:-translate-y-1 hover:border-accent hover:shadow-elevated"
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
            <s.icon className="h-6 w-6" />
          </span>
          <h3 className="mt-5 text-lg font-semibold text-foreground">{s.title}</h3>
          <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent">
            Learn more <ArrowUpRight className="h-4 w-4" />
          </span>
        </article>
      ))}
    </div>
  );
}
