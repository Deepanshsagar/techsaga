"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function AutoSplitText({
  children,
  className = "",
  start = "clamp(top center)",
  end = "clamp(bottom center)",
  scrub = true,
  stagger = 0.3,
}) {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx;
    let splitInstance;

    (async () => {
      const SplitText = (await import("gsap/SplitText")).default;

      gsap.registerPlugin(SplitText, ScrollTrigger);

      // wait for fonts (important for correct line splitting)
      await document.fonts.ready;

      ctx = gsap.context(() => {
        splitInstance = SplitText.create(textRef.current, {
          type: "words,lines",
          mask: "lines",
          linesClass: "line",
          autoSplit: true,

          onSplit: (instance) => {
            // 🔁 This runs every time layout changes (resize etc.)

            return gsap.from(instance.lines, {
              yPercent: 120,
              stagger,
              ease: "power3.out",
              scrollTrigger: {
                trigger: containerRef.current,
                start,
                end,
                scrub,
              },
            });
          },
        });
      }, containerRef);
    })();

    return () => {
      if (splitInstance) splitInstance.revert();
      if (ctx) ctx.revert();
    };
  }, [start, end, scrub, stagger]);

  return (
    <div ref={containerRef} className="container overflow-hidden">
      <div
        ref={textRef}
        className={`split ${className}`}
      >
        {children}
      </div>
    </div>
  );
}