"use client";

import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header className="_header_a28f3_100" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
      <nav className="_nav_a28f3_105" style={{ backgroundColor: "#ffffff", justifyContent: "space-between" }}>
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
      </nav>
    </header>
  );
}
