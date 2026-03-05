import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "definitions", title: "Definities" },
    { id: "identity", title: "Identiteit van Homemade B.V." },
    { id: "applicability", title: "Toepasselijkheid" },
    { id: "the-offer", title: "Het Aanbod" },
    { id: "the-agreement", title: "De Overeenkomst" },
    { id: "dissolution", title: "Ontbinding & Annulering" },
    { id: "payment", title: "Betaling" },
    { id: "delivery", title: "Levering & Afhalen" },
    { id: "complaints", title: "Klachten" },
    { id: "ip", title: "Intellectueel Eigendom" },
    { id: "amendments", title: "Wijzigingen" },
    { id: "governing-law", title: "Toepasselijk Recht" },
    { id: "severability", title: "Scheidbaarheid" },
    { id: "contact", title: "Contact" },
];

const definitions = [
    ["Aanbod", "De verscheidenheid aan producten en diensten aangeboden door de Chef, die door de Klant via het Platform besteld kunnen worden."],
    ["Bestelling", "Een verzoek ingediend door de Klant voor het Aanbod van de Chef via het Platform."],
    ["Overeenkomst", "Een contract tussen de Klant en de Chef betreffende een Bestelling en de levering of afhaling daarvan."],
    ["Platform", "De websites, mobiele apps, tools en andere apparatuur behorende tot Homemade B.V. en haar gelieerde bedrijven en zakenpartners, die de Dienst mogelijk maken."],
    ["Chef", "Een individu dat maaltijden, dranken en gerelateerde producten bereidt en verkoopt, en het Platform gebruikt voor het sluiten en betalen van Overeenkomsten."],
    ["Dienst", "De commerciële diensten en/of activiteiten aangeboden aan de Klant door Homemade B.V., waaronder de publicatie van het Aanbod, de facilitering van het sluiten van de Overeenkomst, en de overdracht van Bestellingen aan de relevante Chef."],
];

