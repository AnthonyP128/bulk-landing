// Add, remove, or edit posts here.
// Each post automatically appears on /blog and gets its own page at /blog/[slug].
const posts = [
    {
        slug: 'personal-training-foundation-phase-rr-and-rep',
        title: 'Personal Training Foundation: Phase RR and REP',
        excerpt: 'Build a strong coaching baseline by structuring recovery, resistance, and progressive effort in simple phases.',
        publishedAt: '2024-11-25',
        readTime: '6 min read',
        category: 'Coaching'
    },
    {
        slug: 'warm-up-sets-drop-sets-failure-sets-supersets-and-giant-sets',
        title: 'What are Warm-up set, Drop set, Failure set, supersets & Giant set',
        excerpt: 'A practical breakdown of popular set structures and when to use each one in client programs.',
        publishedAt: '2024-11-12',
        readTime: '7 min read',
        category: 'Programming'
    },
    {
        slug: 'online-personal-training-clients-effective-strategies-for-success',
        title: 'How to Get Online Personal Training Clients: Effective Strategies for Success',
        excerpt: 'The simplest online acquisition channels that consistently bring qualified coaching leads.',
        publishedAt: '2024-11-02',
        readTime: '8 min read',
        category: 'Growth'
    },
    {
        slug: 'ultimate-personal-trainer-business-plan-step-by-step',
        title: 'Creating the Ultimate Personal Trainer Business Plan: A Step-by-Step Guide',
        excerpt: 'Map your offer, pricing, lead flow, and weekly operations into one clear execution plan.',
        publishedAt: '2024-10-20',
        readTime: '9 min read',
        category: 'Business'
    },
    {
        slug: 'seo-for-personal-trainers',
        title: 'SEO for Personal Trainers',
        excerpt: 'How to rank for local and online coaching terms with content that converts visitors into clients.',
        publishedAt: '2024-10-10',
        readTime: '5 min read',
        category: 'Marketing'
    },
    {
        slug: 'how-to-make-money-as-a-personal-trainer',
        title: 'How you can make money as a personal trainer',
        excerpt: 'Revenue levers for trainers: sessions, hybrid coaching, retainers, and recurring products.',
        publishedAt: '2024-09-29',
        readTime: '6 min read',
        category: 'Business'
    },
    {
        slug: 'how-to-get-clients-for-personal-training',
        title: 'How to get clients for personal training',
        excerpt: 'A repeatable lead-to-consult system to fill your calendar without relying on luck.',
        publishedAt: '2024-09-21',
        readTime: '7 min read',
        category: 'Growth'
    },
    {
        slug: 'mastering-the-fitness-business-how-to-make-100k-as-a-personal-trainer',
        title: 'Mastering the Fitness Business: How to Make 100k as a Personal Trainer',
        excerpt: 'The math, delivery model, and retention targets needed to build a sustainable six-figure business.',
        publishedAt: '2024-09-10',
        readTime: '9 min read',
        category: 'Business'
    },
    {
        slug: 'start-personal-training-as-a-side-hustle',
        title: 'How you can Start Personal Training as a Side Hustle',
        excerpt: 'Launch part-time coaching with a low-risk schedule and a clear path to full-time income.',
        publishedAt: '2024-08-31',
        readTime: '6 min read',
        category: 'Career'
    },
    {
        slug: 'must-read-books-for-personal-trainers',
        title: 'Must read books for personal trainers',
        excerpt: 'Books on behavior change, programming, communication, and business that sharpen coaching output.',
        publishedAt: '2024-08-25',
        readTime: '4 min read',
        category: 'Education'
    },
    {
        slug: 'how-to-be-a-good-personal-trainer',
        title: 'How to be a good personal trainer',
        excerpt: 'Coaching habits that improve adherence, outcomes, and long-term client trust.',
        publishedAt: '2024-08-18',
        readTime: '6 min read',
        category: 'Coaching'
    },
    {
        slug: 'start-an-online-fitness-coaching-business',
        title: 'How to start an online fitness coaching business',
        excerpt: 'From offer design to onboarding and delivery, a practical setup for online coaching.',
        publishedAt: '2024-08-12',
        readTime: '8 min read',
        category: 'Business'
    },
    {
        slug: 'is-personal-training-a-dying-career',
        title: 'Is personal training a dying career?',
        excerpt: 'What is changing in the industry and where high-value trainers still win.',
        publishedAt: '2024-08-06',
        readTime: '5 min read',
        category: 'Career'
    },
    {
        slug: 'top-strategies-to-retain-clients-as-a-personal-trainer',
        title: 'Top Strategies to Retain Clients as a Personal Trainer',
        excerpt: 'Retention systems that keep clients progressing, engaged, and committed for longer.',
        publishedAt: '2024-07-30',
        readTime: '7 min read',
        category: 'Retention'
    },
    {
        slug: 'lead-generation-strategies-for-personal-training-success',
        title: 'Effective Lead Generation Strategies for Personal Training Success',
        excerpt: 'High-leverage lead channels and messaging frameworks that attract ideal clients.',
        publishedAt: '2024-07-22',
        readTime: '7 min read',
        category: 'Growth'
    },
    {
        slug: 'schedule-personal-training-clients-for-maximum-efficiency',
        title: 'How to Schedule Personal Training Clients for Maximum Efficiency',
        excerpt: 'Time-blocking and schedule design principles to avoid burnout while growing revenue.',
        publishedAt: '2024-07-12',
        readTime: '5 min read',
        category: 'Operations'
    },
    {
        slug: 'market-yourself-as-a-personal-trainer-comprehensive-guide',
        title: 'How to Market Yourself as a Personal Trainer: A Comprehensive Guide',
        excerpt: 'Build authority with positioning, content, social proof, and a simple conversion funnel.',
        publishedAt: '2024-07-05',
        readTime: '8 min read',
        category: 'Marketing'
    },
    {
        slug: 'price-your-online-personal-training-packages',
        title: 'How to Price Your Online Personal Training Packages',
        excerpt: 'Set profitable package pricing without undercharging or confusing your prospects.',
        publishedAt: '2024-06-29',
        readTime: '6 min read',
        category: 'Pricing'
    },
    {
        slug: 'how-to-start-an-approved-trainer-business',
        title: 'How to start an approved trainer business',
        excerpt: 'A practical checklist to launch with the right legal setup, systems, and service standards.',
        publishedAt: '2024-06-20',
        readTime: '6 min read',
        category: 'Business'
    },
    {
        slug: 'how-to-become-a-successful-personal-trainer',
        title: 'How to become a successful personal trainer',
        excerpt: 'The skills and business decisions that separate consistent coaches from crowded competitors.',
        publishedAt: '2024-06-11',
        readTime: '7 min read',
        category: 'Career'
    },
    {
        slug: 'best-personal-trainer-scheduling-app-for-your-business',
        title: 'The best personal trainer scheduling app for your business',
        excerpt: 'What to evaluate in a scheduling platform to improve client experience and staff efficiency.',
        publishedAt: '2024-05-30',
        readTime: '5 min read',
        category: 'Tools'
    },
    {
        slug: 'actionable-guide-to-start-building-an-online-fitness-business',
        title: 'Actionable guide on how to start building an online fitness business',
        excerpt: 'Step-by-step actions for coaches moving from scattered effort to a repeatable online model.',
        publishedAt: '2024-05-18',
        readTime: '8 min read',
        category: 'Business'
    },
    {
        slug: 'actionable-steps-to-get-personal-training-clients',
        title: 'Actionable steps on how to get personal training clients',
        excerpt: 'A weekly operating cadence to generate conversations, consultations, and paid starts.',
        publishedAt: '2024-05-07',
        readTime: '6 min read',
        category: 'Growth'
    },
    {
        slug: 'streamline-your-coaching-business-with-bulk',
        title: 'Streamline your Coaching Business with BULK',
        excerpt: 'Use BULK to centralize programming, communication, and scheduling in one workflow.',
        publishedAt: '2024-04-28',
        readTime: '4 min read',
        category: 'BULK'
    }
];

const defaultKeyPoints = [
    'Define a clear outcome for the client before choosing tools or tactics.',
    'Keep your weekly delivery process simple so it can be repeated consistently.',
    'Track a few core metrics and make small improvements every week.'
];

const defaultBlogImage = '/images/logo-white.png';

export function getAllBlogPosts() {
    return [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getBlogPostBySlug(slug) {
    return posts.find((post) => post.slug === slug) ?? null;
}

export function getRelatedBlogPosts(slug, limit = 3) {
    return getAllBlogPosts()
        .filter((post) => post.slug !== slug)
        .slice(0, limit);
}

export function getKeyPoints(post) {
    return post.keyPoints?.length ? post.keyPoints : defaultKeyPoints;
}

export function getBlogImage(post) {
    if (post.image) {
        return post.image;
    }

    return defaultBlogImage;
}

export function formatBlogDate(dateInput) {
    return new Intl.DateTimeFormat('en-AU', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    }).format(new Date(dateInput));
}
