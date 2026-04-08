"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import BrandLogo from "./BrandLogo";
import { cn } from "../lib/cn";

const mainNav = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Repair Services", href: "/repair-services" },
  { label: "Track Repair", href: "/track-repair" },
  { label: "About", href: "/about" }
];

const utilityNav = [
  { label: "Log Query", href: "/log-queries" },
  { label: "Support", href: "/support" },
  { label: "Contact", href: "/contact" },
  { label: "Admin Sign In", href: "/admin/sign-in" }
];

function NavLink({
  href,
  label,
  active,
  dense = false
}: {
  href: string;
  label: string;
  active: boolean;
  dense?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "relative inline-flex items-center transition",
        dense ? "px-2.5 py-2 text-[13px] font-semibold" : "px-3 py-3 text-sm font-semibold",
        active ? "text-ink-900" : "text-ink-600 hover:text-ink-900"
      )}
      aria-current={active ? "page" : undefined}
    >
      <span>{label}</span>
      {active ? (
        <span className="absolute inset-x-2 bottom-1 h-[2px] rounded bg-ink-900" />
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
    return mainNav.map((item) => {
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
      className={cn(
        "sticky top-0 z-50 border-b border-ink-100 bg-white transition",
        scrolled ? "shadow-soft" : ""
      )}
    >
      {/* Utility bar (DJI-like) */}
      <div className="hidden border-b border-ink-100 bg-white/95 md:block">
        <div className="content-shell flex h-9 items-center justify-between">
          <div className="flex items-center gap-4 text-[12px] font-semibold text-ink-600">
            <a className="hover:text-ink-900" href="mailto:info@itechdrones.com">
              info@itechdrones.com
            </a>
            <span className="text-ink-200">|</span>
            <a className="hover:text-ink-900" href="tel:+263787230477">
              +263 787 230 477
            </a>
          </div>
          <div className="flex items-center gap-3 text-[12px] font-semibold text-ink-600">
            {utilityNav.map((item) => (
              <Link key={item.href} href={item.href} className="hover:text-ink-900">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="content-shell flex h-14 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <BrandLogo size={34} />
          <div className="leading-tight">
            <div className="text-[13px] font-semibold tracking-tight text-ink-900">
              Fotress Drone Solutions
            </div>
            <div className="text-[11px] font-semibold text-ink-600">
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
            className="inline-flex items-center justify-center rounded-lg border border-ink-200/70 bg-white px-3 py-2 text-sm font-semibold text-ink-900 transition hover:bg-ink-50"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="opacity-90"
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
            <div className="rounded-xl border border-ink-100 bg-white">
              <div className="px-3 py-3 text-xs font-semibold text-ink-600">
                Menu
              </div>
              <div className="border-t border-ink-100" />
              {[...mainNav, ...utilityNav].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-3 py-3 text-sm font-semibold transition",
                    pathname === item.href ? "bg-ink-50 text-ink-900" : "text-ink-700 hover:bg-ink-50"
                  )}
                >
                  <span>{item.label}</span>
                  {pathname === item.href ? (
                    <span className="inline-flex h-2 w-2 rounded-full bg-ink-900" />
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

