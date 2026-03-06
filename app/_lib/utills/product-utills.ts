import { Product } from "@/app/models/Product";
import mongoose from "mongoose";

async function crateProduct(productModel: mongoose.Model<any>, productDetails: Product) {
    let model = await productModel.create(productDetails);
    await model.save();
}
export default crateProduct;