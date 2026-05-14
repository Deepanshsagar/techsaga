// app/api/header/route.ts

import { NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Category from "@/app/models/Category";
import SubCategory from "@/app/models/SubCategory";
import Service from "@/app/models/Service";

/**
 * GET HEADER MENU DATA
 */
export async function GET() {
  try {
    await connectDB();

    // Fetch all categories
    const categories = await Category.find()
      .sort({ createdAt: -1 })
      .lean();

    // Fetch all sub categories
    const subCategories =
      await SubCategory.find()
        .populate("categoryId", "title slug")
        .sort({ createdAt: -1 })
        .lean();

    // Fetch all services
    const services = await Service.find()
      .populate("categoryId", "title slug")
      .populate(
        "subCategoryId",
        "title slug"
      )
      .sort({ createdAt: -1 })
      .lean();

    /**
     * Build Nested Structure
     */

    const menu = categories.map((category: any) => {
      const relatedSubCategories =
        subCategories
          .filter(
            (sub: any) =>
              sub.categoryId?._id?.toString() ===
              category._id.toString()
          )
          .map((sub: any) => {
            const relatedServices =
              services.filter(
                (service: any) =>
                  service.subCategoryId?._id?.toString() ===
                  sub._id.toString()
              );

            return {
              _id: sub._id,

              title: sub.title,

              slug: sub.slug,

              services: relatedServices.map(
                (service: any) => ({
                  _id: service._id,

                  title: service.title,

                  slug: service.slug,
                })
              ),
            };
          });

      return {
        _id: category._id,

        title: category.title,

        slug: category.slug,

        subCategories:
          relatedSubCategories,
      };
    });

    return NextResponse.json(
      {
        success: true,

        data: menu,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,

        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}