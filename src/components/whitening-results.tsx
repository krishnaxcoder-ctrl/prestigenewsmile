"use client";

import { useEffect, useRef, useState } from "react";

const treatments = [
  {
    id: 1,
    session: "Single Session Treatment",
    price: "99",
    currency: "CHF/€",
    shades: 7,
    progressPercent: 78,
    before: "/before and after images/1.jpg",
    after: "/before and after images/2.png",
  },
  {
    id: 2,
    session: "Single Session Treatment",
    price: "99",
    currency: "CHF/€",
    shades: 7,
    progressPercent: 78,
    before: "/before and after images/4.jpg",
    after: "/before and after images/3.jpg",
  },
  {
    id: 3,
    session: "Two Session Treatment",
    price: "169",
    currency: "CHF/€",
    shades: 7,
    progressPercent: 85,
    before: "/before and after images/5.jpg",
    after: "/before and after images/6.png",
  },
  {
    id: 4,
    session: "Single Session Treatment",
    price: "99",
    currency: "CHF/€",
    shades: 7,
    progressPercent: 78,
    before: "/before and after images/7.jpg",
    after: "/before and after images/8.jpg",
  },
  {
    id: 5,
    session: "Two Session Treatment",
    price: "169",
    currency: "CHF/€",
    shades: 7,
    progressPercent: 85,
    before: "/before and after images/9.png",
    after: "/before and after images/10.png",
  },
  {
    id: 6,
    session: "Single Session Treatment",
    price: "99",
    currency: "CHF/€",
    shades: 7,
    progressPercent: 78,
    before: "/before and after images/11.webp",
    after: "/before and after images/12.webp",
  },
  {
    id: 7,
    session: "Two Session Treatment",
    price: "169",
    currency: "CHF/€",
    shades: 7,
    progressPercent: 85,
    before: "/before and after images/13.jpg",
    after: "/before and after images/14.jpg",
  },
];

