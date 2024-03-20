import Link from "next/link";
import styles from './styles.module.css';

export default function NavBar() {
    return (
        <nav className={styles.navbar}>
            <Link href="/">Desenvolvimento Software de Nuvem</Link>
            <Link href="/addProduct">Adicionar Produto</Link>
        </nav>
    );
}