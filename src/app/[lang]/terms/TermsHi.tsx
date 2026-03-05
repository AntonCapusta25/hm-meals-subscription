import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "definitions", title: "परिभाषाएं" },
    { id: "identity", title: "Homemade B.V. की पहचान" },
    { id: "applicability", title: "प्रयोज्यता" },
    { id: "the-offer", title: "प्रस्ताव" },
    { id: "the-agreement", title: "समझौता" },
    { id: "dissolution", title: "निरस्तीकरण और रद्दीकरण" },
    { id: "payment", title: "भुगतान" },
    { id: "delivery", title: "डिलीवरी और संग्रह" },
    { id: "complaints", title: "शिकायतें" },
    { id: "ip", title: "बौद्धिक सम्पदा" },
    { id: "amendments", title: "संशोधन" },
    { id: "governing-law", title: "शासकीय कानून" },
    { id: "severability", title: "विच्छेदानीयता" },
    { id: "contact", title: "संपर्क जानकारी" },
];

const definitions = [
    ["प्रस्ताव", "शेफ द्वारा प्रदान किए गए उत्पादों और सेवाओं की विविधता, जिसे ग्राहक द्वारा प्लेटफ़ॉर्म के माध्यम से ऑर्डर किया जा सकता है।"],
    ["ऑर्डर", "प्लेटफ़ॉर्म के माध्यम से शेफ के प्रस्ताव के लिए ग्राहक द्वारा प्रस्तुत एक अनुरोध।"],
    ["समझौता", "एक ऑर्डर और उसके वितरण या संग्रह के विषय में ग्राहक और शेफ के बीच एक अनुबंध।"],
    ["प्लेटफ़ॉर्म", "Homemade B.V और इसकी संबद्ध कंपनियों और व्यावसायिक भागीदारों से संबंधित वेबसाइट, मोबाइल ऐप, टूल और अन्य उपकरण, जो सेवा को सक्षम करते हैं।"],
    ["शेफ", "एक व्यक्ति जो भोजन, पेय पदार्थ और संबंधित उत्पाद तैयार और बेचता है, और समझौतों की स्थापना और भुगतान के लिए प्लेटफ़ॉर्म का उपयोग करता है।"],
    ["सेवा", "Homemade B.V द्वारा ग्राहक को दी जाने वाली व्यावसायिक सेवाएं और/या गतिविधियां, जिसमें प्रस्ताव का प्रकाशन, समझौते को संपन्न करने की सुविधा, और संबंधित शेफ को ऑर्डर का प्रसारण शामिल है।"],
];

