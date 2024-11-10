import styles from "./portfolio.module.css";
import NavBar from "@/app/(components)/nav";
import Card from "@/app/(components)/card";

export const metadata = {
  title: 'Bryce Tobiano | Portfolio',
  description: 'Some things I have done!'
};

export default function Portfolio() {
  return (
    <>
    <NavBar />
    <div className={styles.page}>
      <main className={styles.main}>
        <p className="title">PORTFOLIO</p>
        
        <Card 
          title="Firing Frenzy" 
          description="building a fun little game with an FPGA"
        />
      </main>
    </div>
    </>
  );
}
