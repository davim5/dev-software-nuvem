"use client";
import { IProduct } from "@/components/ProductsList";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

interface UpdateProductProps {
    params : {
        id: string; 
    }
}

interface ProductByIdResponse {
    product: IProduct;
}

const getProductById = async (id: string):Promise<ProductByIdResponse> => {
    try {
        const res = await fetch(`https://dev-software-nuvem.vercel.app/api/products/${id}`, {
            cache:'no-store'
        });

        if(!res.ok) {
            throw new Error("Produto não encontrado");
        }

        return res.json()
    }
    catch (error){
        console.log(error);
        return { product: { _id: "", title: "", description: "" } };
    }
}

// eslint-disable-next-line @next/next/no-async-client-component
export default function UpdateProduct({ params }:UpdateProductProps) {
    const { id } = params;
    const [product, setProduct] = useState<IProduct>({ _id: "", title: "", description: "" });
    const [newTitle, setNewTitle] = useState("");
    const [newDescription, setNewDescription] = useState("");

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            const { product } = await getProductById(id);
            setProduct(product);
            setNewTitle(product.title);
            setNewDescription(product.description);
        };

        fetchData();
    }, [id]);


    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!newTitle || !newDescription) {
            alert("Título e descrição devem ser preenchidos");
            return;
        }

        try {
            const res = await fetch(`https://dev-software-nuvem.vercel.app/api/products/${id}`, {
                method:"PUT",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    newTitle,
                    newDescription
                }),
            });

            if(res.ok) {
                router.push("/");
            } else {
                throw new Error("Falhou ao editar produto");
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setNewTitle(e.target.value) } value={newTitle} type="text" placeholder="Nome do produto" />
            <input onChange={(e) => setNewDescription(e.target.value) } value={newDescription} type="text" placeholder="Descrição do produto" />
            <button type="submit">Update</button>
        </form>    
    )
}