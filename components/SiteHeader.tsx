"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Log Queries", href: "/log-queries" },
  { label: "Track Repair", href: "/track-repair" },
  { label: "Admin Sign In", href: "/admin/sign-in" },
  { label: "Admin Dashboard", href: "/admin/dashboard" }
];

function NavLink({
  href,
  label,
  active
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      className={[
        "relative inline-flex items-center px-3 py-2 text-sm font-medium transition",
        active
          ? "text-charcoal-30"
          : "text-charcoal-20 hover:text-charcoal-30"
      ].join(" ")}
      aria-current={active ? "page" : undefined}
    >
      <span>{label}</span>
      {active ? (
        <span className="absolute inset-x-2 bottom-1 h-[2px] rounded bg-brand-500 shadow-glow" />
      ) : null}
    </Link>
  );
}

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const renderedNav = useMemo(() => {
    return navItems.map((item) => {
      const active = pathname === item.href;
      return (
        <NavLink
          key={item.href}
          href={item.href}
          label={item.label}
          active={active}
        />
      );
    });
  }, [pathname]);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b border-black/5 transition",
        scrolled ? "bg-white/80 backdrop-blur shadow-soft" : "bg-white/60"
      ].join(" ")}
    >
      <div className="content-shell flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo size={38} />
          <div className="leading-tight">
            <div className="text-sm font-semibold text-charcoal-30">
              Fotress Drone Solutions
            </div>
            <div className="text-[11px] font-medium text-charcoal-20">
              A Division of The iTech Drones Company
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {renderedNav}
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-black/10 bg-white px-3 py-2 text-sm font-semibold text-charcoal-30 shadow-soft transition hover:shadow-soft hover:border-brand-500/30"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-80"
            >
              <path
                d="M3 5h12M3 9h12M3 13h12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id="mobile-nav"
          className="md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="content-shell pb-4 pt-2">
            <div className="rounded-2xl border border-black/10 bg-white p-2 shadow-soft">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={[
                    "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition",
                    pathname === item.href
                      ? "bg-brand-50 text-charcoal-30"
                      : "text-charcoal-20 hover:bg-black/3 hover:text-charcoal-30"
                  ].join(" ")}
                >
                  <span>{item.label}</span>
                  {pathname === item.href ? (
                    <span className="inline-flex h-2 w-2 rounded-full bg-brand-500 shadow-glow" />
                  ) : null}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

