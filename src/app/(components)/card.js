import styles from "./card.module.css";
import Link from "next/link";

export default function Card({title, description, link, image}) {
  return (
    <Link
      href={link} 
      rel="noopener noreferrer"
    >
      <div className={styles.card}>
          {/* <div className={styles.img}>
              <Image
                  src="/frenzy_thumbnail.png"
                  width={415}
                  height={251}
                  alt="Firing Frenzy Thumbnail" 
              />
          </div> */}
          <div className={styles.info}>
              <div className={styles.title}>{title}</div>
              <p>{description}</p>
          </div>
          
      </div>
    </Link>

  );
}
