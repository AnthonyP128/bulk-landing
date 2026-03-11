import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    getAllFreeContentItems,
    getFreeContentBenefits,
    getFreeContentHowTo,
    getFreeContentImage,
    getFreeContentItemBySlug,
    getRelatedFreeContentItems
} from '../../../data/free-content-items';

export function generateStaticParams() {
    return getAllFreeContentItems().map((item) => ({ slug: item.slug }));
}

export function generateMetadata({ params }) {
    const item = getFreeContentItemBySlug(params.slug);

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

export default function FreeContentDetailPage({ params }) {
    const item = getFreeContentItemBySlug(params.slug);

    if (!item) {
        notFound();
    }

    const benefits = getFreeContentBenefits(item);
    const howTo = getFreeContentHowTo(item);
    const relatedItems = getRelatedFreeContentItems(item.slug, 3);

    return (
        <article className="mx-auto w-full max-w-3xl pb-16">
            <Link href="/free-content" className="text-sm font-medium text-neutral-600 no-underline transition hover:text-emerald-600">
                ← Back to Free Content
            </Link>

            <header className="mt-5 border-b border-black/10 pb-6 text-center">
                <div className="mx-auto max-w-xl overflow-hidden rounded-2xl border border-black/10 bg-neutral-50">
                    <div className="h-2 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-500 opacity-70" />
                    <div className="relative aspect-[4/3]">
                        <Image src={getFreeContentImage(item)} alt={`${item.title} preview`} fill className="object-contain p-6" />
                    </div>
                </div>

                <h1 className="mt-6 text-3xl leading-tight text-neutral-900 sm:text-5xl">{item.title}</h1>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-neutral-700 sm:text-lg">{item.intro}</p>
            </header>

            <section className="mt-8 space-y-7 text-neutral-700">
                <div>
                    <h2 className="mb-3 text-3xl text-neutral-900">Features and Benefits</h2>
                    <ul className="list-disc space-y-2 pl-6 leading-7">
                        {benefits.map((benefit) => (
                            <li key={benefit}>{benefit}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="mb-3 text-3xl text-neutral-900">How to Use</h2>
                    <ol className="list-decimal space-y-2 pl-6 leading-7">
                        {howTo.map((step) => (
                            <li key={step}>{step}</li>
                        ))}
                    </ol>
                </div>

                <div className="rounded-2xl border border-black/10 bg-white p-4 sm:p-5">
                    <p className="leading-7">
                        Replace the preview image and content with your final asset pack when ready. This page is now
                        fully wired and route-ready for each free resource.
                    </p>
                    <Link
                        href="/"
                        className="mt-4 inline-flex items-center justify-center rounded-full bg-neutral-950 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-neutral-800"
                    >
                        Access Now
                    </Link>
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
