'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from 'public/images/logo-white.png';

const navItems = [
    { linkText: 'Free Content', href: '/free-content' },
    { linkText: 'Blogs', href: '/blog' }
];

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    function toggleMobileMenu() {
        setMobileMenuOpen((prev) => !prev);
    }

    function closeMobileMenu() {
        setMobileMenuOpen(false);
    }

    return (
        <header className="sticky top-2 z-50 pb-6 pt-2 sm:top-6 sm:pb-12 sm:pt-6">
            <div className="relative rounded-3xl border border-white/65 bg-white/55 px-3 py-2.5 shadow-[0_10px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl supports-backdrop-filter:bg-white/45 sm:rounded-4xl sm:px-4 sm:py-3">
                <div className="relative flex min-w-0 items-center gap-2">
                    <Link href="/" className="shrink-0 no-underline" aria-label="BULK home" onClick={closeMobileMenu}>
                        <span className="flex items-center gap-1.5">
                            <Image
                                src={logo}
                                alt="BULK logo"
                                width={40}
                                height={40}
                                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
                            />
                            <span className="font-brand text-lg font-semibold tracking-[0.14em] text-neutral-950 sm:text-2xl sm:tracking-[0.16em]">
                                BULK
                            </span>
                        </span>
                    </Link>

                    <nav
                        className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 lg:flex"
                        aria-label="Main navigation"
                    >
                        {navItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.href}
                                className="rounded-full px-4 py-2.5 text-base font-semibold text-neutral-700 no-underline transition-colors hover:text-emerald-600"
                            >
                                {item.linkText}
                            </Link>
                        ))}
                    </nav>

                    <button
                        type="button"
                        onClick={toggleMobileMenu}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-header-menu"
                        className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/15 bg-white/70 text-neutral-700 transition-colors hover:text-emerald-600 lg:hidden"
                    >
                        {mobileMenuOpen ? (
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                                <path
                                    d="M6 6l12 12M18 6 6 18"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        ) : (
                            <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
                                <path
                                    d="M4 7h16M4 12h16M4 17h16"
                                    stroke="currentColor"
                                    strokeWidth="1.8"
                                    strokeLinecap="round"
                                />
                            </svg>
                        )}
                        <span className="sr-only">Toggle menu</span>
                    </button>

                    <Link
                        href="/"
                        className="ml-auto hidden items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold whitespace-nowrap text-white no-underline transition hover:bg-neutral-800 lg:inline-flex"
                    >
                        Start Free Trial
                    </Link>
                </div>

                {mobileMenuOpen && (
                    <div
                        id="mobile-header-menu"
                        className="absolute left-0 right-0 top-[calc(100%+0.4rem)] z-50 lg:hidden"
                    >
                        <div className="rounded-3xl border border-white/65 bg-white/92 p-2 shadow-[0_14px_35px_rgba(15,23,42,0.18)] backdrop-blur-xl">
                            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                                {navItems.map((item, index) => (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={closeMobileMenu}
                                        className="rounded-xl px-3 py-2.5 text-sm font-semibold text-neutral-700 no-underline transition-colors hover:text-emerald-600"
                                    >
                                        {item.linkText}
                                    </Link>
                                ))}
                                <Link
                                    href="/"
                                    onClick={closeMobileMenu}
                                    className="mt-1 inline-flex items-center justify-center rounded-xl bg-neutral-950 px-4 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-neutral-800"
                                >
                                    Start Free Trial
                                </Link>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}
