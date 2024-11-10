import styles from "./nav.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
        <div className={styles.logo}><Link href="/">BRYCE TOBIANO</Link></div>
        <div className={styles.links}>
            <Link href="">About</Link>
            <Link href="">Portfolio</Link>
            <Link href="">LinkedIn</Link>
        </div>
    </nav>
  );
}
