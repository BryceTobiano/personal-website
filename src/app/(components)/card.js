import styles from "./card.module.css";
import Image from "next/image";

export default function Card({title, description}) {
  return (
    <div className={styles.card}>
        <div className={styles.img}>
            <Image
                src="/frenzy_thumbnail.png"
                width={415}
                height={251}
                alt="Firing Frenzy Thumbnail" 
            />
        </div>
        <div className={styles.info}>
            <div className={styles.title}>{title}</div>
            <p>{description}</p>
        </div>
        
    </div>
  );
}
