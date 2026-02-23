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
        title: lang === 'nl' ? "Algemene Voorwaarden | Homemade Catering" : "Terms of Service | Homemade Catering",
        robots: {
            index: false,
            follow: true,
        },
    };
}

export default async function TermsPage({
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
                    {lang === 'nl' ? "Algemene Voorwaarden" : "Terms of Service"}
                </h1>

                <div className="prose prose-lg text-dark/70 max-w-none space-y-6">
                    {lang === 'nl' ? (
                        <>
                            <p>Laatst bijgewerkt: {new Date().toLocaleDateString('nl-NL')}</p>
                            <h2>1. Inleiding</h2>
                            <p>Deze algemene voorwaarden zijn van toepassing op alle diensten en overeenkomsten tussen Homemade Catering en de klant. Door een reservering te maken, gaat u akkoord met deze voorwaarden.</p>
                            <h2>2. Reserveringen & Betalingen</h2>
                            <p>Een boeking is definitief zodra deze schriftelijk (of via e-mail) door ons is bevestigd. Afhankelijk van de grootte van de groep kan een aanbetaling vereist zijn.</p>
                            <h2>3. Annuleringsvoorwaarden</h2>
                            <p>Annuleringen dienen uiterlijk 7 dagen voor het evenement te worden doorgegeven. Bij annulering binnen 7 dagen kunnen er kosten in rekening worden gebracht voor gemaakte voorbereidingen en ingekochte ingrediënten.</p>
                            <h2>4. Aansprakelijkheid</h2>
                            <p>Homemade Catering is niet aansprakelijk voor schade ontstaan tijdens het evenement, tenzij er sprake is van opzet of grove schuld aan de zijde van de chef. U bent zelf verantwoordelijk voor het doorgeven van juiste allergie-informatie.</p>
                            <h2>5. Contact</h2>
                            <p>Voor vragen over deze voorwaarden kunt u contact met ons opnemen via info@homemademeals.net.</p>
                        </>
                    ) : (
                        <>
                            <p>Last updated: {new Date().toLocaleDateString('en-US')}</p>
                            <h2>1. Introduction</h2>
                            <p>These terms and conditions apply to all services and agreements between Homemade Catering and the client. By making a reservation, you agree to these terms.</p>
                            <h2>2. Reservations & Payments</h2>
                            <p>A booking is final once it has been confirmed by us in writing (or via email). Depending on the size of the group, a deposit may be required.</p>
                            <h2>3. Cancellation Policy</h2>
                            <p>Cancellations must be communicated no later than 7 days before the event. In case of cancellation within 7 days, costs may be charged for preparations made and ingredients purchased.</p>
                            <h2>4. Liability</h2>
                            <p>Homemade Catering is not liable for damage caused during the event, unless there is intent or gross negligence on the part of the chef. You are responsible for providing correct allergy information.</p>
                            <h2>5. Contact</h2>
                            <p>If you have any questions about these terms, please contact us at info@homemademeals.net.</p>
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
