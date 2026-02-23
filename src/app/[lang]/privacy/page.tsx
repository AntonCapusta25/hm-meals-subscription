import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    return {
        title: lang === 'nl' ? "Privacybeleid | Homemade Catering" : "Privacy Policy | Homemade Catering",
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function PrivacyPolicyPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-12">
            <Navbar />

            <section className="max-w-[800px] w-[90%] mx-auto mt-12 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-black/5">
                <h1 className="font-serif text-3xl md:text-4xl text-dark mb-8">
                    {lang === 'nl' ? "Privacybeleid" : "Privacy Policy"}
                </h1>

                <div className="prose prose-lg text-dark/70 max-w-none space-y-6">
                    {lang === 'nl' ? (
                        <>
                            <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
                            <h2>1. Inleiding</h2>
                            <p>Homemade Catering neemt jouw privacy zeer serieus. In dit Privacybeleid leggen we uit welke persoonsgegevens wij verzamelen, waarom we deze verzamelen en hoe we hiermee omgaan.</p>
                            <h2>2. Gegevens die wij verzamelen</h2>
                            <p>Wanneer je een boeking maakt of contact met ons opneemt, kunnen wij de volgende gegevens verzamelen:</p>
                            <ul>
                                <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
                                <li>Adresgegevens voor locatie-gebaseerde diensten</li>
                                <li>Informatie gerelateerd aan de boeking (bijv. dieetwensen, allergieën)</li>
                            </ul>
                            <h2>3. Hoe we je gegevens gebruiken</h2>
                            <p>We gebruiken de verzamelde gegevens uitsluitend om onze diensten uit te voeren, betalingen af te handelen en - indien je toestemming hebt gegeven - je te informeren over nieuwe aanbiedingen.</p>
                            <h2>4. Gegevens delen met derden</h2>
                            <p>Jouw gegevens worden alleen gedeeld met de specifiek aan jou toegewezen chef om de dienstverlening mogelijk te maken. We verkopen jouw gegevens nooit aan derde partijen.</p>
                            <h2>5. Contact</h2>
                            <p>Heb je vragen over ons Privacybeleid? Neem contact op via info@homemademeals.net.</p>
                        </>
                    ) : (
                        <>
                            <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
                            <h2>1. Introduction</h2>
                            <p>Homemade Catering takes your privacy very seriously. In this Privacy Policy, we explain what personal data we collect, why we collect it, and how we handle it.</p>
                            <h2>2. Data we collect</h2>
                            <p>When you make a booking or contact us, we may collect the following data:</p>
                            <ul>
                                <li>Name and contact details (email address, phone number)</li>
                                <li>Address details for location-based services</li>
                                <li>Information related to the booking (e.g., dietary requirements, allergies)</li>
                            </ul>
                            <h2>3. How we use your data</h2>
                            <p>We use the collected data exclusively to perform our services, process payments and - if you have given permission - to inform you about new offers.</p>
                            <h2>4. Sharing data with third parties</h2>
                            <p>Your data is only shared with the specific chef assigned to you to make the service possible. We never sell your data to third parties.</p>
                            <h2>5. Contact</h2>
                            <p>Do you have questions about our Privacy Policy? Contact us via info@homemademeals.net.</p>
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
