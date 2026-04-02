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
  },
];

function TeethSVG({ variant }: { variant: "before" | "after" }) {
  const isBefore = variant === "before";
  const topColors = isBefore
    ? ["#d4c4a8", "#cfc0a2", "#d4c4a8", "#cfc0a2", "#d4c4a8"]
    : ["#f8f5f0", "#faf8f5", "#fdfcfb", "#faf8f5", "#f8f5f0"];
  const bottomColors = isBefore
    ? ["#cfc0a2", "#d4c4a8", "#cfc0a2", "#d4c4a8", "#cfc0a2"]
    : ["#faf8f5", "#f8f5f0", "#fdfcfb", "#f8f5f0", "#faf8f5"];
  const strokeColors = isBefore
    ? ["#c0b090", "#b8a882", "#c0b090", "#b8a882", "#c0b090"]
    : ["#e8e0d5", "#ece5dc", "#f0e8e0", "#ece5dc", "#e8e0d5"];

  const topX = [5, 26, 45, 62, 81];
  const topY = [10, 6, 4, 6, 10];
  const topW = [18, 16, 14, 16, 18];
  const topH = [26, 30, 32, 30, 26];

  const botX = [5, 26, 45, 62, 81];
  const botY = [44, 42, 40, 42, 44];
  const botW = [18, 16, 14, 16, 18];
  const botH = [24, 26, 28, 26, 24];

  return (
    <svg
      viewBox="0 0 110 80"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: 110,
      }}
    >
      {topX.map((x, i) => (
        <rect
          key={`top-${i}`}
          x={x}
          y={topY[i]}
          width={topW[i]}
          height={topH[i]}
          rx={4}
          fill={topColors[i]}
          stroke={strokeColors[i]}
          strokeWidth={0.5}
        />
      ))}
      {botX.map((x, i) => (
        <rect
          key={`bot-${i}`}
          x={x}
          y={botY[i]}
          width={botW[i]}
          height={botH[i]}
          rx={4}
          fill={bottomColors[i]}
          stroke={strokeColors[i]}
          strokeWidth={0.5}
        />
      ))}
      <rect
        x={0}
        y={36}
        width={110}
        height={6}
        fill={isBefore ? "#c5a898" : "#e8ddd5"}
        opacity={0.4}
      />
    </svg>
  );
}

function ShadeBar({ percent }: { percent: number }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(percent), 400);
    return () => clearTimeout(timeout);
  }, [percent]);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: "1rem" }}>
      <span style={labelStyle}>Whitening</span>
      <div
        style={{
          flex: 1,
          height: 5,
          borderRadius: 3,
          background: "linear-gradient(to right, #c5a898, #f5f0ec)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "100%",
            borderRadius: 3,
            background: "linear-gradient(to right, #c5a898, #e8ddd5)",
            width: `${width}%`,
            transition: "width 1.2s cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        />
      </div>
      <span style={{ ...labelStyle, color: "#b09080" }}>7 shades</span>
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontSize: 9,
  fontWeight: 500,
  letterSpacing: "0.2em",
  textTransform: "uppercase",
  color: "#9a8a80",
  whiteSpace: "nowrap",
  fontFamily: "'Jost', sans-serif",
};

export default function WhiteningResults() {
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
          display: block;
          width: 100%;
          text-align: center;
          padding: 10px;
          background: transparent;
          border: 0.5px solid #b09080;
          color: #b09080;
          font-family: 'Jost', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 1px;
          transition: background 0.2s, color 0.2s;
        }

        .wt-cta:hover {
          background: #b09080;
          color: white;
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
      `}</style>

      <section
        ref={sectionRef}
        style={{
          fontFamily: "'Jost', sans-serif",
          padding: "5rem 2rem",
          maxWidth: 920,
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
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "2rem",
        }}>
          {treatments.map((t) => (
            <div key={t.id} className={`wt-card${visible ? " visible" : ""}`}>
              {/* Before / After image area */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", position: "relative" }}>
                {/* Before */}
                <div style={{
                  position: "relative",
                  height: 220,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #e8ddd5 0%, #d4c4b8 50%, #c5b5a8 100%)",
                }}>
                  <span style={{ position: "absolute", top: 12, left: 12, fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a7a70", background: "rgba(255,255,255,0.75)", padding: "4px 8px", borderRadius: 1 }}>
                    Before
                  </span>
                  <TeethSVG variant="before" />
                </div>

                {/* After */}
                <div style={{
                  position: "relative",
                  height: 220,
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #f5f0ec 0%, #ede8e4 50%, #f8f5f3 100%)",
                }}>
                  <span style={{ position: "absolute", top: 12, left: 12, fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#8a7a70", background: "rgba(255,255,255,0.75)", padding: "4px 8px", borderRadius: 1 }}>
                    After
                  </span>
                  <TeethSVG variant="after" />
                </div>

                {/* Center divider */}
                <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: 1, height: "100%", background: "rgba(255,255,255,0.8)", zIndex: 2 }} />
                <div style={{
                  position: "absolute", top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 28, height: 28, borderRadius: "50%",
                  background: "white", border: "0.5px solid #d4c4b8",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 3, fontSize: 9, color: "#b09080", fontWeight: 500,
                }}>↔</div>
              </div>

              {/* Card Body */}
              <div style={{ padding: "1.25rem 1.5rem 1.5rem", borderTop: "0.5px solid rgba(0,0,0,0.08)" }}>
                <span style={{
                  display: "inline-block", fontSize: 9, fontWeight: 500,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "#b09080", marginBottom: "1rem",
                  fontFamily: "'Jost', sans-serif",
                }}>
                  {t.session}
                </span>

                <ShadeBar percent={t.progressPercent} />

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={labelStyle}>Price</span>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, color: "#1a1a1a", lineHeight: 1 }}>
                      {t.price}
                      <span style={{ fontSize: "0.85rem", color: "#b09080", fontFamily: "'Jost', sans-serif", fontWeight: 300, marginLeft: 2 }}>
                        {t.currency}
                      </span>
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                    <span style={labelStyle}>Results</span>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 300, color: "#1a1a1a", lineHeight: 1 }}>
                      {t.shades}
                      <span style={{ fontSize: "0.85rem", color: "#b09080", fontFamily: "'Jost', sans-serif", fontWeight: 300, marginLeft: 2 }}>
                        shades lighter
                      </span>
                    </div>
                  </div>
                </div>

                <button className="wt-cta">
                  Book Your Session →
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
