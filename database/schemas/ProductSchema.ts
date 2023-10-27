import mongoose, { Model, Document } from "mongoose";
import Product from '../models/Product';

const productSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    qty: { type: String, required: true },
    info: { type: String, required: true },
}, { timestamps: true });

 const ProductTable: Model<Product> = mongoose.model<Product>('Product', productSchema);

export default ProductTable;
