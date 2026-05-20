import connectDB from "@/app/lib/mongodb";
import MetaModel from "@/app/models/meta.model";
import {
  NextRequest,
  NextResponse,
} from "next/server";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    const data =
      await MetaModel.findById(id);

    if (!data) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Meta not found",
        },
        {
          status: 404,
        }
      );
    }

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

export async function PUT(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const body = await req.json();

    const { id } = await params;

    const data =
      await MetaModel.findByIdAndUpdate(
        id,
        body,
        {
          new: true,
        }
      );

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
          "Failed to update metadata",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectDB();

    const { id } = await params;

    await MetaModel.findByIdAndDelete(
      id
    );

    return NextResponse.json({
      success: true,
      message:
        "Meta deleted successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Failed to delete metadata",
      },
      {
        status: 500,
      }
    );
  }
}