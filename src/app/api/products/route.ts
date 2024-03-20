import { NextResponse } from 'next/server';
import connectMongoDB from '../../../../libs/mongodb';
import Product from '../../../../models/product';

export async function POST(request: any) {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Product.create({title,description})
    return NextResponse.json({message:"Produto Criado"}, {status: 201});
}