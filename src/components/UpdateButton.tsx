import Link from "next/link";
import { AiFillEdit } from 'react-icons/ai';

export default function UpdateButton(){
    return (
       <Link href={'/updateProduct/123'}>
        <AiFillEdit size={24} color="#333"/>
       </Link>
    )
}