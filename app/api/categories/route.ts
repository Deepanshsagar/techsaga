// app/api/categories/route.ts

import { NextRequest, NextResponse } from "next/server";
import Category from "@/app/models/Category";
import connectDB from "@/app/lib/mongodb";

export async function GET() {
  await connectDB();

  const data = await Category.find().sort({
    createdAt: -1,
  });

  return NextResponse.json({
    success: true,
    data,
  });
}

export async function POST(req: NextRequest) {
  await connectDB();

  const body = await req.json();

  const category = await Category.create(body);

  return NextResponse.json({
    success: true,
    data: category,
  });
}