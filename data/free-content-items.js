// Free content catalog.
// Update title, summary, image, and copy here - pages update automatically.
const freeContentItems = [
    {
        slug: 'simple-workout',
        title: 'Simple Workout Planner',
        summary: 'The most straightforward workout planner you can use for your clients.',
        detailTitle: 'Simple Personal trainer workout plan template',
        intro: 'A clean weekly workout planner designed for fast program delivery and easy client tracking.',
        description: [
            `The Simple Workout Planner is an essential tool designed to help personal trainers efficiently manage and optimize their clients' fitness programs. This free personal training exercise template is invaluable for both new and experienced trainers, providing a structured approach to creating personalized workout plans. By simplifying the planning process, this tool enables trainers to focus more on client interaction and less on administrative tasks, ultimately enhancing the quality of service provided.`
        ],
        benefits: [
            {
                title: 'Comprehensive Client Information Section',
                description:
                    'Record detailed client information, including fitness goals, exercise preferences, and any limitations. This ensures each workout plan is tailored to individual needs for better results and client satisfaction.'
            },
            {
                title: 'Exercise Assignment with Customizable Variables',
                description:
                    'Easily assign sets, reps, weight, and rest for each exercise. Adjusting these variables allows trainers to fine-tune plans based on progress and goals.'
            },
            {
                title: 'Structured Weekly Workout Planning',
                description:
                    'Plan up to five days of workouts in a clear format. This helps maintain consistency, supports progression, and keeps clients motivated.'
            },
            {
                title: 'Progress Tracking and Adjustments',
                description:
                    'Monitor progress over time and update plans as needed. This supports data-driven coaching, measurable outcomes, and stronger client adherence.'
            },
            {
                title: 'Time-Saving and Efficiency',
                description:
                    'The simple layout helps trainers create and manage multiple programs quickly, freeing up more time for coaching and client engagement.'
            }
        ],
        howTo: [
            {
                title: 'Assign Exercises',
                description:
                    "Select appropriate exercises for each day of the week. Use customizable variables (sets, reps, weight, and rest) to fine-tune the workout according to the client's progress and capabilities."
            },
            {
                title: 'Plan the Week',
                description:
                    'Organize selected exercises across up to five workout days. Ensure a balanced mix of strength, cardio, and flexibility to support complete development.'
            },
            {
                title: 'Review and Adjust',
                description:
                    "Regularly review the client's progress and adjust the workout plan as needed to keep them challenged and progressing toward their goals."
            },
            {
                title: 'Integrate with BULK App',
                description:
                    'For BULK users, integrate this planner into your client management system to keep data synchronized and make updates easier.'
            }
        ],
        closing: [
            'Download your free Simple Workout Planner template today and experience a more efficient way to manage your personal training business. Elevate your service, save time, and help your clients achieve their fitness goals more effectively.',
            "Looking to further enhance your training toolkit? Check out our Extensive Workout Planner for more detailed plans, our Client Nutrition Tracker for meal planning, and the Client Progress Tracker to monitor your clients' fitness journey alongside their workouts."
        ],
        accessUrl:
            'https://docs.google.com/document/d/1MHy_gnGXvLAw0w2a_9i63P-FG-vZj7fgvj713raKeTw/edit?usp=share_link',
        accessLabel: 'Access Now'
    },
    {
        slug: 'extensive-workout',
        title: 'Extensive Workout Planner',
        summary: 'A comprehensive workout planner for professional trainers and coaches.',
        detailTitle: 'Extensive personal training program template',
        intro: 'A full coaching planner with expanded structure for sessions, progression, and notes.',
        description: [
            "The Extensive Personal Training Program Template is a powerful tool designed to elevate your personal training business. This personal training spreadsheet template is perfect for ambitious trainers aiming to offer tailored fitness solutions to a diverse clientele. Whether you're working with clients focused on weight loss, strength building, or specific health goals, this comprehensive template allows you to craft personalised programs with intricate details, ensuring every aspect of your clients' fitness journey is meticulously planned."
        ],
        benefits: [
            {
                title: 'Customizable Workout Metrics',
                description:
                    "Assign and adjust key workout variables such as sets, reps, weight, and rest for each exercise. This helps align each session to the client's goals and improve results."
            },
            {
                title: 'Multi-Week Planning',
                description:
                    'Schedule and organize workouts over several weeks to maintain consistency, track progression, and keep clients motivated.'
            },
            {
                title: 'Personalized Notes Section',
                description:
                    'Add notes and feedback to each workout so you can provide tailored guidance, address concerns, and improve communication.'
            },
            {
                title: 'Showcase Your Expertise',
                description:
                    'Use the detailed structure to present professional, comprehensive programs that build trust and credibility with clients.'
            },
            {
                title: 'Data-Driven Coaching',
                description:
                    'Track client progress over time and adjust plans using real data, supporting a more results-oriented coaching process.'
            },
            {
                title: 'Enhanced Client Communication',
                description:
                    'The clear format makes plans easy to understand and follow, boosting confidence, retention, and long-term outcomes.'
            }
        ],
        howTo: [
            {
                title: 'Client Assessment',
                description:
                    "Assess the client's current fitness level, goals, and specific needs. Record this in the notes section to guide plan creation."
            },
            {
                title: 'Customize Workout Metrics',
                description:
                    "Set appropriate sets, reps, weight, and rest for each exercise. Tailor these metrics to the client's level and goals."
            },
            {
                title: 'Plan the Workout Schedule',
                description:
                    'Use the multi-week layout to organize training across several weeks with a balanced mix of strength, cardio, and flexibility.'
            },
            {
                title: 'Add Personalized Notes',
                description:
                    'Include specific guidance, motivational tips, and feedback so clients understand why each workout matters.'
            },
            {
                title: 'Review and Adjust',
                description:
                    'Review progress regularly, update the plan as needed, and integrate with the BULK app to keep data synchronised.'
            }
        ],
        closing: [
            'Download your free Extensive Personal Training Program Template today and take your client programming to the next level. Impress your clients with detailed, structured plans, and elevate your reputation as a results-driven personal trainer.',
            "Explore our Simple Workout Planner for straightforward training plans, our Client Nutrition Tracker to complement your workout programming with nutritional guidance, and the Client Progress Tracker to monitor and analyse your clients' fitness journey alongside their workout plans."
        ],
        accessUrl:
            'https://docs.google.com/spreadsheets/d/1nECtSQNEMq3PrOWN6nm1QuES4Lv1dXPVNhLKntbsheg/edit?usp=share_link',
        accessLabel: 'Access Now'
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
const freeContentImageNameOverrides = {
    'client-goals': 'client-goal-setting',
    'contract-template': 'contract'
};

const defaultBenefits = [
    {
        title: 'Save Setup Time',
        description: 'Start from a ready-to-use structure instead of building every document from scratch.'
    },
    {
        title: 'Consistent Client Experience',
        description: 'Keep your delivery process standardized across every client and every week.'
    },
    {
        title: 'Cleaner Coaching Workflow',
        description: 'Reduce admin overhead and spend more time on coaching and communication.'
    }
];

const defaultHowTo = [
    {
        title: 'Duplicate the Template',
        description: 'Copy this resource into your own workspace so you can tailor it for your clients.'
    },
    {
        title: 'Customize for Your System',
        description: 'Adjust fields, sections, and labels to match your coaching style and workflow.'
    },
    {
        title: 'Deploy and Review',
        description: 'Share with clients and review usage each week to improve clarity and outcomes.'
    }
];

const defaultClosing = [
    'This template is now route-ready and prepared for your final content and image assets.',
    'When your final files are ready, replace the placeholder media and text to publish the complete resource page.'
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
    if (!item?.slug) {
        return defaultImage;
    }

    const imageName = freeContentImageNameOverrides[item.slug] || item.slug;
    const imagePath = `/images/free-content/${imageName}.png`;
    return item.image || imagePath;
}

export function getFreeContentDetailTitle(item) {
    return item.detailTitle || item.title;
}

export function getFreeContentDescription(item) {
    if (item.description?.length) {
        return item.description;
    }

    return [item.intro];
}

export function getFreeContentBenefits(item) {
    return item.benefits?.length ? item.benefits : defaultBenefits;
}

export function getFreeContentHowTo(item) {
    return item.howTo?.length ? item.howTo : defaultHowTo;
}

export function getFreeContentClosing(item) {
    return item.closing?.length ? item.closing : defaultClosing;
}
