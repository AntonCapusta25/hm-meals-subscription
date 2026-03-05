import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "introduction", title: "परिचय" },
    { id: "controller", title: "नियंत्रक" },
    { id: "data-collected", title: "हमार द्वारा एकत्र किया गया डेटा" },
    { id: "lawful-basis", title: "प्रसंस्करण का कानूनी आधार" },
    { id: "your-rights", title: "GDPR के तहत आपके अधिकार" },
    { id: "data-security", title: "डेटा सुरक्षा" },
    { id: "data-retention", title: "डेटा प्रतिधारण" },
    { id: "changes", title: "नीति में बदलाव" },
    { id: "governing-law", title: "शासकीय कानून" },
];

export default function PrivacyHi() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            {/* Hero */}
            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">कानूनी</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    गोपनीयता नीति
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    अंतिम बार अपडेट किया गया: मार्च 2026 &nbsp;·&nbsp; GDPR अनुपालन
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
                    <section id="introduction">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">परिचय</h2>
                        <p className="text-dark/70 leading-relaxed">
                            Homemade में आपका स्वागत है! आपकी गोपनीयता और आपके व्यक्तिगत डेटा की सुरक्षा हमारे लिए सबसे महत्वपूर्ण है। यह गोपनीयता नीति आपको सूचित करती है कि जब आप हमारे प्लेटफ़ॉर्म, <strong>homemademeals.net</strong> का उपयोग करते हैं, तो हम आपके व्यक्तिगत डेटा को कैसे एकत्र करते हैं, उपयोग करते हैं, सुरक्षित करते हैं और साझा करते हैं। यह नीति <strong>सामान्य डेटा संरक्षण विनियमन (GDPR)</strong> के तहत हमारे दायित्वों को पूरा करने के लिए डिज़ाइन की गई है।
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="controller">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">नियंत्रक</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            <strong>Homemade B.V.</strong> आपके व्यक्तिगत डेटा के लिए जिम्मेदार नियंत्रक है।
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">संपर्क विवरण</p>
                            {[
                                ["कानूनी इकाई", "Homemade B.V."],
                                ["ईमेल", "info@homemademeal.net"],
                                ["पता", "Witbreuksweg 383, Enschede, The Netherlands"],
                                ["फ़ोन", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-32 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-collected">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">हम आपके बारे में कौन सा डेटा एकत्र करते हैं</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            हम आपके बारे में विभिन्न प्रकार के व्यक्तिगत डेटा एकत्र, उपयोग, संग्रहीत और स्थानांतरित कर सकते हैं:
                        </p>
                        <div className="space-y-3">
                            {[
                                ["पहचान डेटा", "पहला नाम, अंतिम नाम, उपयोगकर्ता नाम या इसी तरह के पहचानकर्ता।"],
                                ["संपर्क डेटा", "बिलिंग पता, वितरण पता, ईमेल पता और फोन नंबर।"],
                                ["वित्तीय डेटा", "बैंक खाता और भुगतान कार्ड विवरण।"],
                                ["लेनदेन डेटा", "भुगतान और उत्पादों/सेवाओं से संबंधित विवरण।"],
                                ["तकनीकी डेटा", "आईपी पता, लॉगिन डेटा, ब्राउज़र प्रकार, सिस्टम और डिवाइस विवरण।"],
                                ["प्रोफ़ाइल डेटा", "क्रय इतिहास, प्राथमिकताएं, प्रतिक्रिया और सर्वेक्षण।"],
                                ["उपयोग डेटा", "आप हमारी वेबसाइट और सेवाओं का उपयोग कैसे करते हैं।"],
                                ["मार्केटिंग डेटा", "हमसे मार्केटिंग प्राप्त करने में आपकी प्राथमिकताएं।"],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">प्रसंस्करण का कानूनी आधार</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">हम निम्नलिखित आधारों पर आपके डेटा को संसाधित करते हैं:</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                ["सहमति", "आपने हमें एक विशिष्ट उद्देश्य के लिए अपना डेटा संसाधित करने की स्पष्ट सहमति दी है।"],
                                ["अनुबंध", "आपके साथ अनुबंध के प्रदर्शन के लिए यह आवश्यक है।"],
                                ["कानूनी दायित्व", "कानूनी दायित्व के अनुपालन के लिए इसकी आवश्यकता है।"],
                                ["वैध हित", "हमारे या किसी तीसरे पक्ष के वैध हितों के उद्देश्यों के लिए आवश्यक है।"],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">GDPR के तहत आपके अधिकार</h2>
                        <p className="text-dark/70 leading-relaxed mb-4">
                            डेटा संरक्षण कानूनों के तहत आपके पास कई अधिकार हैं:
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {["पहुंच", "सुधार", "हटाएं", "प्रतिबंध लगाएं", "आपत्ति करें", "डेटा पोर्टेबिलिटी"].map((right) => (
                                <span key={right} className="px-3 py-1.5 bg-orange/10 text-orange text-sm font-medium rounded-full">
                                    {right}
                                </span>
                            ))}
                        </div>
                        <p className="text-dark/70 leading-relaxed">
                            यदि आप इनमें से किसी भी अधिकार का प्रयोग करना चाहते हैं, तो कृपया हमसे संपर्क करें:{" "}
                            <a href="mailto:info@homemademeal.net" className="text-orange hover:underline">
                                info@homemademeal.net
                            </a>.
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-security">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">डेटा सुरक्षा</h2>
                        <p className="text-dark/70 leading-relaxed">
                            हमने आपके व्यक्तिगत डेटा को आकस्मिक हानि और अनधिकृत पहुंच, उपयोग, परिवर्तन और प्रकटीकरण से सुरक्षित करने के लिए उपाय लागू किए हैं।
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="data-retention">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">डेटा प्रतिधारण</h2>
                        <p className="text-dark/70 leading-relaxed">
                            हम आपके व्यक्तिगत डेटा को केवल उतने समय तक बनाए रखेंगे, जितना आवश्यक हो, जिसमें कोई कानूनी या लेखा आवश्यकताओं को पूरा करना शामिल है।
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="changes">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">नीति में बदलाव</h2>
                        <p className="text-dark/70 leading-relaxed">
                            हम समय-समय पर इस नीति को अपडेट कर सकते हैं और इस पृष्ठ पर नई गोपनीयता नीति पोस्ट करके आपको किसी भी बदलाव के बारे में सूचित करेंगे।
                        </p>
                    </section>

                    <hr className="border-black/5" />

                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">शासकीय कानून और क्षेत्राधिकार</h2>
                        <p className="text-dark/70 leading-relaxed">
                            यह गोपनीयता नीति <strong>नीदरलैंड</strong> के कानूनों के अनुसार शासित और विश्लेषित की जाएगी।
                        </p>
                    </section>

                    {/* Contact CTA */}
                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center">
                        <p className="text-cream/80 text-sm mb-2">इस नीति के बारे में प्रश्न?</p>
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
