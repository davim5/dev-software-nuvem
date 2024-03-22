import Link from "next/link";
import RemoveButton from "./../RemoveButton";
import UpdateButton from "./../UpdateButton";
import styles from "./styles.module.css";
export interface IProduct {
  _id: string;
  title: string;
  description: string;
}

interface IProductsResponse {
  products: IProduct[];
}


const getProducts = async ():Promise<IProductsResponse> => {
  try {
    const res = await fetch("https://dev-software-nuvem.vercel.app/api/products", {
      cache: "no-store"
    })

    if(!res.ok) {
      throw new Error('Produtos não encontrados');
    }

    return res.json();
  }
  catch(error) {
    console.log("Erro ao carregar produtos.",error);
    return { products: [] };
  }
}

export default async function ProductsList(){

    const { products } = await getProducts();

    return (
        <div className={styles.list}>
          { products.map( product => (
              <div key={product._id} className={styles.item}>
              <div>
                <h3 className={styles.itemTitle}>{product.title}</h3>
                <p className={styles.itemDescription}>{product.description}</p>
              </div>
              <div>
                  <RemoveButton id={product._id}></RemoveButton>
                  <Link href={`/updateProduct/${product._id}`}>Update</Link>
              </div>  
            </div>
          ))}
        </div>
    )
}