"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function AddProduct(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!title || !description) {
            alert("Título e descrição devem ser preenchidos");
            return;
        }

        try {
            const res = await fetch("http://localhost:3000/api/products", {
                method:"POST",
                headers: {
                    "Content-type":"application/json"
                },
                body: JSON.stringify({
                    title,
                    description
                }),
            });

            if(res.ok) {
                router.push("/");
            } else {
                throw new Error("Falhou ao criar produto");
            }
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setTitle(e.target.value) } type="text" placeholder="Nome do produto" />
            <input onChange={(e) => setDescription(e.target.value) }type="text" placeholder="Descrição do produto" />
            <button type="submit">Adicionar</button>
        </form>    
    )
}