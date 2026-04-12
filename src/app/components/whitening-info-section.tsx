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
        <section className="bg-[#f5f0ec] px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-3xl">
                {/* Hero image card */}
                <div className="relative overflow-hidden rounded-t-3xl">
                    <img
                        src="/bigwhite.jpg"
                        alt="Beautiful smile"
                        className="h-[300px] w-full object-cover object-[center_65%] sm:h-[360px]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#8a7575]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                        <span
                            className="text-[13px] italic tracking-wide text-white/80"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            @prestige.smile.studio
                        </span>
                        <span
                            className="text-3xl font-extralight tracking-[0.25em] text-white/70"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            PS
                        </span>
                    </div>
                </div>

                {/* Title banner */}
                <div className="flex items-center justify-center gap-5 bg-[#8a7575] px-6 py-8 sm:px-10 sm:py-10">
                    <span
                        className="text-[80px] font-light leading-none text-white/50 sm:text-[100px]"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                        5
                    </span>
                    <div>
                        <h2
                            className="text-[16px] font-bold uppercase tracking-[0.22em] text-white sm:text-[20px]"
                        >
                            Choses à savoir sur le
                        </h2>
                        <h2
                            className="text-[16px] font-bold uppercase tracking-[0.22em] text-white sm:text-[20px]"
                        >
                            blanchiment dentaire
                        </h2>
                    </div>
                </div>

                {/* All 5 items */}
                <div className="rounded-b-3xl bg-[#8a7575]">
                    <div className="space-y-0 px-5 pb-8 sm:px-8 sm:pb-10">
                        {items.map((item, i) => (
                            <div key={item.number} className="relative">
                                {/* Divider line */}
                                {i > 0 && (
                                    <div className="mx-auto my-6 h-px w-16 bg-white/20 sm:my-8" />
                                )}

                                <div className="text-left">
                                    {/* Opening quote on first item */}
                                    {i === 0 && (
                                        <div className="mb-4 flex justify-start">
                                            <svg className="size-7 text-white/25 sm:size-9" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                            </svg>
                                        </div>
                                    )}

                                    {/* Number + Title */}
                                    <div className="mb-3 flex items-center gap-3">
                                        <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/20 text-[13px] font-bold text-white sm:size-9 sm:text-[14px]">
                                            {item.number}
                                        </span>
                                        <h3
                                            className="text-[14px] font-bold uppercase tracking-[0.12em] text-white sm:text-[16px]"
                                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                        >
                                            {item.title}
                                        </h3>
                                    </div>

                                    {/* Body */}
                                    <p
                                        className="max-w-lg text-[13px] leading-[1.9] text-white/80 sm:text-[15px]"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        {item.text}
                                    </p>

                                    {/* Closing quote on last item */}
                                    {i === items.length - 1 && (
                                        <div className="mt-4 flex justify-end">
                                            <svg className="size-7 rotate-180 text-white/25 sm:size-9" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                                            </svg>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-end justify-between rounded-b-3xl border-t border-white/10 px-6 py-5 sm:px-8">
                        <span
                            className="text-[13px] italic tracking-wide text-white/50"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            @prestige.smile.studio
                        </span>
                        <span
                            className="text-[28px] font-extralight tracking-[0.25em] text-white/40"
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        >
                            PS
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
