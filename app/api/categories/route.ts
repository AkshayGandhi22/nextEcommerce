import { NextRequest, NextResponse } from "next/server";
import CategoriesModel from "@/app/models/Categorie";
import { connectDB } from "@/app/_lib/utills/mongoose"

export async function POST(req: NextRequest) {
    await connectDB();
    const body = await req.json();

    const category = await CategoriesModel.create(body);

    return NextResponse.json({ success: true, category });
}

export async function GET() {
    await connectDB();

    const categories = await CategoriesModel.find();

    return NextResponse.json(categories);
}

export async function DELETE(req: NextRequest) {
    await connectDB();

    const { id } = await req.json();

    await CategoriesModel.findByIdAndDelete(id);

    return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
    await connectDB();

    const { id, mainCategory, subCategories } = await req.json();

    if (!id) {
        return NextResponse.json({ success: false, message: "Category id is required" }, { status: 400 });
    }

    const updatedCategory = await CategoriesModel.findByIdAndUpdate(
        id,
        { mainCategory, subCategories },
        { new: true }
    );

    if (!updatedCategory) {
        return NextResponse.json({ success: false, message: "Category not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, category: updatedCategory });
}
