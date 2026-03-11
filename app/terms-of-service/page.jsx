export const metadata = {
    title: 'Terms & Conditions'
};

export default function TermsOfServicePage() {
    return (
        <div className="-mx-6 sm:-mx-12">
            <section>
                <div className="mx-auto max-w-5xl px-6 pb-8 pt-10 text-center sm:px-12 sm:pb-10 sm:pt-14">
                    <h1 className="text-4xl text-neutral-900 sm:text-6xl">Terms of Service</h1>
                </div>
            </section>

            <section className="mx-auto max-w-3xl px-6 py-12 sm:px-0 sm:py-16">
                <div className="space-y-7 text-[1.02rem] leading-8 text-neutral-700">
                    <p>
                        Welcome to BULK, a personal trainer management system designed to enhance communication and
                        collaboration between personal trainers and their clients. By accessing or using the BULK mobile
                        application, you agree to comply with and be bound by the following Terms of Service. If you do
                        not agree to these terms, please do not use the App.
                    </p>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">1. Acceptance of Terms</h2>
                        <p>
                            a. By using the App, you agree to these Terms of Service and any additional terms and
                            conditions that may apply to specific features or services.
                        </p>
                        <p className="mt-2">b. You must be at least 16 years old to use the App.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">2. Account Registration</h2>
                        <p>a. Trainers and clients must create an account to use the App.</p>
                        <p className="mt-2">
                            b. You are responsible for maintaining the confidentiality of your account credentials.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">3. Use of the App</h2>
                        <p>a. The App is intended for personal and professional use by trainers and clients.</p>
                        <p className="mt-2">b. You agree not to use the App for any illegal or unauthorized purpose.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">4. Communication</h2>
                        <p>
                            a. Trainers and clients can communicate through the App&apos;s messaging and chat features.
                        </p>
                        <p className="mt-2">
                            b. Communication should be respectful, and users should not engage in any form of harassment
                            or abusive behavior.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">5. Content Assignment</h2>
                        <p>
                            a. Trainers can assign external content (links to Google Docs, Sheets, Slides, Keep, Notion,
                            Zoom, etc.) to clients.
                        </p>
                        <p className="mt-2">b. Clients are responsible for accessing and utilizing assigned content.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">6. Privacy</h2>
                        <p>a. The collection and use of personal information are governed by our Privacy Policy.</p>
                        <p className="mt-2">
                            b. Trainers and clients are expected to respect each other&apos;s privacy within the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">7. Intellectual Property</h2>
                        <p>
                            a. The App and its content are protected by intellectual property laws. Users may not
                            reproduce, distribute, or create derivative works without permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">8. Termination</h2>
                        <p>
                            a. BULK reserves the right to terminate or suspend your account at any time, with or without
                            cause.
                        </p>
                        <p className="mt-2">
                            b. You may terminate your account by following the instructions in the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">9. Changes to Terms of Service</h2>
                        <p>a. BULK may update or modify these Terms of Service at any time.</p>
                        <p className="mt-2">b. Users will be notified of changes through the App or via email.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">10. Limitation of Liability</h2>
                        <p>
                            a. BULK is not liable for any direct, indirect, incidental, special, or consequential
                            damages resulting from the use of the App.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">11. Governing Law</h2>
                        <p>
                            a. These Terms of Service are governed by and construed in accordance with the laws of
                            Australia.
                        </p>
                    </section>

                    <p>
                        Thank you for using BULK. We strive to provide a secure and effective platform for personal
                        trainers and clients. If you have any questions or concerns, please contact us at{' '}
                        <a href="mailto:anthony@bulkapp.io" className="font-medium text-neutral-900">
                            anthony@bulkapp.io
                        </a>
                        .
                    </p>

                    <p>These Terms of Service are subject to change. Please review them periodically.</p>
                </div>
            </section>
        </div>
    );
}
