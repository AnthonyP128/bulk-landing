import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
    formatBlogDate,
    getAllBlogPosts,
    getBlogPostBySlug,
    getKeyPoints,
    getRelatedBlogPosts
} from '../../../data/blog-posts';

export function generateStaticParams() {
    return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        return {
            title: 'Blog Post'
        };
    }

    return {
        title: post.title,
        description: post.excerpt
    };
}

export default async function BlogPostPage({ params }) {
    const resolvedParams = await params;
    const post = getBlogPostBySlug(resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const keyPoints = getKeyPoints(post);
    const relatedPosts = getRelatedBlogPosts(post.slug, 3);

    return (
        <article className="mx-auto w-full max-w-3xl pb-16">
            <div className="mb-3 flex justify-start">
                <Link
                    href="/blog"
                    aria-label="Back to Blog"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-neutral-800 no-underline shadow-sm transition hover:border-emerald-500/60 hover:text-emerald-700"
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
            </div>

            <header className="mt-5 border-b border-black/10 pb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-neutral-500">{formatBlogDate(post.publishedAt)}</p>
                <h1 className="mt-3 text-3xl leading-tight text-neutral-900 sm:text-5xl">{post.title}</h1>
                <p className="mt-4 text-base leading-7 text-neutral-700 sm:text-lg">{post.excerpt}</p>
            </header>

            <section className="mt-8 space-y-6 text-neutral-700">
                <div>
                    <h2 className="mb-3 text-3xl text-neutral-900">Key Takeaways</h2>
                    <ul className="list-disc space-y-2 pl-6 leading-7">
                        {keyPoints.map((point) => (
                            <li key={point}>{point}</li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h2 className="mb-3 text-3xl text-neutral-900">How to Apply This Week</h2>
                    <p className="leading-7">
                        Choose one insight from this article and apply it to your current coaching workflow. Keep your
                        implementation simple, track the outcome, and iterate after one week.
                    </p>
                    <p className="mt-3 leading-7">
                        If you run your operations inside BULK, use this as a prompt to tighten programming,
                        communication, and delivery consistency for your clients.
                    </p>
                </div>
            </section>

            {relatedPosts.length > 0 && (
                <aside className="mt-10 border-t border-black/10 pt-6">
                    <h2 className="mb-4 text-2xl text-neutral-900">Related Posts</h2>
                    <ul className="space-y-2">
                        {relatedPosts.map((relatedPost) => (
                            <li key={relatedPost.slug}>
                                <Link
                                    href={`/blog/${relatedPost.slug}`}
                                    className="text-sm font-medium text-neutral-700 no-underline transition hover:text-emerald-600 sm:text-base"
                                >
                                    {relatedPost.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            )}
        </article>
    );
}
