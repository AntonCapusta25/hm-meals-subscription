import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
    { id: "definitions", title: "Définitions" },
    { id: "identity", title: "Identité de Homemade B.V." },
    { id: "applicability", title: "Applicabilité" },
    { id: "the-offer", title: "L'Offre" },
    { id: "the-agreement", title: "L'Accord" },
    { id: "dissolution", title: "Dissolution et Annulation" },
    { id: "payment", title: "Paiement" },
    { id: "delivery", title: "Livraison et Collecte" },
    { id: "complaints", title: "Plaintes" },
    { id: "ip", title: "Propriété Intellectuelle" },
    { id: "amendments", title: "Modifications" },
    { id: "governing-law", title: "Loi Applicable" },
    { id: "severability", title: "Divisibilité" },
    { id: "contact", title: "Contact" },
];

const definitions = [
    ["Offre", "La variété de produits et services fournis par le Chef, pouvant être commandés par le Client via la Plateforme."],
    ["Commande", "Une demande soumise par le Client pour l'Offre du Chef via la Plateforme."],
    ["Accord", "Un contrat entre le Client et le Chef concernant une Commande et sa livraison ou collecte."],
    ["Plateforme", "Les sites web, applications mobiles, outils et autres équipements appartenant à Homemade B.V. et ses sociétés affiliées et partenaires commerciaux, qui permettent le Service."],
    ["Chef", "Un individu qui prépare et vend des repas, boissons et produits associés, et utilise la Plateforme pour l'établissement et le paiement d'Accords."],
    ["Service", "Les services et/ou activités commerciales proposés au Client par Homemade B.V., y compris la publication de l'Offre, la facilitation de la conclusion de l'Accord et la transmission des Commandes au Chef concerné."],
];

