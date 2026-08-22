import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="_footer_152da_100" style={{ paddingTop: "2.5rem", marginTop: 0, borderTop: "none" }}>
      <div className="_footerContent_152da_113">
        <div className="_footerLinks_152da_150">
          <div>
            <Link href="/" className="_link_152da_190 _logoLink_152da_220" aria-label="Go to X homepage.">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-dark.svg" alt="X Logo Dark" className="_logo_152da_129 _logoDark_152da_129" />
            </Link>
          </div>

          <div className="_footerRight_152da_171">
            <ul className="_links_152da_190 _linksHideSM_152da_236 _unstyledList_1eaei_2">
              <li>
                <Link href="/contact/" className="_link_152da_190">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/press/" className="_link_152da_190">
                  Press
                </Link>
              </li>
            </ul>

            <ul className="_links_152da_190 _unstyledList_1eaei_2">
              <li>
                <a
                  href="https://policies.google.com/"
                  className="_link_152da_190 _linkDividerSM_152da_224"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy &amp; Terms
                </a>
              </li>
              <li>
                <a
                  href="https://about.google/"
                  className="_link_152da_190 _linkDividerSM_152da_224"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google
                </a>
              </li>
              <li>
                <a
                  href="https://abc.xyz"
                  className="_link_152da_190 _linkDividerSM_152da_224"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Alphabet
                </a>
              </li>
            </ul>

            <ul className="_links_152da_190 _linksHideSM_152da_236 _unstyledList_1eaei_2">
              <li>
                <a
                  href="https://www.linkedin.com/company/x/"
                  className="_link_152da_190"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.twitter.com/theteamatx"
                  className="_link_152da_190"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  X (not us)
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/wesolveforx/"
                  className="_link_152da_190"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="_smallText_152da_175">© Northstar-Factory. All rights reserved.</div>
      </div>
    </footer>
  );
}
