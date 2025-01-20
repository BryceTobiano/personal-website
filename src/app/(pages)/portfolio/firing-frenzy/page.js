
import styles from "@/app/(components)/templates/blog-post/blog-post.module.css";
import Link from "next/link";

export const metadata = {
  title: 'Bryce Tobiano | Systolic Arrays',
  description: 'The process of designing a custom layout for a systolic array!'
};
 

export default function FiringFrenzy() {

  return (
    <>
        
        <h1 className={styles.title}><br />FIRING FRENZY</h1>
        <div className={styles.block}>
          <h2 className={styles.heading}>The Full Report</h2>
          <ul>
            <li>
              For the full detailed report, check out my lab partner&apos;s post by <Link href="https://annahsu.dev/blog/firing-frenzy/">clicking here.</Link>
            </li>
            <li>
              This post will be a covering my personal experience and thoughts working on the project.
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Demo Video:</h2>
          <iframe 
            width="560" 
            height="315" 

            // sizes="100vw"
            // style={{ width: "100%", height: "auto" }}
            src="https://www.youtube.com/embed/yVvjkoaHa9E?si=OfsfeIVec0ReKNGQ" 
            title="Firing Frenzy " 
            frameBorder="0" 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>
        
        <div>
          <h2 className={styles.heading}>Main technologies:</h2>

          <ul>
            <li>
              Utilized the SPI protocol to obtain data from the built-in Analog ADXL362 accelerometer.
            </li>          
            <li>
              Interfaced with the VGA output.
            </li> 
          </ul>          
        </div>

        <div>
          <h2 className={styles.heading}>Takeaway: Verilog is (kind of) similar to React?.</h2>
          <ul>
            <li>
              I must admit this is a stretch, but as someone who was exposed to web development before I found this a helpful mindset to approaching Verilog. The similarities I found mainly include:
            </li> 
          </ul>
          <ol>
            <li>
              React and Verilog are both modular 
            </li>   
              <ul>
                <li style={{marginLeft: "20px"}}>
                  Programmers can create and combine components in different ways.
                </li>
              </ul>      
            <li>
              React and Verilog update in real time 
            </li>
              <ul>
                <li style={{marginLeft: "20px"}}>
                  React has the useEffect hook with a dependency list. The code in the hook updates if a value of a variable in the dependcy list changes.
                </li>
                <li style={{marginLeft: "20px"}}>
                  Verilog has always blocks with a sensitivity list. The code in the always block executes if a value in the sensitivity list changes.
                </li>
                <li style={{marginLeft: "20px"}}>
                  The main difference here is that Verilog is dependent on clock edges while React is dependent on how fast data is fetched/updated.
                </li>
              </ul>
          </ol> 
        </div>

        <div>
          <h2 className={styles.heading}>Future Work</h2>
          <p>Due to the FPGAs having been loaned. I unforutnately am unable to continue working on this project. Though these are some improvements I would love to work on:</p>
          <ul>
            <li>
              Fixing the smoothness of the acclerometer. To match that of the loading screenn
            </li> 
            <li>
              Implement multiple targets to shoot at once.
            </li>
            <li>
              Note: I&apos;m considering reimplementing the game in the Altera FPGA I recently obtained (Stay tuned to hear more about it!).
            </li>
          </ul>
        </div>
    </>
  );
}
