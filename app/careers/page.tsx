import CareersClient from "./CareersClient";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/careers");
}

export default function CareerPage() {
  return (
    <>
      <CareersClient />
    </>
  );
}