export default function TermsHi() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">कानूनी</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    सेवा की शर्तें
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    ग्राहकों के लिए सामान्य नियम और शर्तें &nbsp;·&nbsp; Homemade B.V.
                </p>
            </div>

            <div className="max-w-[900px] w-[90%] mx-auto flex flex-col lg:flex-row gap-10 items-start">
                <aside className="lg:sticky lg:top-28 lg:w-56 flex-shrink-0 bg-white rounded-2xl border border-black/5 shadow-sm p-5 hidden lg:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">विषय सूची</p>
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

                <article className="flex-1 bg-white rounded-3xl border border-black/5 shadow-sm p-8 md:p-12 space-y-12">
                    <section id="definitions">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-6">परिभाषाएं</h2>
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
                    <section id="identity">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Homemade B.V. की पहचान</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            Homemade B.V, <strong>'Homemade B.V'</strong> के नाम से कार्य करता है।
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["पता", "नीदरलैंड (The Netherlands)"],
                                ["KVK नंबर", "89875664"],
                                ["BTW नंबर", "NL865139507B01"],
                                ["ईमेल", "info@homemademeal.net"],
                                ["टेलीफ़ोन", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-36 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="applicability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">प्रयोज्यता</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>ग्राहकों के लिए ये सामान्य नियम और शर्तें विशेष रूप से सेवा पर लागू होती हैं। Homemade B.V. प्रस्ताव के लिए ज़िम्मेदार नहीं है। यदि लागू हो, तो शेफ के सामान्य नियम और शर्तें भी प्रस्ताव पर लागू हो सकती हैं।</p>
                            <p>ऑर्डर देकर, ग्राहक चयनित प्रस्ताव के वितरण के लिए शेफ के साथ एक समझौते में प्रवेश करता है। ग्राहक आदेश से बाध्य है और धनवापसी का हकदार नहीं है, सिवाय उन रद्दीकरण मामलों के जिन्हें शेफ द्वारा अनुमति दी गई है।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="the-offer">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">प्रस्ताव</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Homemade B.V, शेफ द्वारा प्रदान की गई जानकारी के आधार पर, शेफ की ओर से प्लेटफ़ॉर्म पर प्रस्ताव प्रकाशित करता है। Homemade B.V. प्रस्ताव की सामग्री और प्लेटफ़ॉर्म पर शेफ की जानकारी के लिए कोई जिम्मेदारी या दायित्व स्वीकार नहीं करता है।</p>
                            <p>शेफ भोजन और पेय में ऐसी सामग्रियों और एडिटिव्स का उपयोग कर सकता है जो एलर्जी या असहिष्णुता का कारण बन सकते हैं। एलर्जी वाले ग्राहकों को सलाह दी जाती है कि ऑर्डर देने से पहले वर्तमान एलर्जी संबंधी जानकारी के लिए शेफ से फ़ोन द्वारा संपर्क करें।</p>
                            <p>Homemade B.V. शेफ की जानकारी इस तरह प्रस्तुत करता है जो प्रस्ताव स्वीकार करने पर ग्राहक के अधिकारों और दायित्वों को स्पष्ट रूप से संप्रेषित करता है।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="the-agreement">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">समझौता</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>समझौता तब प्रभावी हो जाता है जब ग्राहक प्लेटफ़ॉर्म पर ऑर्डर करने की प्रक्रिया के दौरान <strong>'Buy now'</strong> बटन पर क्लिक करके ऑर्डर को अंतिम रूप देता है।</p>
                            <p>ऑर्डर प्राप्त होने पर, Homemade B.V. ग्राहक को इलेक्ट्रॉनिक रूप से ऑर्डर की पुष्टि करेगा। शेफ केवल तभी समझौते को पूरा कर सकता है जब ग्राहक ऑर्डर देते समय सटीक और पूरी संपर्क जानकारी प्रदान करे।</p>
                            <p>ऑर्डर देने के बाद, ग्राहक को ऑर्डर की स्थिति के बारे में जानकारी के लिए शेफ और Homemade B.V. दोनों के लिए फोन या ई-मेल द्वारा उपलब्ध होना चाहिए।</p>
                            <p>यदि ग्राहक डिलीवरी के विकल्प को चुनता है, तो ऑर्डर प्राप्त करने के लिए उन्हें निर्दिष्ट डिलीवरी पते पर मौजूद होना चाहिए। डिलीवरी शुल्क लागू हो सकते हैं जिन्हें ऑर्डर करने से पहले दिखाया जाएगा।</p>
                            <p>यदि आदेश में शराब या अन्य आयु-प्रतिबंधित आइटम शामिल हैं, तो शेफ ऑर्डर देने पर पहचान(ID) की आवश्यकता कर सकता है। यदि ग्राहक पहचान नहीं दिखा पाता है, तो शेफ उत्पादों को वितरित करने से इनकार कर देगा।</p>
                            <p>Homemade B.V. समझौते के कार्यान्वयन के संबंध में कोई उत्तरदायित्व स्वीकार नहीं करता है।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="dissolution">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">समझौते का निरस्तीकरण और रद्दीकरण</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>प्रस्ताव की खराब होने वाली प्रकृति के कारण, ग्राहक को समझौते को भंग करने का कोई अधिकार नहीं है। Homemade B.V. के माध्यम से ग्राहक द्वारा ऑर्डर को रद्द नहीं किया जा सकता है। शेफ के साथ ऑर्डर रद्द करना केवल तभी संभव है जब शेफ स्पष्ट रूप से इंगित करे कि ग्राहक ऑर्डर रद्द कर सकता है।</p>
                            <p>यदि प्रस्ताव अब उपलब्ध नहीं है, यदि ग्राहक ने गलत संपर्क जानकारी प्रदान की है, या अप्रत्याशित घटना के मामले में, शेफ ऑर्डर रद्द करने का अधिकार सुरक्षित रखता है।</p>
                            <p>यदि ग्राहक धोखाधड़ी वाला ऑर्डर देता है या समझौते के तहत अपने दायित्वों का उल्लंघन करता है, तो Homemade B.V. भविष्य में उस ग्राहक से कोई भी ऑर्डर अस्वीकार कर सकता है, और पुलिस को घटना की रिपोर्ट भी कर सकता है।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="payment">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">भुगतान</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>समझौता होने पर, ग्राहक ऑर्डर के लिए शेफ को भुगतान करने के लिए बाध्य है। भुगतान प्लेटफ़ॉर्म के माध्यम से ऑनलाइन या डिलीवरी के स्थान पर किया जा सकता है।</p>
                            <p>ऑनलाइन भुगतान का (आंशिक) धनवापसी केवल तभी संभव है जब ऑर्डर पूरी तरह से पूरा नहीं किया जा सकता है। रिफ़ंड हमेशा उसी खाते में जमा किया जाएगा जिसका उपयोग भुगतान के लिए किया गया है। भुगतान विधि के आधार पर प्रसंस्करण में <strong>10 कार्यदिवस</strong> तक लग सकते हैं।</p>
                            <p>शेफ ने अपनी ओर से ग्राहक के ऑनलाइन भुगतान को स्वीकार करने के लिए Homemade B.V. को अधिकृत किया है।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="delivery">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">डिलीवरी और संग्रह</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>सहमत समय सीमा के अनुसार ऑर्डर तैयार करने और सुनिश्चित करने के लिए शेफ जिम्मेदार है कि यह संग्रह या डिलीवरी के लिए तैयार है। Homemade B.V. वितरण को समन्वित करने में सहायता कर सकता है लेकिन डिलीवरी में देरी या विफलता के लिए कोई दायित्व नहीं लेता है।</p>
                            <p>डिलीवरी के लिए: सटीक वितरण जानकारी प्रदान करने और ऑर्डर प्राप्त करने के लिए किसी का उपलब्ध होना सुनिश्चित करने के लिए ग्राहक जिम्मेदार है। यदि कोई उपलब्ध नहीं है, तो शेफ ऑर्डर को निर्दिष्ट स्थान पर छोड़ सकता है, या पुन: वितरण के लिए अतिरिक्त शुल्क लागू हो सकते हैं।</p>
                            <p>संग्रह के लिए: सहमत समय पर शेफ के संग्रहण स्थान पर पहुंचना ग्राहक की जिम्मेदारी है। यदि ग्राहक उचित समय के भीतर एकत्र करने में विफल रहता है, तो शेफ ऑर्डर को निपटान कर सकता है और कोई धनवापसी जारी नहीं की जाएगी।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="complaints">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">शिकायतें और विवाद समाधान</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>प्रस्ताव या सेवा के बारे में शिकायतों के मामले में, ग्राहक को क्रमशः पहले शेफ या Homemade B.V. से संपर्क करना चाहिए। दोनों पक्ष अच्छे विश्वास में शिकायत को सुलझाने का प्रयास करेंगे।</p>
                            <p>यदि शिकायत का समाधान नहीं किया जा सकता है, तो ग्राहक मध्यस्थता या अन्य वैकल्पिक विवाद समाधान विधियों की मांग कर सकता है, जो लागू कानूनों के अधीन हैं।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="ip">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">बौद्धिक सम्पदा अधिकार</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>प्लेटफ़ॉर्म, सेवा और प्रस्ताव से संबंधित सभी बौद्धिक संपदा अधिकार — जिनमें ट्रेडमार्क, कॉपीराइट और पेटेंट शामिल हैं — Homemade B.V., उसके सहयोगियों या शेफ के स्वामित्व में हैं।</p>
                            <p>ग्राहकों को व्यक्तिगत, गैर-व्यावसायिक उद्देश्यों के लिए प्लेटफ़ॉर्म तक पहुंचने और उपयोग करने के लिए एक सीमित, गैर-अनन्य, गैर-हस्तांतरणीय और प्रतिसंहरणीय लाइसेंस प्रदान किया जाता है। किसी भी अनधिकृत उपयोग, पुनरुत्पादन या वितरण की सख्त मनाही है।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="amendments">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">सेवा की शर्तों में संशोधन</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            Homemade B.V. किसी भी समय इन शर्तों में संशोधन करने का अधिकार सुरक्षित रखता है। परिवर्तन प्लेटफ़ॉर्म पर प्रकाशन पर प्रभावी होते हैं। नई शर्तों के प्रकाशन के बाद प्लेटफ़ॉर्म का निरंतर उपयोग अद्यतन शर्तों की स्वीकृति माना जाता है।
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">शासकीय कानून और क्षेत्राधिकार</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            ये शर्तें <strong>नीदरलैंड</strong> के कानूनों के अनुसार शासित और विश्लेषित की जाएंगी। समझौते, प्रस्ताव या सेवा से उत्पन्न या उससे संबंधित कोई भी विवाद नीदरलैंड की सक्षम अदालतों के विशेष अधिकार क्षेत्र के अधीन होगा।
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    <section id="severability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">विच्छेदानीयता और कोई छूट नहीं</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p><strong>विच्छेदानीयता :</strong> यदि इन शर्तों का कोई प्रावधान अमान्य या अप्रवर्तनीय पाया जाता है, तो ऐसे प्रावधान को अलग कर दिया जाएगा और शेष प्रावधान पूरी तरह से लागू और प्रभावी रहेंगे।</p>
                            <p><strong>कोई छूट नहीं:</strong> Homemade B.V. द्वारा किसी भी प्रावधान को लागू करने में विफलता को भविष्य में उस प्रावधान या किसी अन्य प्रावधान को लागू करने के अपने अधिकारों की छूट नहीं माना जाएगा।</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="contact">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">संपर्क जानकारी</h2>
                        <p className="text-dark/70 leading-relaxed text-sm mb-6">
                            इन शर्तों, प्लेटफ़ॉर्म या सेवा के संबंध में किसी भी प्रश्न के लिए, कृपया Homemade B.V से संपर्क करें:
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["ईमेल", "info@homemademeal.net"],
                                ["टेलीफ़ोन", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-24 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center">
                        <p className="text-cream/80 text-sm mb-2">इन शर्तों के बारे में कोई प्रश्न?</p>
                        <a
                            href="mailto:info@homemademeal.net"
                            className="inline-block mt-2 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-colors text-sm"
                        >
                            संपर्क करें
                        </a>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
