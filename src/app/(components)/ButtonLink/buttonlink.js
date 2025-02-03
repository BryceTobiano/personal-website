import styles from "./buttonlink.module.css";
import Link from "next/link";

export default function Button({ variant, href, children, ...props }) {
    const buttonClass = variant === 'primary' ? styles.primary : styles.secondary;
    return (
        <Link 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${styles.button} ${buttonClass}`}
            {...props}
        >
            <span>{children}</span>
        </Link>
)
}

