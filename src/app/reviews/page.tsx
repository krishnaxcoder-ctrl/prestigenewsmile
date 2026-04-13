"use client";

import { motion } from "framer-motion";
import { Header } from "@/app/components/header";
import { Footer } from "@/app/components/footer";
import { Star01 } from "@untitledui/icons";

const testimonials = [
    {
        id: 1,
        name: "Gianni",
        content: "Un grand merci à Anaëlle pour l'accueil, son professionnalisme. Explique bien les procédures. Très précises dans son travail. Dents blanches dès la première séance. Après 2 séances, il y a une grande différence avec des dents éclatantes. Prix très abordable. Je recommande vivement.",
        rating: 5,
        badge: "2 Sessions",
    },
    {
        id: 2,
        name: "Hamza",
        content: "Un service 5 étoiles, impeccable et très professionnel. Vous pouvez y aller les yeux fermés. Je suis très satisfait du résultat et je reviendrai sans aucun doute. Merci beaucoup !",
        rating: 5,
        badge: "5 Stars",
    },
    {
        id: 3,
        name: "Pierre",
        content: "Anaelle est très attentionnée et professionnelle. Bonne expérience, je recommande ses services.",
        rating: 5,
        badge: "Recommended",
    },
    {
        id: 4,
        name: "Houda",
        content: "J'ai réalisé un blanchiment dentaire chez Anaëlle et je suis absolument ravie du résultat ! Elle est très professionnelle, douce et à l'écoute. Elle a pris le temps de bien expliquer chaque étape du soin et de répondre à toutes mes questions, le résultat est naturel et visible dès la première séance. Le cadre est propre, agréable et très apaisant. Je recommande sans hésiter à toute personne souhaitant un sourire plus éclatant tout en passant un moment agréable. Merci encore Anaëlle pour ton excellent travail !",
        rating: 5,
        badge: "Natural",
    },
    {
        id: 5,
        name: "Jessy",
        content: "Très satisfait de mon expérience chez Prestige Smile. Prestation professionnelle, explications claires et résultat visible dès la première séance, sans douleur. Je recommande !",
        rating: 5,
        badge: "No Pain",
    },
    {
        id: 6,
        name: "Mathieu",
        content: "Super service ! Anaëlle est très soignée dans son travail et soucieuse des attentes clients.",
        rating: 5,
        badge: "Top Service",
    },
    {
        id: 7,
        name: "Anaïs",
        content: "Je recommande à 100% ! Le résultat est juste incroyable. Je recommande vivement les yeux fermés : tout est absolument au top, que ce soit la qualité du travail, le professionnalisme ou encore l'attention portée aux détails et au confort. On se sent vraiment entre de bonnes mains du début à la fin. Merci encore pour cette superbe expérience !",
        rating: 5,
        badge: "100%",
    },
    {
        id: 8,
        name: "Tressy",
        content: "Super service, mes dents sont super blanches. Ana a été très professionnelle et à l'écoute. Merci !",
        rating: 5,
        badge: "Pro",
    },
    {
        id: 9,
        name: "Lucie",
        content: "Je suis vraiment satisfaite du résultat, j'ai gagné 8 teintes en 2 séances. Je recommande l'équipe Prestige Smile !",
        rating: 5,
        badge: "8 Shades",
    },
    {
        id: 10,
        name: "Dojneta",
        content: "Très bonne expérience. Professionnelle et perfectionniste, merci pour ton travail et tes explications détaillées. Enfin de vrais résultats quand on sort d'une séance.",
        rating: 5,
        badge: "Real Results",
    },
    {
        id: 11,
        name: "Mélanie",
        content: "Résultat bluffant après un blanchiment au fauteuil (3 × 15 min). Dents beaucoup plus lumineuses, teinte uniforme, tâches disparues (environ 7 teintes gagnées). Anaëlle est consciencieuse et très professionnelle, avec une excellente protection des gencives. Intervention rapide pour un résultat exceptionnel. Je recommande.",
        rating: 5,
        badge: "7 Shades",
    },
];

