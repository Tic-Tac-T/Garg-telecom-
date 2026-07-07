import { useState } from "react";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(7, "Phone is required").max(20),
  company: z.string().trim().max(120).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a bit more").max(1000),
});

export function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      company: fd.get("company"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — our team will reach out within 1 business day.");
      e.currentTarget.reset();
    }, 700);
  };

  return (
    <section className="bg-background py-20">
      <div className="container mx-auto grid gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Connect With Us
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let's design the right network for you
          </h2>
          <p className="mt-4 text-muted-foreground">
            Speak with a solutions architect. We respond to enterprise inquiries
            within one business day.
          </p>

          <div className="mt-8 space-y-5">
            <InfoRow icon={MapPin} title="Head Office">
              Karol Bagh, New Delhi, Delhi - 110007
            </InfoRow>
            <InfoRow icon={Phone} title="Sales & Support">
              +91 98110 24593
            </InfoRow>
            <InfoRow icon={Mail} title="Email">
              hr@gargtelecom.in
            </InfoRow>
            <InfoRow icon={Clock} title="NOC Hours">
              24 / 7 / 365
            </InfoRow>
          </div>

          <div className="mt-8 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-border bg-secondary">
            <iframe
              title="Garg Telecom location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=77.18%2C28.64%2C77.21%2C28.66&layer=mapnik&marker=28.6517%2C77.1909"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-2xl border border-border bg-card p-6 shadow-card sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone Number" name="phone" type="tel" required />
            <Field label="Company" name="company" />
          </div>
          <div className="mt-5">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              className="mt-2"
              placeholder="Tell us about your connectivity needs…"
            />
          </div>
          <Button
            type="submit"
            disabled={submitting}
            className="mt-6 w-full bg-accent text-accent-foreground hover:bg-accent/90"
            size="lg"
          >
            {submitting ? "Sending…" : "Send Inquiry"}
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            By submitting, you agree to our Privacy Policy.
          </p>
        </form>
      </div>
    </section>
  );
}

function InfoRow({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <div className="text-sm font-semibold text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground">{children}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label} {required && <span className="text-accent">*</span>}
      </Label>
      <Input id={name} name={name} type={type} required={required} className="mt-2" />
    </div>
  );
}
