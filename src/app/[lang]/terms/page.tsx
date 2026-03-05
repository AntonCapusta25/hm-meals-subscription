import { Metadata } from "next";
import TermsEn from "./TermsEn";
import TermsNl from "./TermsNl";
import TermsAr from "./TermsAr";
import TermsFr from "./TermsFr";
import TermsHi from "./TermsHi";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const title = lang === 'nl' ? "Algemene Voorwaarden | Homemade"
        : lang === 'ar' ? "شروط الخدمة | Homemade"
            : lang === 'fr' ? "Conditions Générales de Service | Homemade"
                : lang === 'hi' ? "सेवा की शर्तें | Homemade"
                    : "Terms of Service | Homemade";

    return {
        title,
        description: "General Terms and Conditions for Customers of Homemade B.V. — governing the use of homemademeals.net and related services.",
        robots: { index: true, follow: true },
    };
}

export default async function TermsPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    if (lang === 'nl') return <TermsNl />;
    if (lang === 'ar') return <TermsAr />;
    if (lang === 'fr') return <TermsFr />;
    if (lang === 'hi') return <TermsHi />;
    return <TermsEn />;
}
