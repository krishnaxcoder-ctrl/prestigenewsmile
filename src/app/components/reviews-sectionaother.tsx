"use client";

import { Star01 } from "@untitledui/icons";
import { useEffect, useCallback, useState } from "react";

const testimonials = [
    { id: 1, name: "Mélanie", date: "04 July, 2025", avatar: "/avatar1.png", title: "A Real Confidence Boost", content: "I'm honestly so impressed with the results of my teeth whitening session! I noticed a visible difference right after the treatment, my teeth look so much brighter but still natural. The entire process was comfortable, and the team made me feel at ease from start to finish. Highly recommend for anyone wanting a confidence boost in their smile!", rating: 5 },
    { id: 2, name: "Leyna Gonzalez", date: "02 July, 2025", avatar: "/avatar2.webp", title: "Un Sourire Incroyable", content: "Merci pour ta performance exceptionnelle ! Je suis absolument ravie du résultat, j'ai aujourd'hui un sourire incroyable, plus lumineux et plein de confiance. L'expérience a été très agréable du début à la fin, avec beaucoup de professionnalisme et d'attention aux détails. On sent vraiment la passion dans ton travail. Continue comme ça, tu fais un travail remarquable!", rating: 5 },
    { id: 3, name: "Gianni Di Dio", date: "", avatar: "/avatar1.png", title: "", content: "Un grand merci à Anaëlle pour l'accueil, son professionnalisme. Explique bien les procédures. Très précises dans son travail. Dents blanches dès la première séance. Après 2 séances, il y a une grande différence avec des dents éclatantes. Prix très abordable. Je recommande vivement.", rating: 5 },
    { id: 4, name: "Hamza Khouadra", date: "", avatar: "/avatar2.webp", title: "", content: "Un service 5 étoiles, impeccable et très professionnel. Vous pouvez y aller les yeux fermés. Je suis très satisfait du résultat et je reviendrai sans aucun doute Merci beaucoup !", rating: 5 },
    { id: 5, name: "Pierre Nivoliez", date: "", avatar: "/avatar1.png", title: "", content: "Anaelle est très attentionnée et professionnelle. Bonne expérience, je recommande ses services.", rating: 5 },
    { id: 6, name: "Houda Rhoualem", date: "", avatar: "/avatar2.webp", title: "", content: "J'ai réalisé un blanchiment dentaire chez Anaëlle et je suis absolument ravie du résultat ! Elle est très professionnelle, douce et à l'écoute. Elle a pris le temps de bien expliquer chaque étape du soin et de répondre à toutes mes questions, le résultat est naturel et visible dès la première séance. Le cadre est propre, agréable et très apaisant. Je recommande sans hésiter à toute personne souhaitant un sourire plus éclatant tout en passant un moment agréable.", rating: 5 },
    { id: 7, name: "Jessy Collard", date: "", avatar: "/avatar1.png", title: "", content: "Très satisfait de mon expérience chez Prestige Smile. Prestation professionnelle, explications claires et résultat visible dès la première séance, sans douleur.", rating: 5 },
    { id: 8, name: "Mathieu", date: "", avatar: "/avatar1.png", title: "", content: "Super service ! Anaëlle est très soignée dans son travail et soucieuse des attentes clients.", rating: 5 },
    { id: 9, name: "Anaïs Mouttet", date: "", avatar: "/avatar2.webp", title: "", content: "Je recommande à 100%! Le résultat est juste incroyable. Je recommande vivement les yeux fermés : tout est absolument au top, que ce soit la qualité du travail, le professionnalisme ou encore l'attention portée aux détails et au confort. On se sent vraiment entre de bonnes mains du début à la fin. Merci encore pour cette superbe expérience !", rating: 5 },
    { id: 10, name: "Tressy Fantasia", date: "", avatar: "/avatar1.png", title: "", content: "Super service mes dents sont super blanche, Et Ana été très professionnel et à l'écoute. Merci", rating: 5 },
    { id: 11, name: "Lucie Dumont", date: "", avatar: "/avatar2.webp", title: "", content: "Je suis vraiment satisfaite du résultat, j'ai gagné 8 teintes en 2 séances, je recommande l'équipe prestige smile !", rating: 5 },
    { id: 12, name: "Dojneta", date: "", avatar: "/avatar1.png", title: "", content: "Très bonne expérience. Professionnelle et perfectionniste, merci pour ton travail et tes explications détaillées. Enfin de vrais résultats quand on sort d'une séance..", rating: 5 },
    { id: 13, name: "Mélanie Favre-Bonvin", date: "", avatar: "/avatar2.webp", title: "", content: "Résultat bluffant après un blanchiment au fauteuil (3 × 15 min). Dents beaucoup plus lumineuses, teinte uniforme, tâches disparues (environ 7 teintes gagnées). Anaëlle est consciencieuse et très professionnelle, avec une excellente protection des gencives. Intervention rapide pour un résultat exceptionnel. Je recommande", rating: 5 },
];

