import ServicesClient from "./ServicesClient";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/services");
}

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />
    </>
  );
}