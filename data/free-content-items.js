// Free content catalog.
// Update title, summary, image, and copy here - pages update automatically.
const freeContentItems = [
    {
        slug: 'simple-workout',
        title: 'Simple Workout Planner',
        summary: 'The most straightforward workout planner you can use for your clients.',
        intro: 'A clean weekly workout planner designed for fast program delivery and easy client tracking.'
    },
    {
        slug: 'extensive-workout',
        title: 'Extensive Workout Planner',
        summary: 'A comprehensive workout planner for professional trainers and coaches.',
        intro: 'A full coaching planner with expanded structure for sessions, progression, and notes.'
    },
    {
        slug: 'parq-document',
        title: 'PAR-Q',
        summary: 'This physical activity readiness questionnaire helps get clients ready to train.',
        intro: 'A pre-training readiness form to screen health context before beginning a program.'
    },
    {
        slug: 'macro-calculator',
        title: 'Macro Calculator',
        summary: 'Calculate your clients macronutrients quickly and consistently.',
        intro: 'A practical macro planning tool for setting nutrition targets based on client goals.'
    },
    {
        slug: 'client-weight-tracker',
        title: 'Client Weight Tracker',
        summary: 'Log client body measurements and overall weight progress.',
        intro: 'Track weekly or monthly weight outcomes with a simple layout that is easy to review.'
    },
    {
        slug: 'tdee-calculator',
        title: 'Total Daily Energy Expenditure Calculator',
        summary: 'Estimate how many calories your clients burn each day.',
        intro: 'A TDEE worksheet for setting calorie targets and guiding intake adjustments.'
    },
    {
        slug: 'lifting-calculator',
        title: 'Lifting Calculator',
        summary: 'One-rep max and max-rep counters to support programming decisions.',
        intro: 'A strength calculator designed to support load selection and progression planning.'
    },
    {
        slug: 'client-nutrition',
        title: 'Client Nutrition Questionnaire',
        summary: 'Screen client nutrition habits before creating nutrition recommendations.',
        intro: 'A structured intake questionnaire to understand habits, constraints, and current behavior.'
    },
    {
        slug: 'client-goals',
        title: 'Client Goal Setting',
        summary: 'Help clients set goals using a clear SMART methodology.',
        intro: 'A goal-setting worksheet that turns broad ambitions into practical, measurable targets.'
    },
    {
        slug: 'lead-tracker',
        title: 'Trainer Lead Tracker',
        summary: 'Track your incoming leads and follow-ups in one place.',
        intro: 'A simple lead tracker to organize outreach, next actions, and conversion status.'
    },
    {
        slug: 'pricing-template',
        title: 'Trainer Pricing Template',
        summary: 'A pricing template to clearly present your services.',
        intro: 'A clean pricing structure template to communicate your offers and package tiers.'
    },
    {
        slug: 'business-plan',
        title: 'Business Plan',
        summary: 'Create a business plan for your coaching business.',
        intro: 'A focused business planning document to define delivery model, offers, and growth priorities.'
    },
    {
        slug: 'before-and-after',
        title: 'Before and After Template',
        summary: 'Before-and-after assets for social proof and social media.',
        intro: 'A visual template to present transformation progress in a simple, professional format.'
    },
    {
        slug: 'cancellation-policy',
        title: 'Cancellation Policy',
        summary: 'A client-facing cancellation policy template.',
        intro: 'A straightforward cancellation policy document to set expectations and reduce friction.'
    },
    {
        slug: 'contract-template',
        title: 'Contract Template',
        summary: 'A contract template to distribute to your clientele.',
        intro: 'A coaching agreement template to define service scope, terms, and responsibilities.'
    },
    {
        slug: 'income-and-expenses',
        title: 'Income and Expenses',
        summary: 'Track your business incomings and outgoings.',
        intro: 'A lightweight finance tracker for monitoring revenue, expenses, and operating margin.'
    },
    {
        slug: 'client-testimonial-form',
        title: 'Client Testimonial Form',
        summary: 'Collect high-quality testimonials from your clients.',
        intro: 'A testimonial capture form designed to gather useful, conversion-ready social proof.'
    },
    {
        slug: 'exercise-library',
        title: 'Exercise Library',
        summary: 'An exercise library with a broad range of movement options.',
        intro: 'A categorized exercise list to speed up programming and improve variation quality.'
    },
    {
        slug: 'client-checklist',
        title: 'Client Checklist',
        summary: 'A complete checklist to onboard new clients smoothly.',
        intro: 'An onboarding checklist to standardize setup and improve early-client experience.'
    },
    {
        slug: 'client-invoice',
        title: 'Client Invoice',
        summary: 'Notify your clients about upcoming payments.',
        intro: 'An invoice template to simplify payment requests and keep records clear.'
    },
    {
        slug: 'waiver',
        title: 'Waiver Agreement',
        summary: 'Protect your business with a personal trainer waiver agreement.',
        intro: 'A waiver template to establish informed consent and reduce risk exposure.'
    },
    {
        slug: 'resume-template',
        title: 'Resume Template',
        summary: 'A resume format designed for fitness and coaching roles.',
        intro: 'A polished resume template that helps present your background and coaching value clearly.'
    },
    {
        slug: 'onboarding-form',
        title: 'Onboarding Form',
        summary: 'Get clients started with a clean onboarding form.',
        intro: 'A structured onboarding form to capture the details you need before service begins.'
    },
    {
        slug: 'check-in-form',
        title: 'Check-in Form',
        summary: 'Set up weekly check-ins to measure client progress.',
        intro: 'A weekly check-in template to gather performance feedback and maintain accountability.'
    },
    {
        slug: 'nutrition-template',
        title: 'Nutrition Diary',
        summary: 'Set up daily or weekly nutrition tracking with clients.',
        intro: 'A nutrition logging template to monitor food intake and reinforce habit consistency.'
    }
];

const defaultImage = '/images/logo-white.png';

const defaultBenefits = [
    'Save setup time with a ready-to-use format.',
    'Keep delivery consistent across every client.',
    'Make tracking and communication easier week to week.'
];

const defaultHowTo = [
    'Duplicate the template into your own workspace.',
    'Personalize fields and structure for your coaching model.',
    'Share it with clients and review progress weekly.'
];

export function getAllFreeContentItems() {
    return [...freeContentItems];
}

export function getFreeContentItemBySlug(slug) {
    return freeContentItems.find((item) => item.slug === slug) ?? null;
}

export function getRelatedFreeContentItems(slug, limit = 3) {
    return freeContentItems.filter((item) => item.slug !== slug).slice(0, limit);
}

export function getFreeContentImage(item) {
    return item.image || defaultImage;
}

export function getFreeContentBenefits(item) {
    return item.benefits?.length ? item.benefits : defaultBenefits;
}

export function getFreeContentHowTo(item) {
    return item.howTo?.length ? item.howTo : defaultHowTo;
}
