export const metadata = {
    title: 'Privacy Policy'
};

export default function PrivacyPolicyPage() {
    return (
        <div className="-mx-6 sm:-mx-12">
            <section>
                <div className="mx-auto max-w-5xl px-6 pb-8 pt-10 text-center sm:px-12 sm:pb-10 sm:pt-14">
                    <h1 className="text-4xl text-neutral-900 sm:text-6xl">Privacy Policy</h1>
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-6 py-12 sm:px-0 sm:py-16">
                <div className="space-y-7 text-[1.02rem] leading-8 text-neutral-700">
                    <p>
                        Welcome to BULK, a personal trainer management system designed to enhance communication and
                        collaboration between personal trainers and their clients. This Privacy Policy is intended to
                        inform you about the types of information we collect, how we use it, and the measures we take
                        to safeguard your privacy when you use the BULK mobile application.
                    </p>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">1. Information We Collect</h2>
                        <p>a. Trainer Information:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Profile picture</li>
                            <li>Professional certifications and qualifications</li>
                            <li>Scheduling preferences</li>
                        </ul>
                        <p className="mt-4">b. Client Information:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Profile picture (if uploaded)</li>
                            <li>Health and fitness goals (if provided)</li>
                            <li>Chat and scheduling history with the trainer</li>
                        </ul>
                        <p className="mt-4">c. Content Assignment:</p>
                        <p className="mt-2">
                            Links to external content (Google Docs, Sheets, Slides, Keep, Notion, Zoom, etc.) assigned
                            by the trainer to the client.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">2. How We Use Your Information</h2>
                        <p>a. Trainer Information:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>To create and manage trainer profiles.</li>
                            <li>To facilitate communication with clients.</li>
                            <li>To customize the user experience for trainers.</li>
                        </ul>
                        <p className="mt-4">b. Client Information:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>To create and manage client profiles.</li>
                            <li>To enable communication with trainers.</li>
                            <li>To display assigned tasks, schedules, and content.</li>
                        </ul>
                        <p className="mt-4">c. Content Assignment:</p>
                        <p className="mt-2">To provide clients with easy access to assigned external content.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">3. Data Security</h2>
                        <p>
                            a. We employ industry-standard security measures to protect your data from unauthorized
                            access, disclosure, alteration, and destruction.
                        </p>
                        <p className="mt-2">
                            b. All communication between the app and our servers is encrypted to ensure the
                            confidentiality of your information.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">4. Information Sharing</h2>
                        <p>
                            a. Your personal information will not be sold, exchanged, transferred, or given to any
                            other company without your consent.
                        </p>
                        <p className="mt-2">
                            b. Trainers and clients within the BULK app can only view information relevant to their
                            interactions.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">5. Consent</h2>
                        <p>a. By using the BULK app, you consent to the terms outlined in this Privacy Policy.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">6. Changes to Privacy Policy</h2>
                        <p>a. Any changes to the Privacy Policy will be communicated through the app or via email.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">7. Contact Information</h2>
                        <p>
                            a. For questions or concerns regarding this Privacy Policy, please contact us at{' '}
                            <a href="mailto:anthony@bulkapp.com" className="font-medium text-neutral-900">
                                anthony@bulkapp.com
                            </a>
                            .
                        </p>
                    </section>

                    <p>
                        Thank you for choosing BULK. We are committed to ensuring the privacy and security of your
                        information.
                    </p>
                    <p>This Privacy Policy is subject to change. Please review it periodically.</p>
                </div>
            </section>
        </div>
    );
}
