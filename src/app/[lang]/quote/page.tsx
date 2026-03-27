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
        <main className="min-h-screen bg-dark flex flex-col font-sans text-cream">
            <Navbar />

            <div className="flex-1 flex items-center justify-center pt-24 pb-10 md:pt-32 md:pb-20 px-5">
                <div className="w-full max-w-4xl mx-auto">
                    <div className="text-center mb-6 md:mb-12">
                        <h1 className="text-3xl md:text-6xl font-heading font-bold mb-3 md:mb-4">
                            {lang === 'nl' ? 'Start Je Abonnement' : 'Start Your Subscription'}
                        </h1>
                        <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
                            {lang === 'nl'
                                ? 'Beantwoord een paar snelle vragen en wij sturen je de juiste meal plan details.'
                                : 'Answer a few quick questions and we\'ll send you the right meal plan details.'}
                        </p>
                    </div>

                    <div className="bg-white/5 border border-white/10 rounded-[28px] p-4 sm:p-6 md:p-12 shadow-2xl backdrop-blur-md">
                        <QuizForm />
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
