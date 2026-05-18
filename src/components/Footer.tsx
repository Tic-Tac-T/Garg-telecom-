import { Link } from "@tanstack/react-router";
import { Signal, Facebook, Twitter, Linkedin, Youtube, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto grid gap-10 px-4 py-14 lg:grid-cols-4 lg:px-8">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent text-accent-foreground">
              <Signal className="h-5 w-5" />
            </span>
            <span className="text-lg font-bold">Garg Telecom</span>
          </Link>
          <p className="mt-4 flex items-start gap-2 text-sm text-primary-foreground/70">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            Karol Bagh, New Delhi, Delhi - 110007
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">+91 98110 24593</p>
          <p className="text-sm text-primary-foreground/70">support@gargtelecom.in</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/services" className="hover:text-accent">Services</Link></li>
            <li><Link to="/enterprise" className="hover:text-accent">Enterprise Solutions</Link></li>
            <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
            <li><Link to="/support" className="hover:text-accent">Support</Link></li>
            <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Legal</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><a href="#" className="hover:text-accent">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-accent">Terms of Service</a></li>
            <li><a href="#" className="hover:text-accent">Acceptable Use</a></li>
            <li><a href="#" className="hover:text-accent">SLA</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider">Follow Us</h4>
          <div className="mt-4 flex gap-3">
            {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-md border border-primary-foreground/20 transition-colors hover:bg-accent hover:border-accent"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <p className="mt-6 text-xs text-primary-foreground/60">
            ISO 27001 Certified · TRAI Compliant
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-5 text-center text-xs text-primary-foreground/60 lg:px-8">
          © 2026 Garg Telecom. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
