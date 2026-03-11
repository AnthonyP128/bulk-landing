'use client';

import { useRouter } from 'next/navigation';

export function HistoryBackButton({ fallbackHref = '/', label = 'Go back', className = '' }) {
    const router = useRouter();

    function handleBack() {
        if (window.history.length > 1) {
            router.back();
            return;
        }

        router.push(fallbackHref);
    }

    return (
        <button type="button" aria-label={label} onClick={handleBack} className={className}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden="true"
            >
                <path d="m15 18-6-6 6-6" />
            </svg>
        </button>
    );
}
