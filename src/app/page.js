import styles from "./home.module.css";
import Link from "next/link";
import { StarFilledIcon, LinkedInLogoIcon, GitHubLogoIcon} from "@radix-ui/react-icons"

export default function Home() {
  return (
    <>
    <div className={styles.page}>
      <main className={styles.main}>
        <div>
          <p className="title">BRYCE<br></br>TOBIANO</p>
        </div>
        
        <div className="p-text">
          Hi! My name is Bryce. <p>I&apos;m tinkerer and engineer with interests in Embedded Software, Web Development, and more. 
          Currently, I am at <b className={styles.uline}>USC</b> ✌️ studying <b className={styles.uline}>Computer Engineering and Computer Science (CECS)</b>.</p>
          <p>When I&apos;m not working you can find me cooking, practicing for the Trojan Tetris Team, or snowboarding.</p>
        </div>

        <div className={styles.ctas}>
          {/* <Link 
            href="/portfolio" 
            rel="noopener noreferrer"
            className={styles.primary}
          >
            <StarFilledIcon/>
            <span>Portfolio</span>
          </Link> */}
          <Link 
            href="/BryceTobianoResume.pdf" 
            rel="noopener noreferrer"
            className={styles.primary}
          >
            <StarFilledIcon/>
            <span>Resume</span>
          </Link>
          <Link 
            href="https://www.linkedin.com/in/brycetobiano" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            <LinkedInLogoIcon/>
            <span>LinkedIn</span>
          </Link>
          <Link 
            href="https://github.com/BryceTobiano" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            <GitHubLogoIcon/>
            <span>Github</span>
          </Link>
        </div>
      </main>
      <footer className={styles.footer}>&quot;And not only so, but we also boast in our tribulations, knowing that tribulation produces endurance&quot;&ensp;- Romans 5:3</footer>
    </div>
    </>
  );
}
