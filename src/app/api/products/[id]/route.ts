import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Product from "../../../../../models/product";

export async function PUT(request: NextRequest, { params }) {
    const { id } = params;
    const {
        newTitle: title,
        newDescription: description
    } = await request.json();
    await connectMongoDB();
    await Product.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({ message: "Produto editado"},{ status:200 })
}

export async function GET(request: NextRequest, { params }) {
    await connectMongoDB();
    const { id } = params;
    const product = await Product.findOne({_id: id});
    return  NextResponse.json({ product },{ status: 200 })
}