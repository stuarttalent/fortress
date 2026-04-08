import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink-100 bg-white">
      <div className="content-shell py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <BrandLogo size={36} />
              <div>
                <div className="text-[13px] font-semibold tracking-tight text-ink-900">
                  Fotress Drone Solutions
                </div>
                <div className="text-xs font-semibold text-ink-600">
                  A Division of The iTech Drones Company
                </div>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm font-medium text-ink-600">
              Premium drone sales, repairs, maintenance, and technical support
              — with transparent milestones and clean diagnostics.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <div className="text-sm font-semibold text-ink-900">Services</div>
                <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-ink-600">
                  <Link className="hover:text-ink-900" href="/#services">
                    Drone Sales
                  </Link>
                  <Link className="hover:text-ink-900" href="/#services">
                    Repairs
                  </Link>
                  <Link className="hover:text-ink-900" href="/#services">
                    Maintenance
                  </Link>
                  <Link className="hover:text-ink-900" href="/#services">
                    Diagnostics
                  </Link>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">Support</div>
                <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-ink-600">
                  <Link className="hover:text-ink-900" href="/log-queries">
                    Service Request
                  </Link>
                  <Link className="hover:text-ink-900" href="/track-repair">
                    Track Repair
                  </Link>
                  <Link className="hover:text-ink-900" href="/support">
                    Support
                  </Link>
                  <a
                    className="hover:text-ink-900"
                    href="https://wa.me/263710493700?text=hi"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">Company</div>
                <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-ink-600">
                  <Link className="hover:text-ink-900" href="/about">
                    About Fotress
                  </Link>
                  <a className="hover:text-ink-900" href="#">
                    Privacy
                  </a>
                  <a className="hover:text-ink-900" href="#">
                    Terms
                  </a>
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-ink-900">Admin</div>
                <div className="mt-4 flex flex-col gap-2 text-sm font-medium text-ink-600">
                  <Link className="hover:text-ink-900" href="/admin/sign-in">
                    Sign In
                  </Link>
                  <Link className="hover:text-ink-900" href="/admin/dashboard">
                    Dashboard
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="text-sm font-medium text-ink-600">
                <div className="font-semibold text-ink-900">Contact</div>
                <div className="mt-2">
                  <a className="hover:text-ink-900" href="mailto:info@itechdrones.com">
                    info@itechdrones.com
                  </a>
                </div>
                <div className="mt-1">
                  <a className="hover:text-ink-900" href="tel:+263787230477">
                    +263 787 230 477
                  </a>
                </div>
                <div className="mt-1">
                  Travel Plaza, 29 Mazowe Street and J Chinamano, Harare
                </div>
              </div>

              <div className="text-sm font-medium text-ink-600 md:text-right">
                <div className="font-semibold text-ink-900">Social</div>
                <div className="mt-3 flex flex-wrap gap-3 md:justify-end">
                  <a className="hover:text-ink-900" href="#">
                    Instagram
                  </a>
                  <a className="hover:text-ink-900" href="#">
                    X
                  </a>
                  <a className="hover:text-ink-900" href="#">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink-100 pt-6 text-xs font-medium text-ink-600 md:flex-row md:items-center md:justify-between">
          <div>
            © {new Date().getFullYear()} Fotress Drone Solutions. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a className="hover:text-ink-900" href="#">
              Privacy
            </a>
            <a className="hover:text-ink-900" href="#">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

