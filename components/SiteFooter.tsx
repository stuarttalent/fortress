import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="content-shell py-12">
        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <BrandLogo size={38} />
              <div>
                <div className="text-sm font-semibold text-charcoal-30">
                  Fotress Drone Solutions
                </div>
                <div className="text-xs font-medium text-charcoal-20">
                  A Division of The iTech Drones Company
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-charcoal-20">
              Clean diagnostics. Transparent updates. Quality parts. Fast
              turnaround with customer-first service.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-charcoal-30">
              Quick Links
            </div>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <Link className="text-charcoal-20 hover:text-charcoal-30" href="/">
                Home
              </Link>
              <Link
                className="text-charcoal-20 hover:text-charcoal-30"
                href="/about"
              >
                About Us
              </Link>
              <Link
                className="text-charcoal-20 hover:text-charcoal-30"
                href="/log-queries"
              >
                Log Queries
              </Link>
              <Link
                className="text-charcoal-20 hover:text-charcoal-30"
                href="/track-repair"
              >
                Track Repair
              </Link>
            </div>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-charcoal-30">
              Contact
            </div>
            <div className="mt-4 space-y-2 text-sm text-charcoal-20">
              <div>
                <span className="font-semibold text-charcoal-30">
                  Phone:
                </span>{" "}
                <a className="hover:text-charcoal-30" href="tel:+15551234567">
                  +1 (555) 123-4567
                </a>
              </div>
              <div>
                <span className="font-semibold text-charcoal-30">
                  Email:
                </span>{" "}
                <a
                  className="hover:text-charcoal-30"
                  href="mailto:service@fotressdrone.com"
                >
                  service@fotressdrone.com
                </a>
              </div>
              <div>
                <span className="font-semibold text-charcoal-30">
                  Location:
                </span>{" "}
                48 Avionics Park, Suite 12, San Diego, CA 92101
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center rounded-xl border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-charcoal-20 transition hover:border-brand-500/30 hover:bg-brand-50 hover:text-charcoal-30"
                href="#"
              >
                Instagram
              </a>
              <a
                className="inline-flex items-center rounded-xl border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-charcoal-20 transition hover:border-brand-500/30 hover:bg-brand-50 hover:text-charcoal-30"
                href="#"
              >
                X
              </a>
              <a
                className="inline-flex items-center rounded-xl border border-black/10 bg-white px-3 py-2 text-xs font-semibold text-charcoal-20 transition hover:border-brand-500/30 hover:bg-brand-50 hover:text-charcoal-30"
                href="#"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-black/5 pt-6 text-xs text-charcoal-20 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Fotress Drone Solutions. All rights reserved.</div>
          <div className="flex gap-4">
            <a className="hover:text-charcoal-30" href="#">
              Privacy
            </a>
            <a className="hover:text-charcoal-30" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

