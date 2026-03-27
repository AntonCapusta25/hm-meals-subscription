"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { trackFAQClick, trackCTAClick } from "@/lib/analytics";
import { useI18n } from "@/contexts/I18nContext";
import { usePathname } from 'next/navigation';

const fallbackFaqs = [
    {
        question: "What’s included in a subscription?",
        answer: "Fresh, chef-made meals delivered weekly. You choose your plan, portions, and meal preferences."
    },
    {
        question: "Can I pause or skip weeks?",
        answer: "Yes. You can pause, skip, or change your plan before the weekly cutoff."
    },
    {
        question: "Do you support dietary preferences?",
        answer: "We offer vegetarian, plant-forward, and protein-focused options, plus allergen-friendly selections."
    },
    {
        question: "How do portions work?",
        answer: "Choose 2–4 portions per meal, or individual meals if you’re ordering for one."
    },
    {
        question: "When do you deliver?",
        answer: "We deliver on fixed weekly routes by area. You’ll see available days at checkout."
    },
    {
        question: "How far in advance do I need to order?",
        answer: "Orders close 3–4 days before delivery so chefs can prep fresh meals."
    },
    {
        question: "Can I cancel anytime?",
        answer: "Yes. Cancel or pause your subscription from your account with no long-term commitment."
    },
    {
        question: "Are meals fresh or frozen?",
        answer: "Meals are delivered fresh and are designed for easy reheating."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const { dictionary } = useI18n();
    const t = (dictionary as any)?.faq || {};
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'en';

    const items = t.items || fallbackFaqs;

    const toggleFAQ = (index: number) => {
        const isOpening = openIndex !== index;
        setOpenIndex(openIndex === index ? null : index);
        if (isOpening) {
            trackFAQClick(items[index].question);
        }
    };

    return (
        <section className="relative py-14 md:py-32 bg-gradient-to-b from-white to-cream overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#F27D42]/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-5 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-8 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
                        {t.title || "Frequently Asked Questions"}
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        {t.subtitle || "Everything you need to know about our catering services. Can't find your answer? Contact us directly."}
                    </p>
                </div>

                {/* FAQ Accordion — CSS-only transitions, no Framer Motion */}
                <div className="max-w-3xl mx-auto space-y-4">
                    {items.map((faq: any, index: number) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl shadow-md overflow-hidden transition-shadow duration-200 ${isOpen ? 'shadow-lg' : 'hover:shadow-lg'}`}
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                                    aria-expanded={isOpen}
                                >
                                    <span className="text-lg font-heading font-bold text-dark pr-8 group-hover:text-[#F27D42] transition-colors">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`flex-shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#F27D42]' : 'text-gray-400'}`}
                                        size={24}
                                    />
                                </button>

                                {/* CSS grid trick for smooth height animation */}
                                <div
                                    className="grid transition-[grid-template-rows] duration-200 ease-out"
                                    style={{
                                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                                        willChange: 'grid-template-rows'
                                    }}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Contact CTA */}
                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">{t.stillQuestions || "Still have questions?"}</p>
                    <a
                        href={`/${lang}/quote`}
                        onClick={() => trackCTAClick("Contact Our Team", "faq_section")}
                        className="inline-block px-8 py-4 bg-[#F27D42] text-white rounded-xl font-bold hover:bg-[#d66a35] transition-colors shadow-lg hover:shadow-xl"
                    >
                        {t.contactTeam || "Contact Our Team"}
                    </a>
                </div>
            </div>
        </section>
    );
}
