"use client";

import { useState } from "react";

const partners = [
  {
    image: "/assets/img/google-partner.png",
    alt: "google",
    link: "https://www.google.com/partners/agency?id=2890612283",
  },
  {
    image: "/assets/img/iaf-certified.webp",
    alt: "iaf",
    modalImage: "/assets/img/icl.png",
  },
  {
    image: "/assets/img/egac-certified.webp",
    alt: "egac",
    modalImage: "/assets/img/egac-certified.webp",
  },
  {
    image: "/assets/img/ias-certified.webp",
    alt: "ias",
    modalImage: "/assets/img/ias-link.png",
  },
  {
    image: "/assets/img/icab-certified.webp",
    alt: "icab",
    modalImage: "/assets/img/icar-link.png",
  },
  {
    image: "/assets/img/EMC-logo.webp",
    alt: "emc",
    modalImage: "/assets/img/icar-link.png",
  },
  {
    image: "/assets/img/salesforce_logo-8.webp",
    alt: "salesforce",
    // link: "https://www.salesforce.com/",
  },
  {
    image: "/assets/img/shopify.webp",
    alt: "shopify",
    // link: "https://www.shopify.com/",
  },
  {
    image: "/assets/img/rm-certified.webp",
    alt: "rmcertified",
    link: "https://www.designrush.com/agency/profile/techsaga-corporations",
  },
  {
    image: "/assets/img/zoho-images.png",
    alt: "zoho-images",
  },
  // {
  //   image: "/assets/img/workday-images.png",
  //   alt: "workday-images",
  // },
  // {
  //   image: "/assets/img/sap-images.png",
  //   alt: "sap-images",
  // },
  {
    image: "/assets/img/microsoft-images.png",
    alt: "microsoft-images",
  },
  {
    image: "/assets/img/klaviyo-images.png",
    alt: "klaviyo-images",
  },
  {
    image: "/assets/img/google-cloud-partner.png",
    alt: "google-cloud-partner-images",
  },
];

export default function PartnerSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      {/* Partner network bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px]  px-6 lg:px-10 py-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            {partners.map((partner) => {
              const content = (
                <img
                  src={partner.image}
                  alt={partner.alt}
                  className="w-[60px] h-[60px] object-contain transition duration-300 hover:scale-105"
                />
              );

              return partner.link ? (
                <a
                  key={partner.alt}
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 hover:opacity-100 transition p-2"
                >
                  {content}
                </a>
              ) : (
                <button
                  key={partner.alt}
                  onClick={() => partner.modalImage && setSelectedImage(partner.modalImage)}
                  className="opacity-80 hover:opacity-100 transition"
                >
                  {content}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
          <div className="relative max-w-3xl w-full rounded-2xl bg-white p-4 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-3 right-3 text-black text-2xl font-bold hover:opacity-70"
            >
              ×
            </button>

            {/* Modal Image */}
            <img
              src={selectedImage}
              alt="Certificate"
              className="w-full h-auto rounded-xl object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </>
  );
}