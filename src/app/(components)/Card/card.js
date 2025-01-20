import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";
import Heading2 from "../Texts/heading2";

export default function Card({title, description, link, image, date}) {
  return (
    <Link
      href={link} 
      rel="noopener noreferrer"
    >
      <div className={styles.card}>
          <div className={styles.info}>
              <Heading2>
                {title}
              </Heading2>
              <em>{date}</em>
              <p className={styles.descriptionText}>{description}</p>
          </div>
          <div className={styles.imgWrapper}>
            <div className={styles.img}>
              <Image
                src={image}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="Schematic graphic for a processing element" 
              />
            </div>
          </div>

      </div>
    </Link>

  );
}
