"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PROJECT_TILES, ProjectTile } from "@/data/projectsData";

export function ProjectGrid() {
  const [inView, setInView] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.05 }
    );

    if (gridRef.current) {
      observer.observe(gridRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const maxRow = PROJECT_TILES.length > 0 ? Math.max(...PROJECT_TILES.map((t) => t.row)) : 1;
  const maxSmRow = PROJECT_TILES.length > 0 ? Math.max(...PROJECT_TILES.map((t) => t.smRow)) : 1;

  return (
    <section className="_layout_1llq6_110" style={{ paddingBottom: "2rem", marginBottom: 0, backgroundColor: "#ffffff" }} ref={gridRef}>
      <div className="_container_1qcb5_110">
        <div
          className="_tiles_1llq6_138"
          style={
            {
              "--sci-rows": maxRow,
              "--sci-cols": 6,
              "--sm-sci-rows": maxSmRow,
              "--sm-sci-cols": 3,
            } as React.CSSProperties
          }
        >
          {PROJECT_TILES.map((tile) => (
            <TileCard key={tile.id} tile={tile} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

function getTilePositionClass(row: number, col: number): string {
  const map: Record<string, string> = {
    "1-6": "_tileR1C6_1llq6_253",
    "2-4": "_tileR2C4_1llq6_300",
    "2-5": "_tileR2C5_1llq6_292",
    "2-6": "_tileR2C6_1llq6_284",
    "3-1": "_tileR3C1_1llq6_308",
    "3-2": "_tileR3C2_1llq6_316",
    "3-3": "_tileR3C3_1llq6_324",
    "3-4": "_tileR3C4_1llq6_332",
    "3-5": "_tileR3C5_1llq6_340",
    "3-6": "_tileR3C6_1llq6_348",
    "4-1": "_tileR4C1_1llq6_356",
    "4-2": "_tileR4C2_1llq6_364",
    "4-3": "_tileR4C3_1llq6_372",
    "4-4": "_tileR4C4_1llq6_381",
    "4-5": "_tileR4C5_1llq6_389",
    "4-6": "_tileR4C6_1llq6_397",
    "5-1": "_tileR5C1_1llq6_405",
    "5-2": "_tileR5C2_1llq6_414",
    "5-3": "_tileR5C3_1llq6_422",
    "5-4": "_tileR5C4_1llq6_430",
    "5-5": "_tileR5C5_1llq6_438",
    "5-6": "_tileR5C6_1llq6_446",
  };
  return map[`${row}-${col}`] || "";
}

function TileCard({ tile, inView }: { tile: ProjectTile; inView: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const posClass = getTilePositionClass(tile.row, tile.col);
  const tileClass = `_tile_1llq6_138 ${posClass} ${tile.dark ? "_Dark_1llq6_161" : ""}`.trim();

  const tileStyle = {
    "--sci-row": tile.row,
    "--sci-col": tile.col,
    "--sm-sci-row": tile.smRow,
    "--sm-sci-col": tile.smCol,
    "--sci-color": tile.color,
    "--sci-idx": tile.idx,
    "--sci-del-random": tile.delRandom,
  } as React.CSSProperties;

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={tileClass}
      style={tileStyle}
      data-in-view={inView ? "1" : "0"}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={tile.href} aria-label={tile.ariaLabel}>
        {/* Picture / Image */}
        <picture className={tile.videoSrc ? "_videoImage_1llq6_201" : ""}>
          {tile.imageSrcset && <source srcSet={tile.imageSrcset} />}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={tile.imageSrc}
            width={300}
            height={300}
            alt={tile.desc}
            loading="eager"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </picture>

        {/* Video if present */}
        {tile.videoSrc && (
          <video
            ref={videoRef}
            disablePictureInPicture
            disableRemotePlayback
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={tile.videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Color accent mask */}
        {tile.videoSrc && (
          <div
            className="_tileMediaMask_1llq6_208"
            style={{
              backgroundColor: isHovered ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.15)",
              transition: "background-color 0.3s ease",
            }}
          />
        )}

        {/* Desktop Description */}
        <div className="_desc_1llq6_212">
          <span className="_size:sci-desc_13jtc_646">{tile.desc}</span>
        </div>

        {/* Mobile Small Description */}
        <div className="_smDesc_1llq6_213">
          <span className="_size:sci-desc-sm_13jtc_654">{tile.smDesc}</span>
        </div>
      </Link>
    </div>
  );
}
