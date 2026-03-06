import mongoose, { Schema, models, model } from "mongoose";

type clothSize = "XS" | "S" | "M" | "L" | "XL" | "XXL";
type shoeSize = "6" | "6.5" | "7" | "7.5" | "8" | "8.5" | "9" | "9.5" | "10" | "10.5" | "11" | "11.5" | "12";

export type Product = {
    brand: string;
    title: string;
    heading?: string;
    galleryImages: string[];
    sizes: [clothSize | shoeSize] | null;
    desc?: string;
    details?: Record<string, any>;
    // gender-target -> male 
    rating: number;
    Seller?: string;
    reviews: number;
    stock: number;
    price: number;
    originalPrice: number;
    discount?: number;
    category: string;
    related_products?: string[];
};

const ProductSchema = new Schema<Product>(
    {
        brand: {
            type: String,
            required: [true, "Brand is required"],
            trim: true,
        },

        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true,
        },

        heading: {
            type: String,
            trim: true,
        },

        galleryImages: {
            required: [true, "Gallery images are required"],
            type: [String],
            default: [],
        },

        sizes: {
            type: [String],
            required: [true, "Sizes are required"],
            enum: ["XS", "S", "M", "L", "XL", "XXL"],
        },
        desc: {
            type: String,
        },
        details: {
            type: Schema.Types.Mixed,
            default: {},
        },
        rating: {
            type: Number,
            default: 0,
            min: 0,
            max: 5,
        },
        Seller: {
            type: String,
        },

        reviews: {
            type: Number,
            default: 0,
        },

        stock: {
            type: Number,
            required: true,
            default: 0,
        },

        price: {
            type: Number,
            required: [true, "Price is required"],
        },

        originalPrice: {
            type: Number,
        },

        discount: {
            type: Number,
        },

        category: {
            type: String,
            required: [true, "Category is required"],
        },
        related_products: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const ProductModel =
    models.Product || model<Product>("Product", ProductSchema);

export default ProductModel;
