import Link from "next/link";

export default function UpdateProduct({ props }){
    return (
        <form action="">
            <input type="text" placeholder="Nome do produto" />
            <input type="text" placeholder="Descrição do produto" />
            <Link href={`/products/${props.productId}`}>Update</Link>
        </form>    
    )
}