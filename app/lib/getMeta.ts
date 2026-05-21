import { Metadata } from "next";
import connectDB from "./mongodb";
import MetaModel from "../models/meta.model";


export async function getMeta(
  pathname: string
): Promise<Metadata> {
  try {
    await connectDB();

    const meta = await MetaModel.findOne({
      url: pathname,
    }).lean();

    const title =
      meta?.title ||
      "Techsaga Corporations - Inspired for Innovation - Since 2012";

    const description =
      meta?.description ||
      "Leading businesses through the backend, frontend tech, and digital infrastructure for next-gen transformation services and consulting solutions globally.";

    const image =
      meta?.ogImage ||
      "https://www.techsaga.co.in/assets/img/logo.webp";

    return {
      metadataBase: new URL("https://www.techsaga.co.in"),

      title,
      description,

      keywords: meta?.keywords || [],

      alternates: {
        canonical: `https://www.techsaga.co.in${pathname}`,
      },

      openGraph: {
        title,
        description,
        url: `https://www.techsaga.co.in${pathname}`,
        siteName: "Techsaga Corporations",
        locale: "en_US",
        type: "website",

        images: [
          {
            url: image,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },

      twitter: {
        card: meta?.twitterCard || "summary_large_image",

        title,
        description,

        site: meta?.twitterSite,
        creator: meta?.twitterCreator,

        images: [image],
      },

      verification: {
        google: "M4Ve19GHQtvgFtIiadKFU_uJn4ADGf3zuUQYKIxtlVA",
      },

      robots: {
        index: true,
        follow: true,
      },
    };
  } catch (error) {
    console.error("Metadata error:", error);

    return {
      title:
        "Techsaga Corporations - Inspired for Innovation - Since 2012",

      description:
        "Leading businesses through the backend, frontend tech, and digital infrastructure for next-gen transformation services and consulting solutions globally.",
    };
  }
}