// Group testimonials into pairs
function getPairs<T>(arr: T[]): T[][] {
    const pairs: T[][] = [];
    for (let i = 0; i < arr.length; i += 2) {
        pairs.push(arr.slice(i, i + 2));
    }
    return pairs;
}

export function ReviewsSection() {
    const pairs = getPairs(testimonials);
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goToNext = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((prev) => (prev + 1) % pairs.length);
            setIsTransitioning(false);
        }, 300);
    }, [pairs.length]);

    const goToPrev = useCallback(() => {
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrent((prev) => (prev - 1 + pairs.length) % pairs.length);
            setIsTransitioning(false);
        }, 300);
    }, [pairs.length]);

    // Auto-advance every 5 seconds
    useEffect(() => {
        const interval = setInterval(goToNext, 5000);
        return () => clearInterval(interval);
    }, [goToNext]);

    const currentPair = pairs[current];

    return (
        <section className="bg-[#faf8f6] px-4 py-16 md:px-8 md:py-20 lg:px-16">
            <div className="mx-auto max-w-[1400px]">
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[400px_1fr] lg:gap-16">
                    {/* Left Side - Heading */}
                    <div>
                        <p className="text-sm font-medium uppercase tracking-widest text-brand-600">Testimonial</p>

                        <h2 className="mt-3 text-display-sm font-medium text-primary md:text-display-md lg:text-display-lg" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                            What Our <br className="hidden lg:block" />
                            <span className="italic text-brand-600">Clients Say</span>
                        </h2>

                          <p className="mt-6 text-sm leading-relaxed text-gray-500">
                            Discover why hundreds of clients trust us for their smile transformation journey.
                        </p>

                        <a
                            href="/reviews"
                            className="mt-8 hidden items-center gap-2 border border-brand-600 bg-transparent px-8 py-3 text-sm font-medium uppercase text-brand-600 transition duration-200 ease-linear hover:bg-brand-600 hover:text-white lg:inline-flex"
                        >
                            View All Reviews
                            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right Side - Carousel */}
                    <div>
                        <div className={`grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-5 md:gap-y-8 transition-opacity duration-300 ${isTransitioning ? "opacity-0" : "opacity-100"}`}>
                            {currentPair.map((testimonial) => (
                                <div key={testimonial.id} className="relative flex h-72 flex-col bg-white border border-gray-200 py-5 pl-6 pr-5 before:absolute before:inset-y-0 before:left-0 before:w-1 before:rounded-full before:bg-gradient-to-b before:from-[#e8ddd5] before:via-[#d4c4b8] before:to-[#c5b5a8]">
                                    {/* Content */}
                                    <p className="flex-1 overflow-hidden text-sm leading-relaxed text-tertiary line-clamp-6">
                                        {testimonial.content}
                                    </p>

                                    {/* Author & Stars */}
                                    <div className="mt-5 flex items-center gap-3">
                                        {testimonial.id <= 2 ? (
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="size-14 shrink-0 rounded-full object-cover"
                                            />
                                        ) : (
                                            <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-[#f5efe9] text-xl font-semibold text-[#8b6b5a]">
                                                {testimonial.name.charAt(0).toUpperCase()}
                                            </div>
                                        )}
                                        <div className="flex-1">
                                            <div className="text-base font-semibold text-primary">{testimonial.name}</div>
                                            {testimonial.date && <div className="text-xs text-brand-600">{testimonial.date}</div>}
                                        </div>
                                        <div className="flex gap-0.5">
                                            {[...Array(testimonial.rating)].map((_, i) => (
                                                <Star01 key={i} className="size-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Carousel Controls */}
                        <div className="mt-6 flex items-center justify-between">
                            {/* Dots */}
                            <div className="flex gap-2">
                                {pairs.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => { setIsTransitioning(true); setTimeout(() => { setCurrent(i); setIsTransitioning(false); }, 300); }}
                                        className={`size-2.5 rounded-full transition-all duration-200 ${i === current ? "bg-brand-600 w-6 rounded-full" : "bg-[#d4c4b8]"}`}
                                    />
                                ))}
                            </div>

                            {/* Arrows */}
                            <div className="flex gap-2">
                                <button onClick={goToPrev} className="flex size-10 items-center justify-center border border-gray-200 bg-white transition duration-100 ease-linear hover:bg-gray-50">
                                    <svg className="size-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <button onClick={goToNext} className="flex size-10 items-center justify-center border border-gray-200 bg-white transition duration-100 ease-linear hover:bg-gray-50">
                                    <svg className="size-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile View All Button */}
                <div className="mt-8 text-center lg:hidden">
                    <a
                        href="/reviews"
                        className="block w-full border border-gray-900 bg-transparent px-8 py-3 text-center text-sm font-medium uppercase text-gray-900 transition duration-100 ease-linear hover:bg-gray-900 hover:text-white"
                    >
                        View All
                    </a>
                </div>
            </div>
        </section>
    );
}
