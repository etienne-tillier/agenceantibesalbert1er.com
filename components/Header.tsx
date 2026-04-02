"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-inner">
          {/* Logo */}
          <Link href="/" className="header-logo">
            <Image src="/logo.svg" alt="Agence Antibes Albert 1er" width={140} height={40} priority />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Navigation principale">
            <ul className="header-nav">
              {siteConfig.mainNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`nav-link${pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href)) ? " active" : ""}`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="header-cta">
            <Link href="/contact" className="btn btn-primary" style={{ padding: "0.625rem 1.5rem", fontSize: "0.9rem" }}>
              Estimation gratuite
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span style={{ transform: mobileOpen ? "rotate(45deg) translateY(7px)" : "none" }} />
            <span style={{ opacity: mobileOpen ? 0 : 1 }} />
            <span style={{ transform: mobileOpen ? "rotate(-45deg) translateY(-7px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className={`mobile-nav${mobileOpen ? " open" : ""}`} aria-label="Navigation mobile">
        {siteConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="mobile-nav-link"
            onClick={() => setMobileOpen(false)}
          >
            {item.title}
          </Link>
        ))}
        <Link
          href="/contact"
          className="btn btn-primary"
          style={{ marginTop: "0.75rem", justifyContent: "center" }}
          onClick={() => setMobileOpen(false)}
        >
          Estimation gratuite
        </Link>
      </nav>
    </header>
  );
}
