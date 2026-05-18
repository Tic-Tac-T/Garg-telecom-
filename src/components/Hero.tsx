import { Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-primary-foreground">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.62 0.20 250 / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.55 0.20 245 / 0.3), transparent 40%)",
        }}
      />
      <div className="container relative mx-auto grid gap-12 px-4 py-20 lg:grid-cols-2 lg:gap-8 lg:px-8 lg:py-28">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Based in New Delhi
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Empowering Connections.{" "}
            <span className="text-accent">Enabling the Future.</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            Garg Telecom provides next-generation broadband, VoIP, and enterprise
            networking solutions tailored for your business and home.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              <Link to="/services">
                Explore Services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/5 text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
            >
              <Link to="/contact">Contact Sales</Link>
            </Button>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/70">
            <span className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-accent" /> Reliable uptime
            </span>
            <span>Responsive support</span>
            <span>Transparent pricing</span>
          </div>
        </div>

        <div className="relative lg:block">
          <img
            src="/Telco_mast.webp"
            alt="City skyline with network connectivity"
            loading="eager"
            className="relative h-64 w-full rounded-3xl object-cover opacity-90 lg:h-full"
          />
        </div>
      </div>
    </section>
  );
}
