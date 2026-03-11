import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { HistoryBackButton } from '../../../components/history-back-button';
import {
    formatBlogDate,
    getAllBlogPosts,
    getBlogAuthorImage,
    getBlogAuthorName,
    getBlogContentBlocks,
    getBlogPostBySlug,
    getKeyPoints,
} from '../../../data/blog-posts';

function isExternalHref(href = '') {
    return href.startsWith('http://') || href.startsWith('https://');
}

function getYouTubeVideoId(href = '') {
    try {
        const url = new URL(href);
        const hostname = url.hostname.replace(/^www\./, '').toLowerCase();

        if (hostname === 'youtu.be') {
            return url.pathname.split('/').filter(Boolean)[0] || null;
        }

        if (hostname === 'youtube.com' || hostname === 'm.youtube.com') {
            if (url.pathname === '/watch') {
                return url.searchParams.get('v');
            }

            if (url.pathname.startsWith('/shorts/')) {
                return url.pathname.split('/').filter(Boolean)[1] || null;
            }

            if (url.pathname.startsWith('/embed/')) {
                return url.pathname.split('/').filter(Boolean)[1] || null;
            }
        }
    } catch {
        return null;
    }

    return null;
}

function isYouTubeHref(href = '') {
    return Boolean(getYouTubeVideoId(href));
}

function getYouTubeEmbedHref(href = '') {
    const videoId = getYouTubeVideoId(href);
    if (!videoId) {
        return null;
    }

    return `https://www.youtube-nocookie.com/embed/${videoId}`;
}