export default function ReviewsPage() {
    return (
        <div className="overflow-x-hidden">
            <Header />
            <main className="bg-primary">
                {/* Hero Section */}
                <section className="bg-white px-4 py-16 md:px-8 md:py-20 lg:px-16">
                    <div className="mx-auto max-w-7xl text-center">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-sm font-medium uppercase tracking-widest text-tertiary"
                        >
                            Testimonials
                        </motion.p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-4 text-display-sm font-medium uppercase text-primary md:text-display-md lg:text-display-lg"
                            style={{ fontFamily: "var(--global-heading-font-family)" }}
                        >
                            What Our Clients Say
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mx-auto mt-4 max-w-2xl text-tertiary"
                        >
                            Real stories from our happy clients who transformed their smiles with Prestige Smile
                        </motion.p>
                    </div>
                </section>

                {/* Testimonials Masonry Grid */}
                <section className="bg-white px-4 pb-16 md:px-8 md:pb-20 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {/* Distribute testimonials across 3 columns horizontally */}
                            {[0, 1, 2].map((colIndex) => (
                                <div key={colIndex} className="flex flex-col gap-5">
                                    {testimonials
                                        .filter((_, i) => i % 3 === colIndex)
                                        .map((testimonial, index) => (
                                            <motion.div
                                                key={testimonial.id}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                                className="relative bg-white border border-gray-200  py-5 pl-6 pr-5 before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:bg-gradient-to-b before:from-amber-300 before:via-amber-400 before:to-amber-500 before:shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                                            >
                                                {/* Stars */}
                                                <div className="flex gap-0.5">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star01 key={i} className="size-4 fill-amber-400 text-amber-400" />
                                                    ))}
                                                </div>

                                                {/* Title from badge */}
                                                <h3 className="mt-4 text-base font-medium uppercase tracking-wide text-primary" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                                                    {testimonial.badge}
                                                </h3>

                                                {/* Quote */}
                                                <p className="mt-2 text-sm leading-relaxed text-tertiary">"{testimonial.content}"</p>

                                                {/* Author */}
                                                <div className="mt-5 flex items-center gap-3">
                                                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#f5efe9] text-base font-semibold text-[#8b6b5a]">
                                                        {testimonial.name.charAt(0).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-semibold text-primary">{testimonial.name}</div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Before & After Section */}
                <section className="bg-white px-4 py-12 md:px-8 md:py-16 lg:px-16">
                    <div className="mx-auto max-w-7xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <p className="text-sm font-medium uppercase tracking-widest text-tertiary">Transformations</p>
                            <h2 className="mt-4 text-display-xs font-medium uppercase text-primary md:text-display-sm lg:text-display-md" style={{ fontFamily: "var(--global-heading-font-family)" }}>
                                See the Results
                            </h2>
                            <p className="mx-auto mt-4 max-w-xl text-tertiary">
                                Real transformations from our clients. Results visible in just one session.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="mt-10 grid gap-6 md:grid-cols-2"
                        >
                            {[1, 3, 5, 7].map((beforeNum) => (
                                <div
                                    key={beforeNum}
                                    className="relative overflow-hidden rounded-2xl bg-primary shadow-lg"
                                >
                                    <div className="flex">
                                        {/* Before */}
                                        <div className="relative flex-1">
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={`/teeth before and after images/${beforeNum}.png`}
                                                    alt="Before treatment"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-3 left-3">
                                                <span className="rounded-full bg-black/70 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                                    Before
                                                </span>
                                            </div>
                                        </div>

                                        {/* Center Divider */}
                                        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
                                            <div className="flex size-10 items-center justify-center rounded-full border-2 border-white bg-brand-600 shadow-lg">
                                                <svg className="size-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8M8 12h8m-8 5h8M4 7h.01M4 12h.01M4 17h.01" />
                                                </svg>
                                            </div>
                                        </div>

                                        {/* After */}
                                        <div className="relative flex-1">
                                            <div className="aspect-square overflow-hidden">
                                                <img
                                                    src={`/teeth before and after images/${beforeNum + 1}.png`}
                                                    alt="After treatment"
                                                    className="size-full object-cover"
                                                />
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <span className="rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                                                    After
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <div className="mt-10 text-center">
                            <a
                                href="/booking"
                                className="inline-block border border-gray-900 bg-transparent px-8 py-3 text-sm font-medium uppercase text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white"
                            >
                                Book Your Session
                            </a>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
