import Link from "next/link";

export default function UpdateProduct(){
    return (
        <form action="">
            <input type="text" placeholder="Nome do produto" />
            <input type="text" placeholder="Descrição do produto" />
            <Link href="/">Update</Link>
        </form>    
    )
}