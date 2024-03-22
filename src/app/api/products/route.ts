import { NextRequest, NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import Product from '../../../../models/product';

export async function POST(request: NextRequest) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Product.create({title,description})
    return NextResponse.json({message:"Produto Criado"}, {status: 201});
}

export async function GET() {
    await connectMongoDB();
    const products = await Product.find();
    return NextResponse.json({products});
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Product.findByIdAndDelete(id);
    return NextResponse.json({ message:"Produto deletado"}, {status: 200});
}