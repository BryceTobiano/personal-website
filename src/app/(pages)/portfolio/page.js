import styles from "./portfolio.module.css";
import Card from "@/app/(components)/Card/card";

export const metadata = {
  title: 'Bryce Tobiano | Portfolio',
  description: 'Some things I have done!'
};

export default function Portfolio() {
  return (
    <>
      <div className={styles.titleContainer}>
        <p className={styles.titleText}>PORTFOLIO</p>
        <p className={styles.descriptionText}> A list of things I have done or am currently working on</p>
      </div>
      
      <Card 
        title="SUIKA GAME" 
        link="/suika"
        image="/suika/thumbnail-suika.png"
        date="December 15, 2024"
        description={
          <>
            Recreated popular Japanese arcade game, Suika Game, in a web format using PhaserJS.
          </>
        }
      />

      <Card 
        title="A FULLY CUSTOM SYSTOLIC ARRAY LAYOUT" 
        link="/systolic-array"
        image="/systolic-array/thumbnail-477.png"
        date="December 15, 2024"
        description={
          <>
            Creating a full custom layout design for a systolic array, a unit
            handling high computational demands in tasks like deep learning and
            matrix multiplication. 
            Optimizing for area, power consumption, and
            computational delay.
          </>
        }
      />
      <Card 
        title="RUNNING A CONVOLUTIONAL NEURAL NETWORK ON AN FPGA" 
        link="/CNN-on-FPGA"
        image="/thumbnail-cnn.png"
        date="December 15, 2024"
        description={
          <>
           Training and testing a neural network to identify handwritten digits using the MNIST dataset. 
           Utilizing features such as RS232 communication and NiosII Soft CPU simulation. 
          </>
        }
      />
      <Card 
        title="FIRING FRENZY" 
        link="/firing-frenzy"
        image="/thumbnail-frenzy.png"
        date="April 23, 2024"
        description={
          <>
            For EE 354: Introduction to Digital Circuits, 
            my lab partner and I solidified our fundamentals in Verilog by building an aiming practice game 
            using the Nexys 4 and its built-in Analog ADXL362 accelerometer
          </>
        }
      />
    </>
  );
}
