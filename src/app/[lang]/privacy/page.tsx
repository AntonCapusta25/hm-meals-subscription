import { Metadata } from "next";
import PrivacyEn from "./PrivacyEn";
import PrivacyNl from "./PrivacyNl";
import PrivacyAr from "./PrivacyAr";
import PrivacyFr from "./PrivacyFr";
import PrivacyHi from "./PrivacyHi";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ lang: string }>;
}): Promise<Metadata> {
    const { lang } = await params;
    const title = lang === 'nl' ? "Privacybeleid | Homemade"
        : lang === 'ar' ? "سياسة الخصوصية | Homemade"
            : lang === 'fr' ? "Politique de confidentialité | Homemade"
                : lang === 'hi' ? "गोपनीयता नीति | Homemade"
                    : "Privacy Policy | Homemade";

    return {
        title,
        description: "Homemade B.V. GDPR-compliant Privacy Policy. Learn how we collect, use, and protect your personal data.",
        robots: { index: true, follow: true },
    };
}

export default async function PrivacyPolicyPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;

    if (lang === 'nl') return <PrivacyNl />;
    if (lang === 'ar') return <PrivacyAr />;
    if (lang === 'fr') return <PrivacyFr />;
    if (lang === 'hi') return <PrivacyHi />;
    return <PrivacyEn />;
}
