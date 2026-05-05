"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type SplitContainerProps = {
  children: React.ReactNode;
  className?: string;
  triggerElement?: React.RefObject<HTMLElement>;
};

export default function SplitContainer({
  children,
  className = "",
  triggerElement,
}: SplitContainerProps) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const splitRef = useRef<SplitText | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const stRef = useRef<InstanceType<typeof ScrollTrigger> | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: any;

    const init = async () => {
      const { SplitText } = await import("gsap/SplitText");
      gsap.registerPlugin(SplitText, ScrollTrigger);

      // Wait for fonts to load (prevents bad splitting)
      await document.fonts.ready;
      await new Promise((r) => requestAnimationFrame(r));

      ctx = gsap.context(() => {
        // Hide initially
        gsap.set(textRef.current, { opacity: 0 });

        splitRef.current = SplitText.create(textRef.current, {
          type: "lines,words,chars",
          linesClass: "split-line",
          autoSplit: true,

          onSplit: (self) => {
            // Kill previous timeline
            tlRef.current?.kill();

            gsap.set(textRef.current, { opacity: 1 });

            const tl = gsap.timeline({ paused: true });

            // Words reveal animation
            tl.from(
              self.words,
              {
                y: "110%",
                opacity: 0,
                duration: 1.1,
                stagger: { each: 0.05 },
                ease: "power3.out",
              },
              0
            );

            tlRef.current = tl;

            // Resolve trigger safely
            const trigger =
              triggerElement?.current ||
              containerRef.current;

            // Kill previous ScrollTrigger
            stRef.current?.kill();

            stRef.current = ScrollTrigger.create({
              trigger,
              start: "top 80%",
              toggleActions: "play reverse play reverse",

              onEnter: () => tl.play(),
              onLeave: () => tl.reverse(),
              onEnterBack: () => tl.play(),
              onLeaveBack: () => tl.reverse(),

              // markers: true,
            });
          },
        });
      }, containerRef);
    };

    init();

    return () => {
      stRef.current?.kill();
      tlRef.current?.kill();
      splitRef.current?.revert();
      ctx?.revert();
      ScrollTrigger.refresh();
    };
  }, [triggerElement]);

  return (
    <>
      <style>
        {`
          .split-line {
            overflow: hidden;
            display: block;
          }
        `}
      </style>

      <div ref={containerRef} className="overflow-hidden">
        <h2
          ref={textRef}
          className={`${className}`}
        >
          {children}
        </h2>
      </div>
    </>
  );
}