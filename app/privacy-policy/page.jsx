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
                        BULK is a personal trainer management system built to help trainers and clients communicate,
                        manage programs, and track progress. This Privacy Policy explains what information we collect,
                        how we use it, how long we keep it, and how you can request deletion of your data.
                    </p>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">1. Information We Collect</h2>
                        <p>a. Account and profile information:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>First name and last name</li>
                            <li>Email address</li>
                            <li>Password credential for account access, handled by our authentication provider</li>
                            <li>Profile picture, if you upload one</li>
                            <li>Timezone and push notification token, if your device provides them</li>
                        </ul>
                        <p className="mt-4">b. Trainer and client activity data:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Messages between trainers and clients</li>
                            <li>Scheduling, session, and request history</li>
                            <li>Assigned workouts, habits, questionnaires, nutrition items, and progress history</li>
                            <li>Profile details, goals, notes, and uploaded content you choose to provide</li>
                        </ul>
                        <p className="mt-4">c. Payments and communications:</p>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>Payment and subscription information needed to process paid services</li>
                            <li>Email and transactional communication data needed to send account or service messages</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">2. How We Use Your Information</h2>
                        <ul className="mt-2 list-disc space-y-1 pl-6">
                            <li>To create and manage trainer and client accounts.</li>
                            <li>To let trainers and clients communicate and share assigned content.</li>
                            <li>To operate workouts, nutrition, habits, questionnaires, scheduling, and progress tracking.</li>
                            <li>To process subscriptions, payments, and related receipts where applicable.</li>
                            <li>To send account, login, support, and notification messages.</li>
                            <li>To maintain security, prevent abuse, and improve the app.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">3. Information Sharing</h2>
                        <p>
                            a. We do not sell your personal information.
                        </p>
                        <p className="mt-2">
                            b. Information is shared between trainers and clients only as needed for their use of the
                            BULK app.
                        </p>
                        <p className="mt-2">
                            c. We may share data with service providers that help us operate BULK, such as hosting,
                            authentication, notifications, email delivery, and payment processors. Those providers may
                            process data only to provide services to BULK.
                        </p>
                        <p className="mt-2">
                            d. We may also retain or disclose information where required by law, regulation, legal
                            process, or to protect the safety, rights, or security of BULK and its users.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">4. Data Retention</h2>
                        <p>
                            a. We keep account, profile, messaging, scheduling, assignment, progress, and payment-related
                            data for as long as your BULK account remains active and as long as it is needed to provide
                            the app&apos;s services to you.
                        </p>
                        <p className="mt-2">
                            b. If you stop using BULK but do not delete your account, we may continue to retain your data
                            until you delete the account or request deletion, so that you can return to the service and
                            continue using your account.
                        </p>
                        <p className="mt-2">
                            c. After an account deletion request, we delete or de-identify data from BULK&apos;s active
                            systems unless we need to keep limited information for legal, security, fraud prevention,
                            tax, accounting, dispute resolution, or compliance purposes, or where a payment provider is
                            required to retain transaction records under its own legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">5. Data Deletion</h2>
                        <p>
                            a. You can request deletion of your BULK account directly inside the mobile app through the
                            account settings delete flow.
                        </p>
                        <p className="mt-2">
                            b. If you cannot access the app, you can request deletion by emailing{' '}
                            <a href="mailto:anthony@bulkapp.io" className="font-medium text-neutral-900">
                                anthony@bulkapp.io
                            </a>
                            .
                        </p>
                        <p className="mt-2">
                            c. When an account deletion request is completed, BULK deletes the account authentication
                            record, profile image, and associated trainer or client records in our primary database,
                            including related messaging, scheduling, assignments, and other dependent records linked to
                            that account in BULK&apos;s systems.
                        </p>
                        <p className="mt-2">
                            d. We may retain limited records after deletion where necessary for legal compliance,
                            security, fraud prevention, payment recordkeeping, or internal records relating to the
                            deletion request itself.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">6. Data Security</h2>
                        <p>
                            a. We use reasonable technical and organizational safeguards designed to protect your data
                            against unauthorized access, disclosure, alteration, and destruction.
                        </p>
                        <p className="mt-2">
                            b. Communications between the app and our supporting services are encrypted in transit.
                        </p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">7. Consent</h2>
                        <p>a. By using BULK, you consent to the practices described in this Privacy Policy.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">8. Changes to This Policy</h2>
                        <p>a. We may update this Privacy Policy from time to time. Changes may be communicated in the app or by email.</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-3xl text-neutral-900">9. Contact Information</h2>
                        <p>
                            a. For questions, privacy requests, or deletion requests, contact{' '}
                            <a href="mailto:anthony@bulkapp.io" className="font-medium text-neutral-900">
                                anthony@bulkapp.io
                            </a>
                            .
                        </p>
                    </section>
                </div>
            </section>
        </div>
    );
}
