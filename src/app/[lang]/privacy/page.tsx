import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    return {
        title: "Privacy Policy | Homemade",
        description: "Homemade B.V. GDPR-compliant Privacy Policy. Learn how we collect, use, and protect your personal data.",
        robots: { index: true, follow: true },
    };
}

const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "controller", title: "Controller" },
    { id: "data-collected", title: "Data We Collect" },
    { id: "lawful-basis", title: "Lawful Basis for Processing" },
    { id: "your-rights", title: "Your Rights Under GDPR" },
    { id: "data-security", title: "Data Security" },
    { id: "data-retention", title: "Data Retention" },
    { id: "changes", title: "Changes to the Policy" },
    { id: "governing-law", title: "Governing Law" },
];

export default async function PrivacyPolicyPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    await params;

    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">Legal</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    Privacy Policy
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    Last updated: March 2026 &nbsp;·&nbsp; GDPR Compliant
                </p>
            </div>

            <div className="max-w-[900px] w-[90%] mx-auto flex flex-col lg:flex-row gap-10 items-start">

                {/* Sticky Table of Contents */}
                <aside className="lg:sticky lg:top-28 lg:w-56 flex-shrink-0 bg-white rounded-2xl border border-black/5 shadow-sm p-5 hidden lg:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">Contents</p>
                    <nav className="space-y-1">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="block text-sm text-dark/60 hover:text-orange transition-colors py-1 px-2 rounded-lg hover:bg-orange/5"
                            >
                                {s.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <article className="flex-1 bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-12 space-y-12">

                    <section id="introduction">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Introduction</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Welcome to Homemade! Your privacy and the protection of your personal data are paramount to us. This Privacy Policy informs you about how we collect, use, protect, and share your personal data when you use our platform, <strong>homemademeals.net</strong>, and is designed to meet our obligations under the <strong>General Data Protection Regulation (GDPR)</strong>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="controller">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Controller</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            <strong>Homemade B.V.</strong> ("Homemade", "we", "us", or "our") is the controller responsible for your personal data.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">Contact Details</p>
                            {[
                                ["Legal entity", "Homemade B.V."],
                                ["Email", "info@homemademeal.net"],
                                ["Address", "Witbreuksweg 383, Enschede, The Netherlands"],
                                ["Telephone", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-32 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-collected">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">The Data We Collect About You</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            We may collect, use, store, and transfer various kinds of personal data about you, grouped as follows:
                        </p>
                        <div className="space-y-3">
                            {[
                                ["Identity Data", "Includes first name, last name, username, or similar identifier."],
                                ["Contact Data", "Includes billing address, delivery address, email address, and telephone numbers."],
                                ["Financial Data", "Includes bank account and payment card details."],
                                ["Transaction Data", "Includes details about payments to and from you and other details of products and services you have purchased from us."],
                                ["Technical Data", "Includes IP address, login data, browser type and version, time zone setting and location, browser plug-in types, operating system and platform, and other technology on your devices."],
                                ["Profile Data", "Includes your username and password, purchases or orders made by you, your interests, preferences, feedback, and survey responses."],
                                ["Usage Data", "Includes information about how you use our website, products, and services."],
                                ["Marketing & Communications Data", "Includes your preferences in receiving marketing from us and our communication preferences."],
                            ].map(([type, desc]) => (
                                <div key={type} className="flex gap-4 p-4 bg-cream rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-orange mt-2 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-dark text-sm">{type}: </span>
                                        <span className="text-dark/70 text-sm">{desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    <section id="lawful-basis">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Lawful Basis for Processing</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">We process your personal data on the following bases:</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["Consent", "You have given clear consent for us to process your personal data for a specific purpose."],
                                ["Contract", "Processing is necessary for the performance of a contract with you or to take steps at your request before entering into such a contract."],
                                ["Legal Obligation", "Processing is necessary for compliance with a legal obligation to which we are subject."],
                                ["Legitimate Interests", "Processing is necessary for the purposes of the legitimate interests pursued by us or a third party, except where overridden by your interests or fundamental rights."],
                            ].map(([basis, desc]) => (
                                <div key={basis} className="bg-cream rounded-2xl p-5">
                                    <h3 className="font-semibold text-dark mb-2 text-sm">{basis}</h3>
                                    <p className="text-dark/60 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    <section id="your-rights">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Your Rights Under GDPR</h2>
                        <p className="text-dark/70 leading-relaxed mb-4">
                            You have rights under data protection laws in relation to your personal data, including:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Access", "Correct", "Erase", "Restrict processing", "Object to processing", "Data portability"].map((right) => (
                                <span key={right} className="px-3 py-1.5 bg-orange/10 text-orange text-sm font-medium rounded-full">
                                    {right}
                                </span>
                            ))}
                        </div>
                        <p className="text-dark/70 leading-relaxed">
                            If you wish to exercise any of these rights, please contact us at{" "}
                            <a href="mailto:info@homemademeal.net" className="text-orange hover:underline">
                                info@homemademeal.net
                            </a>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-security">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Data Security</h2>
                        <p className="text-dark/70 leading-relaxed">
                            We have implemented measures designed to secure your personal data from accidental loss and from unauthorized access, use, alteration, and disclosure.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-retention">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Data Retention</h2>
                        <p className="text-dark/70 leading-relaxed">
                            We will retain your personal data only for as long as necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, accounting, or reporting requirements.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="changes">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Changes to the Policy</h2>
                        <p className="text-dark/70 leading-relaxed">
                            We may update this policy from time to time and will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Governing Law and Jurisdiction</h2>
                        <p className="text-dark/70 leading-relaxed">
                            This Privacy Policy is governed by and construed in accordance with the laws of <strong>The Netherlands</strong>.
                        </p>
                    </section>

                    {/* Contact CTA */}
                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center">
                        <p className="text-cream/80 text-sm mb-2">Questions about this policy?</p>
                        <a
                            href="mailto:info@homemademeal.net"
                            className="inline-block mt-2 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-colors text-sm"
                        >
                            Contact Us
                        </a>
                    </div>

                </article>
            </div>

            <Footer />
        </main>
    );
}
