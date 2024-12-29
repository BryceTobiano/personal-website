import styles from "./nav.module.css";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className={styles.nav}> 
        <div className={styles.logo}><Link href="/">BRYCE TOBIANO</Link></div>
        <div className={styles.links}>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="https://www.linkedin.com/in/bryce-tobiano">LinkedIn</Link>
            <Link href="/BryceTobianoResume.pdf">Resume</Link>
        </div>
    </nav>
  );
}