function YouTubePreview({ href, label }) {
    const embedHref = getYouTubeEmbedHref(href);
    if (!embedHref) {
        return null;
    }

    return (
        <figure className="overflow-hidden rounded-2xl border border-black/10 bg-white">
            <div className="relative aspect-video bg-black">
                <iframe
                    src={embedHref}
                    title={label || 'YouTube video preview'}
                    className="h-full w-full border-0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                />
            </div>
            <figcaption className="border-t border-black/10 px-4 py-3 text-sm text-neutral-600">
                <p className="font-medium text-neutral-800">{label || 'YouTube video'}</p>
                <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 inline-block font-semibold text-emerald-700 no-underline transition hover:text-emerald-600"
                >
                    Open on YouTube
                </a>
            </figcaption>
        </figure>
    );
}

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

    const contentBlocks = getBlogContentBlocks(post);
    const hasCustomBody = contentBlocks.length > 0;
    const keyPoints = getKeyPoints(post);

    return (
        <article className="mx-auto w-full max-w-3xl pb-16">
            <div className="mb-3 grid grid-cols-[auto_1fr_auto] items-center">
                <HistoryBackButton
                    fallbackHref="/blog"
                    label="Back to previous page"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/15 bg-white text-neutral-800 no-underline shadow-sm transition hover:border-emerald-500/60 hover:text-emerald-700"
                />

                <div className="min-w-0 flex items-center justify-center gap-2 text-xs sm:text-sm">
                    <div className="relative h-7 w-7 overflow-hidden rounded-full border border-black/10 bg-neutral-100 sm:h-8 sm:w-8">
                        <Image
                            src={getBlogAuthorImage(post)}
                            alt={`${getBlogAuthorName(post)} profile`}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <p className="max-w-[8rem] truncate font-semibold text-neutral-800 sm:max-w-none">{getBlogAuthorName(post)}</p>
                    <span aria-hidden="true" className="text-neutral-400">
                        •
                    </span>
                    <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.12em] text-neutral-500 sm:text-xs">
                        {formatBlogDate(post.publishedAt)}
                    </p>
                </div>

                <div aria-hidden="true" className="h-10 w-10" />
            </div>

            <header className="mt-2 border-b border-black/10 pb-7 sm:mt-3">
                <h1 className="mt-3 text-3xl leading-tight tracking-tight text-neutral-900 sm:text-5xl">{post.title}</h1>
                <p className="mt-4 max-w-[64ch] text-[1.04rem] leading-8 text-neutral-700 sm:text-[1.12rem]">{post.excerpt}</p>
            </header>

            <section className="mt-10 text-neutral-700">
                {hasCustomBody ? (
                    <>
                        {(() => {
                            let primaryHeadingCount = 0;

                            return contentBlocks.map((block, blockIndex) => {
                                const key = `${post.slug}-block-${blockIndex}`;
                                const previousBlock = contentBlocks[blockIndex - 1];
                                const isFirstBlock = blockIndex === 0;

                                if (block.type === 'heading') {
                                    const level = block.level || (previousBlock?.type === 'heading' ? 3 : 2);
                                    const HeadingTag = level === 3 ? 'h3' : 'h2';

                                    if (level === 2) {
                                        primaryHeadingCount += 1;
                                    }

                                    const isFirstPrimaryHeading = level === 2 && primaryHeadingCount === 1;
                                    const headingClassName =
                                        level === 3
                                            ? 'mt-8 text-[1.5rem] font-semibold leading-[1.25] tracking-tight text-neutral-800 sm:text-[1.8rem]'
                                            : `${isFirstPrimaryHeading ? 'mt-3' : 'mt-12 border-t border-black/10 pt-7'} text-[1.85rem] font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-[2.25rem]`;

                                    return (
                                        <HeadingTag key={key} className={headingClassName}>
                                            {block.text}
                                        </HeadingTag>
                                    );
                                }

                                if (block.type === 'paragraph') {
                                    const paragraphClassName = `${isFirstBlock ? 'mt-0' : 'mt-5'} max-w-[64ch] text-[1.06rem] leading-[1.9] text-neutral-700`;

                                    if (block.parts?.length) {
                                        const youtubeParts = block.parts.filter(
                                            (part) => part.type === 'link' && part.href && isYouTubeHref(part.href)
                                        );
                                        const uniqueYouTubeParts = youtubeParts.filter(
                                            (part, index, arr) => arr.findIndex((item) => item.href === part.href) === index
                                        );

                                        return (
                                            <div key={key} className={`${isFirstBlock ? 'mt-0' : 'mt-5'} space-y-5`}>
                                                <p className="max-w-[64ch] text-[1.06rem] leading-[1.9] text-neutral-700">
                                                    {block.parts.map((part, partIndex) => {
                                                        const partKey = `${key}-part-${partIndex}`;

                                                        if (part.type === 'link' && part.href) {
                                                            const isExternal = part.external ?? isExternalHref(part.href);
                                                            const linkLabel = part.label || part.href;
                                                            const linkClassName =
                                                                'font-semibold text-emerald-700 underline decoration-emerald-400/80 underline-offset-2 transition hover:text-emerald-600';

                                                            if (isExternal) {
                                                                return (
                                                                    <a
                                                                        key={partKey}
                                                                        href={part.href}
                                                                        target="_blank"
                                                                        rel="noreferrer"
                                                                        className={linkClassName}
                                                                    >
                                                                        {linkLabel}
                                                                    </a>
                                                                );
                                                            }

                                                            return (
                                                                <Link key={partKey} href={part.href} className={linkClassName}>
                                                                    {linkLabel}
                                                                </Link>
                                                            );
                                                        }

                                                        return <span key={partKey}>{part.text}</span>;
                                                    })}
                                                </p>

                                                {uniqueYouTubeParts.map((part, partIndex) => (
                                                    <YouTubePreview
                                                        key={`${key}-youtube-${partIndex}`}
                                                        href={part.href}
                                                        label={part.label || 'YouTube video'}
                                                    />
                                                ))}
                                            </div>
                                        );
                                    }

                                    return (
                                        <p key={key} className={paragraphClassName}>
                                            {block.text}
                                        </p>
                                    );
                                }

                                if (block.type === 'list' && block.items?.length) {
                                    const ListTag = block.ordered ? 'ol' : 'ul';
                                    return (
                                        <ListTag
                                            key={key}
                                            className={`${isFirstBlock ? 'mt-0' : 'mt-5'} ${block.ordered ? 'list-decimal' : 'list-disc'} max-w-[62ch] space-y-3 pl-6 text-[1.03rem] leading-[1.9] text-neutral-700 marker:text-neutral-500`}
                                        >
                                            {block.items.map((item, itemIndex) => (
                                                <li key={`${key}-item-${itemIndex}`}>{item}</li>
                                            ))}
                                        </ListTag>
                                    );
                                }

                                if (block.type === 'image' && block.src) {
                                    const isContain = block.fit === 'contain';
                                    return (
                                        <figure key={key} className="mt-8 overflow-hidden rounded-2xl border border-black/10 bg-neutral-50">
                                            <div className="relative aspect-[16/10]">
                                                <Image
                                                    src={block.src}
                                                    alt={block.alt || ''}
                                                    fill
                                                    className={isContain ? 'object-contain p-4' : 'object-cover'}
                                                />
                                            </div>
                                            {block.caption ? (
                                                <figcaption className="border-t border-black/10 px-4 py-3 text-sm text-neutral-600">
                                                    {block.caption}
                                                </figcaption>
                                            ) : null}
                                        </figure>
                                    );
                                }

                                if (block.type === 'youtube' && block.href) {
                                    return (
                                        <div key={key} className="mt-8">
                                            <YouTubePreview href={block.href} label={block.label} />
                                        </div>
                                    );
                                }

                                if ((block.type === 'link' || block.type === 'cta') && block.href) {
                                    if (isYouTubeHref(block.href)) {
                                        return (
                                            <div key={key} className="mt-8">
                                                <YouTubePreview href={block.href} label={block.label} />
                                            </div>
                                        );
                                    }

                                    const isExternal = block.external ?? isExternalHref(block.href);
                                    const label = block.label || block.href;
                                    const className =
                                        block.type === 'cta'
                                            ? 'mt-6 inline-flex items-center justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white no-underline transition hover:bg-emerald-600'
                                            : 'mt-6 inline-block text-sm font-semibold text-neutral-700 no-underline transition hover:text-emerald-600 sm:text-base';

                                    if (isExternal) {
                                        return (
                                            <a key={key} href={block.href} target="_blank" rel="noreferrer" className={className}>
                                                {label}
                                            </a>
                                        );
                                    }

                                    return (
                                        <Link key={key} href={block.href} className={className}>
                                            {label}
                                        </Link>
                                    );
                                }

                                return null;
                            });
                        })()}
                    </>
                ) : (
                    <>
                        <div className="mt-3">
                            <h2 className="mb-4 text-[1.85rem] font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-[2.25rem]">
                                Key Takeaways
                            </h2>
                            <ul className="list-disc max-w-[62ch] space-y-3 pl-6 text-[1.03rem] leading-[1.9] text-neutral-700 marker:text-neutral-500">
                                {keyPoints.map((point) => (
                                    <li key={point}>{point}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-12 border-t border-black/10 pt-7">
                            <h2 className="mb-4 text-[1.85rem] font-semibold leading-[1.2] tracking-tight text-neutral-900 sm:text-[2.25rem]">
                                How to Apply This Week
                            </h2>
                            <p className="max-w-[64ch] text-[1.06rem] leading-[1.9] text-neutral-700">
                                Choose one insight from this article and apply it to your current coaching workflow.
                                Keep your implementation simple, track the outcome, and iterate after one week.
                            </p>
                            <p className="mt-4 max-w-[64ch] text-[1.06rem] leading-[1.9] text-neutral-700">
                                If you run your operations inside BULK, use this as a prompt to tighten programming,
                                communication, and delivery consistency for your clients.
                            </p>
                        </div>
                    </>
                )}
            </section>
        </article>
    );
}
