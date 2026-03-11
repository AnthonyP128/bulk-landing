import Image from 'next/image';
import Link from 'next/link';
import { getAllFreeContentItems, getFreeContentImage } from '../../data/free-content-items';

export const metadata = {
    title: 'Free Content'
};

export default function FreeContentPage() {
    const items = getAllFreeContentItems();

    return (
        <section className="mx-auto w-full max-w-5xl pb-16">
            <div className="text-center">
                <h1 className="text-4xl text-neutral-900 sm:text-5xl">Free Content</h1>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                    Free templates and resources for coaches. No email signups, just practical tools.
                </p>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                <p>Library</p>
                <p>{items.length} resources</p>
            </div>

            <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <li key={item.slug}>
                        <Link href={`/free-content/${item.slug}`} className="group block no-underline">
                            <article className="h-full rounded-2xl border border-black/10 bg-white p-3 transition-colors hover:border-emerald-500/45">
                                <div className="relative overflow-hidden rounded-xl border border-black/10 bg-neutral-50">
                                    <div className="pointer-events-none absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-blue-500 opacity-70" />
                                    <div className="relative aspect-[4/3]">
                                        <Image
                                            src={getFreeContentImage(item)}
                                            alt={`${item.title} preview`}
                                            fill
                                            className="object-contain p-4"
                                        />
                                    </div>
                                </div>

                                <h2 className="mt-3 text-xl leading-7 text-neutral-900 transition-colors group-hover:text-emerald-700">
                                    {item.title}
                                </h2>
                                <p className="mt-2 text-sm leading-6 text-neutral-600">{item.summary}</p>
                            </article>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
