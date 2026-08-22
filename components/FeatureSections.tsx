"use client";

import React, { useEffect, useRef, useState } from "react";
import { Icon } from "./SvgIcons";

export function FeaturePodcast() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="_layout_15rpj_144 _marginBottom_15rpj_144">
      {/* Background Video */}
      <div
        className="_layout_1k4yp_156 _fullbleed_1k4yp_174 _videoUploadBackground_1k4yp_4 _fullbleedImageAnimation_1k4yp_728"
        data-in-view={inView ? "1" : "0"}
      >
        <div className="_outerImageOrVideoContainer_1k4yp_4">
          <video
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
            loop
            muted
            playsInline
            className="_backgroundVideo_1k4yp_174"
          >
            <source
              src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/e71302c61295cb6f62e293f5e581404a983d701a.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Content */}
      <div data-in-view={inView ? "1" : "0"} className="_contentContainer_15rpj_178 _container_1qcb5_110 _containerGrid_1qcb5_114">
        <div className="_containerLeft_15rpj_265">
          <h2 className="_contentTitle_15rpj_191">
            <span>
              <span>
                <span style={{ animationDelay: "0ms", animationDuration: "250ms" }}>T</span>
                <span style={{ animationDelay: "25ms", animationDuration: "250ms" }}>h</span>
                <span style={{ animationDelay: "50ms", animationDuration: "250ms" }}>e</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "75ms", animationDuration: "250ms" }}>M</span>
                <span style={{ animationDelay: "100ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "125ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "150ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "175ms", animationDuration: "250ms" }}>s</span>
                <span style={{ animationDelay: "200ms", animationDuration: "250ms" }}>h</span>
                <span style={{ animationDelay: "225ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "250ms", animationDuration: "250ms" }}>t</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "275ms", animationDuration: "250ms" }}>P</span>
                <span style={{ animationDelay: "300ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "325ms", animationDuration: "250ms" }}>d</span>
                <span style={{ animationDelay: "350ms", animationDuration: "250ms" }}>c</span>
                <span style={{ animationDelay: "375ms", animationDuration: "250ms" }}>a</span>
                <span style={{ animationDelay: "400ms", animationDuration: "250ms" }}>s</span>
                <span style={{ animationDelay: "425ms", animationDuration: "250ms" }}>t</span>
              </span>
            </span>
          </h2>

          <div className="_contentBody_15rpj_233 _size:body-large_13jtc_438">
            <p>
              In this series, we take you inside The Moonshot Factory, giving you access to the messy, exhilarating
              journey of turning science fiction into reality.
            </p>
          </div>
        </div>

        <div className="_containerRight_15rpj_288">
          <a
            className="_cta_15rpj_237"
            href="https://www.youtube.com/playlist?list=PL7og_3Jqea4U6VgjOfaCGnqp6AiuVfgrU"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Listen to The Moonshot Podcast on YouTube"
          >
            <Icon id="icon-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FeatureMasterclass() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="_layout_15rpj_144 _marginBottom_15rpj_144">
      {/* Background Video */}
      <div
        className="_layout_1k4yp_156 _fullbleed_1k4yp_174 _videoUploadBackground_1k4yp_4 _fullbleedImageAnimation_1k4yp_728"
        data-in-view={inView ? "1" : "0"}
      >
        <div className="_outerImageOrVideoContainer_1k4yp_4">
          <video
            autoPlay
            disablePictureInPicture
            disableRemotePlayback
            loop
            muted
            playsInline
            poster="https://lh3.googleusercontent.com/SXL-rH1kCtwG95tVm6-zjXjvI8Y6ogij8pmcv0YPC5GMrWZWNAoSkZHp3xX6aIuqXVgT-Gd0TtT07ClO2k479J9FS_EAV6S3nVstPg"
            className="_backgroundVideo_1k4yp_174"
          >
            <source
              src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/2633a62957e76efa06b52c243c5d21e1ca61efc8.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* Content */}
      <div data-in-view={inView ? "1" : "0"} className="_contentContainer_15rpj_178 _container_1qcb5_110 _containerGrid_1qcb5_114">
        <div className="_containerLeft_15rpj_265">
          <h2 className="_contentTitle_15rpj_191">
            <span>
              <span>
                <span style={{ animationDelay: "0ms", animationDuration: "250ms" }}>A</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "25ms", animationDuration: "250ms" }}>M</span>
                <span style={{ animationDelay: "50ms", animationDuration: "250ms" }}>a</span>
                <span style={{ animationDelay: "75ms", animationDuration: "250ms" }}>s</span>
                <span style={{ animationDelay: "100ms", animationDuration: "250ms" }}>t</span>
                <span style={{ animationDelay: "125ms", animationDuration: "250ms" }}>e</span>
                <span style={{ animationDelay: "150ms", animationDuration: "250ms" }}>r</span>
                <span style={{ animationDelay: "175ms", animationDuration: "250ms" }}>C</span>
                <span style={{ animationDelay: "200ms", animationDuration: "250ms" }}>l</span>
                <span style={{ animationDelay: "225ms", animationDuration: "250ms" }}>a</span>
                <span style={{ animationDelay: "250ms", animationDuration: "250ms" }}>s</span>
                <span style={{ animationDelay: "275ms", animationDuration: "250ms" }}>s</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "300ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "325ms", animationDuration: "250ms" }}>n</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "350ms", animationDuration: "250ms" }}>M</span>
                <span style={{ animationDelay: "375ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "400ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "425ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "450ms", animationDuration: "250ms" }}>s</span>
                <span style={{ animationDelay: "475ms", animationDuration: "250ms" }}>h</span>
                <span style={{ animationDelay: "500ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "525ms", animationDuration: "250ms" }}>t</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "550ms", animationDuration: "250ms" }}>T</span>
                <span style={{ animationDelay: "575ms", animationDuration: "250ms" }}>h</span>
                <span style={{ animationDelay: "600ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "625ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "650ms", animationDuration: "250ms" }}>k</span>
                <span style={{ animationDelay: "675ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "700ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "725ms", animationDuration: "250ms" }}>g</span>
              </span>
            </span>
          </h2>

          <div className="_contentBody_15rpj_233 _size:body-large_13jtc_438">
            <p>
              Learn the tools and frameworks to drive innovation, navigate uncertainty, and turn big ideas into
              real-world impact.
            </p>
          </div>
        </div>

        <div className="_containerRight_15rpj_288">
          <a
            className="_cta_15rpj_237"
            href="https://www.masterclass.com/certificates/breakthrough-innovation-strategy-from-bold-idea-to-business-impact"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View MasterClass on Breakthrough Innovation"
          >
            <Icon id="icon-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}

export function FeatureArticle() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="_layout_15rpj_144">
      {/* Fullbleed Image */}
      <div
        className="_layout_1k4yp_156 _fullbleed_1k4yp_174 _fullbleedImageAnimation_1k4yp_728"
        data-in-view={inView ? "1" : "0"}
      >
        <div className="_outerImageOrVideoContainer_1k4yp_4">
          <picture className="_img_1k4yp_175">
            <source
              srcSet="https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w1536-rw 2x, https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w768-rw"
              media="(max-width: 767.98px)"
            />
            <source
              srcSet="https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w1984-rw 2x, https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w992-rw"
              media="(min-width: 768px) and (max-width: 991.98px)"
            />
            <source
              srcSet="https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w2400-rw 2x, https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w1200-rw"
              media="(min-width: 992px) and (max-width: 1199.98px)"
            />
            <source
              srcSet="https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w3600-rw 2x, https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-w1800-rw"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://lh3.googleusercontent.com/ZBURmEUc9xyHUN__DwL64f1aADiIe2rWsEeR6Rh315jQcddrIQwKKmJ0Pg5BZEcg9Ycm1SosMyYRFZPhZQR9n1w05c6Xf7VZf8TJ=e365-pa-nu-s0"
              width={2000}
              height={1333}
              alt="Engineering Living Factories with AI"
              loading="lazy"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </picture>
        </div>
      </div>

      {/* Content */}
      <div data-in-view={inView ? "1" : "0"} className="_contentContainer_15rpj_178 _container_1qcb5_110 _containerGrid_1qcb5_114">
        <div className="_containerLeft_15rpj_265">
          <h2 className="_contentTitle_15rpj_191">
            <span>
              <span>
                <span style={{ animationDelay: "0ms", animationDuration: "250ms" }}>E</span>
                <span style={{ animationDelay: "25ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "50ms", animationDuration: "250ms" }}>g</span>
                <span style={{ animationDelay: "75ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "100ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "125ms", animationDuration: "250ms" }}>e</span>
                <span style={{ animationDelay: "150ms", animationDuration: "250ms" }}>e</span>
                <span style={{ animationDelay: "175ms", animationDuration: "250ms" }}>r</span>
                <span style={{ animationDelay: "200ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "225ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "250ms", animationDuration: "250ms" }}>g</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "275ms", animationDuration: "250ms" }}>L</span>
                <span style={{ animationDelay: "300ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "325ms", animationDuration: "250ms" }}>v</span>
                <span style={{ animationDelay: "350ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "375ms", animationDuration: "250ms" }}>n</span>
                <span style={{ animationDelay: "400ms", animationDuration: "250ms" }}>g</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "425ms", animationDuration: "250ms" }}>F</span>
                <span style={{ animationDelay: "450ms", animationDuration: "250ms" }}>a</span>
                <span style={{ animationDelay: "475ms", animationDuration: "250ms" }}>c</span>
                <span style={{ animationDelay: "500ms", animationDuration: "250ms" }}>t</span>
                <span style={{ animationDelay: "525ms", animationDuration: "250ms" }}>o</span>
                <span style={{ animationDelay: "550ms", animationDuration: "250ms" }}>r</span>
                <span style={{ animationDelay: "575ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "600ms", animationDuration: "250ms" }}>e</span>
                <span style={{ animationDelay: "625ms", animationDuration: "250ms" }}>s</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "650ms", animationDuration: "250ms" }}>w</span>
                <span style={{ animationDelay: "675ms", animationDuration: "250ms" }}>i</span>
                <span style={{ animationDelay: "700ms", animationDuration: "250ms" }}>t</span>
                <span style={{ animationDelay: "725ms", animationDuration: "250ms" }}>h</span>
              </span>{" "}
              <span>
                <span style={{ animationDelay: "750ms", animationDuration: "250ms" }}>A</span>
                <span style={{ animationDelay: "775ms", animationDuration: "250ms" }}>I</span>
              </span>
            </span>
          </h2>

          <div className="_contentBody_15rpj_233 _size:body-large_13jtc_438">
            <p>Introducing A-Life, X’s moonshot to unlock the manufacturing power of biology.</p>
          </div>
        </div>

        <div className="_containerRight_15rpj_288">
          <a className="_cta_15rpj_237" href="/blog/posts/introducing-a-life/" aria-label="Read A-Life article">
            <Icon id="icon-arrow" />
          </a>
        </div>
      </div>
    </section>
  );
}
