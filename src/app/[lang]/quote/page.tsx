import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuizForm from '@/components/QuizForm';
import { getDictionary } from '@/i18n/getDictionary';
import { Locale } from '@/i18n/config';

type Props = {
    params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);
    const m = (dictionary as any)?.metadata || {};

    return {
        title: m.quoteTitle || 'Start Your Subscription | Homemade',
        description: m.quoteDescription || 'Answer a few quick questions and start your weekly meal subscription.',
        robots: {
            index: false, // Prevents SEO indexing of the pure form page (optional but common practice)
            follow: true,
        }
    };
}

export default async function QuotePage({ params }: Props) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);
    const q = (dictionary as any)?.quotePage || {};

    return (
        <main className="min-h-screen bg-white flex flex-col font-sans text-dark">
            <Navbar />

            <div className="flex-1 flex items-center justify-center pt-24 pb-10 md:pt-32 md:pb-20 px-5">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="text-center mb-6 md:mb-12">
                        <h1 className="text-3xl md:text-6xl font-heading font-bold mb-3 md:mb-4">
                            {q.title || 'Join the Waitlist'}
                        </h1>
                        <p className="text-gray-600 text-sm md:text-lg max-w-2xl mx-auto">
                            {q.subtitle || 'Answer a few quick questions and we’ll add you to the waitlist.'}
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
