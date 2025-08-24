
import styles from "@/app/(components)/templates/blog-post/blog-post.module.css";
import { TitleMono, Heading1, Heading2, Subheading, Text, StyledLink} from "@/app/(components)/Texts/texts";
import BulletList from "@/app/(components)/Lists/bulletlist";
import NumberedList from "@/app/(components)/Lists/numberedlist";

export const metadata = {
  title: 'Bryce Tobiano | Firing Frenzy',
  description: 'Exploring acclerorometer FPGA Project'
};
 
export default function FiringFrenzy() {
  return (
    <>
        <TitleMono>FIRING FRENZY</TitleMono>
        <div className={styles.block}>
          <Heading2>THE FULL REPORT</Heading2>
          <ul style={{ marginLeft: "20px" }}>
            <li>
              For the full detailed report, check out my lab partner&apos;s post by <StyledLink style={{textDecoration: "underline"}} href="https://annahsu.dev/blog/firing-frenzy/">clicking here.</StyledLink>
            </li>
            <li>
              This post will be a covering my personal experience and thoughts working on the project.
            </li>
          </ul>
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>1. DEMO VIDEO:</Heading1>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/yVvjkoaHa9E?si=OfsfeIVec0ReKNGQ" 
            title="Firing Frenzy " 
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />
        
        <div>
          <Heading1>2. MAIN TECHNOLOGIES:</Heading1>
          <BulletList 
              items={[
                        {
                            text: "Utilized the SPI protocol to obtain data from the built-in Analog ADXL362 accelerometer."
                        },
                        {
                            text: "Interfaced with the VGA output."
                        },
                    ]
                    } 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>3. TAKEAWAY:</Heading1>
          <Heading2>Verilog is (kind of) similar to React?</Heading2>
          <Text>
              I must admit this is a stretch, but as someone who was exposed to web development before I found this a helpful mindset to approaching Verilog.<br /><br />The similarities I found mainly include:
          </Text>
          <BulletList 
              items={[
                {
                    text: "React and Verilog are both modular",
                    subItems: [
                      "Programmers can create and combine components in different ways."
                    ]
                },
                {
                    text: "React and Verilog update in real time",
                    subItems: [
                      "React has the useEffect hook with a dependency list. The code in the hook updates if a value of a variable in the dependcy list changes.",
                      "Verilog has always blocks with a sensitivity list. The code in the always block executes if a value in the sensitivity list chang0es.",
                      "The main difference here is that Verilog is dependent on clock edges while React is dependent on how fast data is fetched/updated."
                    ]
                },
            ]} 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>4. FUTURE WORK:</Heading1>
          <Text>
            Due to the FPGAs having been loaned. I unforutnately am unable to continue working on this project. Though these are some improvements I would love to work on:
          </Text>
          <BulletList 
            items={[
                {
                    text: "Fixing the smoothness of the acclerometer. To match that of the loading screenn",
                },
                {
                    text: "Implement multiple targets to shoot at once.",
                }
              ]} 
          />
        </div>
    </>
  );
}
