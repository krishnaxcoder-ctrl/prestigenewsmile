const sessionNotes = [
    { icon: "\u2728", text: "Soin esth\u00e9tique professionnel" },
    { icon: "\ud83e\uddbc", text: "D\u00e9tartrage conseill\u00e9 1 \u00e0 2 mois avant la s\u00e9ance" },
    { icon: "\ud83d\udc97", text: "Sensibilit\u00e9 transitoire possible" },
    { icon: "\ud83d\udc8e", text: "Un sourire sain = r\u00e9sultat optimal" },
];

export function SessionNoteSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#ece5de] via-[#e8e2dc] to-[#ddd3c8] px-4 py-20 md:px-8 md:py-28">
            {/* Ambient glow */}
            <div className="pointer-events-none absolute -top-24 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#f5efe7_0%,transparent_70%)] opacity-60" />
            <div className="pointer-events-none absolute -bottom-32 right-0 size-[380px] rounded-full bg-[radial-gradient(circle,#d4b5a0_0%,transparent_70%)] opacity-25" />

            <div className="relative mx-auto max-w-md">
                {/* Section label */}
                <div className="mb-10 text-center">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#8b6b5a]">A personal note</p>
                    <div className="mx-auto mt-3 h-px w-16 bg-gradient-to-r from-transparent via-[#8b6b5a]/60 to-transparent" />
                </div>

                {/* Note card stack */}
                <div className="relative transition-transform duration-500">
                    {/* Washi tape */}
                    <div className="absolute -top-4 left-1/2 z-20 h-7 w-28 -translate-x-1/2 rotate-[-4deg] bg-gradient-to-r from-[#d4b5a0]/70 via-[#e8d4c4]/80 to-[#d4b5a0]/70 shadow-[0_2px_6px_rgba(0,0,0,0.08)]">
                        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,transparent,transparent_6px,rgba(255,255,255,0.25)_6px,rgba(255,255,255,0.25)_8px)]" />
                    </div>

                    {/* Layered paper shadows */}
                    <div className="absolute -bottom-3 -right-3 h-full w-full rotate-[2deg] rounded-[6px] bg-[#c9bdb0]/50" />
                    <div className="absolute -bottom-1.5 -right-1.5 h-full w-full rotate-[1deg] rounded-[6px] bg-[#d9cdc0]/80" />

                    {/* Main card */}
                    <div className="relative overflow-hidden rounded-[6px] bg-gradient-to-br from-[#fdfaf6] via-[#faf6f0] to-[#f5ede3] px-8 py-12 shadow-[0_20px_50px_-10px_rgba(90,70,57,0.25)] sm:px-12 sm:py-14">
                        {/* Paper texture */}
                        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#5a4639_1px,transparent_1px)] [background-size:14px_14px]" />
                        {/* Top gold accent */}
                        <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[#c9a37a] to-transparent" />

                        {/* Title */}
                        <div className="relative mb-2 text-center">
                            <p
                                className="text-[22px] italic text-[#5a4639] sm:text-[26px]"
                                style={{ fontFamily: "'Eyesome Script', 'Great Vibes', cursive" }}
                            >
                                Déroulement de la séance
                            </p>
                            <div className="mx-auto mt-3 flex items-center justify-center gap-2">
                                <span className="h-px w-10 bg-[#c9a37a]/50" />
                                <span className="size-1.5 rotate-45 border border-[#c9a37a]/70" />
                                <span className="h-px w-10 bg-[#c9a37a]/50" />
                            </div>
                        </div>

                        {/* Items */}
                        <ul className="relative mt-8 space-y-5">
                            {sessionNotes.map((note, i) => (
                                <li key={i} className="group flex items-start gap-4">
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#f5ede3] to-[#e8d4c4] text-[16px] shadow-[inset_0_1px_2px_rgba(255,255,255,0.6),0_2px_4px_rgba(90,70,57,0.1)] ring-1 ring-[#c9a37a]/20">
                                        {note.icon}
                                    </span>
                                    <p
                                        className="flex-1 pt-1.5 text-[15px] italic leading-relaxed text-[#5a4639] sm:text-[16px]"
                                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    >
                                        {note.text}
                                    </p>
                                </li>
                            ))}
                        </ul>

                        {/* Signature */}
                        <div className="relative mt-10 flex flex-col items-end">
                            <p
                                className="text-[28px] leading-none text-[#8b6b5a] sm:text-[32px]"
                                style={{ fontFamily: "'Eyesome Script', 'Great Vibes', cursive" }}
                            >
                                Anaëlle
                            </p>
                            <svg className="mt-1 h-3 w-28 text-[#c9a37a]" viewBox="0 0 120 12" fill="none" preserveAspectRatio="none">
                                <path d="M2 8 C20 2, 40 10, 60 6 C80 2, 100 9, 118 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                            </svg>
                            <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-[#8b6b5a]/70">Votre praticienne</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SessionNoteSection;
