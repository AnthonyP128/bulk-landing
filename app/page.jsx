import Image from 'next/image';
import { StartFreeTrialLink } from '../components/start-free-trial-link';

const coreFeatures = [
    { title: 'Scheduling', description: 'One calendar for all your clients — online and in-person.' },
    {
        title: 'Program + Nutrition Builder',
        description: 'Build workouts and nutrition plans with sets, reps, macros, and notes.'
    },
    { title: 'Messaging', description: 'Chat with clients without leaving the app.' },
    { title: 'Payments', description: "Send invoices and track what you're owed, all in one place." },
    { title: 'Habits & Check-ins', description: 'Know how your clients are doing between sessions.' },
    { title: 'Client App', description: 'Your clients get their own clean app to follow their plan.' }
];

const testimonials = [
    {
        quote: 'BULK cuts the admin noise. I focus on coaching and my client list keeps growing.',
        name: 'Callum Reyes',
        role: 'Personal Trainer',
        image: '/images/landing/profile/Callam-Reyes.jpg'
    },
    {
        quote: 'I run online and in-person clients from one app and stop missing follow-ups.',
        name: 'Leilani Tuivasa',
        role: 'Strength Coach',
        image: '/images/landing/profile/Leilani-Tuivasa.jpg'
    },
    {
        quote: 'Messages, scheduling, plans, and payments all in one place. Massive time saver.',
        name: 'Daniel Kaden',
        role: 'Online Coach',
        image: '/images/landing/profile/Daniel-Kaden.jpg'
    },
    {
        quote: 'Simple to use, fast to set up, and clean for clients. Exactly what I needed.',
        name: 'Kris Papoutsis',
        role: 'Fitness Coach',
        image: '/images/landing/profile/Kris-Papoutsis.jpg'
    }
];

const howItWorksSteps = [
    {
        n: '1',
        title: 'Add your client',
        text: 'Enter their name and email. They get a login to their own app instantly.',
        imageLabel: 'Step 1 app screen',
        imageSrc: '/images/landing/client-profile.png'
    },
    {
        n: '2',
        title: 'Build their plan',
        text: 'Assign workouts, schedule sessions, and set up their habits and check-ins.',
        imageLabel: 'Step 2 app screen',
        imageSrc: '/images/landing/workout.png'
    },
    {
        n: '3',
        title: 'Coach from anywhere',
        text: 'Message them, track progress, and get paid — all from your phone.',
        imageLabel: 'Step 3 app screen',
        imageSrc: '/images/landing/client-list.png'
    }
];

const faqItems = [
    {
        question: 'Do clients need to create an account?',
        answer: "Yes. You create a client inside the app, enter their email and name, and they'll receive login credentials automatically."
    },
    {
        question: 'Can I coach both online and in-person clients?',
        answer: 'Yes. Your schedule, messaging, and programming all support both types of clients in one place.'
    },
    {
        question: 'Can I reuse my current templates?',
        answer: 'Yes. You can attach and share your existing resources and keep everything in one system.'
    },
    {
        question: 'Does BULK support client payments?',
        answer: "Yes. Payments are handled inside the coaching workflow so you don't need a separate tool."
    },
    {
        question: 'What devices is BULK available on?',
        answer: 'iOS and Android. Both coaches and clients download the app — whatever phone they have, it works.'
    }
];

