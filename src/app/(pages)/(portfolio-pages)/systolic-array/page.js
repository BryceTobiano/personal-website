import styles from "@/app/(components)/templates/blog-post/blog-post.module.css";
import { TitleMono, Heading1, Heading2, Subheading, Text} from "@/app/(components)/Texts/texts";
import Img from "@/app/(components)/Img/img";
import BulletList from "@/app/(components)/Lists/bulletlist";

export const metadata = {
  title: 'Bryce Tobiano | Systolic Arrays',
  description: 'The process of designing a custom layout for a systolic array!'
};

export default function SystolicArray() {

  return (
    <>
        <TitleMono>A FULLY CUSTOM<br />SYSTOLIC ARRAY LAYOUT</TitleMono>
        <div className={styles.block}>
          <Heading2>TL;DR</Heading2>
          <BulletList 
              items={[
                        {
                            text: "Systolic arrays are parallel computing architectures where processing elements work in an pipelined manner"
                        },
                        {
                            text: "They are ideal for computationally heavy tasks to accelerate AI/ML algorithms."
                        },
                        {
                            text: "In this project, we designed a fully custom VLSI systolic array for 4x4 matrix multiplication, achieving functional results."
                        },
                        {
                            text: "Equipped with more knowledge of VLSI circuit design, I’m currently applying semi-custom design methodologies and using automated tools to redesign our circuit to determine whether full-custom produces better results."
                        },
                    ]
                    } 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />
        
        <div>
          <Heading1>1. MOTIVATION</Heading1>
          <Text>
            Briefly going over the concept of systolic arrays for those who are unfamiliar.
          </Text>
        </div>
        <div>
          <Subheading>What is a systolic array?</Subheading>
          <Text>Systolic Arrays are motivated by their efficiency in handling high computational demands in tasks like deep learning and matrix multiplication. Traditional architectures often face bottlenecks from heavy memory access demands, requiring high bandwidth and leading to inefficiencies. In contrast, a systolic array enables data to flow directly between processing units, significantly reducing memory bandwidth requirements and maximizing data reuse within the array.</Text>
        </div>
        <div>
          <Subheading>Why systolic arrays?</Subheading>
          <Text>Implementing systolic arrays is a way of applying VLSI design and technology to improve AI/ML algorithms through hardware. Traditional architectures often face bottlenecks from heavy memory access demands, requiring high bandwidth and leading to inefficiencies. In contrast, a systolic array enables data to flow directly between processing units, significantly reducing memory bandwidth requirements and maximizing data reuse within the array.</Text>
        </div>
        <div>
          <Subheading>Use cases</Subheading>
          <Text>Systolic arrays come in many different architectures to handle a variety of special computations and are often hard-wired for specific operations to perform convolutions, correlations, matrix multiplication, or data sorting tasks. These computations are often bottlenecks in tasks such as image/video processing, or data sequencing.</Text>
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>2. THE PROJECT</Heading1>
          <Text>In this project, we were tasked to create a fully custom systolic array that performs a matrix multiplication of two 4x4 matrices.</Text>
        </div>
        <div>
          <Subheading>Components</Subheading>
          <Text>The graphic below shows the schematic of each component and how each component fits into a processing element of the systolic array. </Text>
          <Img 
              src="/systolic-array/schematic-477.png"
              desc="Schematic graphic for a processing element in our systolic array"
              alt="Image of Schematic graphic for a processing element"
          />
          <BulletList 
              items={[
                        {
                            text: "Our processing element takes a 4-bit number from the A and B line, multiplies the values and adds it to a stored register."
                        },
                        {
                            text: "A MUX is present to allow it to be passed between processing elements. Registers for select, A, and B values are also present which contribute to the pipelining nature of this."
                        },
                        
                    ]
                    } 
          />
          <Text>Duplicating and connecting the lines of each processing element in a grid line fashion results in the following:</Text>
          <Img  
              src="/systolic-array/final-477.png"
              desc="Systolic array final design" 
              alt="Systolic array final design" 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>3. RESULTS</Heading1>
          <Text>It works! We are able to multiply any pair of 4x4 matrices. A sample waveform was depicted in the figure below.</Text>
          <Text>  
            <br/>How was our performance? Well, not great. Utilizing a spectre SPICE simulation, our multiplication finishes when the operating frequency is slowed down to 125MHz and our clock period to 8ns. On top of this, our layout area was 120um x 120um and power consumption was about 30uW. 
            <br/><br/>For reference, the top echelon of the class was achieving about a 70um x 70um area with 20uW of power consumption and a 1.7ns clock period (yikes! 😬) .
          </Text>
          <Img  
              src="/systolic-array/results-477.png"
              desc="Graphed Results for he systolic array" 
              alt="Graphed Results for he systolic array" 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>4. TAKEAWAYS</Heading1>
          <BulletList 
            items={[
                {
                    text: "Using a minimum size cell is often good enough for performance.",
                    subItems: [
                        "Cadence, if you need someone to create documentation for you, my email is in my resume on the top right corner."
                    ]
                },
                {
                    text: "Cadence has a lot of tools and not enough documentation."
                },
                {
                    text: "Wire length contributes more to delay than using more layers/vias.",
                    subItems: [
                        "I feel the best analogy to this is that it is similar to why 4-layer PCBs are standard over something like 2-layer PCBs. 4-layer PCBs provide a good balance between design complexity/cost, signal integrity, and delay. Unsurprisingly, this applies to VLSI circuits as well. Being unashamed to use another layer to shorten a long global wire proved to help the delay."
                    ]
                }
            ]} 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>5. FUTURE WORK</Heading1>
          <Text>
            It&apos;s known that semi-custom and/or gate arrays create a faster time to market but at the cost of performance. I want to put this to the test:
            <br /><br />Rather than attempting to redesign a fully custom systolic array, I will utilize libraries of premade components and auto place and route tools to redesign a systolic array and compare its PAD (Power*Delay*Area) score to than the top designs of the class.
          </Text>
        </div>
    </>
  );
}
