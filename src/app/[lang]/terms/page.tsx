import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
    return {
        title: "Terms of Service | Homemade",
        description: "General Terms and Conditions for Customers of Homemade B.V. — governing the use of homemademeals.net and related services.",
        robots: { index: true, follow: true },
    };
}

const sections = [
    { id: "definitions", title: "Definitions" },
    { id: "identity", title: "Identity of Homemade B.V." },
    { id: "applicability", title: "Applicability" },
    { id: "the-offer", title: "The Offer" },
    { id: "the-agreement", title: "The Agreement" },
    { id: "dissolution", title: "Dissolution & Cancellation" },
    { id: "payment", title: "Payment" },
    { id: "delivery", title: "Delivery & Collection" },
    { id: "complaints", title: "Complaints" },
    { id: "ip", title: "Intellectual Property" },
    { id: "amendments", title: "Amendments" },
    { id: "governing-law", title: "Governing Law" },
    { id: "severability", title: "Severability" },
    { id: "contact", title: "Contact" },
];

const definitions = [
    ["Offer", "The variety of products and services provided by the Chef, which can be ordered by the Customer through the Platform."],
    ["Order", "A request submitted by the Customer for the Chef's Offer through the Platform."],
    ["Agreement", "A contract between the Customer and the Chef concerning an Order and its delivery or collection."],
    ["Platform", "The websites, mobile apps, tools, and other equipment belonging to Homemade B.V and its affiliated companies and business partners, which enable the Service."],
    ["Chef", "An individual who prepares and sells meals, beverages, and related products, and utilizes the Platform for the establishment and payment of Agreements."],
    ["Service", "The commercial services and/or activities offered to the Customer by Homemade B.V, including the publication of the Offer, facilitation of Agreement conclusion, and transmission of Orders to the relevant Chef."],
];

