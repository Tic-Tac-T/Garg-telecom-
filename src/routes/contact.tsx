import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Garg Telecom" },
      {
        name: "description",
        content:
          "Reach Garg Telecom's sales and support teams. Head office in Karol Bagh, New Delhi.",
      },
      { property: "og:title", content: "Contact Garg Telecom" },
      { property: "og:description", content: "Karol Bagh, New Delhi — sales, support, and partnerships." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <section className="bg-gradient-hero py-20 text-primary-foreground">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Connect With Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/80">
            Tell us about your project. A solutions architect will respond within one business day.
          </p>
        </div>
      </section>
      <ContactSection />
    </>
  );
}
