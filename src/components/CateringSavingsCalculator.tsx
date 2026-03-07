"use client";

import { useState, useRef, useEffect, useMemo } from "react";
import { useI18n } from "@/contexts/I18nContext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const RESTAURANT_PPP: Record<string, number> = {
    lunch: 35, dinner: 65, drinks: 20, breakfast: 22,
};
const HOMEMADE_PPP: Record<string, number> = {
    lunch: 22, dinner: 40, drinks: 12, breakfast: 14,
};
const MEAL_LABELS: Record<string, string> = {
    lunch: "Team Lunch", dinner: "Team Dinner",
    drinks: "Drinks & Snacks", breakfast: "Breakfast Meeting",
};

function formatEur(v: number) {
    return "€" + Math.round(v).toLocaleString("nl-NL");
}

export default function CateringSavingsCalculator() {
    const { dictionary } = useI18n();
    const t = (dictionary as any)?.cateringCalculator || {};

    const [guests, setGuests] = useState(25);
    const [mealType, setMealType] = useState<"lunch" | "dinner" | "drinks" | "breakfast">("lunch");
    const [events, setEvents] = useState(4);

    // DOM refs for instant visual updates (no React re-render during drag)
    // We use classes for mobile vs desktop synchronization
    const guestsInputRef = useRef<HTMLInputElement>(null);
    const eventsInputRef = useRef<HTMLInputElement>(null);
    const mobileGuestsInputRef = useRef<HTMLInputElement>(null);
    const mobileEventsInputRef = useRef<HTMLInputElement>(null);

    const guestsLabelRefs = useRef<HTMLSpanElement[]>([]);
    const eventsLabelRefs = useRef<HTMLSpanElement[]>([]);

    // Result refs
    const savingsValRefs = useRef<HTMLDivElement[]>([]);
    const savingsPctRefs = useRef<HTMLSpanElement[]>([]);
    const perEventValRefs = useRef<HTMLParagraphElement[]>([]);
    const over5YearsValRefs = useRef<HTMLParagraphElement[]>([]);
    const restaurantTotalValRefs = useRef<HTMLSpanElement[]>([]);
    const homemadeTotalValRefs = useRef<HTMLSpanElement[]>([]);
    const barFillRefs = useRef<HTMLDivElement[]>([]);

    const rafId = useRef<number | null>(null);
    const mealTypeRef = useRef(mealType);

    useEffect(() => {
        mealTypeRef.current = mealType;
        // Sync visuals
        recalculate();
    }, [mealType]);

    const recalculate = () => {
        if (rafId.current) cancelAnimationFrame(rafId.current);
        rafId.current = requestAnimationFrame(() => {
            // Get value from whichever input is present
            const g = Number(guestsInputRef.current?.value || mobileGuestsInputRef.current?.value || guests);
            const e = Number(eventsInputRef.current?.value || mobileEventsInputRef.current?.value || events);
            const mType = mealTypeRef.current;

            const restTotal = g * RESTAURANT_PPP[mType] * e;
            const hmTotal = g * HOMEMADE_PPP[mType] * e;
            const savings = restTotal - hmTotal;
            const savingsPct = Math.round((savings / restTotal) * 100);
            const perEventSaving = savings / e;
            const barPct = (hmTotal / restTotal) * 100;

            // Update all linked labels/bars
            guestsLabelRefs.current.forEach(el => { if (el) el.textContent = String(g); });
            eventsLabelRefs.current.forEach(el => { if (el) el.textContent = String(e); });

            savingsValRefs.current.forEach(el => { if (el) el.textContent = formatEur(savings); });
            savingsPctRefs.current.forEach(el => { if (el) el.textContent = String(savingsPct); });

            perEventValRefs.current.forEach(el => { if (el) el.textContent = formatEur(perEventSaving); });
            over5YearsValRefs.current.forEach(el => { if (el) el.textContent = formatEur(savings * 5); });

            restaurantTotalValRefs.current.forEach(el => { if (el) el.textContent = formatEur(restTotal); });
            homemadeTotalValRefs.current.forEach(el => { if (el) el.textContent = formatEur(hmTotal); });

            barFillRefs.current.forEach(el => { if (el) el.style.width = `${barPct}%`; });
        });
    };

    useEffect(() => {
        const inputs = [guestsInputRef.current, eventsInputRef.current, mobileGuestsInputRef.current, mobileEventsInputRef.current];
        inputs.forEach(input => {
            if (input) input.addEventListener("input", recalculate, { passive: true });
        });
        return () => {
            inputs.forEach(input => {
                if (input) input.removeEventListener("input", recalculate);
            });
            if (rafId.current) cancelAnimationFrame(rafId.current);
        };
    }, []);

    // Initial render values
    const initialSavings = useMemo(() => {
        const restTotal = guests * RESTAURANT_PPP[mealType] * events;
        const hmTotal = guests * HOMEMADE_PPP[mealType] * events;
        const s = restTotal - hmTotal;
        return {
            total: s,
            pct: Math.round((s / restTotal) * 100),
            perEvent: s / events,
            bar: (hmTotal / restTotal) * 100,
            restTotal,
            hmTotal
        };
    }, [guests, mealType, events]);

    return (
        <section className="relative py-14 md:py-32 bg-gradient-to-b from-white to-cream overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F27D42]/8 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F27D42]/6 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-5 relative z-10 max-w-7xl">
                <div className="text-center mb-8 md:mb-16">
                    <div className="inline-flex items-center gap-2 bg-orange/10 text-orange border border-orange/20 rounded-full px-5 py-2 text-sm font-bold uppercase tracking-widest mb-6">
                        {t.badge || "💰 Savings Calculator"}
                    </div>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold text-dark mb-4 leading-tight">
                        {t.title1 || "See how much your team"}<br />
                        <span className="text-orange">{t.title2 || "could save"}</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        {t.subtitle || "Compare the cost of restaurant catering vs. Homemade catering. Adjust the sliders to match your setup."}
                    </p>
                </div>

                {/* Desktop View: Side-by-side Grid */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-heading font-bold text-dark mb-8">{t.configTitle || "Configure your event"}</h3>

                        {/* Meal type selection */}
                        <div className="mb-8">
                            <label className="block text-sm font-bold text-gray-500 uppercase tracking-widest mb-3">{t.eventTypeLabel || "Event type"}</label>
                            <div className="grid grid-cols-2 gap-2">
                                {Object.entries(MEAL_LABELS).map(([key, defaultLabel]) => {
                                    const label = (t.mealLabels as Record<string, string>)?.[key] || defaultLabel;
                                    return (
                                        <button
                                            key={key}
                                            onClick={() => setMealType(key as any)}
                                            className={`py-3 px-4 rounded-xl text-sm font-bold transition-colors border ${mealType === key
                                                ? "bg-[#F27D42] text-white border-[#F27D42]"
                                                : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#F27D42]/40 hover:text-[#F27D42]"
                                                }`}
                                        >
                                            {label}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Guests slider */}
                        <div className="mb-8">
                            <div className="flex justify-between items-end mb-3">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">{t.guestsLabel || "Number of guests"}</label>
                                <span ref={el => { if (el) guestsLabelRefs.current[0] = el; }} className="text-2xl font-heading font-bold text-dark">{guests}</span>
                            </div>
                            <input
                                ref={guestsInputRef}
                                onPointerUp={(e) => setGuests(Number((e.target as HTMLInputElement).value))}
                                type="range" min={5} max={200} step={5} defaultValue={guests}
                                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-[#F27D42] outline-none"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium mt-3">
                                <span>{t.guestsMin || "5 guests"}</span>
                                <span>{t.guestsMax || "200 guests"}</span>
                            </div>
                        </div>

                        {/* Events slider */}
                        <div className="mb-2">
                            <div className="flex justify-between items-end mb-3">
                                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">{t.eventsLabel || "Events per year"}</label>
                                <span ref={el => { if (el) eventsLabelRefs.current[0] = el; }} className="text-2xl font-heading font-bold text-dark">{events}</span>
                            </div>
                            <input
                                ref={eventsInputRef}
                                onPointerUp={(e) => setEvents(Number((e.target as HTMLInputElement).value))}
                                type="range" min={1} max={24} step={1} defaultValue={events}
                                className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer accent-[#F27D42] outline-none"
                            />
                            <div className="flex justify-between text-xs text-gray-400 font-medium mt-3">
                                <span>{t.eventsMin || "1x"}</span>
                                <span>{t.eventsMax || "24x / year"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Results Card (shared content logic) */}
                    <div className="flex flex-col gap-5">
                        <ResultsCard
                            t={t}
                            formatEur={formatEur}
                            initial={initialSavings}
                            refs={{
                                savingsVal: (el: HTMLDivElement | null) => { if (el) savingsValRefs.current[0] = el; },
                                savingsPct: (el: HTMLSpanElement | null) => { if (el) savingsPctRefs.current[0] = el; },
                                perEventVal: (el: HTMLParagraphElement | null) => { if (el) perEventValRefs.current[0] = el; },
                                over5YearsVal: (el: HTMLParagraphElement | null) => { if (el) over5YearsValRefs.current[0] = el; },
                                restaurantTotalVal: (el: HTMLSpanElement | null) => { if (el) restaurantTotalValRefs.current[0] = el; },
                                homemadeTotalVal: (el: HTMLSpanElement | null) => { if (el) homemadeTotalValRefs.current[0] = el; },
                                barFill: (el: HTMLDivElement | null) => { if (el) barFillRefs.current[0] = el; },
                            }}
                        />
                    </div>
                </div>

                {/* Mobile View: Swiper Wizard */}
                <div className="lg:hidden max-w-lg mx-auto overflow-visible">
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true, dynamicBullets: true }}
                        spaceBetween={20}
                        slidesPerView={1}
                        className="pb-12"
                    >
                        {/* Step 1: Type */}
                        <SwiperSlide>
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[350px] flex flex-col">
                                <span className="text-[#F27D42] font-bold text-xs uppercase tracking-widest mb-2">Step 1 of 3</span>
                                <h3 className="text-2xl font-heading font-bold text-dark mb-6">{t.eventTypeLabel || "Select Event Type"}</h3>
                                <div className="grid grid-cols-2 gap-2 flex-grow">
                                    {Object.entries(MEAL_LABELS).map(([key, defaultLabel]) => {
                                        const label = (t.mealLabels as Record<string, string>)?.[key] || defaultLabel;
                                        return (
                                            <button
                                                key={key}
                                                onClick={() => setMealType(key as any)}
                                                className={`py-4 px-4 rounded-2xl text-sm font-bold transition-all border ${mealType === key
                                                    ? "bg-[#F27D42] text-white border-[#F27D42] scale-105 shadow-md"
                                                    : "bg-gray-50 text-gray-600 border-gray-100"
                                                    }`}
                                            >
                                                {label}
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className="mt-8 text-center text-gray-400 text-sm animate-pulse">
                                    Swipe to next step →
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Step 2: Guests */}
                        <SwiperSlide>
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[350px]">
                                <span className="text-[#F27D42] font-bold text-xs uppercase tracking-widest mb-2">Step 2 of 3</span>
                                <h3 className="text-2xl font-heading font-bold text-dark mb-10">{t.guestsLabel || "Number of guests"}</h3>
                                <div className="text-center mb-8">
                                    <span ref={el => { if (el) guestsLabelRefs.current[1] = el; }} className="text-6xl font-heading font-bold text-[#F27D42]">{guests}</span>
                                    <span className="text-gray-400 font-bold ml-2">people</span>
                                </div>
                                <input
                                    ref={mobileGuestsInputRef}
                                    onPointerUp={(e) => setGuests(Number((e.target as HTMLInputElement).value))}
                                    type="range" min={5} max={200} step={5} defaultValue={guests}
                                    className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer accent-[#F27D42] outline-none"
                                />
                                <div className="flex justify-between text-xs text-gray-400 font-medium mt-4">
                                    <span>{t.guestsMin || "5"}</span>
                                    <span>{t.guestsMax || "200"}</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Step 3: Frequency */}
                        <SwiperSlide>
                            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 min-h-[350px]">
                                <span className="text-[#F27D42] font-bold text-xs uppercase tracking-widest mb-2">Step 3 of 3</span>
                                <h3 className="text-2xl font-heading font-bold text-dark mb-10">{t.eventsLabel || "Frequency"}</h3>
                                <div className="text-center mb-8">
                                    <span ref={el => { if (el) eventsLabelRefs.current[1] = el; }} className="text-6xl font-heading font-bold text-[#F27D42]">{events}</span>
                                    <span className="text-gray-400 font-bold ml-2">events/yr</span>
                                </div>
                                <input
                                    ref={mobileEventsInputRef}
                                    onPointerUp={(e) => setEvents(Number((e.target as HTMLInputElement).value))}
                                    type="range" min={1} max={24} step={1} defaultValue={events}
                                    className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer accent-[#F27D42] outline-none"
                                />
                                <div className="flex justify-between text-xs text-gray-400 font-medium mt-4">
                                    <span>1 event</span>
                                    <span>24 events</span>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* Final Step: Results */}
                        <SwiperSlide>
                            <div className="flex flex-col gap-4">
                                <ResultsCard
                                    t={t}
                                    formatEur={formatEur}
                                    initial={initialSavings}
                                    refs={{
                                        savingsVal: (el: HTMLDivElement | null) => { if (el) savingsValRefs.current[1] = el; },
                                        savingsPct: (el: HTMLSpanElement | null) => { if (el) savingsPctRefs.current[1] = el; },
                                        perEventVal: (el: HTMLParagraphElement | null) => { if (el) perEventValRefs.current[1] = el; },
                                        over5YearsVal: (el: HTMLParagraphElement | null) => { if (el) over5YearsValRefs.current[1] = el; },
                                        restaurantTotalVal: (el: HTMLSpanElement | null) => { if (el) restaurantTotalValRefs.current[1] = el; },
                                        homemadeTotalVal: (el: HTMLSpanElement | null) => { if (el) homemadeTotalValRefs.current[1] = el; },
                                        barFill: (el: HTMLDivElement | null) => { if (el) barFillRefs.current[1] = el; },
                                    }}
                                />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
}

function ResultsCard({ t, formatEur, initial, refs }: any) {
    return (
        <>
            <div className="bg-[#1A2D20] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#F27D42]/20 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10">
                    <p className="text-white/70 font-medium mb-2 text-lg">{t.saveText || "You could save"}</p>
                    <div
                        ref={refs.savingsVal}
                        className="font-heading text-7xl md:text-8xl font-bold mb-1 tracking-tight text-[#F27D42]"
                    >
                        {formatEur(initial.total)}
                    </div>
                    <p className="text-white/70 font-medium mb-8 text-lg">
                        {t.perYearText || "per year"} · <span ref={refs.savingsPct}>{initial.pct}</span>% {t.lessThanText || "less than restaurants"}
                    </p>
                    <div className="w-full h-px bg-white/10 mb-8" />
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <p className="text-white/60 text-sm font-medium mb-1">{t.perEventSave || "Per event saving"}</p>
                            <p ref={refs.perEventVal} className="font-heading font-bold text-2xl">{formatEur(initial.perEvent)}</p>
                        </div>
                        <div>
                            <p className="text-white/60 text-sm font-medium mb-1">{t.over5Years || "Over 5 years"}</p>
                            <p ref={refs.over5YearsVal} className="font-heading font-bold text-2xl">{formatEur(initial.total * 5)}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm">
                <h4 className="font-heading font-bold text-dark mb-6 text-lg">{t.costBreakdown || "Annual cost breakdown"}</h4>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-sm font-medium text-gray-500">{t.restaurantCatering || "Restaurant catering"}</span>
                            <span ref={refs.restaurantTotalVal} className="font-bold text-dark">{formatEur(initial.restTotal)}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div className="bg-gray-300 h-2.5 rounded-full w-full" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center mb-1.5">
                            <span className="text-sm font-medium text-gray-500">{t.homemadeCatering || "Homemade catering"}</span>
                            <span ref={refs.homemadeTotalVal} className="font-bold text-[#F27D42]">{formatEur(initial.hmTotal)}</span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2.5">
                            <div
                                ref={refs.barFill}
                                className="bg-[#F27D42] h-2.5 rounded-full"
                                style={{ width: `${initial.bar}%`, transition: "width 0.15s ease-out" }}
                            />
                        </div>
                    </div>
                </div>
                <a
                    href="#booking"
                    className="mt-8 block w-full text-center bg-[#F27D42] text-white font-heading font-bold text-lg py-4 rounded-3xl transition-all hover:bg-[#d66a35] hover:scale-[1.02] shadow-md active:scale-[0.98]"
                >
                    {t.bookBtn || "Book your first event →"}
                </a>
            </div>
        </>
    );
}