export function WhiteningResults() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .wt-card {
          background: #ffffff;
          border: 0.5px solid rgba(0,0,0,0.1);
          border-radius: 2px;
          overflow: hidden;
          transition: transform 0.35s ease;
          opacity: 0;
          transform: translateY(24px);
        }

        .wt-card.visible {
          animation: fadeUp 0.7s ease forwards;
        }

        .wt-card:nth-child(2).visible {
          animation-delay: 0.15s;
        }

        .wt-card:hover {
          transform: translateY(-5px) !important;
        }

        .wt-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          padding: 14px 20px;
          background: linear-gradient(135deg, #b09080, #a08070);
          border: none;
          color: white;
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 8px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(176, 144, 128, 0.3);
        }

        .wt-cta:hover {
          background: linear-gradient(135deg, #a08070, #907060);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(176, 144, 128, 0.4);
        }

        .wt-cta:active {
          transform: translateY(0);
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes titleReveal {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .wt-title-anim {
          animation: titleReveal 0.8s ease forwards;
        }

        .wt-sub-anim {
          animation: titleReveal 0.8s 0.15s ease forwards;
          opacity: 0;
        }

        .wt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (max-width: 768px) {
          .wt-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        ref={sectionRef}
        style={{
          fontFamily: "'Jost', sans-serif",
          padding: "5rem 2rem",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <p className="wt-title-anim" style={{
          fontSize: 10,
          fontWeight: 500,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#b09080",
          textAlign: "center",
          marginBottom: "1rem",
          fontFamily: "'Jost', sans-serif",
        }}>
          Client Transformations
        </p>

        <h2 className="wt-title-anim" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 300,
          textAlign: "center",
          color: "#1a1a1a",
          lineHeight: 1.2,
          margin: "0 0 0.5rem",
          letterSpacing: "-0.01em",
        }}>
          Real Results,{" "}
          <em style={{ fontStyle: "italic", color: "#b09080" }}>Radiant Smiles</em>
        </h2>

        <p className="wt-sub-anim" style={{
          fontSize: 13,
          fontWeight: 300,
          textAlign: "center",
          color: "#888",
          letterSpacing: "0.05em",
          margin: "0 0 3rem",
          fontFamily: "'Jost', sans-serif",
        }}>
          See the transformations our clients have achieved with professional whitening
        </p>

        {/* Divider */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem", marginBottom: "3.5rem" }}>
          <div style={{ width: 60, height: 0.5, background: "#b09080", opacity: 0.5 }} />
          <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#b09080", opacity: 0.6 }} />
          <div style={{ width: 60, height: 0.5, background: "#b09080", opacity: 0.5 }} />
        </div>

        {/* Cards Grid */}
        <div className="wt-grid">
          {treatments.map((t) => (
            <div key={t.id} className={`wt-card${visible ? " visible" : ""}`}>
              {/* Before / After image area */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative" }}>
                {/* Before */}
                <div style={{
                  position: "relative",
                  height: 320,
                  overflow: "hidden",
                }}>
                  <img
                    src={t.before}
                    alt="Before treatment"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <span style={{ position: "absolute", top: 12, left: 12, fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: "rgba(0,0,0,0.5)", padding: "6px 12px", borderRadius: 2, backdropFilter: "blur(4px)" }}>
                    Before
                  </span>
                </div>

                {/* After */}
                <div style={{
                  position: "relative",
                  height: 320,
                  overflow: "hidden",
                }}>
                  <img
                    src={t.after}
                    alt="After treatment"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                  <span style={{ position: "absolute", top: 12, left: 12, fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", background: "#b09080", padding: "6px 12px", borderRadius: 2 }}>
                    After
                  </span>
                </div>

                {/* Center divider */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 2, height: "100%", background: "rgba(255,255,255,0.9)", zIndex: 2 }} />
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 36, height: 36, borderRadius: "50%",
                  background: "white", border: "2px solid #b09080",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 3, fontSize: 12, color: "#b09080", fontWeight: 500,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}>↔</div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.5rem 1.75rem 1.75rem", background: "linear-gradient(to bottom, #fafafa, #ffffff)" }}>
                {/* Session Badge & Price Row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.25rem" }}>
                  <span style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.12em", textTransform: "uppercase",
                    color: "#b09080", background: "transparent",
                    padding: "8px 14px", borderRadius: 20,
                    fontFamily: "'Jost', sans-serif",
                    border: "1.5px solid #b09080",
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#b09080" }} />
                    {t.session}
                  </span>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 400, color: "#1a1a1a", lineHeight: 1, letterSpacing: "-0.02em" }}>
                      {t.price}
                      <span style={{ fontSize: "0.9rem", color: "#b09080", fontFamily: "'Jost', sans-serif", fontWeight: 400, marginLeft: 4 }}>
                        {t.currency}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Results Stats */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "1.5rem",
                  padding: "1rem 1.25rem", marginBottom: "1.25rem",
                  background: "#f8f6f4", borderRadius: 12,
                  border: "1px solid rgba(176, 144, 128, 0.15)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "linear-gradient(135deg, #e8ddd5, #f5f0ec)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "2px solid #b09080"
                    }}>
                      <span style={{ fontSize: 16, fontWeight: 600, color: "#b09080" }}>✓</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a8a80", marginBottom: 2 }}>Results</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}>
                        Up to <strong style={{ color: "#b09080" }}>{t.shades} shades</strong> lighter
                      </div>
                    </div>
                  </div>
                  <div style={{ width: 1, height: 36, background: "rgba(176, 144, 128, 0.2)" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flex: 1 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "linear-gradient(135deg, #e8ddd5, #f5f0ec)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      border: "2px solid #b09080"
                    }}>
                      <span style={{ fontSize: 14, color: "#b09080" }}>⏱</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#9a8a80", marginBottom: 2 }}>Duration</div>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 400, color: "#1a1a1a" }}>
                        <strong style={{ color: "#b09080" }}>60</strong> minutes
                      </div>
                    </div>
                  </div>
                </div>

                <button className="wt-cta">
                  Book Your Session
                  <span style={{ marginLeft: 8, transition: "transform 0.2s" }}>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p style={{ textAlign: "center", marginTop: "3rem", fontSize: 11, color: "#aaa", letterSpacing: "0.08em" }}>
          Individual results may vary &nbsp;·&nbsp; All treatments performed by certified professionals
        </p>
      </section>
    </>
  );
}

export default WhiteningResults;
