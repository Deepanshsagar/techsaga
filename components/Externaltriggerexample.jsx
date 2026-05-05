"use client";

import { useRef } from "react";
import SplitContainer from "@/components/SplitContainer";

/**
 * Example: animate text when a SIBLING section enters the viewport.
 * Pass a ref to triggerElement so ScrollTrigger watches the wrapper,
 * not the text itself — useful when the text is sticky or offset.
 */
export default function ExternalTriggerExample() {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-slate-100 px-6"
    >
      <SplitContainer
        triggerElement={sectionRef}
        className="font-bold text-slate-900 max-w-3xl mx-auto"
        scrubSpeed={1}
      >
        Triggered by the section wrapper, not the text element itself.
      </SplitContainer>
    </section>
  );
}