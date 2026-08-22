"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Icon } from "./SvgIcons";
import { SearchModal } from "./SearchModal";

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="_header_a28f3_100" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
        <nav className="_nav_a28f3_105" style={{ backgroundColor: "#ffffff" }}>
          {/* Logo Left */}
          <div className="_navLeft_a28f3_137">
            <Link href="/" className="_link_a28f3_140 _logoLink_a28f3_280 header-logo" aria-label="Go to Northstar Factory homepage.">
              <video
                muted
                autoPlay
                loop
                playsInline
                disablePictureInPicture
                disableRemotePlayback
                className="_logo_a28f3_112"
                preload="auto"
              >
                <source src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/6ff5d039eae7e021d2d3a8bdde979b05d3ed41c8.webm" type="video/webm" />
                <source src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/182be13825d4fcb1996080e6bb3cfbbeb69c884f.mp4" type="video/mp4" />
                <source src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/f270e803561a5d242ee0f2467a6d00ef9db86358.mov" type="video/mov" />
              </video>
            </Link>
          </div>

          {/* Nav Right & Mobile Menu */}
          <div className="_navRight_a28f3_185">
            <div
              className={`_navMenu_a28f3_188 ${isMobileMenuOpen ? "_navMenuOpen_a28f3_active" : ""}`}
              style={
                isMobileMenuOpen
                  ? {
                      display: "flex",
                      flexDirection: "column",
                      position: "fixed",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "#000",
                      zIndex: 1000,
                      padding: "2rem 1.5rem",
                      overflowY: "auto",
                    }
                  : undefined
              }
            >
              {/* Main nav items */}
              <ul className="_links_a28f3_208 _links1_a28f3_220 _unstyledList_1eaei_2">
                <li className="_linkItem_a28f3_242 _showSM_a28f3_294">
                  <Link className="_link_a28f3_140" href="/" onClick={() => setIsMobileMenuOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="_linkItem_a28f3_242">
                  <Link className="_link_a28f3_140" href="/projects/" onClick={() => setIsMobileMenuOpen(false)}>
                    Projects
                  </Link>
                </li>
                <li className="_linkItem_a28f3_242 _showSM_a28f3_294">
                  <Link className="_link_a28f3_140" href="/press/" onClick={() => setIsMobileMenuOpen(false)}>
                    Press
                  </Link>
                </li>
                <li className="_linkItem_a28f3_242 _showSM_a28f3_294">
                  <Link className="_link_a28f3_140" href="/contact/" onClick={() => setIsMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
                <li className="_linkItem_a28f3_242" style={{ display: "flex", alignItems: "center" }}>
                  <button
                    type="button"
                    className="toggle"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsSearchOpen(true);
                    }}
                    aria-label="Open Search"
                    style={{
                      backgroundColor: "#000000",
                      color: "#ffffff",
                      borderRadius: "50%",
                      width: "36px",
                      height: "36px",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      alignSelf: "center",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      margin: "0 0 0 10px",
                    }}
                  >
                    <Icon id="icon-search" className="_searchIcon_a28f3_254" style={{ fill: "#ffffff", color: "#ffffff", width: "16px", height: "16px", margin: 0 }} />
                    <span className="_showSM_a28f3_294" style={{ color: "#ffffff", paddingLeft: "4px" }}>Search</span>
                  </button>
                </li>
              </ul>

              {/* External / Social Links (in mobile drawer) */}
              {isMobileMenuOpen && (
                <>
                  <ul className="_links_a28f3_208 _links2_a28f3_238 _showSM_a28f3_294 _unstyledList_1eaei_2" style={{ marginTop: "2rem" }}>
                    <li>
                      <a href="https://www.linkedin.com/company/x/" className="_link_a28f3_140 _linkSmall_a28f3_174" target="_blank" rel="noopener noreferrer">
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com/theteamatx" className="_link_a28f3_140 _linkSmall_a28f3_174" target="_blank" rel="noopener noreferrer">
                        X (not us)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/user/wesolveforx/" className="_link_a28f3_140 _linkSmall_a28f3_174" target="_blank" rel="noopener noreferrer">
                        YouTube
                      </a>
                    </li>
                  </ul>

                  <ul className="_links_a28f3_208 _showSM_a28f3_294 _unstyledList_1eaei_2" style={{ marginTop: "1rem" }}>
                    <li>
                      <a href="https://policies.google.com/" className="_link_a28f3_140 _linkSmall_a28f3_174" target="_blank" rel="noopener noreferrer">
                        Privacy &amp; Terms
                      </a>
                    </li>
                    <li>
                      <a href="https://about.google/" className="_link_a28f3_140 _linkSmall_a28f3_174" target="_blank" rel="noopener noreferrer">
                        Google
                      </a>
                    </li>
                    <li>
                      <a href="https://abc.xyz" className="_link_a28f3_140 _linkSmall_a28f3_174" target="_blank" rel="noopener noreferrer">
                        Alphabet
                      </a>
                    </li>
                  </ul>
                </>
              )}

              {/* Close Button on Mobile Drawer */}
              {isMobileMenuOpen && (
                <button
                  type="button"
                  className="_link_a28f3_140 _closeButton_a28f3_286 _showSM_a28f3_294 close"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  style={{ position: "absolute", top: "1.5rem", right: "1.5rem" }}
                >
                  <Icon id="icon-close" className="_closeIcon_a28f3_260" />
                </button>
              )}
            </div>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="_link_a28f3_140 _mobileMenuButton_a28f3_265 toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Icon id={isMobileMenuOpen ? "icon-close" : "icon-mobile-menu"} className="_mobileMenuIcon_a28f3_275" />
            </button>
          </div>
        </nav>
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
