import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="mx-auto flex min-h-[56vh] w-full max-w-3xl flex-col items-center justify-center py-14 text-center sm:py-20">
            <p className="font-brand text-sm font-semibold tracking-[0.18em] text-neutral-500">404</p>
            <h1 className="mt-3 text-4xl text-neutral-900 sm:text-6xl">Page Not Found</h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-neutral-600 sm:text-lg">
                The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-neutral-800"
                >
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
