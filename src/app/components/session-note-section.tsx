export function SessionNoteSection() {
    return (
        <section className="bg-[#e8e2dc] px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto max-w-md">
                {/* Note card */}
                <div className="relative">
                    {/* Paperclip */}
                    <div className="absolute -top-4 right-12 z-10">
                        <svg width="32" height="64" viewBox="0 0 32 64" fill="none" className="text-[#9a9a9a] drop-shadow-sm">
                            <path
                                d="M16 4 C8 4, 4 8, 4 16 L4 48 C4 56, 8 60, 16 60 C24 60, 28 56, 28 48 L28 16 C28 10, 24 6, 20 6 C16 6, 12 10, 12 16 L12 44"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>

                    {/* Shadow behind card */}
                    <div className="absolute -bottom-2 -right-2 h-full w-full rounded-sm bg-[#c9c1b8]" />

                    {/* Card */}
                    <div className="relative rounded-sm bg-[#faf8f6] px-8 py-10 shadow-lg sm:px-10 sm:py-12">
                        {/* Title */}
                        <p
                            className="text-[18px] italic text-[#5a4639] sm:text-[20px]"
                            style={{ fontFamily: "'Eyesome Script', cursive" }}
                        >
                            D&eacute;roulement de la s&eacute;ance :
                        </p>

                        {/* Items */}
                        <div className="mt-5 space-y-5">
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 text-[18px]">&#11088;</span>
                                <p
                                    className="text-[15px] italic leading-relaxed text-[#5a4639] sm:text-[16px]"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Soin esth&eacute;tique professionnel
                                </p>
                            </div>

                            <p
                                className="text-[15px] italic leading-relaxed text-[#5a4639] sm:text-[16px]"
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            >
                                D&eacute;tartrage conseill&eacute; 1 &agrave; 2 mois
                                <br />
                                avant la s&eacute;ance
                            </p>

                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 text-[18px]">&#128147;</span>
                                <p
                                    className="text-[15px] italic leading-relaxed text-[#5a4639] sm:text-[16px]"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Sensibilit&eacute; transitoire possible
                                </p>
                            </div>

                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 text-[18px]">&#128142;</span>
                                <p
                                    className="text-[15px] italic leading-relaxed text-[#5a4639] sm:text-[16px]"
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                >
                                    Un sourire sain = r&eacute;sultat
                                    <br />
                                    optimal
                                </p>
                            </div>
                        </div>

                        {/* Signature */}
                        <p
                            className="mt-8 text-right text-[22px] text-[#8b6b5a] sm:text-[24px]"
                            style={{ fontFamily: "'Eyesome Script', cursive" }}
                        >
                            Ana&euml;lle
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