export default async function TermsPage() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">Legal</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    Terms of Service
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    General Terms and Conditions for Customers &nbsp;·&nbsp; Homemade B.V.
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

                    {/* Definitions */}
                    <section id="definitions">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-6">Definitions</h2>
                        <div className="space-y-3">
                            {definitions.map(([term, desc]) => (
                                <div key={term} className="flex gap-4 p-4 bg-cream rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-orange mt-2 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-dark text-sm">{term}: </span>
                                        <span className="text-dark/70 text-sm">{desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Identity */}
                    <section id="identity">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Identity of Homemade B.V.</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            Homemade B.V operates under the name <strong>'Homemade B.V'</strong>.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["Address", "The Netherlands"],
                                ["KVK Number", "89875664"],
                                ["BTW-Nummer", "NL865139507B01"],
                                ["Email", "info@homemademeal.net"],
                                ["Telephone", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-36 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Applicability */}
                    <section id="applicability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Applicability</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>These General Terms and Conditions for Customers apply exclusively to the Service. Homemade B.V is not responsible for the Offer. If applicable, the Chef's general terms and conditions may also apply to the Offer.</p>
                            <p>By placing an Order, the Customer enters into an Agreement with the Chef for the delivery of the selected Offer. The Customer is bound by the Order and not entitled to a refund, except in cases of cancellation permitted by the Chef under the Dissolution article.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* The Offer */}
                    <section id="the-offer">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">The Offer</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Homemade B.V publishes the Offer on the Platform on behalf of the Chef, based on information provided by the Chef. Homemade B.V accepts no responsibility or liability for the content of the Offer and Chef information on the Platform.</p>
                            <p>The Chef may use ingredients and additives in meals and drinks that could cause allergies or intolerances. Customers with allergies are advised to contact the Chef by phone for current allergen information before placing an Order.</p>
                            <p>Homemade B.V presents Chef information in a manner that clearly communicates the Customer's rights and obligations upon accepting the Offer. Homemade B.V assumes no liability for Platform availability.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* The Agreement */}
                    <section id="the-agreement">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">The Agreement</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>The Agreement becomes effective when the Customer finalizes the Order by clicking the <strong>'Buy now'</strong> button during the ordering process on the Platform.</p>
                            <p>Upon receiving the Order, Homemade B.V will electronically confirm the Order to the Customer. The Chef can only fulfill the Agreement if the Customer provides accurate and complete contact and address information when placing the Order.</p>
                            <p>After placing the Order, the Customer must be available by phone or email for both the Chef and Homemade B.V regarding information about the Order's status.</p>
                            <p>If the Customer opts for delivery, they must be present at the specified delivery address to receive the Order. Delivery fees may apply and are displayed on the Platform before placing an Order.</p>
                            <p>The Chef may require identification upon Order delivery if it contains alcoholic products or other age-restricted items. If the Customer cannot provide adequate identification, the Chef will refuse to deliver the relevant products and cancellation fees may apply.</p>
                            <p>Homemade B.V accepts no liability in relation to Agreement execution.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Dissolution */}
                    <section id="dissolution">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Dissolution of the Agreement & Cancellation</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Due to the perishable nature of the Offer, the Customer has no right to dissolve the Agreement. Orders cannot be canceled by the Customer through Homemade B.V. Order cancellation with the Chef is only possible if the Chef explicitly indicates that the Customer may cancel the Order.</p>
                            <p>The Chef reserves the right to cancel an Order if the Offer is no longer available, if the Customer has provided incorrect contact information, or in cases of force majeure.</p>
                            <p>If the Customer places a fraudulent Order or otherwise breaches their obligations under the Agreement, Homemade B.V may refuse any future Orders from that Customer. Homemade B.V may also report the incident to the police.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Payment */}
                    <section id="payment">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Payment</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Upon Agreement conclusion, the Customer is obligated to pay the Chef for the Order. Payment may be made online through the Platform or at the door / collection location.</p>
                            <p>A (partial) refund of an online payment is only possible if the Order cannot be entirely fulfilled. Refunds will always be processed to the same account used for payment. Processing may take up to <strong>10 working days</strong> depending on the payment method.</p>
                            <p>The Chef has authorized Homemade B.V to accept the Customer's online payment on their behalf.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Delivery */}
                    <section id="delivery">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Delivery and Collection</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>The Chef is responsible for preparing the Order in accordance with the agreed-upon timeframe and ensuring its readiness for collection or delivery. Homemade B.V may assist in coordinating delivery but assumes no liability for delivery delays or failures.</p>
                            <p>For delivery: the Customer is responsible for providing accurate delivery information and ensuring someone is available to receive the Order. If unavailable, the Chef or courier may leave the Order at the designated location, or additional charges may apply for re-delivery.</p>
                            <p>For collection: the Customer is responsible for arriving at the Chef's collection location at the agreed-upon time. If the Customer fails to collect within a reasonable time, the Chef may dispose of the Order and no refund will be issued.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Complaints */}
                    <section id="complaints">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Complaints and Dispute Resolution</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>In case of complaints about the Offer or Service, the Customer should first contact the Chef or Homemade B.V respectively. Both parties will attempt to resolve the complaint in good faith.</p>
                            <p>If the complaint cannot be resolved, the Customer may seek mediation or other alternative dispute resolution methods, subject to applicable laws and regulations.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* IP */}
                    <section id="ip">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Intellectual Property Rights</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>All intellectual property rights — including trademarks, copyrights, and patents — related to the Platform, Service, and Offer are owned by Homemade B.V, its affiliates, or the Chef, as applicable.</p>
                            <p>Customers are granted a limited, non-exclusive, non-transferable, and revocable license to access and use the Platform for personal, non-commercial purposes. Any unauthorized use, reproduction, or distribution is strictly prohibited.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Amendments */}
                    <section id="amendments">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Amendments to the Terms of Service</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            Homemade B.V reserves the right to amend these Terms at any time. Changes become effective upon publication on the Platform. Continued use of the Platform following the publication of revised Terms constitutes acceptance of the updated terms.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    {/* Governing Law */}
                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Governing Law and Jurisdiction</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            These Terms are governed by and construed in accordance with the laws of <strong>The Netherlands</strong>. Any disputes arising from or related to the Agreement, Offer, or Service shall be subject to the exclusive jurisdiction of the competent courts in The Netherlands.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    {/* Severability */}
                    <section id="severability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Severability &amp; No Waiver</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p><strong>Severability:</strong> If any provision of these Terms is found to be invalid or unenforceable, such provision shall be severed and the remaining provisions shall continue in full force and effect.</p>
                            <p><strong>No Waiver:</strong> Failure by Homemade B.V to enforce any provision shall not be considered a waiver of its rights to enforce such provision or any other provision in the future.</p>
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    {/* Contact */}
                    <section id="contact">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Contact Information</h2>
                        <p className="text-dark/70 leading-relaxed text-sm mb-6">
                            For any questions, comments, or concerns regarding these Terms, the Platform, or the Service, please contact Homemade B.V:
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["Email", "info@homemademeal.net"],
                                ["Telephone", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-24 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center">
                        <p className="text-cream/80 text-sm mb-2">Questions about these terms?</p>
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
