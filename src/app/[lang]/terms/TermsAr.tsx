import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "definitions", title: "التعريفات" },
    { id: "identity", title: "هوية Homemade B.V." },
    { id: "applicability", title: "قابلية التطبيق" },
    { id: "the-offer", title: "العرض" },
    { id: "the-agreement", title: "الاتفاقية" },
    { id: "dissolution", title: "الفسخ والإلغاء" },
    { id: "payment", title: "الدفع" },
    { id: "delivery", title: "التسليم والاستلام" },
    { id: "complaints", title: "الشكاوى" },
    { id: "ip", title: "الملكية الفكرية" },
    { id: "amendments", title: "التعديلات" },
    { id: "governing-law", title: "القانون الحاكم" },
    { id: "severability", title: "قابلية الفصل" },
    { id: "contact", title: "اتصال" },
];

const definitions = [
    ["العرض", "مجموعة المنتجات والخدمات التي يقدمها الشيف والتي يمكن للعميل طلبها من خلال المنصة."],
    ["الطلب", "طلب مقدم من العميل للحصول على عرض الشيف من خلال المنصة."],
    ["الاتفاقية", "عقد بين العميل والشيف بخصوص طلب وتسليمه أو استلامه."],
    ["المنصة", "المواقع الإلكترونية وتطبيقات الهاتف المحمول والأدوات والمعدات الأخرى التابعة لشركة Homemade B.V والشركات التابعة لها وشركائها التجاريين، والتي تمكن الخدمة."],
    ["الشيف", "فرد يُعِدُّ ويبيع وجبات ومشروبات ومنتجات ذات صلة، ويستخدم المنصة لتأسيس الاتفاقيات ودفع قيمتها."],
    ["الخدمة", "الخدمات التجارية و/أو الأنشطة المعروضة على العميل من قبل Homemade B.V، بما في ذلك نشر العرض، وتسهيل إبرام الاتفاقية، وإرسال الطلبات إلى الشيف المعني."],
];

