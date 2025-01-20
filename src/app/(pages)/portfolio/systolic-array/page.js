import styles from "@/app/(components)/templates/blog-post/blog-post.module.css";
import Image from "next/image"

export const metadata = {
  title: 'Bryce Tobiano | Systolic Arrays',
  description: 'The process of designing a custom layout for a systolic array!'
};

export default function SystolicArray() {

  return (
    <>
        <h1 className={styles.title}>A FULLY CUSTOM<br />SYSTOLIC ARRAY LAYOUT</h1>
        <div className={styles.block}>
          <h2 className={styles.heading}>TL;DR</h2>
          <ul>
            <li>
              Systolic arrays are parallel computing architectures where processing elements work in an pipelined manner
            </li>
            <li>
              They are ideal for computationally heavy tasks to accelerate AI/ML algorithms.
            </li>
            <li>
              In this project, we designed a fully custom VLSI systolic array for 4x4 matrix multiplication, achieving functional results. 
            </li>          
            <li>
              Equipped with more knowledge of VLSI circuit design, I’m currently applying semi-custom design methodologies and using automated tools to redesign our circuit to determine whether full-custom produces better results. 
            </li> 
          </ul>

        </div>
        
        <h2 className={styles.heading}>Motivation</h2>
        <div>
          <p className="bold-uline">What is a systolic array?</p>
          <p>Systolic Arrays are motivated by their efficiency in handling high computational demands in tasks like deep learning and matrix multiplication. Traditional architectures often face bottlenecks from heavy memory access demands, requiring high bandwidth and leading to inefficiencies. In contrast, a systolic array enables data to flow directly between processing units, significantly reducing memory bandwidth requirements and maximizing data reuse within the array.</p>
        </div>
        <div>
          <p className="bold-uline">What is a systolic array?</p>
          <p>Implementing systolic arrays is a way of applying VLSI design and technology to improve AI/ML algorithms through hardware. Traditional architectures often face bottlenecks from heavy memory access demands, requiring high bandwidth and leading to inefficiencies. In contrast, a systolic array enables data to flow directly between processing units, significantly reducing memory bandwidth requirements and maximizing data reuse within the array.</p>
        </div>
        <div>
          <p className="bold-uline">Use cases</p>
          <p>Systolic arrays come in many different architectures to handle a variety of special computations and are often hard-wired for specific operations to perform convolutions, correlations, matrix multiplication, or data sorting tasks. These computations are often bottlenecks in tasks such as image/video processing, or data sequencing.</p>
        </div>

        <h2 className={styles.heading}>The Project</h2>
        <p>In this project, we were tasked to create a fully custom systolic array that performs a matrix multiplication of two 4x4 matrices.</p>
        
        <div>
          <p className="bold-uline">Components</p>
          <p>The graphic below shows the schematic of each component and how each component fits into a processing element of the systolic array. </p>
            <Image
              src="/systolic-array/schematic-477.png"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
              alt="Schematic graphic for a processing element" 
            />
          <Image
            src="/systolic-array/layout-477.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Layout graphic for a processing element" 
          />

          <ul>
            <li>
              Our processing element takes a 4-bit number from the A and B line, multiplies the values and adds it to a stored register. 
            </li>          
            <li>
              A MUX is present to allow it to be passed between processing elements. Registers for select, A, and B values are also present which contribute to the pipelining nature of this.
            </li> 
          </ul>
          <p> Duplicating and connecting the lines of each processing element in a grid line fashion results in the following</p>
          <Image
            src="/systolic-array/final-477.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Systolic array final design" 
          />

        </div>

        <div>
          <h2 className={styles.heading}>Results</h2>
          <p>It works! We are able to multiply any pair of 4x4 matrices. A sample waveform was depicted below. </p>
          <Image
            src="/systolic-array/results-477.png"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            alt="Graphed Results for he systolic array" 
          />
          <p>
            How was our performance? Well, not great. Utilizing a spectre SPICE simulation, our multiplication finishes when the operating frequency is slowed down to 125MHz and our clock period to 8ns. On top of this, our layout area was 120um x 120um and power consumption was about 30uW. 
            <br/>For reference, the top echelon of the class was achieving about a 70um x 70um area with 20uW of power consumption and a 1.7ns clock period (yikes! 😬) .
          </p>
        </div>

        <div>
          <h2 className={styles.heading}>Takeaways</h2>
          <ul>
            <li>
              Using a minimum size cell is often good enough for performance.
            </li>    
              <ul>
                <li style={{marginLeft: "20px"}}>Cadence, if you need someone to create documentation for you, my email is in my resume on the top right corner.</li>
              </ul>      
            <li>
              Cadence has a lot of tools and not enough documentation.
            </li> 
            <li>
              Wire length contributes more to delay than using more layers/vias.
            </li>
              <ul>
                <li style={{marginLeft: "20px"}}>I feel the best analogy to this is that it is similar to why 4-layer PCBs are standard over something like 2-layer PCBs. 4-layer PCBs provide a good balance between design complexity/cost, signal integrity, and delay. Unsurprisingly, this applies to VLSI circuits as well. Being unashamed to use another layer to shorten a long global wire proved to help the delay.</li>
              </ul> 
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Future Work</h2>
          <p>It&apos;s known that semi-custom and/or gate arrays create a faster time to market but at the cost of performance. I want to put this to the test: </p>
          <ul>
            <li>
            Over the course of my short winter break, rather than attempting to redesign a fully custom systolic array, I will utilize libraries of premade components and auto place and route tools to redesign a systolic array and compare its PAD (Power*Delay*Area) score to than the top designs of the class.
            </li> 
            <li>
              Stay tuned for a future update!
            </li>
          </ul>
        </div>
    </>
  );
}
