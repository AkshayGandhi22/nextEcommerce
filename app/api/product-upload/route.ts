import { connectDB } from "@/app/_lib/utills/mongoose"
import ProductModel, { Product } from "@/app/models/Product";
import mongoose, { mongo } from "mongoose"
import { NextResponse } from "next/server";
import createProduct from "../../_lib/utills/product-utills";
import { uploadFilesToGridFS, UploadedFile } from "@/app/_lib/utills/gridfs";

export async function POST(req: Request) {
    const productDetails = await req.formData();

    const prdctTitle = String(productDetails.get("title") ?? "");
    const prdctBrand = String(productDetails.get("brand") ?? "");
    const prdctCategory = String(productDetails.get("category") ?? "");
    const prdctDesc = String(productDetails.get("desc") ?? "");
    const prdctSeller = String(productDetails.get("seller") ?? "");

    const prdctOriginalPrice = Number(productDetails.get("originalPrice"));
    const prdctPrice = Number(productDetails.get("price"));
    const prdctDiscount = Number(productDetails.get("discount"));
    const prdctRating = Number(productDetails.get("rating"));
    const prdctReviews = Number(productDetails.get("reviews"));
    const prdctStock = Number(productDetails.get("stock"));

    const productSizes = productDetails.getAll("sizes").map(String);

    // ✅ Correct way to read multiple uploaded files
    const imageFiles = productDetails.getAll("prdctImages").filter((x): x is File => x instanceof File);

    await connectDB();

    // ✅ Upload via reusable function
    const uploadedFiles: UploadedFile[] = await uploadFilesToGridFS(imageFiles, {
        bucketName: "uploads",
        folder: "products", // optional (helps organize in GridFS)
    });


    const galleryImageIds = uploadedFiles.map(f => f.fileId);

    // ✅ Save product AFTER uploading so you can store gallery images
    const product = {
        title: prdctTitle,
        brand: prdctBrand,
        category: prdctCategory,
        galleryImages: galleryImageIds, // or just store fileIds depending on schema
        originalPrice: prdctOriginalPrice,
        price: prdctPrice,
        rating: prdctRating,
        reviews: prdctReviews,
        sizes: productSizes,
        stock: prdctStock,
        desc: prdctDesc,
        details: {},
        discount: prdctDiscount,
        related_products: [],
        seller: prdctSeller, // ✅ keep consistent casing
    };

    const created = await createProduct(ProductModel, product as Product);

    return NextResponse.json({
        success: true,
        product: created,
        files: uploadedFiles,
    });
}

export async function GET() {
    await connectDB();
    const products = await ProductModel.find();
    return NextResponse.json(products);
}