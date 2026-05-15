// app/api/sub-categories/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";

import mongoose from "mongoose";

import connectDB from "@/app/lib/mongodb";

import SubCategory from "@/app/models/SubCategory";

/**
 * GET SINGLE SUB CATEGORY
 */
export async function GET(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid sub category ID",
        },
        {
          status: 400,
        }
      );
    }

    const subCategory =
      await SubCategory.findById(id).populate(
        "categoryId",
        "title"
      );

    if (!subCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Sub category not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: subCategory,
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

/**
 * UPDATE SUB CATEGORY
 */
export async function PUT(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const body = await req.json();

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid sub category ID",
        },
        {
          status: 400,
        }
      );
    }

    const updatedSubCategory =
      await SubCategory.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );

    if (!updatedSubCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Sub category not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Sub category updated successfully",

        data: updatedSubCategory,
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

/**
 * DELETE SUB CATEGORY
 */
export async function DELETE(
  req: NextRequest,
  context: {
    params: Promise<{
      id: string;
    }>;
  }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid sub category ID",
        },
        {
          status: 400,
        }
      );
    }

    const deletedSubCategory =
      await SubCategory.findByIdAndDelete(
        id
      );

    if (!deletedSubCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Sub category not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Sub category deleted successfully",
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