import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    getAllFreeContentItems,
    getFreeContentBenefits,
    getFreeContentClosing,
    getFreeContentDescription,
    getFreeContentDetailTitle,
    getFreeContentHowTo,
    getFreeContentImage,
    getFreeContentItemBySlug,
    getRelatedFreeContentItems
} from '../../../data/free-content-items';

export function generateStaticParams() {
    return getAllFreeContentItems().map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const item = getFreeContentItemBySlug(resolvedParams.slug);

    if (!item) {
        return {
            title: 'Free Content'
        };
    }

    return {
        title: item.title,
        description: item.summary
    };
}

export default async function FreeContentDetailPage({ params }) {
    const resolvedParams = await params;
    const item = getFreeContentItemBySlug(resolvedParams.slug);

    if (!item) {
        notFound();
    }

    const detailTitle = getFreeContentDetailTitle(item);
    const description = getFreeContentDescription(item);
    const benefits = getFreeContentBenefits(item);
    const howTo = getFreeContentHowTo(item);
    const closing = getFreeContentClosing(item);
    const relatedItems = getRelatedFreeContentItems(item.slug, 3);
    const accessUrl = item.accessUrl || '/free-content';
    const accessLabel = item.accessLabel || 'Access Now';
    const isExternalAccess = accessUrl.startsWith('http');

    return (
        <article className="mx-auto w-full max-w-3xl pb-16">
            <header className="mt-5 border-b border-black/10 pb-6 text-center">
                <div className="relative mx-auto mb-3 w-full max-w-xl">
                    <Link
                        href="/free-content"
                        aria-label="Back to Free Content"
                        className="absolute left-2 top-2 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-neutral-800 no-underline shadow-sm transition hover:border-emerald-500/60 hover:text-emerald-700 sm:-left-24 sm:top-0"
                    >
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
                    </Link>
                    <div className="overflow-hidden rounded-2xl border border-black/10 bg-neutral-50">
                        <div className="relative aspect-[4/3]">
                            <Image
                                src={getFreeContentImage(item)}
                                alt={`${item.title} preview`}
                                fill
                                className="object-contain p-6"
                            />
                        </div>
                    </div>
                </div>

                <h1 className="mt-6 text-3xl leading-tight text-neutral-900 sm:text-5xl">{detailTitle}</h1>
            </header>

            <section className="mt-8 space-y-7 text-neutral-700">
                <div className="space-y-4">
                    {description.map((paragraph, index) => (
                        <p key={`${item.slug}-desc-${index}`} className="leading-8">
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div>
                    <h2 className="mb-3 text-3xl text-neutral-900">Features and Benefits</h2>
                    <ul className="list-disc space-y-2 pl-6 leading-7">
                        {benefits.map((benefit) => (
                            <li key={benefit.title}>
                                <span className="font-semibold text-neutral-900">{benefit.title}:</span>{' '}
                                {benefit.description}
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="mb-3 text-3xl text-neutral-900">How to Use</h2>
                    <ol className="list-decimal space-y-2 pl-6 leading-7">
                        {howTo.map((step) => (
                            <li key={step.title}>
                                <span className="font-semibold text-neutral-900">{step.title}:</span> {step.description}
                            </li>
                        ))}
                    </ol>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
                    <div className="space-y-4">
                        {closing.map((paragraph, index) => (
                            <p key={`${item.slug}-closing-${index}`} className="leading-8">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {isExternalAccess ? (
                        <a
                            href={accessUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-emerald-600"
                        >
                            {accessLabel}
                        </a>
                    ) : (
                        <Link
                            href={accessUrl}
                            className="mt-5 inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-emerald-600"
                        >
                            {accessLabel}
                        </Link>
                    )}
                </div>
            </section>

            {relatedItems.length > 0 && (
                <aside className="mt-10 border-t border-black/10 pt-6">
                    <h2 className="mb-4 text-2xl text-neutral-900">More Free Resources</h2>
                    <ul className="space-y-2">
                        {relatedItems.map((related) => (
                            <li key={related.slug}>
                                <Link
                                    href={`/free-content/${related.slug}`}
                                    className="text-sm font-medium text-neutral-700 no-underline transition hover:text-emerald-600 sm:text-base"
                                >
                                    {related.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </article>
    );
}
