"use client";

import React, { useState, useEffect, useRef } from "react";
import { PROJECT_TILES } from "@/data/projectsData";
import { Icon } from "./SvgIcons";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
      setQuery("");
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredProjects = query.trim()
    ? PROJECT_TILES.filter(
        (p) =>
          p.desc.toLowerCase().includes(query.toLowerCase()) ||
          p.id.toLowerCase().includes(query.toLowerCase()) ||
          (p.category && p.category.toLowerCase().includes(query.toLowerCase()))
      )
    : [];

  return (
    <div
      className="_siteSearch_a28f3_331"
      style={{
        display: "block",
        opacity: 1,
        visibility: "visible",
      }}
    >
      <button
        type="button"
        className="_link_a28f3_140 _closeButton_a28f3_286 _searchCloseButton_a28f3_347 close"
        onClick={onClose}
        aria-label="Close search dialog"
      >
        <Icon id="icon-close" className="_closeIcon_a28f3_260" />
      </button>

      <div className="_siteSearchDimmer_a28f3_361" onClick={onClose} />

      <div className="_siteSearchModal_a28f3_376 modal-content">
        <div className="_siteSearchHeader_r2gce_100">
          <div className="_siteSearchContainer_r2gce_152">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="_siteSearchControlContainer_r2gce_178">
                <input
                  ref={inputRef}
                  className="_searchInput_r2gce_229"
                  type="search"
                  name="q"
                  id="q"
                  placeholder="Search projects, technologies, moonshots..."
                  autoComplete="off"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <div>
                  <button type="submit" className="_searchButton_r2gce_183" aria-label="Search">
                    <Icon id="icon-search" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="_siteSearchResults_r2gce_104" style={{ padding: "2rem", maxHeight: "60vh", overflowY: "auto" }}>
          {query.trim() === "" ? (
            <div style={{ color: "#80868b", fontSize: "0.95rem", textAlign: "center", paddingTop: "2rem" }}>
              Type to discover Moonshots, projects, and technologies...
            </div>
          ) : filteredProjects.length === 0 ? (
            <div style={{ color: "#80868b", textAlign: "center", paddingTop: "2rem" }}>
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.25rem" }}>
              {filteredProjects.map((p) => (
                <a
                  key={p.id}
                  href={p.href}
                  onClick={onClose}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.875rem 1.25rem",
                    borderRadius: "8px",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "#fff",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.12)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "6px",
                      background: p.color,
                      overflow: "hidden",
                      flexShrink: 0,
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={p.imageSrc} alt={p.desc} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: 500, color: "#fff", textTransform: "capitalize" }}>
                      {p.id.replace(/-/g, " ")}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "#9aa0a6" }}>{p.desc}</div>
                    {p.category && (
                      <span
                        style={{
                          display: "inline-block",
                          marginTop: "0.35rem",
                          fontSize: "0.72rem",
                          padding: "0.15rem 0.5rem",
                          borderRadius: "100px",
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "#dadce0",
                        }}
                      >
                        {p.category}
                      </span>
                    )}
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
