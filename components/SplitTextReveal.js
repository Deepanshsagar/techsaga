"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SplitTextReveal({
  text,
  type = "words", // "words" | "chars"
  stagger = 0.05,
  duration = 0.6,
  y = 80,
  start = "top 80%",
  className = "",
}) {
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const el = textRef.current;

    // 🔹 Split logic
    const splitItems =
      type === "chars"
        ? text.split("")
        : text.split(" ");

    el.innerHTML = splitItems
      .map((item) => {
        const content = item === " " ? "&nbsp;" : item;
        return `<span class="split-item inline-block overflow-hidden">${content}</span>`;
      })
      .join(type === "words" ? " " : "");

    const elements = el.querySelectorAll(".split-item");

    // 🔹 Animation
    const animation = gsap.from(elements, {
      y,
      opacity: 0,
      stagger,
      duration,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start,
      },
    });

    // 🔹 Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [text, type, stagger, duration, y, start]);

  return (
    <div
      ref={textRef}
      className={`inline-block ${className}`}
    >
      {text}
    </div>
  );
}