import AboutUsClient from "./AboutUsClient";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/about-us");
}

export default function AboutUsPage() {
  return (
    <>
      <AboutUsClient />
    </>
  );
}