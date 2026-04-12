const items = [
    {
        number: 1,
        title: "Comment agit le blanchiment ?",
        text: "Un gel professionnel à base de peroxyde est appliqué sur les dents. Il libère de l'oxygène actif qui neutralise les pigments responsables des taches (café, thé, tabac, vieillissement). Les molécules foncées sont fragmentées, révélant ainsi une teinte plus claire et lumineuse.",
    },
    {
        number: 2,
        title: "Un protocole respectueux de l'émail et des gencives",
        text: "Une évaluation de la teinte est réalisée à l'aide d'un nuancier avant et après la séance afin d'objectiver le résultat. Une barrière gingivale est ensuite appliquée afin de protéger les gencives. Le temps de pose et la concentration du gel sont soigneusement contrôlés afin d'assurer un traitement sûr et respectueux de la structure naturelle de l'émail.",
    },
    {
        number: 3,
        title: "À qui s'adresse le blanchiment ?",
        text: "Le blanchiment s'adresse aux personnes souhaitant éclaircir leur sourire dans un cadre encadré et sécurisé. La séance ne peut être envisagée en cas de grossesse ou allaitement, caries actives, gingivite, hypersensibilité importante ou allergie aux composants du gel. Un questionnaire santé est transmis avant la séance.",
    },
    {
        number: 4,
        title: "Combien de temps dure le résultat ?",
        text: "En moyenne, le résultat se maintient entre 8 et 12 mois, selon l'hygiène de vie et les habitudes pigmentaires (café, thé, vin rouge, tabac…). Une séance d'entretien peut être envisagée à partir de 6 mois, idéalement entre 6 et 9 mois, si une perte d'éclat est constatée.",
    },
    {
        number: 5,
        title: "Comment préserver l'éclat du blanchiment ?",
        text: "Les 48 premières heures sont essentielles. Évitez les aliments et boissons fortement pigmentés (café, thé, vin rouge, sodas, fruits rouges…) ainsi que le tabac. Maintenez une hygiène bucco-dentaire rigoureuse. Un dentifrice professionnel adapté est disponible en complément pour prolonger et optimiser le résultat.",
    },
];

export function WhiteningInfoSection() {
    return (
        <section className="bg-[#faf8f6] px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-7xl">
                {/* Top - Title */}
                <div className="mb-10 text-center lg:mb-14">
                    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#8b6b5a]">
                        Tout savoir
                    </p>
                    <h2
                        className="text-3xl font-medium text-[#4a3728] md:text-4xl lg:text-5xl"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        5 Choses à savoir sur le
                    </h2>
                    <h2
                        className="mt-1 text-3xl font-medium text-[#4a3728] md:text-4xl lg:text-5xl"
                        style={{ fontFamily: "'Eyesome Script', cursive" }}
                    >
                        blanchiment dentaire
                    </h2>
                </div>

                {/* Bottom - 2 columns: image left, items right */}
                <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-16">
                    {/* Left - Image */}
                    <div className="lg:sticky lg:top-24 lg:col-span-5">
                        <div className="overflow-hidden rounded-2xl shadow-xl">
                            <img
                                src="/bigwhite.jpg"
                                alt="Beautiful smile"
                                className="aspect-[4/5] w-full object-cover object-[center_65%]"
                            />
                            <div className="flex items-center bg-[#8b6b5a] px-6 py-4">
                                <span
                                    className="text-[16px] italic tracking-wide text-white/70"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    @prestige.smile.studio
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right - Items */}
                    <div className="lg:col-span-7">
                        {items.map((item) => (
                            <div key={item.number}>
                                <div className="py-3 lg:py-4">
                                    <div>
                                        <div className="flex items-center gap-4">
                                            <span
                                                className="-mt-4 text-[40px] font-light leading-none text-[#c9bdb3] lg:text-[56px]"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                {String(item.number).padStart(2, "0")}
                                            </span>
                                            <h3
                                                className="text-[17px] font-semibold uppercase tracking-[0.1em] text-[#4a3728] lg:text-[15px]"
                                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                            >
                                                {item.title}
                                            </h3>
                                        </div>
                                        <p
                                            className="mt-3 text-[14px] leading-[1.9] text-[#8b6b5a] lg:text-[15px]"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
