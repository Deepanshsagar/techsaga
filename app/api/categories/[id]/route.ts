// app/api/categories/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";

import mongoose from "mongoose";

import connectDB from "@/app/lib/mongodb";

import Category from "@/app/models/Category";

/**
 * GET SINGLE CATEGORY
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
          message: "Invalid category ID",
        },
        {
          status: 400,
        }
      );
    }

    const category = await Category.findById(id);

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: category,
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
 * UPDATE CATEGORY
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
          message: "Invalid category ID",
        },
        {
          status: 400,
        }
      );
    }

    const updatedCategory =
      await Category.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );

    if (!updatedCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found",
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
          "Category updated successfully",

        data: updatedCategory,
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
 * DELETE CATEGORY
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
          message: "Invalid category ID",
        },
        {
          status: 400,
        }
      );
    }

    const deletedCategory =
      await Category.findByIdAndDelete(id);

    if (!deletedCategory) {
      return NextResponse.json(
        {
          success: false,
          message: "Category not found",
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
          "Category deleted successfully",
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