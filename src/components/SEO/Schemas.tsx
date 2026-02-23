export function LocalBusinessSchema({ city }: { city: string }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "CateringService",
        "name": "Homemade Catering",
        "image": "https://www.homemademeals.net/images/logo-new.png",
        "@id": "https://www.homemademeals.net",
        "url": "https://www.homemademeals.net",
        "telephone": "+31000000000",
        "priceRange": "€€",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city,
            "addressCountry": "NL"
        },
        "areaServed": city,
        "servesCuisine": ["Dutch", "International", "Buffet", "Fingerfood"],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export function FAQSchema({
    questions
}: {
    questions: { question: string; answer: string }[]
}) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questions.map((q) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": q.answer,
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
