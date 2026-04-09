const items = [
    {
        number: 1,
        title: "Comment agit le blanchiment ?",
        content: (
            <p>
                Un gel professionnel à base de peroxyde est appliqué sur les dents. Il libère de l&apos;oxygène actif qui
                neutralise les pigments responsables des taches (café, thé, tabac, vieillissement). Les molécules foncées
                sont fragmentées, révélant ainsi une teinte plus claire et lumineuse.
            </p>
        ),
    },
    {
        number: 2,
        title: "Un protocole respectueux de l'émail et des gencives",
        content: (
            <p>
                Une évaluation de la teinte est réalisée à l&apos;aide d&apos;un nuancier avant et après la séance afin
                d&apos;objectiver le résultat. Une barrière gingivale est ensuite appliquée afin de protéger les
                gencives. Le temps de pose et la concentration du gel sont soigneusement contrôlés afin d&apos;assurer un
                traitement sûr et respectueux de la structure naturelle de l&apos;émail.
            </p>
        ),
    },
    {
        number: 3,
        title: "À qui s'adresse le blanchiment ?",
        content: (
            <>
                <p>
                    Le blanchiment s&apos;adresse aux personnes souhaitant éclaircir leur sourire dans un cadre encadré
                    et sécurisé.
                </p>
                <p className="mt-3">La séance ne peut être envisagée dans les situations suivantes :</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                    <li>Grossesse ou allaitement</li>
                    <li>Caries actives, gingivite ou déchaussement</li>
                    <li>Hypersensibilité importante</li>
                    <li>Allergie connue aux composants du gel</li>
                </ul>
                <p className="mt-3">
                    Un questionnaire santé est transmis avant la séance afin de s&apos;assurer de l&apos;éligibilité au
                    traitement.
                </p>
            </>
        ),
    },
    {
        number: 4,
        title: "Combien de temps dure le résultat ?",
        content: (
            <p>
                En moyenne, le résultat se maintient entre 8 et 12 mois, selon l&apos;hygiène de vie et les habitudes
                pigmentaires (café, thé, vin rouge, tabac…). Une séance d&apos;entretien peut être envisagée à partir de
                6 mois, idéalement entre 6 et 9 mois, si une perte d&apos;éclat est constatée.
            </p>
        ),
    },
    {
        number: 5,
        title: "Comment préserver l'éclat du blanchiment ?",
        content: (
            <>
                <p className="font-medium">Les 48 premières heures sont essentielles.</p>
                <p className="mt-3">
                    Évitez les aliments et boissons fortement pigmentés (café, thé, vin rouge, sodas, fruits rouges…)
                    ainsi que le tabac. Maintenez une hygiène bucco-dentaire rigoureuse.
                </p>
                <p className="mt-3">
                    Un dentifrice professionnel adapté est disponible en complément pour prolonger et optimiser le
                    résultat.
                </p>
            </>
        ),
    },
];

export function WhiteningInfoSection() {
    return (
        <section className="bg-[#faf8f6] px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-[900px]">
                <h2
                    className="mb-12 text-center text-2xl font-medium uppercase tracking-[0.15em] text-[#4a2d3a] md:text-3xl lg:text-4xl"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                    5 Choses à savoir sur le blanchiment dentaire
                </h2>

                <div className="space-y-10">
                    {items.map((item) => (
                        <div key={item.number} className="border-b border-[#e0d5d8] pb-10 last:border-b-0">
                            <h3
                                className="mb-4 text-lg font-semibold uppercase tracking-wide text-[#4a2d3a] md:text-xl"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                <span className="mr-2 text-[#b8929a]">{item.number}.</span>
                                {item.title}
                            </h3>
                            <div
                                className="text-sm leading-relaxed text-[#5a3d4a] md:text-base"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                {item.content}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
