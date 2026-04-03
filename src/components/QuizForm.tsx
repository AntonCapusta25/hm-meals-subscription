"use client";

import { useState, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle2, Utensils, Calendar, Mail, User, Phone, Flame } from "lucide-react";
import confetti from "canvas-confetti";
import { trackEvent } from "@/lib/analytics";
import { useI18n } from "@/contexts/I18nContext";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type FormData = {
    plan: string;
    mealsPerWeek: string;
    selectedMeals: string[];
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
        icon: Utensils
    },
    {
        id: "routine",
        label: "Healthy Routine Plan",
        description: "Protein-aware, portion-consistent meals for weekday structure.",
        icon: Utensils
    },
    {
        id: "plant",
        label: "Plant-Forward Plan",
        description: "Vegetable-first meals with legumes, whole grains, and bold flavor.",
        icon: Utensils
    },
    {
        id: "comfort",
        label: "Comfort & Care Plan",
        description: "Home-style classics that are easy to reheat and always satisfying.",
        icon: Utensils
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

const MEAL_FILTERS = ["All", "Chicken", "Beef", "Fish", "Vegetarian"];

const MEAL_ITEMS = [
    { id: "chicken-teriyaki", title: "Chicken Teriyaki Rice Bowl", category: "Chicken", image: "https://homemadeco.lovable.app/assets/meal-chicken-rice-DEPY1R_S.jpg", calories: 520, grams: 420, protein: 40, fat: 14, carbs: 55, price: 6.49 },
    { id: "chicken-satay", title: "Chicken Satay Rice Bowl", category: "Chicken", image: "https://homemadeco.lovable.app/assets/meal-thai-curry-5VDOicbi.jpg", calories: 540, grams: 430, protein: 38, fat: 16, carbs: 58, price: 6.49 },
    { id: "chicken-shawarma", title: "Chicken Shawarma Rice Bowl", category: "Chicken", image: "https://homemadeco.lovable.app/assets/meal-beef-teriyaki-DLHQuq9R.jpg", calories: 500, grams: 410, protein: 36, fat: 13, carbs: 54, price: 6.49 },
    { id: "butter-chicken", title: "Butter Chicken with Rice", category: "Chicken", image: "https://homemadeco.lovable.app/assets/meal-protein-pasta-VjvFlOyP.jpg", calories: 560, grams: 440, protein: 42, fat: 18, carbs: 58, price: 6.99 },
    { id: "chicken-pesto", title: "Chicken Pesto Pasta", category: "Chicken", image: "https://homemadeco.lovable.app/assets/meal-protein-pasta-VjvFlOyP.jpg", calories: 590, grams: 450, protein: 41, fat: 19, carbs: 62, price: 6.99 },
    { id: "chili-chicken", title: "Chili Chicken Noodles", category: "Chicken", image: "https://homemadeco.lovable.app/assets/meal-chicken-rice-DEPY1R_S.jpg", calories: 530, grams: 420, protein: 39, fat: 15, carbs: 57, price: 6.49 },
    { id: "beef-bolognese", title: "Beef Bolognese Pasta", category: "Beef", image: "https://homemadeco.lovable.app/assets/meal-protein-pasta-VjvFlOyP.jpg", calories: 610, grams: 460, protein: 36, fat: 20, carbs: 68, price: 6.99 },
    { id: "beef-shawarma", title: "Beef Shawarma Rice Bowl", category: "Beef", image: "https://homemadeco.lovable.app/assets/meal-beef-teriyaki-DLHQuq9R.jpg", calories: 580, grams: 440, protein: 35, fat: 18, carbs: 60, price: 6.99 },
    { id: "pulled-beef", title: "Mexican Pulled Beef Bowl", category: "Beef", image: "https://homemadeco.lovable.app/assets/meal-mediterranean-UXFkxguD.jpg", calories: 560, grams: 430, protein: 34, fat: 16, carbs: 58, price: 6.99 },
    { id: "salmon-teriyaki", title: "Salmon Teriyaki Rice Bowl", category: "Fish", image: "https://homemadeco.lovable.app/assets/meal-salmon-potato-oKfzZJQt.jpg", calories: 540, grams: 400, protein: 35, fat: 18, carbs: 48, price: 7.49 },
    { id: "grilled-salmon", title: "Grilled Salmon with Rice & Vegetables", category: "Fish", image: "https://homemadeco.lovable.app/assets/meal-salmon-potato-oKfzZJQt.jpg", calories: 520, grams: 400, protein: 33, fat: 17, carbs: 46, price: 7.49 },
    { id: "veg-bowl", title: "Vegetable Bowl", category: "Vegetarian", image: "https://homemadeco.lovable.app/assets/meal-vegan-bowl-ApS1bKK0.jpg", calories: 430, grams: 380, protein: 18, fat: 14, carbs: 58, price: 5.99 },
    { id: "veg-risotto", title: "Vegetable Risotto", category: "Vegetarian", image: "https://homemadeco.lovable.app/assets/meal-vegan-bowl-ApS1bKK0.jpg", calories: 460, grams: 390, protein: 16, fat: 12, carbs: 62, price: 5.99 },
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
        selectedMeals: [],
        deliveryDays: "",
        name: "",
        email: "",
        phone: "",
    });
    const [mealFilter, setMealFilter] = useState<string>("All");
    const [selectionError, setSelectionError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const totalSteps = 5;

    const updateData = (fields: Partial<FormData>) => {
        setFormData(prev => ({ ...prev, ...fields }));
    };

    const targetMeals = Number(formData.mealsPerWeek.match(/\d+/)?.[0] || 0);
    const filteredMeals = MEAL_ITEMS.filter((m) => mealFilter === "All" || m.category === mealFilter);
    const selectedMealItems = MEAL_ITEMS.filter((meal) => formData.selectedMeals.includes(meal.id));
    const defaultPricePerMeal = 6.49;
    const pricePerMeal = selectedMealItems.length
        ? Number((selectedMealItems.reduce((sum, meal) => sum + meal.price, 0) / selectedMealItems.length).toFixed(2))
        : defaultPricePerMeal;
    const subtotal = targetMeals > 0 ? Number((pricePerMeal * targetMeals).toFixed(2)) : 0;
    const discountedTotal = Number((subtotal * 0.5).toFixed(2));

    const toggleMeal = (id: string) => {
        setFormData((prev) => {
            const isSelected = prev.selectedMeals.includes(id);
            if (isSelected) {
                setSelectionError("");
                return { ...prev, selectedMeals: prev.selectedMeals.filter((m) => m !== id) };
            }
            if (targetMeals > 0 && prev.selectedMeals.length >= targetMeals) {
                setSelectionError(`You can select up to ${targetMeals} meals.`);
                return prev;
            }
            setSelectionError("");
            return { ...prev, selectedMeals: [...prev.selectedMeals, id] };
        });
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
                    message: `Plan: ${formData.plan}; Meals per week: ${formData.mealsPerWeek}; Delivery days: ${formData.deliveryDays}; Meals selected: ${formData.selectedMeals.join(", ")}`,
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
            if (step === 1 && formData.plan) nextStep();
            if (step === 2 && formData.mealsPerWeek) nextStep();
            if (step === 3 && formData.selectedMeals.length === targetMeals && targetMeals > 0) nextStep();
            if (step === 4 && formData.deliveryDays) nextStep();
            if (step === 5 && formData.name && formData.email && formData.phone) handleSubmit();
        }
    };

    if (isSuccess) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full max-w-2xl mx-auto text-center"
            >
                <div className="bg-white rounded-[32px] p-8 md:p-12 lg:p-20 border border-dark/10 shadow-xl flex flex-col items-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                        className="w-28 h-28 bg-green-500/20 rounded-full flex items-center justify-center mb-8 text-green-600"
                    >
                        <CheckCircle2 size={56} />
                    </motion.div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-dark mb-6">{t.successTitle || "You're In!"}</h2>
                    <p className="text-gray-600 text-base md:text-lg mb-8 md:mb-10 max-w-md mx-auto leading-relaxed">
                        {t.successMessage || "Thanks for your request. We’ll contact you shortly to confirm your subscription details."}
                    </p>

                    <Link href={`/${lang}`} className="inline-block px-10 py-4 bg-orange text-white rounded-2xl font-bold hover:bg-orange/90 transition-colors text-lg">
                        {t.backHome || "Back to Home"}
                    </Link>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="w-full max-w-6xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-4 md:mb-12">
                <div className="flex justify-between text-[10px] md:text-sm font-medium text-gray-500 mb-2 md:mb-4 tracking-widest uppercase">
                    <span>{t.stepProgress?.replace('{current}', step.toString()).replace('{total}', totalSteps.toString()) || `Step ${step} of ${totalSteps}`}</span>
                    <span>{Math.round((step / totalSteps) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div
                        className="bg-orange h-full"
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
                            className="w-full"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-dark mb-2 md:mb-4">{t.occasionTitle || "Choose your plan"}</h2>
                            <p className="text-gray-600 text-sm md:text-lg mb-5 md:mb-10">{t.occasionSubtitle || "Pick the subscription that fits your routine."}</p>
 
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
                                {PLANS.map((occ) => (
                                    <button
                                        key={occ.id}
                                        onClick={() => { updateData({ plan: occ.label }); setTimeout(nextStep, 300); }}
                                        className={`flex items-center gap-3 md:gap-4 p-3 md:p-6 rounded-2xl border text-left transition-all ${formData.plan === occ.label
                                            ? "bg-orange/10 border-orange text-orange"
                                            : "bg-white border-dark/10 text-dark hover:bg-orange/5"
                                            }`}
                                    >
                                        <occ.icon size={18} className={`md:w-6 md:h-6 ${formData.plan === occ.label ? "text-orange" : "text-gray-400"}`} />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm md:text-lg">{occ.label}</span>
                                            <span className={`text-[11px] md:text-sm mt-1 leading-snug ${formData.plan === occ.label ? "text-orange/90" : "text-gray-500"}`}>
                                                {occ.description}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 2: Meals per week */}
                    {step === 2 && (
                        <motion.div
                            key="step2"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-dark mb-2 md:mb-4">{t.guestsTitle || "How many meals per week?"}</h2>
                            <p className="text-gray-600 text-sm md:text-lg mb-5 md:mb-10">{t.guestsSubtitle || "Choose the weekly quantity that fits your routine."}</p>
 
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                                {MEALS_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => { updateData({ mealsPerWeek: opt.label, selectedMeals: [] }); setSelectionError(""); setTimeout(nextStep, 300); }}
                                        className={`flex items-center gap-3 md:gap-4 p-3 md:p-6 rounded-2xl border text-left transition-all ${formData.mealsPerWeek === opt.label
                                            ? "bg-orange/10 border-orange text-orange"
                                            : "bg-white border-dark/10 text-dark hover:bg-orange/5"
                                            }`}
                                    >
                                        <Utensils size={18} className={`md:w-6 md:h-6 ${formData.mealsPerWeek === opt.label ? "text-orange" : "text-gray-400"}`} />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm md:text-lg">{opt.label}</span>
                                            <span className={`text-[11px] md:text-sm mt-1 leading-snug ${formData.mealsPerWeek === opt.label ? "text-orange/90" : "text-gray-500"}`}>
                                                {opt.id === "3" ? "Light support for busy weeks" : opt.id === "5" ? "Full workweek coverage" : opt.id === "7" ? "Everyday dinners" : "Maximum flexibility"}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 3: Pick meals */}
                    {step === 3 && (
                        <motion.div
                            key="step3"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-dark mb-2 md:mb-4">{t.mealsTitle || "Pick your meals"}</h2>
                            <p className="text-gray-600 text-sm md:text-lg mb-5 md:mb-8">{t.mealsSubtitle || "Choose your meals for the week."}</p>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
                                <div className="lg:col-span-2">
                                    <div className="bg-white border border-dark/10 rounded-[28px] p-4 sm:p-6 md:p-12 shadow-xl">
                                        <div className="space-y-6">
                                    <div className="flex gap-2 flex-wrap">
                                        {MEAL_FILTERS.map((filter) => (
                                            <button
                                                key={filter}
                                                onClick={() => setMealFilter(filter)}
                                                className={`px-3 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${mealFilter === filter
                                                    ? "bg-orange text-white"
                                                    : "bg-white text-dark hover:bg-orange/5 border border-dark/10"
                                                    }`}
                                            >
                                                {filter}
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between text-sm text-gray-600">
                                        <span>{formData.selectedMeals.length}/{targetMeals || 0} meals selected</span>
                                        {selectionError && <span className="text-orange">{selectionError}</span>}
                                    </div>

                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
                                        {filteredMeals.map((meal) => {
                                            const selected = formData.selectedMeals.includes(meal.id);
                                            return (
                                                <button
                                                    key={meal.id}
                                                    onClick={() => toggleMeal(meal.id)}
                                                    className={`group rounded-2xl overflow-hidden border transition-all text-left bg-white ${selected
                                                        ? "border-orange ring-1 ring-orange"
                                                        : "border-dark/10 hover:border-dark/30"
                                                        }`}
                                                >
                                                    <div className="aspect-square overflow-hidden">
                                                        <img
                                                            src={meal.image}
                                                            alt={meal.title}
                                                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="p-3 pb-1">
                                                        <div className="text-[10px] md:text-xs text-orange font-semibold mb-1">{meal.category}</div>
                                                        <div className="text-sm md:text-base font-semibold text-dark leading-tight">{meal.title}</div>
                                                        <div className="flex items-center gap-1 mt-1 text-gray-500">
                                                            <Flame className="w-3 h-3" />
                                                            <span className="text-xs font-medium">{meal.calories} kcal</span>
                                                            <span className="text-[10px] mx-0.5">·</span>
                                                            <span className="text-xs">{meal.grams}g</span>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 pb-2 pt-1">
                                                        <div className="flex justify-between items-center bg-orange/10 rounded-lg px-2 py-1.5">
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-xs font-bold text-dark">{meal.protein}g</span>
                                                                <span className="text-[10px] text-gray-500">Protein</span>
                                                            </div>
                                                            <div className="w-px h-5 bg-dark/10"></div>
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-xs font-bold text-dark">{meal.fat}g</span>
                                                                <span className="text-[10px] text-gray-500">Fat</span>
                                                            </div>
                                                            <div className="w-px h-5 bg-dark/10"></div>
                                                            <div className="flex flex-col items-center">
                                                                <span className="text-xs font-bold text-dark">{meal.carbs}g</span>
                                                                <span className="text-[10px] text-gray-500">Carbs</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-3 pb-3 flex items-center justify-between">
                                                        <span className="text-xs font-semibold text-orange">€{meal.price.toFixed(2)}</span>
                                                        {selected && <span className="text-[10px] md:text-xs text-orange font-semibold">Selected</span>}
                                                    </div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:pl-4">
                                    <div className="bg-white rounded-lg border border-dark/10 shadow-soft p-5 space-y-4">
                                        <h3 className="font-display text-lg text-dark">Order summary</h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Meals per week</span>
                                                <span className="font-semibold text-dark">{targetMeals || 0}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Price per meal</span>
                                                <span className="font-semibold text-dark">€{pricePerMeal.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-gray-500">Delivery</span>
                                                <span className="font-semibold text-green-600">Free</span>
                                            </div>
                                            <div className="border-t border-dark/10 pt-2 mt-2">
                                                <div className="flex justify-between items-baseline">
                                                    <span className="font-semibold text-dark">Total</span>
                                                    <div className="text-right">
                                                        <span className="text-gray-500 line-through text-sm mr-2">€{subtotal.toFixed(2)}</span>
                                                        <span className="text-xl font-bold text-orange">€{discountedTotal.toFixed(2)}</span>
                                                    </div>
                                                </div>
                                                <div className="mt-2 bg-orange/10 rounded-md px-3 py-2 text-center">
                                                    <span className="text-sm font-semibold text-orange">Launch offer applied — 50% OFF</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-2 pt-2 border-t border-dark/10">
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-3.5 h-3.5 text-orange"><rect x="14" y="4" width="4" height="16" rx="1"></rect><rect x="6" y="4" width="4" height="16" rx="1"></rect></svg>
                                                Pause anytime
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-3.5 h-3.5 text-orange"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                                                No commitment
                                            </div>
                                            <div className="flex items-center gap-2 text-xs text-gray-500">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="w-3.5 h-3.5 text-orange"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
                                                Fresh meals, weekly
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 4: Delivery Days */}
                    {step === 4 && (
                        <motion.div
                            key="step4"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-dark mb-2 md:mb-4">{t.dateTitle || "How many delivery days?"}</h2>
                            <p className="text-gray-600 text-sm md:text-lg mb-5 md:mb-10">{t.dateSubtitle || "Pick how many days you want deliveries each week."}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 max-w-2xl">
                                {DELIVERY_DAYS_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.id}
                                        onClick={() => { updateData({ deliveryDays: opt.label }); setTimeout(nextStep, 300); }}
                                        className={`flex items-center gap-3 md:gap-4 p-3 md:p-6 rounded-2xl border text-left transition-all ${formData.deliveryDays === opt.label
                                            ? "bg-orange/10 border-orange text-orange"
                                            : "bg-white border-dark/10 text-dark hover:bg-orange/5"
                                            }`}
                                    >
                                        <Calendar size={18} className={`md:w-6 md:h-6 ${formData.deliveryDays === opt.label ? "text-orange" : "text-gray-400"}`} />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-sm md:text-lg">{opt.label}</span>
                                            <span className={`text-[11px] md:text-sm mt-1 leading-snug ${formData.deliveryDays === opt.label ? "text-orange/90" : "text-gray-500"}`}>
                                                {opt.id === "1" ? "All meals in one drop" : opt.id === "2" ? "Midweek freshness" : opt.id === "3" ? "More frequent top-ups" : "Near-daily convenience"}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}

                    {/* STEP 5: Contact & Submit */}
                    {step === 5 && (
                        <motion.div
                            key="step5"
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.3 }}
                            className="w-full"
                        >
                            <h2 className="text-2xl md:text-3xl lg:text-5xl font-heading font-bold text-dark mb-2 md:mb-4">{t.contactTitle || "Your Details"}</h2>
                            <p className="text-gray-600 text-sm md:text-lg mb-5 md:mb-10">{t.contactSubtitle || "Where should we send your subscription details?"}</p>

                            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
                                <div className="relative">
                                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        required
                                        value={formData.name}
                                        onChange={(e) => updateData({ name: e.target.value })}
                                        className="w-full bg-white border border-dark/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 pl-12 md:pl-16 text-base md:text-lg text-dark placeholder-gray-400 focus:outline-none focus:border-orange focus:bg-white transition-all"
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
                                        className="w-full bg-white border border-dark/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 pl-12 md:pl-16 text-base md:text-lg text-dark placeholder-gray-400 focus:outline-none focus:border-orange focus:bg-white transition-all"
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
                                        className="w-full bg-white border border-dark/10 rounded-2xl px-4 py-4 md:px-6 md:py-5 pl-12 md:pl-16 text-base md:text-lg text-dark placeholder-gray-400 focus:outline-none focus:border-orange focus:bg-white transition-all"
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
            <div className="mt-4 md:mt-16 flex items-center justify-between border-t border-dark/10 pt-4 md:pt-8">
                <button
                    onClick={prevStep}
                    className={`flex items-center gap-2 font-bold transition-colors ${step === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-600 hover:text-dark'}`}
                    disabled={step === 1 || isSubmitting}
                >
                    <ArrowLeft size={20} />
                    {t.backButton || "Back"}
                </button>

                {step < totalSteps ? (
                    <button
                        onClick={nextStep}
                        disabled={
                            (step === 1 && !formData.plan) ||
                            (step === 2 && !formData.mealsPerWeek) ||
                            (step === 3 && (targetMeals === 0 || formData.selectedMeals.length !== targetMeals)) ||
                            (step === 4 && !formData.deliveryDays)
                        }
                        className="flex items-center gap-2 bg-orange text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-bold hover:bg-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {t.nextButton || "Next"}
                        <ArrowRight size={20} />
                    </button>
                ) : (
                    <button
                        onClick={() => handleSubmit()}
                        disabled={!formData.name || !formData.email || !formData.phone || isSubmitting}
                        className="flex items-center gap-2 bg-orange text-white px-6 py-3 md:px-8 md:py-3 rounded-xl font-bold hover:bg-orange/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base whitespace-nowrap"
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
