import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuizForm from '@/components/QuizForm';

type Props = {
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;

    return {
        title: lang === 'nl'
            ? 'Start je Abonnement | Homemade'
            : 'Start Your Subscription | Homemade',
        description: lang === 'nl'
            ? 'Beantwoord een paar korte vragen en start je wekelijkse meal subscription.'
            : 'Answer a few quick questions and start your weekly meal subscription.',
        robots: {
            index: false, // Prevents SEO indexing of the pure form page (optional but common practice)
            follow: true,
        }
    };
}

export default async function QuotePage({ params }: Props) {
    const { lang } = await params;

    return (
        <main className="min-h-screen bg-white flex flex-col font-sans text-dark">
            <Navbar />

            <div className="flex-1 flex items-center justify-center pt-24 pb-10 md:pt-32 md:pb-20 px-5">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-6 md:mb-12">
                        <h1 className="text-3xl md:text-6xl font-heading font-bold mb-3 md:mb-4">
                            {lang === 'nl' ? 'Word Lid van de Wachtlijst' : 'Join the Waitlist'}
                        </h1>
                        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
                            {lang === 'nl'
                                ? 'Beantwoord een paar snelle vragen en wij zetten je op de wachtlijst.'
                                : 'Answer a few quick questions and we’ll add you to the waitlist.'}
                        </p>
                    </div>

                    <div className="w-full">
                        <QuizForm />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
