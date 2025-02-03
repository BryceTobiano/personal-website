import NavBar from "@/app/(components)/Nav/nav";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Bryce Tobiano | Suika Game" ,
  description: "Bryce Tobiano's Personal Website",
};

export default function PortfolioLayout({ children }) {
  return (
    <>
        <NavBar />
        <div className={styles.page}>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    </>
  );
}
