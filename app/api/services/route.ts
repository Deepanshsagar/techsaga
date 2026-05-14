// app/api/services/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import Service from "@/app/models/Service";

export async function GET() {
  await connectDB();

  const data = await Service.find()
    .populate("categoryId")
    .populate("subCategoryId");

  return NextResponse.json({
    success: true,
    data,
  });
}

export async function POST(req: NextRequest) {
  await connectDB();

  const body = await req.json();

  const service = await Service.create(body);

  return NextResponse.json({
    success: true,
    data: service,
  });
}