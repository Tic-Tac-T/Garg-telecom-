import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Garg Telecom" },
      {
        name: "description",
        content:
          "Garg Telecom has been building India's next-generation network infrastructure since day one. Meet the team behind the connectivity.",
      },
      { property: "og:title", content: "About Garg Telecom" },
      { property: "og:description", content: "Our story, mission, and the infrastructure powering it." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { value: "2024", label: "Founded in New Delhi" },
  { value: "Karol Bagh", label: "Head office" },
  { value: "In-house", label: "Support team" },
  { value: "Growing", label: "Customer base" },
];

function AboutPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">About Garg Telecom</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Headquartered in New Delhi. Engineering connectivity for India's most ambitious businesses.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80"
            alt="Garg Telecom engineering team"
            loading="lazy"
            className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card"
          />
          <div>
            <SectionHeading
              center={false}
              eyebrow="Our story"
              title="A small team building a better local ISP"
              subtitle="Garg Telecom started in Karol Bagh with a simple idea — give homes and small businesses connectivity that just works, and a real person to call when it doesn't."
            />
            <p className="mt-6 text-muted-foreground">
              Our mission is simple: deliver connectivity that disappears into the
              background, so our customers can focus on the work that matters. We
              invest in our own fiber, our own NOC, and our own engineers — no
              outsourcing, no finger-pointing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <div className="container mx-auto grid grid-cols-2 gap-8 px-4 text-center lg:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-bold text-accent">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/70">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
