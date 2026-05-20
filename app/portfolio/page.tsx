import Portfolio from "./Portfolio";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/portfolio");
}

export default function PortfolioPage() {
  return (
    <>
      <Portfolio />
    </>
  );
}