export default function TermsNl() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">Juridisch</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    Algemene Voorwaarden
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    Algemene Voorwaarden voor Klanten &nbsp;·&nbsp; Homemade B.V.
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
                    {/* Definitions */}
                    <section id="definitions">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-6">Definities</h2>
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Identiteit van Homemade B.V.</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            Homemade B.V. opereert onder de naam <strong>'Homemade B.V.'</strong>.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["Adres", "Nederland"],
                                ["KVK-nummer", "89875664"],
                                ["BTW-Nummer", "NL865139507B01"],
                                ["E-mail", "info@homemademeal.net"],
                                ["Telefoon", "+31 06 4009 0902"],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Toepasselijkheid</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Deze Algemene Voorwaarden voor Klanten zijn uitsluitend van toepassing op de Dienst. Homemade B.V. is niet verantwoordelijk voor het Aanbod. Indien van toepassing kunnen de algemene voorwaarden van de Chef ook op het Aanbod van toepassing zijn.</p>
                            <p>Door het plaatsen van een Bestelling gaat de Klant een Overeenkomst aan met de Chef voor de levering van het geselecteerde Aanbod. De Klant is gebonden aan de Bestelling en heeft geen recht op restitutie, behalve in geval van annulering die door de Chef is toegestaan onder het artikel Ontbinding.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* The Offer */}
                    <section id="the-offer">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Het Aanbod</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Homemade B.V. publiceert het Aanbod op het Platform namens de Chef, gebaseerd op informatie verstrekt door de Chef. Homemade B.V. aanvaardt geen verantwoordelijkheid of aansprakelijkheid voor de inhoud van het Aanbod en de informatie van de Chef op het Platform.</p>
                            <p>De Chef kan ingrediënten en toevoegingen in maaltijden en dranken gebruiken die allergieën of intoleranties kunnen veroorzaken. Klanten met allergieën wordt geadviseerd om voor het plaatsen van een Bestelling telefonisch contact op te nemen met de Chef voor actuele allergeneninformatie.</p>
                            <p>Homemade B.V. presenteert klantinformatie op een manier die duidelijk de rechten en verplichtingen van de Klant communiceert bij aanvaarding van het Aanbod. Homemade B.V. aanvaardt geen aansprakelijkheid voor de beschikbaarheid van het Platform.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* The Agreement */}
                    <section id="the-agreement">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">De Overeenkomst</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>De Overeenkomst komt tot stand wanneer de Klant de Bestelling voltooit door op de knop <strong>'Nu kopen'</strong> te klikken tijdens het bestelproces op het Platform.</p>
                            <p>Na ontvangst van de Bestelling zal Homemade B.V. de Bestelling elektronisch bevestigen aan de Klant. De Chef kan de Overeenkomst alleen nakomen als de Klant bij het plaatsen van de Bestelling nauwkeurige en volledige contact- en adresgegevens verstrekt.</p>
                            <p>Na het plaatsen van de Bestelling dient de Klant zowel voor de Chef als voor Homemade B.V. telefonisch of per e-mail bereikbaar te zijn voor informatie over de status van de Bestelling.</p>
                            <p>Als de Klant kiest voor bezorging, dient hij aanwezig te zijn op het opgegeven afleveradres om de Bestelling in ontvangst te nemen. Er kunnen bezorgkosten van toepassing zijn, deze worden op het Platform getoond voordat de Bestelling wordt geplaatst.</p>
                            <p>De Chef kan bij aflevering van de Bestelling om legitimatie vragen als deze alcoholhoudende producten of andere leeftijdsgebonden artikelen bevat. Indien de Klant zich niet adequaat kan legitimeren, zal de Chef weigeren de betreffende producten te leveren en kunnen annuleringskosten in rekening worden gebracht.</p>
                            <p>Homemade B.V. aanvaardt geen aansprakelijkheid met betrekking tot de uitvoering van de Overeenkomst.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Dissolution */}
                    <section id="dissolution">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Ontbinding van de Overeenkomst & Annulering</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Vanwege de bederfelijke aard van het Aanbod heeft de Klant niet het recht om de Overeenkomst te ontbinden. Bestellingen kunnen door de Klant niet via Homemade B.V. worden geannuleerd. Annulering van de Bestelling bij de Chef is alleen mogelijk als de Chef expliciet aangeeft dat de Klant de Bestelling kan annuleren.</p>
                            <p>De Chef behoudt zich het recht voor om een Bestelling te annuleren als het Aanbod niet langer beschikbaar is, als de Klant onjuiste contactgegevens heeft verstrekt, of in geval van overmacht.</p>
                            <p>Indien de Klant een frauduleuze Bestelling plaatst of anderszins de verplichtingen uit de Overeenkomst schendt, kan Homemade B.V. toekomstige Bestellingen van die Klant weigeren. Homemade B.V. kan tevens aangifte doen bij de politie.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Payment */}
                    <section id="payment">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Betaling</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Bij het sluiten van de Overeenkomst is de Klant verplicht de Chef te betalen voor de Bestelling. Betaling kan online via het Platform plaatsvinden of aan de deur / op de afhaallocatie.</p>
                            <p>Een (gedeeltelijke) restitutie van een online betaling is alleen mogelijk indien de Bestelling niet volledig kan worden nagekomen. Restituties worden altijd teruggestort op dezelfde rekening die voor de betaling is gebruikt. De verwerking kan tot <strong>10 werkdagen</strong> duren, afhankelijk van de betaalmethode.</p>
                            <p>De Chef heeft Homemade B.V. gemachtigd om de online betaling van de Klant namens hem te accepteren.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Delivery */}
                    <section id="delivery">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Levering en Afhalen</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>De Chef is verantwoordelijk voor de voorbereiding van de Bestelling in overeenstemming met de afgesproken termijn en het zorgen dat deze klaar is voor afhaling of levering. Homemade B.V. kan helpen bij de coördinatie van de levering, maar aanvaardt geen aansprakelijkheid voor vertragingen of mislukkingen bij de levering.</p>
                            <p>Bij levering: de Klant is verantwoordelijk voor het verstrekken van nauwkeurige leveringsinformatie en het ervoor zorgen dat iemand aanwezig is om de Bestelling in ontvangst te nemen. Indien niemand aanwezig is, kan de Chef of koerier de Bestelling achterlaten op de aangewezen locatie, of er kunnen extra kosten in rekening worden gebracht voor een herlevering.</p>
                            <p>Voor afhalen: de Klant is verantwoordelijk om op de afgesproken tijd op de afhaallocatie van de Chef aan te komen. Als de Klant niet binnen een redelijke tijd afhaalt, kan de Chef de Bestelling weggooien en wordt er geen restitutie verleend.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Complaints */}
                    <section id="complaints">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Klachten en Geschillenbeslechting</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>In geval van klachten over het Aanbod of de Dienst dient de Klant zich respectievelijk eerst tot de Chef of Homemade B.V. te wenden. Beide partijen zullen proberen de klacht te goeder trouw op te lossen.</p>
                            <p>Indien de klacht niet opgelost kan worden, kan de Klant bemiddeling of andere alternatieve geschillenbeslechtingsmethoden zoeken, met inachtneming van de toepasselijke wet- en regelgeving.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* IP */}
                    <section id="ip">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Intellectuele Eigendomsrechten</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Alle intellectuele eigendomsrechten — inclusief handelsmerken, auteursrechten en patenten — gerelateerd aan het Platform, de Dienst en het Aanbod, zijn eigendom van Homemade B.V., haar gelieerde ondernemingen of de Chef, voor zover van toepassing.</p>
                            <p>Klanten krijgen een beperkte, niet-exclusieve, niet-overdraagbare en herroepelijke licentie om het Platform te betreden en gebruiken voor persoonlijke, niet-commerciële doeleinden. Elk ongeoorloofd gebruik, reproductie of distributie is ten strengste verboden.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Amendments */}
                    <section id="amendments">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Wijzigingen in de Algemene Voorwaarden</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            Homemade B.V. behoudt zich het recht voor deze Algemene Voorwaarden te allen tijde te wijzigen. Wijzigingen worden van kracht na publicatie op het Platform. Voortgezet gebruik van het Platform na publicatie van herziene Voorwaarden houdt acceptatie in van de bijgewerkte voorwaarden.
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    {/* Governing Law */}
                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Toepasselijk Recht en Jurisdictie</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            Deze Algemene Voorwaarden worden beheerst door en geïnterpreteerd naar de wetten van <strong>Nederland</strong>. Eventuele geschillen voortvloeiend uit of gerelateerd aan de Overeenkomst, het Aanbod of de Dienst zullen exclusief worden voorgelegd aan de bevoegde rechtbanken in Nederland.
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    {/* Severability */}
                    <section id="severability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Scheidbaarheid & Geen Afstand</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p><strong>Scheidbaarheid:</strong> Indien enige bepaling van deze Voorwaarden ongeldig of onafdwingbaar wordt bevonden, zal een dergelijke bepaling worden afgescheiden en zullen de resterende bepalingen volledig van kracht blijven.</p>
                            <p><strong>Geen Afstand:</strong> Het nalaten door Homemade B.V. om enige bepaling af te dwingen, mag niet worden beschouwd als afstand van haar rechten om een dergelijke bepaling of enige andere bepaling in de toekomst af te dwingen.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Contact */}
                    <section id="contact">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Contactgegevens</h2>
                        <p className="text-dark/70 leading-relaxed text-sm mb-6">
                            Voor eventuele vragen, opmerkingen of zorgen met betrekking tot deze Voorwaarden, het Platform of de Dienst, kunt u contact opnemen met Homemade B.V.:
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["E-mail", "info@homemademeal.net"],
                                ["Telefoon", "+31 06 4009 0902"],
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
                        <p className="text-cream/80 text-sm mb-2">Vragen over deze voorwaarden?</p>
                        <a
                            href="mailto:info@homemademeal.net"
                            className="inline-block mt-2 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-colors text-sm"
                        >
                            Neem Contact Op
                        </a>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
