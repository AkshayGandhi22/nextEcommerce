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