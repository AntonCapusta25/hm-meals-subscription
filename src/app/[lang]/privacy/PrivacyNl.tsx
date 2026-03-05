import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "introduction", title: "Introductie" },
    { id: "controller", title: "Verwerkingsverantwoordelijke" },
    { id: "data-collected", title: "Gegevens die we verzamelen" },
    { id: "lawful-basis", title: "Rechtmatige basis voor verwerking" },
    { id: "your-rights", title: "Uw rechten onder de AVG" },
    { id: "data-security", title: "Gegevensbeveiliging" },
    { id: "data-retention", title: "Gegevensbewaring" },
    { id: "changes", title: "Wijzigingen in het beleid" },
    { id: "governing-law", title: "Toepasselijk recht" },
];

export default function PrivacyNl() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">Juridisch</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    Privacybeleid
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    Laatst bijgewerkt: Maart 2026 &nbsp;·&nbsp; Voldoet aan de AVG
                </p>
            </div>

            <div className="max-w-[900px] w-[90%] mx-auto flex flex-col lg:flex-row gap-10 items-start">
                {/* Sticky Table of Contents */}
                <aside className="lg:sticky lg:top-28 lg:w-56 flex-shrink-0 bg-white rounded-2xl border border-black/5 shadow-sm p-5 hidden lg:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">Inhoud</p>
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Introductie</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Welkom bij Homemade! Uw privacy en de bescherming van uw persoonsgegevens zijn voor ons van het grootste belang. Dit Privacybeleid informeert u over hoe wij uw persoonsgegevens verzamelen, gebruiken, beschermen en delen wanneer u ons platform, <strong>homemademeals.net</strong>, gebruikt en is ontworpen om aan onze verplichtingen onder de <strong>Algemene Verordening Gegevensbescherming (AVG)</strong> te voldoen.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="controller">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Verwerkingsverantwoordelijke</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            <strong>Homemade B.V.</strong> ("Homemade", "wij", "ons" of "onze") is de verwerkingsverantwoordelijke die verantwoordelijk is voor uw persoonsgegevens.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">Contactgegevens</p>
                            {[
                                ["Juridische entiteit", "Homemade B.V."],
                                ["E-mailadres", "info@homemademeal.net"],
                                ["Adres", "Witbreuksweg 383, Enschede, Nederland"],
                                ["Telefoon", "+31 06 4009 0902"],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">De gegevens die we over u verzamelen</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            We kunnen verschillende soorten persoonsgegevens over u verzamelen, gebruiken, opslaan en overdragen, gegroepeerd als volgt:
                        </p>
                        <div className="space-y-3">
                            {[
                                ["Identiteitsgegevens", "Omvat voornaam, achternaam, gebruikersnaam of vergelijkbare identificator."],
                                ["Contactgegevens", "Omvat factuuradres, afleveradres, e-mailadres en telefoonnummers."],
                                ["Financiële gegevens", "Omvat bankrekening- en betaalkaartgegevens."],
                                ["Transactiegegevens", "Omvat details over betalingen aan en van u en andere details van producten en diensten die u bij ons heeft gekocht."],
                                ["Technische gegevens", "Omvat IP-adres, inloggegevens, browsertype en -versie, tijdzone-instelling en locatie, browser plug-in types, besturingssysteem en platform, en andere technologie op uw apparaten."],
                                ["Profielgegevens", "Omvat uw gebruikersnaam en wachtwoord, aankopen of bestellingen door u gedaan, uw interesses, voorkeuren, feedback en enquêtereacties."],
                                ["Gebruiksgegevens", "Omvat informatie over hoe u onze website, producten en diensten gebruikt."],
                                ["Marketing- & Communicatiegegevens", "Omvat uw voorkeuren voor het ontvangen van marketing van ons en uw communicatievoorkeuren."],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Rechtmatige basis voor verwerking</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">We verwerken uw persoonsgegevens op de volgende gronden:</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["Toestemming", "U heeft duidelijke toestemming gegeven om uw persoonsgegevens voor een specifiek doel te verwerken."],
                                ["Overeenkomst", "Verwerking is noodzakelijk voor de uitvoering van een overeenkomst met u of om op uw verzoek stappen te ondernemen voordat een dergelijke overeenkomst wordt gesloten."],
                                ["Wettelijke verplichting", "Verwerking is noodzakelijk om te voldoen aan een wettelijke verplichting waaraan wij onderworpen zijn."],
                                ["Gerechtvaardigde belangen", "Verwerking is noodzakelijk voor de behartiging van de gerechtvaardigde belangen van ons of een derde, behalve wanneer uw belangen of fundamentele rechten zwaarder wegen."],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Uw rechten onder de AVG</h2>
                        <p className="text-dark/70 leading-relaxed mb-4">
                            U heeft rechten onder de wetgeving inzake gegevensbescherming met betrekking tot uw persoonsgegevens, waaronder:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["Toegang", "Corrigeren", "Wissen", "Beperking van verwerking", "Bezwaar maken", "Gegevensoverdraagbaarheid"].map((right) => (
                                <span key={right} className="px-3 py-1.5 bg-orange/10 text-orange text-sm font-medium rounded-full">
                                    {right}
                                </span>
                            ))}
                        </div>
                        <p className="text-dark/70 leading-relaxed">
                            Als u een van deze rechten wilt uitoefenen, neem dan contact met ons op via{" "}
                            <a href="mailto:info@homemademeal.net" className="text-orange hover:underline">
                                info@homemademeal.net
                            </a>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-security">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Gegevensbeveiliging</h2>
                        <p className="text-dark/70 leading-relaxed">
                            We hebben maatregelen geïmplementeerd die zijn ontworpen om uw persoonsgegevens te beveiligen tegen onbedoeld verlies en tegen ongeoorloofde toegang, gebruik, wijziging en openbaarmaking.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-retention">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Gegevensbewaring</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Wij bewaren uw persoonsgegevens slechts zo lang als nodig is om de doeleinden te vervullen waarvoor wij deze hebben verzameld, met inbegrip van het voldoen aan wettelijke, boekhoudkundige of rapportageverplichtingen.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="changes">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Wijzigingen in het beleid</h2>
                        <p className="text-dark/70 leading-relaxed">
                            We kunnen dit beleid van tijd tot tijd bijwerken en zullen u op de hoogte stellen van eventuele wijzigingen door het nieuwe privacybeleid op deze pagina te publicen.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Toepasselijk recht en jurisdictie</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Dit Privacybeleid wordt beheerst door en is opgesteld in overeenstemming met de wetten van <strong>Nederland</strong>.
                        </p>
                    </section>

                    {/* Contact CTA */}
                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center">
                        <p className="text-cream/80 text-sm mb-2">Vragen over dit beleid?</p>
                        <a
                            href="mailto:info@homemademeal.net"
                            className="inline-block mt-2 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-colors text-sm"
                        >
                            Neem contact op
                        </a>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