export default function TermsFr() {
    return (
        <main className="relative min-h-screen bg-cream pt-24 pb-20">
            <Navbar />

            <div className="max-w-[900px] w-[90%] mx-auto mt-12 mb-10">
                <span className="inline-block text-xs font-bold uppercase tracking-widest text-orange mb-3">Légal</span>
                <h1 className="font-heading text-4xl md:text-5xl font-bold text-dark leading-tight">
                    Conditions Générales de Service
                </h1>
                <p className="mt-3 text-dark/50 text-sm">
                    Conditions Générales pour les Clients &nbsp;·&nbsp; Homemade B.V.
                </p>
            </div>

            <div className="max-w-[900px] w-[90%] mx-auto flex flex-col lg:flex-row gap-10 items-start">
                <aside className="lg:sticky lg:top-28 lg:w-56 flex-shrink-0 bg-white rounded-2xl border border-black/5 shadow-sm p-5 hidden lg:block">
                    <p className="text-xs font-bold uppercase tracking-widest text-dark/40 mb-4">Sommaire</p>
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-6">Définitions</h2>
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Identité de Homemade B.V.</h2>
                        <p className="text-dark/70 leading-relaxed mb-6">
                            Homemade B.V. opère sous le nom <strong>'Homemade B.V.'</strong>.
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["Adresse", "Pays-Bas"],
                                ["Numéro KVK", "89875664"],
                                ["TVA", "NL865139507B01"],
                                ["Email", "info@homemademeal.net"],
                                ["Téléphone", "+31 06 4009 0902"],
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
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Applicabilité</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Ces Conditions Générales pour Clients s'appliquent exclusivement au Service. Homemade B.V. n'est pas responsable de l'Offre. Le cas échéant, les conditions générales du Chef peuvent également s'appliquer à l'Offre.</p>
                            <p>En passant une Commande, le Client conclut un Accord avec le Chef pour la livraison de l'Offre sélectionnée. Le Client est lié par sa Commande et n'a pas droit à un remboursement, sauf dans les cas d'annulation autorisés par le Chef conformément à l'article sur la Dissolution.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="the-offer">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">L'Offre</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Homemade B.V. publie l'Offre sur la Plateforme au nom du Chef, sur la base des informations fournies par ce dernier. Homemade B.V. décline toute responsabilité quant au contenu de l'Offre et aux informations du Chef sur la Plateforme.</p>
                            <p>Le Chef peut utiliser des ingrédients et additifs dans les repas et boissons qui pourraient provoquer des allergies ou intolérances. Il est conseillé aux Clients ayant des allergies de contacter le Chef par téléphone pour obtenir les informations actuelles sur les allergènes avant de passer une Commande.</p>
                            <p>Homemade B.V. présente les informations du Chef de manière à communiquer clairement les droits et obligations du Client lors de l'acceptation de l'Offre. Homemade B.V. décline toute responsabilité quant à la disponibilité de la Plateforme.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="the-agreement">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">L'Accord</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>L'Accord prend effet lorsque le Client finalise la Commande en cliquant sur le bouton <strong>'Acheter maintenant'</strong> durant le processus de commande sur la Plateforme.</p>
                            <p>Dès réception de la Commande, Homemade B.V. confirmera électroniquement la Commande au Client. Le Chef ne peut exécuter l'Accord que si le Client fournit des coordonnées et une adresse exactes et complètes lors de la commande.</p>
                            <p>Après l'envoi de la Commande, le Client doit être joignable par téléphone ou email pour le Chef et pour Homemade B.V concernant les informations sur le statut de la Commande.</p>
                            <p>Si le Client opte pour la livraison, il doit être présent à l'adresse indiquée pour recevoir la Commande. Des frais de livraison peuvent s'appliquer et sont affichés sur la Plateforme avant la validation de la Commande.</p>
                            <p>Le Chef peut exiger une pièce d'identité lors de la livraison de la Commande si elle contient des produits alcoolisés. Si le Client ne peut fournir de pièce d'identité adéquate, le Chef refusera de livrer les produits correspondants et des frais d'annulation peuvent s'appliquer.</p>
                            <p>Homemade B.V. n'assume aucune responsabilité quant à l'exécution de l'Accord.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="dissolution">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Dissolution de l'Accord & Annulation</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>En raison de la nature périssable de l'Offre, le Client n'a pas le droit de dissoudre l'Accord. Les Commandes ne peuvent pas être annulées par le Client via Homemade B.V. L'annulation d'une Commande auprès du Chef n'est possible que si ce dernier indique explicitement que le Client peut annuler.</p>
                            <p>Le Chef se réserve le droit d'annuler une Commande si l'Offre n'est plus disponible, si le Client a fourni des coordonnées incorrectes ou en cas de force majeure.</p>
                            <p>Si le Client passe une Commande frauduleuse ou enfreint par ailleurs ses obligations en vertu de l'Accord, Homemade B.V. peut refuser toute future Commande de ce Client, et peut également signaler l'incident à la police.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="payment">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Paiement</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Lors de la conclusion de l'Accord, le Client est tenu de payer le Chef pour la Commande. Le paiement peut être effectué en ligne via la Plateforme ou à la porte / au lieu de collecte.</p>
                            <p>Un remboursement (partiel) d'un paiement en ligne n'est possible que si la Commande ne peut pas être entièrement satisfaite. Les remboursements seront toujours effectués sur le même compte utilisé pour le paiement. Le traitement peut prendre jusqu'à <strong>10 jours ouvrables</strong> selon la méthode de paiement.</p>
                            <p>Le Chef a autorisé Homemade B.V. à accepter le paiement en ligne du Client en son nom.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="delivery">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Livraison et Collecte</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Le Chef est responsable de la préparation de la Commande conformément au calendrier convenu et de s'assurer qu'elle est prête pour collecte ou livraison. Homemade B.V. peut aider à coordonner la livraison mais n'assume aucune responsabilité pour les retards ou échecs de livraison.</p>
                            <p>Pour la livraison : le Client est responsable de fournir des informations de livraison exactes et s'assurer que quelqu'un est disponible pour recevoir la Commande. En cas d'indisponibilité, le Chef ou coursier peut laisser la Commande au lieu désigné, ou des frais supplémentaires peuvent s'appliquer pour une nouvelle livraison.</p>
                            <p>Pour la collecte : le Client est responsable d'arriver au lieu de collecte du Chef à l'heure convenue. Si le Client ne collecte pas dans un délai raisonnable, le Chef peut disposer de la Commande sans remboursement.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="complaints">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Plaintes et Règlements des Litiges</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>En cas de plaintes concernant l'Offre ou le Service, le Client doit d'abord contacter le Chef ou Homemade B.V. respectivement. Les deux parties tenteront de résoudre la plainte de bonne foi.</p>
                            <p>Si la plainte ne peut être résolue, le Client peut recourir à la médiation ou à d'autres modes alternatifs de résolution des litiges, sous réserve des lois et règlements applicables.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="ip">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Droits de Propriété Intellectuelle</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p>Tous les droits de propriété intellectuelle — y compris les marques, droits d'auteur et brevets — liés à la Plateforme, au Service et à l'Offre appartiennent à Homemade B.V., ses sociétés affiliées ou le Chef, selon le cas.</p>
                            <p>Les Clients se voient accorder une licence limitée, non exclusive, non transférable et révocable afin d'accéder et d'utiliser la Plateforme à des fins personnelles et non commerciales. Toute utilisation non autorisée, reproduction ou distribution est strictement interdite.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="amendments">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Modifications des Conditions</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            Homemade B.V. se réserve le droit de modifier ces Conditions à tout moment. Les changements entrent en vigueur dès leur publication sur la Plateforme. L'utilisation continue de la Plateforme suite à la publication des Conditions révisées constitue une acceptation des conditions mises à jour.
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    <section id="governing-law">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Loi Applicable et Juridiction</h2>
                        <p className="text-dark/70 leading-relaxed text-sm">
                            Ces Conditions sont régies et interprétées conformément aux lois des <strong>Pays-Bas</strong>. Tout litige découlant ou lié à l'Accord, l'Offre, ou au Service sera soumis à la juridiction exclusive des tribunaux compétents aux Pays-Bas.
                        </p>
                    </section>
                    <hr className="border-black/5" />
                    <section id="severability">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Divisibilité & Renonciation</h2>
                        <div className="space-y-3 text-dark/70 leading-relaxed text-sm">
                            <p><strong>Divisibilité :</strong> Si une disposition de ces Conditions est jugée invalide ou inapplicable, cette disposition sera dissociée et les dispositions restantes resteront pleinement en vigueur.</p>
                            <p><strong>Aucune renonciation :</strong> Le manquement de Homemade B.V. à faire appliquer une disposition ne sera pas considéré comme une renonciation à son droit de faire appliquer cette disposition ou toute autre disposition à l'avenir.</p>
                        </div>
                    </section>
                    <hr className="border-black/5" />
                    <section id="contact">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-4">Coordonnées</h2>
                        <p className="text-dark/70 leading-relaxed text-sm mb-6">
                            Pour toute question, commentaire, ou préoccupation concernant ces Conditions, la Plateforme, ou le Service, veuillez contacter Homemade B.V. :
                        </p>
                        <div className="bg-cream rounded-2xl p-6 space-y-3">
                            {[
                                ["Email", "info@homemademeal.net"],
                                ["Téléphone", "+31 06 4009 0902"],
                            ].map(([label, value]) => (
                                <div key={label} className="flex flex-col sm:flex-row sm:gap-4">
                                    <span className="text-sm font-semibold text-dark/50 sm:w-24 flex-shrink-0">{label}</span>
                                    <span className="text-sm text-dark/80">{value}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="mt-4 bg-dark rounded-2xl p-8 text-center">
                        <p className="text-cream/80 text-sm mb-2">Des questions sur ces conditions ?</p>
                        <a
                            href="mailto:info@homemademeal.net"
                            className="inline-block mt-2 px-6 py-3 bg-orange text-white font-semibold rounded-xl hover:bg-orange/90 transition-colors text-sm"
                        >
                            Nous Contacter
                        </a>
                    </div>
                </article>
            </div>

            <Footer />
        </main>
    );
}
