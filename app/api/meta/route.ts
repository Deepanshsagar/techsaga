// app/api/meta/route.ts

import { NextResponse } from "next/server";
import MetaModel from "@/app/models/meta.model";
import connectDB from "@/app/lib/mongodb";

export async function GET() {
  try {
    await connectDB();

    const data = await MetaModel.find()
      .sort({
        createdAt: -1,
      });

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to fetch metadata",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    await connectDB();

    const body = await req.json();

    const existing =
      await MetaModel.findOne({
        url: body.url,
      });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message:
            "URL already exists",
        },
        {
          status: 400,
        }
      );
    }

    const data =
      await MetaModel.create(body);

    return NextResponse.json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to create metadata",
      },
      {
        status: 500,
      }
    );
  }
}