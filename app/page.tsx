"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { PROJECT_TILES, ProjectTile } from "@/data/projectsData";

function renderAnimatedText(
  text: string,
  startDelayMs: number,
  stepMs: number,
  durationMs: number = 400
) {
  const words = text.split(" ");
  let currentDelay = startDelayMs;

  return words.map((word, wIdx) => {
    const letters = word.split("");
    const letterElements = letters.map((char, cIdx) => {
      const delay = currentDelay;
      currentDelay += stepMs;
      return (
        <span
          key={`${wIdx}-${cIdx}`}
          style={{
            animationDelay: `${delay}ms`,
            animationDuration: `${durationMs}ms`,
          }}
        >
          {char}
        </span>
      );
    });

    return (
      <React.Fragment key={wIdx}>
        <span>{letterElements}</span>{" "}
      </React.Fragment>
    );
  });
}

export default function ProjectsLandingPage() {
  return (
    <div style={{ backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh", paddingTop: "120px", paddingBottom: "120px" }}>
      {/* Header Container */}
      <section style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "32px", paddingRight: "32px" }}>
        {/* Title */}
        <h1
          style={{
            fontSize: "clamp(38px, 5.2vw, 64px)",
            fontWeight: 500,
            lineHeight: 1.15,
            letterSpacing: "-0.03em",
            marginBottom: "24px",
            color: "#000000",
            fontFamily: "var(--font-family-display), 'Google Sans', sans-serif",
          }}
        >
          <span
            style={{
              display: "block",
              fontSize: "clamp(20px, 2.4vw, 30px)",
              fontWeight: 400,
              color: "#555555",
              letterSpacing: "-0.01em",
              marginBottom: "8px",
            }}
          >
            {renderAnimatedText("Welcome to,", 100, 25, 400)}
          </span>
          <span>{renderAnimatedText("The Northstar Factory", 400, 25, 400)}</span>
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "clamp(18px, 2.2vw, 24px)",
            lineHeight: 1.45,
            color: "#1a1a1a",
            maxWidth: "760px",
            marginBottom: "48px",
            fontFamily: "var(--font-family-text), 'Google Sans', sans-serif",
          }}
        >
          We are solving some of the world’s hardest problems by turning sci-fi possibilities into reality.
        </p>

        {/* 6 Projects 3-Column Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="projects-responsive-grid"
        >
          {PROJECT_TILES.map((tile) => (
            <ProjectGridCard key={tile.id} tile={tile} />
          ))}
        </div>
      </section>

      {/* Media Query Styling for Responsive Viewports */}
      <style jsx global>{`
        @media (max-width: 991px) {
          .projects-responsive-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .projects-responsive-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}

function ProjectGridCard({ tile }: { tile: ProjectTile }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const displayName = tile.name || tile.id.replace(/-/g, " ");

  return (
    <div
      className="project-grid-card"
      role={tile.websiteUrl ? "button" : undefined}
      tabIndex={tile.websiteUrl ? 0 : undefined}
      aria-label={tile.ariaLabel}
      style={{
        display: "block",
        position: "relative",
        aspectRatio: "3 / 4",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#000000",
        textDecoration: "none",
        color: "#ffffff",
        transition: "transform 0.35s ease, box-shadow 0.35s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: isHovered ? "0 20px 40px rgba(0,0,0,0.25)" : "0 4px 14px rgba(0,0,0,0.06)",
        cursor: tile.websiteUrl ? "pointer" : "default",
      }}
      onClick={() => {
        if (tile.websiteUrl) {
          window.open(tile.websiteUrl, "_blank", "noopener,noreferrer");
        }
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* 1. Base Image Media (Default View) */}
      {tile.imageSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={tile.imageSrc}
          alt={displayName}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      ) : (
        <div style={{ width: "100%", height: "100%", backgroundColor: tile.color || "#111111" }} />
      )}

      {/* Subtle Default Top Vignette for Title Readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0) 100%)",
          pointerEvents: "none",
          opacity: isHovered ? 0 : 1,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* 2. Default Title (Shown over image when not hovered) */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          padding: "32px 30px",
          zIndex: 2,
          opacity: isHovered ? 0 : 1,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      >
        <h3
          style={{
            fontSize: "clamp(22px, 2vw, 26px)",
            fontWeight: 400,
            lineHeight: 1.2,
            color: "#ffffff",
            margin: 0,
            textShadow: "0 1px 4px rgba(0,0,0,0.6)",
            fontFamily: "var(--font-family-display), 'Google Sans', sans-serif",
            letterSpacing: "-0.01em",
          }}
        >
          {displayName}
        </h3>
      </div>

      {/* 3. Full-Black Hover Card Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "#000000",
          opacity: isHovered ? 1 : 0,
          transition: "opacity 0.35s ease-out",
          padding: "36px 30px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          zIndex: 10,
          boxSizing: "border-box",
        }}
      >
        {/* Hover Content Top: Title & Detailed Description */}
        <div>
          <h3
            style={{
              fontSize: "clamp(22px, 2vw, 26px)",
              fontWeight: 400,
              lineHeight: 1.2,
              color: "#ffffff",
              margin: 0,
              fontFamily: "var(--font-family-display), 'Google Sans', sans-serif",
              letterSpacing: "-0.01em",
            }}
          >
            {displayName}
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: 1.45,
              color: "rgba(255, 255, 255, 0.9)",
              marginTop: "24px",
              marginBottom: 0,
              fontFamily: "var(--font-family-text), 'Google Sans', sans-serif",
              fontWeight: 400,
            }}
          >
            {tile.desc}
          </p>
        </div>

        {/* Hover Content Bottom: Only shown if websiteUrl exists */}
        {tile.websiteUrl && (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "100%",
              marginTop: "auto",
            }}
          >
            <a
              href={tile.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-website-btn"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "12px",
                fontWeight: 600,
                padding: "8px 16px",
                borderRadius: "100px",
                textDecoration: "none",
                color: "#000000",
                backgroundColor: "#ffffff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.35)",
                transition: "all 0.2s ease",
                cursor: "pointer",
              }}
            >
              <span>Visit website</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
