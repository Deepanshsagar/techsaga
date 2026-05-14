// app/api/sub-categories/route.ts

import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/app/lib/mongodb";
import SubCategory from "@/app/models/SubCategory";

export async function GET(req: NextRequest) {
  await connectDB();

  const categoryId =
    req.nextUrl.searchParams.get("categoryId");

  const filter: any = {};

  if (categoryId) {
    filter.categoryId = categoryId;
  }

  const data = await SubCategory.find(filter);

  return NextResponse.json({
    success: true,
    data,
  });
}

export async function POST(req: NextRequest) {
  await connectDB();

  const body = await req.json();

  const subCategory = await SubCategory.create(body);

  return NextResponse.json({
    success: true,
    data: subCategory,
  });
}