import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
    title: String,
    description: String,
},
{
    timestamps: true,
});

const Product = mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;