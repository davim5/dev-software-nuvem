import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../../../libs/mongodb";
import Product from "../../../../../models/product";

interface IParams {
    params: {
        id: string;
    }
  }
export async function PUT(request: NextRequest, { params }: IParams) {
    const { id } = params;
    const {
        newTitle: title,
        newDescription: description
    } = await request.json();
    await connectMongoDB();
    await Product.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({ message: "Produto editado"},{ status:200 })
}

export async function GET(request: NextRequest, { params }: IParams) {
    await connectMongoDB();
    const { id } = params;
    const product = await Product.findOne({_id: id});
    return  NextResponse.json({ product },{ status: 200 })
}