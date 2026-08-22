"use client";

import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className="_footer_152da_100"
      style={{
        paddingTop: "2.5rem",
        paddingBottom: "2.5rem",
        marginTop: 0,
        borderTop: "none",
        backgroundColor: "#ffffff",
        color: "#000000",
      }}
    >
      <div className="_footerContent_152da_113" style={{ maxWidth: "1280px", margin: "0 auto", paddingLeft: "32px", paddingRight: "32px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1.5rem",
            width: "100%",
          }}
        >
          {/* Left: Brand Logo */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <Link href="/" className="_link_152da_190 _logoLink_152da_220" aria-label="Go to Northstar Factory homepage.">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo-dark.svg"
                alt="Northstar Factory Logo"
                className="_logo_152da_129 _logoDark_152da_129"
                style={{ height: "32px", width: "auto", display: "block" }}
              />
            </Link>
          </div>

          {/* Right: One-Line Contact Email & Social Icons */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            {/* Contact Mail in the same line */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: 600,
                  color: "#000000",
                  fontFamily: "var(--font-family-display), 'Google Sans', sans-serif",
                }}
              >
                Contact:
              </span>
              <a
                href="mailto:info@northstar-factory.com"
                className="footer-email-link"
                style={{
                  fontSize: "15px",
                  color: "#1a1a1a",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontFamily: "var(--font-family-text), 'Google Sans', sans-serif",
                  transition: "color 0.2s ease, opacity 0.2s ease",
                }}
              >
                info@northstar-factory.com
              </a>
            </div>

            {/* Subtle Divider between email & social icons on wide screens */}
            <span style={{ color: "#d1d5db", fontSize: "14px", userSelect: "none" }}>|</span>

            {/* Social Media Icons (LinkedIn, YouTube, X) */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
              {/* LinkedIn Icon */}
              <a
                href="https://www.linkedin.com/company/x/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="footer-social-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" style={{ display: "block" }}>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* YouTube Icon */}
              <a
                href="https://www.youtube.com/user/wesolveforx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="footer-social-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#ffffff" style={{ display: "block" }}>
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>

              {/* X (Twitter) Icon */}
              <a
                href="https://www.twitter.com/theteamatx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                title="X"
                className="footer-social-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  backgroundColor: "#000000",
                  color: "#ffffff",
                  textDecoration: "none",
                  transition: "transform 0.2s ease, opacity 0.2s ease, background-color 0.2s ease",
                  flexShrink: 0,
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#ffffff" style={{ display: "block" }}>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright notice */}
        <div
          className="_smallText_152da_175"
          style={{
            marginTop: "2rem",
            fontSize: "13px",
            color: "#6b7280",
            fontFamily: "var(--font-family-text), 'Google Sans', sans-serif",
          }}
        >
          © Northstar-Factory. All rights reserved.
        </div>
      </div>

      <style jsx>{`
        .footer-email-link:hover {
          text-decoration: underline !important;
          color: #000000 !important;
          opacity: 0.8;
        }
        .footer-social-btn:hover {
          transform: translateY(-2px);
          opacity: 0.85;
          background-color: #222222 !important;
        }
      `}</style>
    </footer>
  );
}
