import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "introduction", title: "مقدمة" },
    { id: "controller", title: "المراقب المالي" },
    { id: "data-collected", title: "البيانات التي نجمعها" },
    { id: "lawful-basis", title: "الأساس القانوني للمعالجة" },
    { id: "your-rights", title: "حقوقك بموجب القانون العام لحماية البيانات" },
    { id: "data-security", title: "أمن البيانات" },
    { id: "data-retention", title: "الاحتفاظ بالبيانات" },
    { id: "changes", title: "تغييرات على السياسة" },
    { id: "governing-law", title: "القانون الحاكم" },
];

export default function PrivacyAr() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20" dir="rtl">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10 text-right">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">قانوني</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    سياسة الخصوصية
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    آخر تحديث: مارس 2026 &nbsp;·&nbsp; متوافق مع GDPR
                </p>
            </div>

            <div className="max-w-[900px] w-[90%] mx-auto flex flex-col lg:flex-row gap-10 items-start">
                {/* Sticky Table of Contents */}
                <aside className="lg:sticky lg:top-28 lg:w-56 flex-shrink-0 bg-white rounded-2xl border border-black/5 shadow-sm p-5 hidden lg:block text-right">
                    <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">المحتويات</p>
                    <nav className="space-y-1">
                        {sections.map((s) => (
                            <a
                                key={s.id}
                                href={`#${s.id}`}
                                className="block text-sm text-dark/60 hover:text-orange transition-colors py-1 px-2 rounded-lg hover:bg-orange/5"
                            >
                                {s.title}
                            </a>
                        ))}
                    </nav>
                </aside>

                {/* Main Content */}
                <article className="flex-1 bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-12 space-y-12 text-right">
                    <section id="introduction">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">مقدمة</h2>
                        <p className="text-dark/70 leading-relaxed">
                            مرحبًا بك في Homemade! تعتبر خصوصيتك وحماية بياناتك الشخصية ذات أهمية قصوى بالنسبة لنا. تبلغك سياسة الخصوصية هذه بكيفية جمع بياناتك الشخصية واستخدامها وحمايتها ومشاركتها عند استخدام منصتنا، <strong>homemademeals.net</strong>، وهي مصممة للوفاء بالتزاماتنا بموجب <strong>اللائحة العامة لحماية البيانات (GDPR)</strong>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="controller">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">المراقب المالي</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            <strong>Homemade B.V.</strong> ("Homemade" أو "نحن" أو "لنا" أو "لدينا") هي وحدة التحكم المسؤولة عن بياناتك الشخصية.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">تفاصيل الاتصال</p>
                            {[
                                ["الكيان القانوني", "Homemade B.V."],
                                ["البريد الإلكتروني", "info@homemademeal.net"],
                                ["العنوان", "Witbreuksweg 383, Enschede, The Netherlands"],
                                ["هاتف", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-32 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80" dir="ltr">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-collected">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">البيانات التي نجمعها عنك</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            قد نقوم بجمع واستخدام وتخزين ونقل أنواع مختلفة من البيانات الشخصية عنك، مجمعة على النحو التالي:
                        </p>
                        <div className="space-y-3">
                            {[
                                ["بيانات الهوية", "تشمل الاسم الأول والاسم الأخير واسم المستخدم أو معرف مماثل."],
                                ["بيانات الاتصال", "تشمل عنوان إرسال الفواتير وعنوان التسليم وعنوان البريد الإلكتروني وأرقام الهواتف."],
                                ["البيانات المالية", "تشمل الحساب المصرفي وتفاصيل بطاقة الدفع."],
                                ["بيانات المعاملات", "تتضمن تفاصيل حول المدفوعات من وإليك وتفاصيل أخرى للمنتجات والخدمات التي اشتريتها منا."],
                                ["البيانات الفنية", "تشمل عنوان IP، وبيانات تسجيل الدخول، ونوع المتصفح وإصداره، وإعداد المنطقة الزمنية والموقع، وأنواع المكونات الإضافية للمتصفح، ونظام التشغيل والمنصة، والتقنيات الأخرى على أجهزتك."],
                                ["بيانات الملف الشخصي", "تشمل اسم المستخدم وكلمة المرور، وعمليات الشراء أو الطلبات التي قمت بها، واهتماماتك، وتفضيلاتك، وملاحظاتك، وردود الاستبيانات."],
                                ["بيانات الاستخدام", "تشمل معلومات حول كيفية استخدامك لموقعنا الإلكتروني ومنتجاتنا وخدماتنا."],
                                ["بيانات التسويق والاتصالات", "تتضمن تفضيلاتك في تلقي التسويق منا وتفضيلات الاتصال الخاصة بك."],
                            ].map(([type, desc]) => (
                                <div key={type} className="flex gap-4 p-4 bg-cream rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-orange mt-2 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-dark text-sm">{type}: </span>
                                        <span className="text-dark/70 text-sm">{desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    <section id="lawful-basis">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">الأساس القانوني للمعالجة</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">نقوم بمعالجة بياناتك الشخصية بناءً على الأسس التالية:</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["موافقة", "لقد منحتنا موافقة واضحة لمعالجة بياناتك الشخصية لغرض معين."],
                                ["عقد", "المعالجة ضرورية لتنفيذ عقد معك أو لاتخاذ خطوات بناءً على طلبك قبل إبرام مثل هذا العقد."],
                                ["التزام قانوني", "المعالجة ضرورية للامتثال لالتزام قانوني نخضع له."],
                                ["المصالح المشروعة", "المعالجة ضرورية لأغراض المصالح المشروعة التي نتبعها نحن أو طرف ثالث ، باستثناء الحالات التي تتجاوز فيها مصالحك أو حقوقك الأساسية هذه المصالح."],
                            ].map(([basis, desc]) => (
                                <div key={basis} className="bg-cream rounded-2xl p-5">
                                    <h3 className="font-semibold text-dark mb-2 text-sm">{basis}</h3>
                                    <p className="text-dark/60 text-sm leading-relaxed">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    <section id="your-rights">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">حقوقك بموجب القانون العام لحماية البيانات</h2>
                        <p className="text-dark/70 leading-relaxed mb-4">
                            تتمتع بحقوق بموجب قوانين حماية البيانات فيما يتعلق ببياناتك الشخصية ، بما في ذلك:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["وصول", "تصحيح", "محو", "تقييد المعالجة", "اعتراض على المعالجة", "إمكانية نقل البيانات"].map((right) => (
                                <span key={right} className="px-3 py-1.5 bg-orange/10 text-orange text-sm font-medium rounded-full">
                                    {right}
                                </span>
                            ))}
                        </div>
                        <p className="text-dark/70 leading-relaxed">
                            إذا كنت ترغب في ممارسة أي من هذه الحقوق، يرجى الاتصال بنا على{" "}
                            <a href="mailto:info@homemademeal.net" className="text-orange hover:underline text-left inline-block" dir="ltr">
                                info@homemademeal.net
                            </a>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-security">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">أمن البيانات</h2>
                        <p className="text-dark/70 leading-relaxed">
                            لقد نفذنا تدابير مصممة لتأمين بياناتك الشخصية من الفقدان العرضي ومن الوصول غير المصرح به والاستخدام والتغيير والكشف.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-retention">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">الاحتفاظ بالبيانات</h2>
                        <p className="text-dark/70 leading-relaxed">
                            سنحتفظ ببياناتك الشخصية فقط للفترة التي نحتاجها للوفاء بالأغراض التي جمعناها من أجلها، بما في ذلك لأغراض تلبية أي متطلبات قانونية أو محاسبية أو تتعلق بإعداد التقارير.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="changes">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">تغييرات على السياسة</h2>
                        <p className="text-dark/70 leading-relaxed">
                            قد نقوم بتحديث هذه السياسة من وقت لآخر وسنخطرك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">القانون الحاكم والاختصاص القضائي</h2>
                        <p className="text-dark/70 leading-relaxed">
                            تخضع سياسة الخصوصية هذه وتُفسر وفقًا لقوانين <strong>هولندا</strong>.
                        </p>
                    </section>

                    {/* Contact CTA */}
                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center text-center">
                        <p className="text-cream/80 text-sm mb-2">أسئلة حول هذه السياسة؟</p>
                        <a
                            href="mailto:info@homemademeal.net"
                            className="inline-block mt-2 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-colors text-sm"
                        >
                            اتصل بنا
                        </a>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
