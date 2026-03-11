import Link from 'next/link';

const legalLinks = [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms-of-service' }
];

const socialLinks = [
    {
        label: 'Facebook',
        href: 'https://www.facebook.com/BULKAPP',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
                <path d="M15.2 5.4H17V2.3h-2.8c-3.2 0-4.8 1.9-4.8 4.9v2.2H7v3.2h2.4v9.1h3.7v-9.1h3.1l.4-3.2h-3.5V7.8c0-1.1.5-2.4 2.1-2.4z" />
            </svg>
        )
    },
    {
        label: 'YouTube',
        href: 'https://www.youtube.com/@BULKAPP',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
                <path d="M22 12s0-3-1-4.4c-.6-1-1.3-1.2-2-1.3C16.7 6 12 6 12 6s-4.7 0-7 .3c-.7.1-1.4.3-2 1.3C2 9 2 12 2 12s0 3 1 4.4c.6 1 1.3 1.2 2 1.3 2.3.3 7 .3 7 .3s4.7 0 7-.3c.7-.1 1.4-.3 2-1.3 1-1.4 1-4.4 1-4.4z" />
                <path d="m10 9 5 3-5 3V9z" fill="currentColor" stroke="none" />
            </svg>
        )
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/bulkappio/',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
                <rect x="3.3" y="3.3" width="17.4" height="17.4" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
            </svg>
        )
    },
    {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@bulk_app',
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-4 w-4">
                <path d="M14.4 4.1v9.2a3.6 3.6 0 1 1-2.8-3.5" />
                <path d="M14.4 4.1c.9 1.8 2.2 3.1 4 3.6" />
            </svg>
        )
    }
];

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-black/10 pt-10 pb-8 sm:mt-24 sm:pt-12 sm:pb-10">
            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
                <p className="order-2 text-center text-sm text-neutral-600 md:order-2 md:col-span-2 md:justify-self-center">
                    © {year} BULK
                </p>

                <div className="order-1 flex flex-col items-center gap-4 md:order-1 md:col-start-2 md:items-end">
                    <div className="flex items-center gap-2" aria-label="Social links">
                        {socialLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.label}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 no-underline transition hover:border-emerald-500 hover:text-emerald-600"
                            >
                                {item.icon}
                            </Link>
                        ))}
                    </div>

                    <nav
                        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 md:justify-end"
                        aria-label="Legal links"
                    >
                        {legalLinks.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-sm text-neutral-600 no-underline transition hover:text-emerald-600"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}
