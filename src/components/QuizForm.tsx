"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Calendar, Mail, User, Phone } from "lucide-react";
import confetti from "canvas-confetti";
import { trackEvent } from "@/lib/analytics";
import { useI18n } from "@/contexts/I18nContext";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type FormData = {
    plan: string;
    mealsPerWeek: string;
    deliveryDays: string;
    name: string;
    email: string;
    phone: string;
};

const PLANS = [
    {
        id: "family",
        label: "Family Plan",
        description: "Kid-friendly, mild flavors, and balanced meals for the whole household.",
        icon: undefined
    },
    {
        id: "routine",
        label: "Healthy Routine Plan",
        description: "Protein-aware, portion-consistent meals for weekday structure.",
        icon: undefined
    },
    {
        id: "plant",
        label: "Plant-Forward Plan",
        description: "Vegetable-first meals with legumes, whole grains, and bold flavor.",
        icon: undefined
    },
    {
        id: "comfort",
        label: "Comfort & Care Plan",
        description: "Home-style classics that are easy to reheat and always satisfying.",
        icon: undefined
    },
];

const MEALS_OPTIONS = [
    { id: "3", label: "3 meals / week" },
    { id: "5", label: "5 meals / week" },
    { id: "7", label: "7 meals / week" },
    { id: "10", label: "10 meals / week" },
];

const DELIVERY_DAYS_OPTIONS = [
    { id: "1", label: "1 delivery day" },
    { id: "2", label: "2 delivery days" },
    { id: "3", label: "3 delivery days" },
    { id: "5", label: "5 delivery days" },
];

