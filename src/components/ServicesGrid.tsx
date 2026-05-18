import { Wifi, Network, Phone, Server, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Wifi,
    title: "High-Speed Broadband & Fiber",
    description:
      "Symmetric gigabit fiber for homes and offices with low-latency routing.",
  },
  {
    icon: Network,
    title: "Enterprise Network Solutions",
    description:
      "Managed SD-WAN, MPLS, and private connectivity engineered for scale.",
  },
  {
    icon: Phone,
    title: "Cloud & VoIP Telephony",
    description:
      "Carrier-grade SIP trunking and cloud PBX with global DID coverage.",
  },
  {
    icon: Server,
    title: "Data Center Connectivity",
    description:
      "Direct cross-connects, colocation links, and multi-cloud on-ramps.",
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