export default function TermsAr() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20" dir="rtl">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10 text-right">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">قانوني</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    شروط الخدمة
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    الشروط والأحكام العامة للعملاء &nbsp;·&nbsp; Homemade B.V.
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
                    {/* Definitions */}
                    <section id="definitions">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-6">التعريفات</h2>
                        <div className="space-y-3">
                            {definitions.map(([term, desc]) => (
                                <div key={term} className="flex gap-4 p-4 bg-cream rounded-xl">
                                    <div className="w-2 h-2 rounded-full bg-orange mt-2 flex-shrink-0" />
                                    <div>
                                        <span className="font-semibold text-dark text-sm">{term}: </span>
                                        <span className="text-dark/70 text-sm">{desc}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Identity */}
                    <section id="identity">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">هوية Homemade B.V.</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            تعمل Homemade B.V. تحت اسم <strong>'Homemade B.V.'</strong>.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["العنوان", "هولندا"],
                                ["رقم KVK", "89875664"],
                                ["رقم ضريبة القيمة المضافة", "NL865139507B01"],
                                ["البريد الإلكتروني", "info@homemademeal.net"],
                                ["هاتف", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-36 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80" dir="ltr">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Applicability */}
                    <section id="applicability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">قابلية التطبيق</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>تنطبق هذه الشروط والأحكام العامة للعملاء حصريًا على الخدمة. Homemade B.V. ليست مسؤولة عن العرض. وإذا أمكن، قد تنطبق أيضًا الشروط والأحكام العامة للشيف على العرض.</p>
                            <p>من خلال تقديم طلب، يُبرم العميل اتفاقية مع الشيف لتسليم العرض المُختار. يلتزم العميل بالطلب ولا يحق له استرداد المبلغ، باستثناء حالات الإلغاء التي يسمح بها الشيف بموجب مادة الفسخ.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* The Offer */}
                    <section id="the-offer">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">العرض</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>تنشر Homemade B.V. العرض على المنصة نيابة عن الشيف، بناءً على المعلومات المقدمة من الشيف. لا تتحمل Homemade B.V. أية مسؤولية أو تبعية عن محتوى العرض ومعلومات الشيف على المنصة.</p>
                            <p>قد يستخدم الشيف مكوّنات ومواد مضافة في الوجبات والمشروبات قد تسبب حساسية أو عدم تحمل. يُنصح العملاء الذين يعانون من الحساسية بالتواصل مع الشيف هاتفيًا للحصول على معلومات حديثة حول مسببات الحساسية قبل تقديم طلب.</p>
                            <p>تعرض Homemade B.V. معلومات الشيف بطريقة تنقل بوضوح حقوق والتزامات العميل عند قبول العرض. لا تتحمل Homemade B.V. أية مسؤولية عن توفر المنصة.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* The Agreement */}
                    <section id="the-agreement">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">الاتفاقية</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>تُصبح الاتفاقية سارية المفعول عندما ينهي العميل الطلب بالنقر فوق الزر <strong>'اشترِ الآن'</strong> أثناء عملية الطلب على المنصة.</p>
                            <p>عند استلام الطلب، ستؤكد Homemade B.V. الطلب إلكترونيًا للعميل. لا يمكن للشيف الوفاء بالاتفاقية إلا إذا قدم العميل معلومات اتصال وعنواناً دقيقة وكاملة عند تقديم الطلب.</p>
                            <p>بعد تقديم الطلب، يجب أن يكون العميل متاحًا عبر الهاتف أو البريد الإلكتروني لكل من الشيف و Homemade B.V. فيما يتعلق بمعلومات حول حالة الطلب.</p>
                            <p>إذا اختار العميل التسليم، فيجب أن يكون متواجدًا في عنوان التسليم المحدد لاستلام الطلب. قد يتم تطبيق رسوم التسليم وتعرض على المنصة قبل تقديم طلب.</p>
                            <p>قد يطلب الشيف إثبات الهوية عند تسليم الطلب إذا كان يحتوي على منتجات كحولية أو أي سلع أخرى مقيدة بالعمر. إذا لم يتمكن العميل من تقديم إثبات هوية كافٍ، فسيرفض الشيف تسليم المنتجات ذات الصلة وقد تُطبق رسوم إلغاء.</p>
                            <p>لا تتحمل Homemade B.V. أية مسؤولية فيما يتعلق بتنفيذ الاتفاقية.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Dissolution */}
                    <section id="dissolution">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">فسخ الاتفاقية والإلغاء</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>نظراً لطبيعة العرض القابلة للتلف، ليس للعميل الحق في فسخ الاتفاقية. لا يمكن للعميل إلغاء الطلبات من خلال Homemade B.V.. لا يمكن إلغاء الطلب مع الشيف إلا إذا أشار الشيف صراحة إلى أن العميل قد يلغى الطلب.</p>
                            <p>يحتفظ الشيف بالحق في إلغاء طلب إذا لم يعد العرض متوفرًا، أو إذا قدم العميل معلومات اتصال غير صحيحة، أو في حالات القوة القاهرة.</p>
                            <p>إذا قدم العميل طلبًا احتياليًا أو خالف التزاماته بموجب الاتفاقية، يجوز لشركة Homemade B.V. رفض أي طلبات مستقبلية من هذا العميل. ويجوز لشركة Homemade B.V. أيضًا الإبلاغ عن الحادث للشرطة.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Payment */}
                    <section id="payment">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">الدفع</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>عند إبرام الاتفاقية، يلتزم العميل بالدفع للشيف مقابل الطلب. يمكن إجراء الدفع عبر الإنترنت من خلال المنصة أو عند الباب / موقع الاستلام.</p>
                            <p>استرداد مبلغ الدفع عبر الإنترنت (أو الاسترداد الجزئي) ممكن فقط إذا تعذر الوفاء بالطلب بالكامل. ستتم معالجة المبالغ المستردة دائماً على نفس الحساب المستخدم للدفع. قد تستغرق المعالجة ما يصل إلى <strong>10 أيام عمل</strong> اعتمادًا على طريقة الدفع.</p>
                            <p>لقد خوّل الشيف Homemade B.V. بقبول دفع العميل عبر الإنترنت نيابة عنه.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Delivery */}
                    <section id="delivery">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">التسليم والاستلام</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>يتحمل الشيف مسؤولية إعداد الطلب وفقًا للإطار الزمني المتفق عليه وضمان جاهزيته للاستلام أو التسليم. قد تساعد Homemade B.V. في تنسيق التسليم لكنها لا تتحمل أي مسؤولية عن تأخير التسليم أو الفشل.</p>
                            <p>بالنسبة للتسليم: يكون العميل مسؤولاً عن تقديم معلومات تسليم دقيقة وضمان وجود شخص متاح لاستلام الطلب. إذا لم يتوفر أحد، يجوز للشيف أو جهة التوصيل ترك الطلب في الموقع المحدد، أو قد تُطبق رسوم إضافية لإعادة التسليم.</p>
                            <p>بالنسبة للاستلام: تقع على عاتق العميل مسؤولية الوصول إلى موقع استلام الشيف في الوقت المتفق عليه. إذا فشل العميل في الاستلام خلال فترة زمنية معقولة، يمكن للشيف التخلص من الطلب ولن يتم إصدار أي مبلغ مسترد.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Complaints */}
                    <section id="complaints">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">الشكاوى وتسوية المنازعات</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>في حالة وجود شكاوى حول العرض أو الخدمة، يجب على العميل أولاً الاتصال بالشيف أو Homemade B.V. على التوالي. سيحاول كلا الطرفين حل الشكوى بحسن نية.</p>
                            <p>إذا تعذر حل الشكوى، يجوز للعميل طلب الوساطة أو أساليب تسوية المنازعات البديلة الأخرى، الخاضعة للقوانين واللوائح المعمول بها.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* IP */}
                    <section id="ip">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">حقوق الملكية الفكرية</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>جميع حقوق الملكية الفكرية — بما في ذلك العلامات التجارية وحقوق الطبع والنشر وبراءات الاختراع — المتعلقة بالمنصة والخدمة والعرض مملوكة لشركة Homemade B.V. أو الشركات التابعة لها أو للشيف، حسب الاقتضاء.</p>
                            <p>يُمنح العملاء ترخيصًا محدودًا وغير حصري وغير قابل للتحويل وقابل للإلغاء للوصول إلى المنصة واستخدامها لأغراض شخصية وغير تجارية. يُحظر بشدة أي استخدام أو استنساخ أو توزيع غير مصرح به.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Amendments */}
                    <section id="amendments">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">تعديلات شروط الخدمة</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            تحتفظ Homemade B.V. بالحق في تعديل هذه الشروط في أي وقت. تُصبح التغييرات سارية المفعول عند نشرها على المنصة. يعتبر استمرار استخدام المنصة بعد نشر الشروط المنقحة موافقة على الشروط المحدثة.
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    {/* Governing Law */}
                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">القانون الحاكم والاختصاص القضائي</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            تخضع هذه الشروط وتُفسر وفقًا لقوانين <strong>هولندا</strong>. ويخضع أي نزاع ينشأ عن أو يتعلق بالاتفاقية أو العرض أو الخدمة للاختصاص الحصري للمحاكم المختصة في هولندا.
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    {/* Severability */}
                    <section id="severability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">قابلية الفصل وعدم التنازل</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p><strong>قابلية الفصل:</strong> إذا تبين أن أي حكم من هذه الشروط غير صالح أو غير قابل للتنفيذ، يتم فصل هذا الحكم وتستمر الأحكام المتبقية بكامل القوة والتأثير.</p>
                            <p><strong>عدم التنازل:</strong> لا يُعتبر إخفاق Homemade B.V. في تنفيذ أي حكم تنازلاً عن حقوقها في تنفيذ هذا الحكم أو أي حكم آخر في المستقبل.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    {/* Contact */}
                    <section id="contact">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">معلومات الاتصال</h2>
                        <p className="text-dark/70 leading-relaxed text-sm mb-6">
                            لأي أسئلة أو تعليقات أو مخاوف تتعلق بهذه الشروط أو المنصة أو الخدمة، يرجى الاتصال بشركة Homemade B.V.:
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["البريد الإلكتروني", "info@homemademeal.net"],
                                ["هاتف", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-24 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80" dir="ltr">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* CTA */}
                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center text-center">
                        <p className="text-cream/80 text-sm mb-2">أسئلة حول هذه الشروط؟</p>
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
