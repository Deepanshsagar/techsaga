// app/lib/getMeta.ts

import type { Metadata } from "next";

export async function getMeta(
  pathname: string
): Promise<Metadata> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/meta-by-url?url=${pathname}`,
      {
        cache: "no-store",
      }
    );

    const result = await response.json();

    const meta = result?.data;

    return {
      title:
        meta?.title || "Techsaga Corporations - Inspired for Innovation - Since 2012",

      description:
        meta?.description ||
        "Leading businesses through the backend, frontend tech, and digital infrastructure for next-gen transformation services and consulting solutions globally. Inspired for Innovation.",

      keywords: meta?.keywords,

      openGraph: {
        title: meta?.title,

        description: meta?.description,

        images: meta?.ogImage
          ? [
              {
                url: meta?.ogImage,
              },
            ]
          : [],
      },

      twitter: {
        card:
          meta?.twitterCard ||
          "summary_large_image",

        title: meta?.title,

        description:
          meta?.description,

        site: meta?.twitterSite,

        creator:
          meta?.twitterCreator,

        images: meta?.ogImage
          ? [meta?.ogImage]
          : [],
      },
    };
  } catch (error) {
    console.error(error);

    return {};
  }
}