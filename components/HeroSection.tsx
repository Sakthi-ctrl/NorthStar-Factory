import React from "react";

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

export function HeroSection() {
  return (
    <section className="_section_1lrgo_67" style={{ backgroundColor: "#ffffff", color: "#000000" }}>
      <div className="_container_1qcb5_110">
        <div className="_heroContent_1lrgo_103">
          {/* Hero Logo Video */}
          <video
            disablePictureInPicture
            disableRemotePlayback
            muted
            playsInline
            className="_logo_1lrgo_111"
            preload="auto"
            autoPlay
            loop
          >
            <source src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/c7d4ba0183be0bf8abdd09b7e3ea3b6a25562fe8.webm" type="video/webm" />
            <source src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/714f9027243895148b44a20cc69c5d85ca971121.mp4" type="video/mp4" />
            <source src="https://storage.googleapis.com/gweb-x-cdn/x/uploads/d341d5347a9f71eacd3ae70e2a62f7260447a81d.mov" type="video/mov" />
          </video>

          {/* Staggered Animated Headline */}
          <h1
            className="_headline_1lrgo_88 _size:headline-1-smaller_13jtc_160"
            style={{
              whiteSpace: "nowrap",
              fontSize: "clamp(20px, 3.2vw, 36px)",
              lineHeight: "1.2",
              marginBottom: "36px",
              color: "#000000",
            }}
          >
            <span>{renderAnimatedText("Welcome to Northstar-factory", 450, 25, 400)}</span>
          </h1>

          {/* Subtitle */}
          <p
            className="_headlineSubtitle_1lrgo_92 _size:subtitle_13jtc_331"
            style={{ marginTop: "24px", color: "#000000" }}
          >
            <span>
              {renderAnimatedText(
                "Born at Google, we got our start creating the",
                1050,
                5,
                400
              )}
            </span>{" "}
            <span>
              {renderAnimatedText(
                "self-driving car. Since then, we’ve continued to",
                1235,
                5,
                400
              )}
            </span>{" "}
            <span>
              {renderAnimatedText(
                "bring sci-fi ideas into reality to help solve some",
                1445,
                5,
                400
              )}
            </span>{" "}
            <span>
              {renderAnimatedText(
                "of the world’s hardest problems.",
                1655,
                5,
                400
              )}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
