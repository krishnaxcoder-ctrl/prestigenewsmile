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
                                src="/Toutsavoirbg.png"
                                alt="Beautiful smile"
                                className="aspect-[4/5] w-full object-cover object-[center_65%]"
                            />
                            <div className="bg-[#a4897a] px-6 py-5">
                                <div className="flex items-center justify-between">
                                    <span
                                        className="text-[16px] italic tracking-wide text-white/90"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        @prestige.smile.studio
                                    </span>
                                    <div className="flex items-center gap-3">
                                        <a href="https://instagram.com/prestige.smile.studio" target="_blank" rel="noopener noreferrer" className="text-white/70 transition hover:text-white">
                                            <svg className="size-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
                                        </a>
                                        <a href="tel:+41783000619" className="text-white/70 transition hover:text-white">
                                            <svg className="size-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-3 h-px w-full bg-white/20" />
                                <ul className="mt-3 space-y-2">
                                    <li className="flex items-center gap-2 text-[12px] text-white/80">
                                        <span className="size-1 shrink-0 rounded-full bg-white/60" />
                                        Blanchiment professionnel en 30 min
                                    </li>
                                    <li className="flex items-center gap-2 text-[12px] text-white/80">
                                        <span className="size-1 shrink-0 rounded-full bg-white/60" />
                                        Jusqu&apos;à 8 teintes plus clair
                                    </li>
                                    <li className="flex items-center gap-2 text-[12px] text-white/80">
                                        <span className="size-1 shrink-0 rounded-full bg-white/60" />
                                        Sans douleur &amp; sans danger
                                    </li>
                                </ul>
                                <div className="mt-3 h-px w-full bg-white/20" />
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="text-[12px] uppercase tracking-[0.2em] text-white/70">
                                        Prestige Smile Studio
                                    </p>
                                    <p className="text-[12px] tracking-wide text-white/70">
                                        Ambilly, France
                                    </p>
                                </div>
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
