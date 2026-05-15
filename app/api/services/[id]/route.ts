// app/api/services/[id]/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Service from "@/app/models/Service";
import mongoose from "mongoose";

type Params = {
  params: {
    id: string;
  };
};

// GET SINGLE SERVICE
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

    // validate mongo id
    // if (!mongoose.Types.ObjectId.isValid(id)) {
    //   return NextResponse.json(
    //     {
    //       success: false,
    //       message: "Invalid service ID",
    //     },
    //     { status: 400 }
    //   );
    // }

    const service = await Service.findById(id).populate("categoryId")
    .populate("subCategoryId");;

    if (!service) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: service,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}

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

    // validate mongo id
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid service ID",
        },
        { status: 400 }
      );
    }

    const body = await req.json();

    const updatedService = await Service.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
        runValidators: true,
      }
    )
      .populate("categoryId")
      .populate("subCategoryId");

    if (!updatedService) {
      return NextResponse.json(
        {
          success: false,
          message: "Service not found",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        data: updatedService,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Server error",
      },
      { status: 500 }
    );
  }
}