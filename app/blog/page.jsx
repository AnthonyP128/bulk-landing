import Image from 'next/image';
import Link from 'next/link';
import { formatBlogDate, getAllBlogPosts, getBlogAuthorImage, getBlogAuthorName } from '../../data/blog-posts';

const BLOG_LIST_LOGO = '/images/logo.png';

export const metadata = {
    title: 'BULK Blog'
};

export default function BlogPage() {
    const posts = getAllBlogPosts();

    return (
        <section className="mx-auto w-full max-w-3xl">
            <div className="border-b border-black/10 pt-8 pb-8 text-center sm:pb-10">
                <h1 className="text-4xl text-neutral-900 sm:text-5xl">BULK Blog</h1>
                <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-neutral-600 sm:text-base">
                    Personal training growth, coaching systems, and business guides built for mobile-first coaches.
                </p>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500">
                <p>All Articles</p>
                <p>{posts.length} posts</p>
            </div>

            <ul className="mt-3 space-y-3">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link
                            href={`/blog/${post.slug}`}
                            className="group flex items-center gap-4 rounded-xl border border-black/10 bg-white px-3 py-4 no-underline transition hover:border-black/20 sm:gap-5 sm:px-4 sm:py-5"
                        >
                            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg border border-black/15 bg-neutral-100">
                                <Image
                                    src={BLOG_LIST_LOGO}
                                    alt="BULK logo"
                                    fill
                                    className="rounded-lg border border-black/10 object-contain p-2"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <p className="text-lg font-semibold leading-6 text-neutral-900 transition group-hover:text-emerald-700">
                                    {post.title}
                                </p>
                                <p className="mt-1.5 text-sm leading-7 text-neutral-600">{post.excerpt}</p>
                                <div className="mt-2.5 flex items-center gap-2 text-xs text-neutral-500">
                                    <div className="relative h-6 w-6 overflow-hidden rounded-full border border-black/10 bg-neutral-100">
                                        <Image
                                            src={getBlogAuthorImage(post)}
                                            alt={`${getBlogAuthorName(post)} profile`}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <p className="font-semibold text-neutral-700">{getBlogAuthorName(post)}</p>
                                    <span aria-hidden="true">•</span>
                                    <p className="font-medium uppercase tracking-[0.08em]">
                                        {formatBlogDate(post.publishedAt)}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
