'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function ScrollRestorationFix() {
    const pathname = usePathname();

    useEffect(() => {
        const isBlogDetail = /^\/blog\/[^/]+/.test(pathname);
        const isFreeContentDetail = /^\/free-content\/[^/]+/.test(pathname);
        const shouldForceTop = isBlogDetail || isFreeContentDetail;

        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = shouldForceTop ? 'manual' : 'auto';
        }

        if (!shouldForceTop) {
            return;
        }

        // Run twice to override late browser restoration on some navigations.
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        const timeoutId = window.setTimeout(() => {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }, 0);

        return () => window.clearTimeout(timeoutId);
    }, [pathname]);

    return null;
}