function QuizFormContent() {
    const { dictionary } = useI18n();
    const t = (dictionary as any)?.quizForm || {};
    const pathname = usePathname();
    const lang = pathname?.split('/')[1] || 'en';

    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState<FormData>({
        plan: "",
        mealsPerWeek: "",
        deliveryDays: "",
        name: "",
        email: "",
        phone: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 3;

    const updateData = (fields: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...fields }));
    };

    const nextStep = () => {
        if (step < totalSteps) setStep(step + 1);
    };

    const prevStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const triggerConfetti = () => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
            });
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
            });
        }, 250);
    };

    const handleSubmit = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        setIsSubmitting(true);

        try {
            const res = await fetch('/api/booking', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    plan: formData.plan,
                    mealsPerWeek: formData.mealsPerWeek,
                    deliveryDays: formData.deliveryDays,
                    message: `Plan: ${formData.plan}; Meals per week: ${formData.mealsPerWeek}; Delivery days: ${formData.deliveryDays}`,
                    locale: lang,
                    source: "quiz-form",
                }),
            });

            if (!res.ok) {
                const data = await res.json().catch(() => ({}));
                throw new Error(data?.error || `Request failed (${res.status})`);
            }

            trackEvent('form_submit', {
                event_category: 'engagement',
                event_label: 'Quiz Form',
                form_id: 'quiz-form',
            });

            trackEvent('generate_lead', {
                event_category: 'conversion',
                event_label: 'Quiz Form',
                value: 1,
                currency: 'EUR',
                occasion: formData.plan,
                guests: formData.mealsPerWeek,
            });

            if (typeof (window as any).lintrk === 'function') {
                (window as any).lintrk('track', { conversion_id: 26646249 });
            }

            setIsSubmitting(false);
            setIsSuccess(true);
            triggerConfetti();
        } catch (error) {
            console.error(error);
            setIsSubmitting(false);
            alert('Submission failed. Please try again.');
        }
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            if (step === 1 && formData.plan && formData.mealsPerWeek) nextStep();
            if (step === 2 && formData.deliveryDays) nextStep();
            if (step === 3 && formData.name && formData.email && formData.phone) handleSubmit();
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto text-center"
            >
                <div className="bg-[#2D2420]/95 rounded-[32px] p-8 md:p-12 lg:p-20 border border-white/10 shadow-2xl backdrop-blur-xl flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                        className="w-28 h-28 bg-green-500/20 rounded-full flex items-center justify-center mb-8 text-green-500"
                    >
                        <CheckCircle2 size={56} />
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-cream mb-6">{t.successTitle || "You're In!"}</h2>
                    <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto leading-relaxed">
                        {t.successMessage || "Thanks for your request. We’ll contact you shortly to confirm your subscription details."}
                    </p>

                    <Link href={`/${lang}`} className="inline-block px-10 py-4 bg-[#F27D42] text-white rounded-2xl font-bold hover:bg-[#d66a35] transition-colors text-lg">
                        {t.backHome || "Back to Home"}
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-4 md:mb-12">
                <div className="flex justify-between text-[10px] md:text-sm font-medium text-gray-500 mb-2 md:mb-4 tracking-widest uppercase">
                    <span>{t.stepProgress?.replace('{current}', step.toString()).replace('{total}', totalSteps.toString()) || `Step ${step} of ${totalSteps}`}</span>
                    <span>{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-white/5 rounded-full h-2 overflow-hidden">
                    <motion.div
                        className="bg-[#F27D42] h-full"
                        initial={{ width: `${((step - 1) / totalSteps) * 100}%` }}
                        animate={{ width: `${(step / totalSteps) * 100}%` }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                </div>
            </div>

            {/* Form Container */}
            <div className="relative min-h-[380px] md:min-h-[420px]" onKeyDown={handleKeyDown}>
                <AnimatePresence mode="wait">
                    {/* STEP 1: Plan */}
                    {step === 1 && (
                        <motion.div
                            key="step1"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-cream mb-3 md:mb-4 text-center">
                                {t.step1Header || "Create your first box"}
                            </h2>
                            <p className="text-gray-400 text-sm md:text-lg mb-6 md:mb-10 text-center">
                                {t.step1Subheader || "Choose your plan and how many meals you want each week."}
                            </p>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                                <div className="lg:col-span-2 space-y-6 md:space-y-8">
                                    <div>
                                        <h3 className="text-sm md:text-base font-semibold text-cream mb-3">{t.planSectionTitle || "Plan"}</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                                            {PLANS.map((occ) => (
                                                <button
                                                    key={occ.id}
                                                    onClick={() => updateData({ plan: occ.label })}
                                                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-6 rounded-2xl border text-left transition-all ${formData.plan === occ.label
                                                        ? "bg-[#F27D42]/10 border-[#F27D42] text-[#F27D42]"
                                                        : "bg-white/5 border-white/10 text-cream hover:bg-white/10"
                                                        }`}
                                                >
                                                    <div className="flex flex-col">
                                                        <span className="font-bold text-sm md:text-lg">{occ.label}</span>
                                                        <span className={`text-[11px] md:text-sm mt-1 leading-snug ${formData.plan === occ.label ? "text-[#F27D42]/90" : "text-gray-400"}`}>
                                                            {occ.description}
                                                        </span>
                                                    </div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-sm md:text-base font-semibold text-cream mb-3">{t.mealsSectionTitle || "Meals per week"}</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
                                            {MEALS_OPTIONS.map((opt) => (
                                                <button
                                                    key={opt.id}
                                                    onClick={() => updateData({ mealsPerWeek: opt.label })}
                                                    className={`py-4 rounded-xl text-center transition-all ${formData.mealsPerWeek === opt.label
                                                        ? "bg-[#F27D42] text-white shadow-lg"
                                                        : "bg-white/5 text-cream hover:bg-white/10 border border-white/10"
                                                        }`}
                                                >
                                                    <div className="text-2xl font-bold">{opt.id}</div>
                                                    <div className="text-xs mt-1 opacity-80">meals</div>
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 shadow-lg space-y-4">
                                    <h3 className="text-base md:text-lg font-heading text-cream">{t.summaryTitle || "Order summary"}</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">{t.summaryPlan || "Plan"}</span>
                                            <span className="font-semibold text-cream">{formData.plan || "—"}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">{t.summaryMeals || "Meals per week"}</span>
                                            <span className="font-semibold text-cream">{formData.mealsPerWeek || "—"}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-400">{t.summaryDelivery || "Delivery days"}</span>
                                            <span className="font-semibold text-cream">{formData.deliveryDays || "Choose next step"}</span>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-white/10">
                                        <div className="bg-orange/15 border border-orange/30 rounded-md px-3 py-2 text-center">
                                            <span className="text-sm font-semibold text-orange">
                                                {t.summaryOffer || "Waitlist bonus — 50% off at launch"}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-400 mt-3">
                                            {t.summaryNote || "You’ll unlock the offer after joining the waitlist."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: Delivery Days */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-cream mb-2 md:mb-4">{t.dateTitle || "How many delivery days?"}</h2>
                            <p className="text-gray-400 text-sm md:text-lg mb-5 md:mb-10">{t.dateSubtitle || "Pick how many days you want deliveries each week."}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-w-2xl">
                                {DELIVERY_DAYS_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => { updateData({ deliveryDays: opt.label }); setTimeout(nextStep, 300); }}
                                        className={`flex items-center gap-3 md:gap-4 p-3 md:p-6 rounded-2xl border text-left transition-all ${formData.deliveryDays === opt.label
                                            ? "bg-[#F27D42]/10 border-[#F27D42] text-[#F27D42]"
                                            : "bg-white/5 border-white/10 text-cream hover:bg-white/10"
                                            }`}
                                    >
                                        <Calendar size={18} className={`md:w-6 md:h-6 ${formData.deliveryDays === opt.label ? "text-[#F27D42]" : "text-gray-400"}`} />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm md:text-lg">{opt.label}</span>
                                            <span className={`text-[11px] md:text-sm mt-1 leading-snug ${formData.deliveryDays === opt.label ? "text-[#F27D42]/90" : "text-gray-400"}`}>
                                                {opt.id === "1" ? "All meals in one drop" : opt.id === "2" ? "Midweek freshness" : opt.id === "3" ? "More frequent top-ups" : "Near-daily convenience"}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: Contact & Submit */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="absolute inset-0"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-cream mb-2 md:mb-4">{t.contactTitle || "Your Details"}</h2>
                            <p className="text-gray-400 text-sm md:text-lg mb-5 md:mb-10">{t.contactSubtitle || "Where should we send your subscription details?"}</p>

                            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                                <div className="relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => updateData({ name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 pl-12 md:pl-16 text-base md:text-lg text-cream placeholder-gray-500 focus:outline-none focus:border-[#F27D42] focus:bg-white/10 transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        required
                                        value={formData.email}
                                        onChange={(e) => updateData({ email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 pl-12 md:pl-16 text-base md:text-lg text-cream placeholder-gray-500 focus:outline-none focus:border-[#F27D42] focus:bg-white/10 transition-all"
                                    />
                                </div>
                                <div className="relative">
                                    <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        required
                                        value={formData.phone}
                                        onChange={(e) => updateData({ phone: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 pl-12 md:pl-16 text-base md:text-lg text-cream placeholder-gray-500 focus:outline-none focus:border-[#F27D42] focus:bg-white/10 transition-all"
                                    />
                                </div>

                                <p className="text-sm text-gray-500 py-2">
                                    We respect your privacy. No immediate payment required.
                                </p>
                            </form>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="mt-4 md:mt-16 flex items-center justify-between border-t border-white/10 pt-4 md:pt-8">
                <button
                    onClick={prevStep}
                    className={`flex items-center gap-2 font-bold transition-colors ${step === 1 ? 'text-gray-600 cursor-not-allowed' : 'text-gray-400 hover:text-white'}`}
                    disabled={step === 1 || isSubmitting}
                >
                    <ArrowLeft size={20} />
                    {t.backButton || "Back"}
                </button>

                {step < totalSteps ? (
                    <button
                        onClick={nextStep}
                        disabled={
                            (step === 1 && (!formData.plan || !formData.mealsPerWeek)) ||
                            (step === 2 && !formData.deliveryDays)
                        }
                        className="flex items-center gap-2 bg-[#F27D42] text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-bold hover:bg-[#d66a35] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {t.nextButton || "Next"}
                        <ArrowRight size={20} />
                    </button>
                ) : (
                    <button
                        onClick={() => handleSubmit()}
                        disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
                        className="flex items-center gap-2 bg-[#F27D42] text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-bold hover:bg-[#d66a35] transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base whitespace-nowrap"
                    >
                        {isSubmitting ? t.submitting || "Submitting..." : t.submitButton || "Submit Request"}
                        {!isSubmitting && <CheckCircle2 size={20} />}
                    </button>
                )}
            </div>
        </div>
    );
}

export default function QuizForm() {
    return (
        <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
            <QuizFormContent />
        </Suspense>
    );
}
