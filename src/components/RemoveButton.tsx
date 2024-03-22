"use client";
import { useRouter } from 'next/navigation';
import { AiFillDelete } from 'react-icons/ai';

interface RemoveButtonProps {
    id: string; 
}

export default function RemoveButton({ id }:RemoveButtonProps){
    const router = useRouter();
    const removeProduct = async () => {
        const confirmed = confirm("Deseja deletar esse produto?");

        if(confirmed) {
            const res = await fetch(`http://localhost:3000/api/products?id=${id}`, {
                method: "DELETE",
            });

            if(res.ok) {
                router.refresh();
            }
        }

        
    }
    return (
       <button onClick={removeProduct}>
        <AiFillDelete size={24} color='#ff4848'/>
       </button>
    )
}