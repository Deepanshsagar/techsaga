import ContactClient from "./ContactClient";

import { getMeta } from "@/app/lib/getMeta";

export async function generateMetadata() {
  return getMeta("/contact-us");
}

export default function ContactUsPage() {
  return (
    <>
      <ContactClient />
    </>
  );
}