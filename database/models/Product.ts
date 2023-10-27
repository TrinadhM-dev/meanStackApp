
import mongoose, { Model, Document } from "mongoose";

export interface IProduct extends Document {
    _id?:string,
    name: string,
    image: string,
    price: string,
    qty: string,
    info: string,
    created_at?:string,
    updated_at?:string
}

export default IProduct;