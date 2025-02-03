import styles from "./button.module.css";

export default function Button({ variant, href, children, ...props }) {
    const buttonClass = variant === 'primary' ? styles.primary : styles.secondary;
    return (
        <button className={`${styles.button} ${buttonClass}`} {...props}>
            <span>{children}</span>
        </button>
)
}