function Check() {
    return (
        <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <path
                d="M3 8.5 6.5 12 13 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function ImagePlaceholder({ label, aspectClass = 'aspect-[4/3]' }) {
    return (
        <div
            className={`${aspectClass} w-full rounded-2xl bg-neutral-100 flex flex-col items-center justify-center gap-2 border border-dashed border-neutral-300`}
        >
            <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-8 w-8 text-neutral-300"
                stroke="currentColor"
                strokeWidth="1.5"
            >
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
            </svg>
            <span className="text-xs text-neutral-400 font-medium">{label}</span>
        </div>
    );
}

export default function Page() {
    return (
        <div className="overflow-x-hidden">
            {/* ── HERO ── */}
            <section className="px-6 pb-16 pt-6 text-center sm:px-10 sm:pb-28 sm:pt-8">
                <span className="inline-block rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-700">
                    Streamline your Coaching!
                </span>

                <h1 className="mx-auto mt-7 max-w-2xl text-5xl font-semibold leading-[1.06] tracking-tight text-neutral-950 sm:text-6xl">
                    Your coaching business, all in one app.
                </h1>

                <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-neutral-400">
                    Schedule clients, send programs, message, and get paid without juggling five different apps.
                </p>

                <div className="mt-4">
                    <StartFreeTrialLink className="inline-flex items-center justify-center rounded-full bg-neutral-950 px-8 py-3.5 text-sm font-semibold text-white no-underline transition hover:bg-neutral-700">
                        Start Free Trial
                    </StartFreeTrialLink>
                    <p className="mt-3 text-xs text-neutral-400">7 days free · No credit card needed</p>
                </div>

                {/* Hero phone image */}
                <div className="relative mx-auto mt-8 max-w-[250px] sm:max-w-[290px]">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[68%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/45 blur-[64px]" />
                    <div className="pointer-events-none absolute left-1/2 top-[56%] z-0 h-[50%] w-[54%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-300/60 blur-[48px]" />
                    <Image
                        src="/images/landing/landing-page-main.png"
                        alt="BULK mobile app preview"
                        width={384}
                        height={780}
                        priority
                        quality={100}
                        unoptimized
                        sizes="(max-width: 640px) 250px, 290px"
                        className="relative z-10 h-auto w-full object-contain drop-shadow-[0_16px_24px_rgba(0,0,0,0.18)]"
                    />
                </div>
            </section>

            {/* ── TESTIMONIALS ── */}
            <section className="px-6 pb-20 sm:px-10 sm:pb-28">
                <div className="mx-auto max-w-4xl">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600">Testimonials</p>
                    <h2 className="mt-3 max-w-xs text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl">
                        Real coaches. Real results.
                    </h2>

                    <div className="mt-10 grid gap-4 sm:grid-cols-2">
                        {testimonials.map((item) => (
                            <figure key={item.name} className="rounded-2xl border border-neutral-100 p-6">
                                <div className="flex items-center gap-3">
                                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-neutral-200">
                                        <Image
                                            src={item.image}
                                            alt={`${item.name} profile image`}
                                            fill
                                            quality={100}
                                            unoptimized
                                            sizes="40px"
                                            className="object-cover"
                                        />
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-neutral-950">{item.name}</p>
                                        <p className="text-xs text-neutral-400">{item.role}</p>
                                    </div>
                                </div>
                                <blockquote className="mt-4">
                                    <p className="text-sm leading-relaxed text-neutral-600">"{item.quote}"</p>
                                </blockquote>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── HOW IT WORKS ── */}
            <section className="px-6 py-8 sm:px-10 sm:py-16">
                <div className="mx-auto max-w-4xl">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600">How it works</p>
                    <h2 className="mt-3 max-w-md text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl">
                        Simple from day one.
                    </h2>
                    <p className="mt-4 max-w-md text-base text-neutral-400 leading-relaxed">
                        No complicated setup. Add your first client in minutes and run your whole business from your
                        phone.
                    </p>

                    <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {howItWorksSteps.map((item) => (
                            <article key={item.n} className="rounded-3xl border border-neutral-200 bg-white p-4 sm:p-5">
                                {item.imageSrc ? (
                                    <div className="relative aspect-[9/13] w-full overflow-hidden">
                                        <Image
                                            src={item.imageSrc}
                                            alt={`${item.title} app preview`}
                                            fill
                                            quality={100}
                                            unoptimized
                                            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 44vw, 27vw"
                                            className="object-cover object-top"
                                        />
                                    </div>
                                ) : (
                                    <ImagePlaceholder label={item.imageLabel} aspectClass="aspect-[3/4]" />
                                )}

                                <div className="mt-4 flex items-center gap-3">
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-sm font-semibold text-neutral-500">
                                        {item.n}
                                    </span>
                                    <h3 className="text-lg font-semibold text-neutral-950">{item.title}</h3>
                                </div>

                                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{item.text}</p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FEATURES ── */}
            <section className="px-6 pb-20 sm:px-10 sm:pb-28">
                <div className="mx-auto max-w-4xl">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600">Features</p>
                    <h2 className="mt-3 max-w-sm text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl">
                        Everything you need.
                    </h2>
                    <p className="mt-4 max-w-sm text-base text-neutral-400 leading-relaxed">
                        No bloat. Just the tools coaches actually use every day.
                    </p>

                    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {coreFeatures.map((item) => (
                            <div key={item.title} className="flex gap-3">
                                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                    <Check />
                                </span>
                                <div>
                                    <h3 className="text-sm font-semibold text-neutral-950">{item.title}</h3>
                                    <p className="mt-1 text-sm leading-relaxed text-neutral-500">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── TWO PHONES — Coach + Client ── */}
            <section className="px-6 pb-20 sm:px-10 sm:pb-28">
                <div className="mx-auto max-w-4xl">
                    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
                        <div>
                            <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600">
                                Two sides, one app
                            </p>
                            <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl">
                                One app for you. One app for them.
                            </h2>
                            <p className="mt-4 text-base leading-relaxed text-neutral-400">
                                You get a coach dashboard to manage everything. Your clients get a clean app with their
                                plan, schedule, and a way to message you. No confusion.
                            </p>
                            <ul className="mt-7 space-y-3">
                                {[
                                    'Your daily schedule at a glance',
                                    'Clients see exactly what to do each day',
                                    'Habit tracking and check-ins built in',
                                    'Messaging without switching apps'
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-sm text-neutral-600">
                                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                            <Check />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Two phone screenshots side by side */}
                        <div className="flex items-end justify-center gap-4">
                            <div className="w-[45%]">
                                <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                                    Coach
                                </p>
                                <div className="overflow-hidden">
                                    <Image
                                        src="/images/landing/landing-page-main.png"
                                        alt="Coach app view"
                                        width={384}
                                        height={780}
                                        quality={100}
                                        unoptimized
                                        sizes="(max-width: 1024px) 45vw, 20vw"
                                        className="h-auto w-full object-contain"
                                    />
                                </div>
                            </div>
                            <div className="w-[45%] translate-y-6">
                                <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-widest text-neutral-400">
                                    Client
                                </p>
                                <div className="overflow-hidden">
                                    <Image
                                        src="/images/landing/client-landing.png"
                                        alt="Client app view"
                                        width={583}
                                        height={1184}
                                        quality={100}
                                        unoptimized
                                        sizes="(max-width: 1024px) 45vw, 20vw"
                                        className="h-auto w-full object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── PRICING ── */}
            <section id="pricing" className="px-6 pb-20 sm:px-10 sm:pb-28">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-emerald-600">Pricing</p>
                    <h2 className="mt-3 text-4xl font-semibold leading-tight tracking-tight text-neutral-950 sm:text-5xl">
                        One simple plan.
                    </h2>
                    <p className="mt-3 text-base text-neutral-400">No tiers, no surprises.</p>

                    <div className="mx-auto mt-8 flex min-h-[28rem] w-full max-w-[22.5rem] flex-col rounded-2xl border border-neutral-200 bg-neutral-50 p-6 sm:p-7">
                        <div className="flex items-end gap-1">
                            <span className="text-5xl font-semibold tracking-tight text-neutral-950">$29</span>
                            <span className="mb-1.5 text-sm text-neutral-400">/ month</span>
                        </div>
                        <p className="flex items-start mt-1 text-xs text-neutral-400">7-day free trial</p>

                        <ul className="mt-5 space-y-2.5">
                            {[
                                'Unlimited Clients',
                                'Unlimited Scheduling',
                                'Unlimited Content',
                                'Unlimited Messages',
                                'Client Payments',
                                "Questionnaire's, Habits and Metrics",
                                'Workout and Nutrition Builder',
                                'Coach and Client Application'
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="mx-auto flex w-full max-w-[18.5rem] items-center gap-2.5 text-left text-sm leading-relaxed text-neutral-700"
                                >
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                                        <Check />
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>

                        <StartFreeTrialLink className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white no-underline transition hover:bg-neutral-700">
                            Start Free Trial
                        </StartFreeTrialLink>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="px-6 pb-20 sm:px-10 sm:pb-28">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="text-4xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">FAQ</h2>
                    <div className="mx-auto mt-8 max-w-2xl divide-y divide-neutral-100 text-left">
                        {faqItems.map((item) => (
                            <details key={item.question} className="group py-5">
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-neutral-900">
                                    {item.question}
                                    <span className="text-xl font-light text-neutral-300 transition-transform group-open:rotate-45 group-open:text-emerald-500">
                                        +
                                    </span>
                                </summary>
                                <p className="mt-3 pr-8 text-sm leading-relaxed text-neutral-500">{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── FINAL CTA ── */}
            <section className="px-6 sm:px-10 ">
                <div className="mx-auto max-w-4xl">
                    <div className="rounded-3xl bg-neutral-950 px-8 py-12 text-center sm:px-14 sm:py-16">
                        <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
                            Ready to run your coaching business from one app?
                        </h2>
                        <p className="mx-auto mt-4 max-w-sm text-base text-neutral-400">
                            Join coaches who ditched the admin chaos. Your first 7 days are free.
                        </p>
                        <StartFreeTrialLink className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-neutral-950 no-underline transition hover:bg-neutral-100">
                            Start Free Trial
                        </StartFreeTrialLink>
                    </div>
                </div>
            </section>
        </div>
    );
}
