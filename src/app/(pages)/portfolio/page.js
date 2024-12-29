import styles from "./portfolio.module.css";
import Card from "@/app/(components)/card";

export const metadata = {
  title: 'Bryce Tobiano | Portfolio',
  description: 'Some things I have done!'
};

export default function Portfolio() {
  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>PORTFOLIO</p>
        <p> A list of things I have done or am currently working on</p>
      </div>
      
      <Card 
        title="SYSTOLIC ARRAY LAYOUT" 
        link="/portfolio/systolic-array"
        description={
          <>
            Creating a <b>full custom layout design</b> for a systolic array, a unit
            handling high computational demands in tasks like deep learning and
            matrix multiplication. 
            Optimizing for area, power consumption, and
            computational delay.
          </>
        }
      />
      <Card 
        title="NEURAL NETWORKS ON AN FPGA" 
        link="/portfolio/NN-FPGA"
        description="Training and testing a neural network to identify handwritten digits using the MNIST dataset. Utilizing features such as RS232 communication "
        
      />
      <Card 
        title="FIRING FRENZY" 
        link="/portfolio/firing-frenzy"
        description="Building a fun shooter game on FPGA"
      />
    </>
  );
}
