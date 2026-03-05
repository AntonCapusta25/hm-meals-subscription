import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "introduction", title: "Introduction" },
    { id: "controller", title: "Responsable du traitement" },
    { id: "data-collected", title: "Données que nous collectons" },
    { id: "lawful-basis", title: "Base légale du traitement" },
    { id: "your-rights", title: "Vos droits en vertu du RGPD" },
    { id: "data-security", title: "Sécurité des données" },
    { id: "data-retention", title: "Conservation des données" },
    { id: "changes", title: "Modifications de la politique" },
    { id: "governing-law", title: "Loi applicable" },
];

export default function PrivacyFr() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">Légal</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    Politique de confidentialité
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    Dernière mise à jour : Mars 2026 &nbsp;·&nbsp; Conforme au RGPD
                </p>
            </div>

            <div className="max-w-[900px] w-[90%] mx-auto flex flex-col lg:flex-row gap-10 items-start">
                <aside className="lg:sticky lg:top-28 lg:w-56 flex-shrink-0 bg-white rounded-2xl border border-black/5 shadow-sm p-5 hidden lg:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">Sommaire</p>
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

                <article className="flex-1 bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-12 space-y-12">
                    <section id="introduction">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Introduction</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Bienvenue sur Homemade ! Votre confidentialité et la protection de vos données personnelles sont primordiales pour nous. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, protégeons et partageons vos données personnelles lorsque vous utilisez notre plateforme, <strong>homemademeals.net</strong>, et est conçue pour répondre à nos obligations en vertu du <strong>Règlement Général sur la Protection des Données (RGPD)</strong>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="controller">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Responsable du traitement</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            <strong>Homemade B.V.</strong> ("Homemade", "nous", "notre" ou "nos") est le responsable du traitement de vos données personnelles.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">Contact</p>
                            {[
                                ["Entité légale", "Homemade B.V."],
                                ["Email", "info@homemademeal.net"],
                                ["Adresse", "Witbreuksweg 383, Enschede, Pays-Bas"],
                                ["Téléphone", "+31 06 4009 0902"],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Les données que nous collectons</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            Nous pouvons collecter, utiliser, stocker et transférer différents types de données personnelles vous concernant :
                        </p>
                        <div className="space-y-3">
                            {[
                                ["Données d'identité", "Comprend le prénom, le nom, le nom d'utilisateur ou un identifiant similaire."],
                                ["Données de contact", "Comprend l'adresse de facturation, l'adresse de livraison, l'adresse e-mail et les numéros de téléphone."],
                                ["Données financières", "Comprend le compte bancaire et les détails de la carte de paiement."],
                                ["Données de transaction", "Comprend des détails sur les paiements de et vers vous, et d'autres détails concernant les services que vous nous avez achetés."],
                                ["Données techniques", "Comprend l'adresse IP, les données de connexion, le type de navigateur, le système d'exploitation et la plateforme."],
                                ["Données de profil", "Comprend votre nom d'utilisateur, le mot de passe, vos préférences, et vos réponses aux sondages."],
                                ["Données d'utilisation", "Comprend des informations sur la manière dont vous utilisez notre site et nos services."],
                                ["Données de marketing", "Comprend vos préférences en matière de réception de marketing de notre part."],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Base légale du traitement</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">Nous traitons vos données personnelles sur les bases suivantes :</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["Consentement", "Vous nous avez donné un consentement clair pour traiter vos données personnelles."],
                                ["Contrat", "Le traitement est nécessaire à l'exécution d'un contrat avec vous."],
                                ["Obligation légale", "Le traitement est nécessaire au respect d'une obligation légale."],
                                ["Intérêts légitimes", "Le traitement est nécessaire aux fins des intérêts légitimes poursuivis par nous, sauf si vos droits prévalent."],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Vos droits en vertu du RGPD</h2>
                        <p className="text-dark/70 leading-relaxed mb-4">
                            Vous disposez de droits en vertu des lois sur la protection des données concernant vos données personnelles :
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Accès", "Correction", "Effacement", "Restriction", "Objection", "Portabilité"].map((right) => (
                                <span key={right} className="px-3 py-1.5 bg-orange/10 text-orange text-sm font-medium rounded-full">
                                    {right}
                                </span>
                            ))}
                        </div>
                        <p className="text-dark/70 leading-relaxed">
                            Si vous souhaitez exercer l'un de ces droits, veuillez nous contacter à{" "}
                            <a href="mailto:info@homemademeal.net" className="text-orange hover:underline">
                                info@homemademeal.net
                            </a>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-security">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Sécurité des données</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Nous avons mis en place des mesures conçues pour protéger vos données personnelles contre la perte accidentelle, l'accès ou l'utilisation non autorisés, la modification ou la divulgation.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-retention">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Conservation des données</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Nous ne conserverons vos données personnelles que le temps nécessaire aux fins pour lesquelles nous les avons collectées, y compris pour satisfaire à toute obligation légale ou comptable.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="changes">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Modifications de la politique</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Nous pouvons mettre à jour cette politique de temps en temps et nous vous informerons des changements en publiant la nouvelle politique sur cette page.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Loi applicable</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Cette politique de confidentialité est régie et interprétée conformément aux lois des <strong>Pays-Bas</strong>.
                        </p>
                    </section>

                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center">
                        <p className="text-cream/80 text-sm mb-2">Des questions sur cette politique ?</p>
                        <a
                            href="mailto:info@homemademeal.net"
                            className="inline-block mt-2 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-colors text-sm"
                        >
                            Nous contacter
                        </a>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
