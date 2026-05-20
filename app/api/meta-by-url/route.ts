// Optional API to get metadata by URL

// app/api/meta-by-url/route.ts

import connectDB from "@/app/lib/mongodb";
import MetaModel from "@/app/models/meta.model";
import { NextResponse } from "next/server";


export async function GET(
  req: Request
) {
  try {
    await connectDB();

    const { searchParams } =
      new URL(req.url);

    const url =
      searchParams.get("url");

    const data =
      await MetaModel.findOne({
        url,
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