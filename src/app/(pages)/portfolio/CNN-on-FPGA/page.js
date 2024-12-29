import styles from "@/app/(components)/blog-post.module.css";
import Link from "next/link"

export const metadata = {
  title: 'Bryce Tobiano | CNN on FPGA',
  description: 'The process of running an CNN on an FPGA'
};

export default function SystolicArray() {

  return (
    <>
        <h1 className={styles.title}>RUNNING A CONVOLUTIONAL <br/>NEURAL NETWORK ON AN FPGA</h1>
        <div className={styles.block}>
          <h2 className={styles.heading}>TL;DR</h2>
          <ul>
            <li>
                This project aimed to implement and test a Convolutional Neural Network (CNN) on Altera DE2-115 FPGAs to identify handwritten digits from the MNIST dataset.
            </li>
            <li>
                Due to limitations in Verilog for backpropagation, we used Nios II soft processors and adapted an existing C-based implementation, achieving basic functionality
            </li>
            <li>
                Challenges included limited FPGA memory (128MB), the steep learning curve of CNNs without libraries like PyTorch, and outdated hardware with scarce documentation.
            </li>          
            <li>
                Future work will focus on optimizing training by reallocating memory, and enabling FPGA-to-FPGA communication using RS-232 for improved performance and scalability.
            </li> 
          </ul>

        </div>
        <h2 className={styles.heading}>The Project</h2>
        <p>The overarching project aim was to train and test an Convolutional Neural Network (CNN) programmed onto an Altera DE2-115 FPGA. The CNN would train on the MNIST dataset in order to identify handwritten digits.</p>
        <p>The project was initially broken into three parts. </p>
        <ol>
            <li>
                Build the CNN in Verilog and simulate the results.
            </li>
            <li>
                Program the CNN onto two separate FPGAs that communicate with each other to train and test the model.
            </li>
            <li>
                Compare the FPGA&apos;s performance with CUDA, a modern parallel computing platform. 
            </li>
        </ol>
        <p>This post will focus on the part that programming the CNN onto the interconnected FPGAs.</p>
        <p>Once we realized Verilog was not a viable option due its struggle to perform backpropagation calculations, we turned to Nios II.</p>
        <p>Nios II is a soft processor IP, essentially simulating a CPU, which provides the power and flexibility of the open-source RISC-V architecture needed to program the CNN in an FPGA environment.</p>
        <div>
            <p>Luckily, we had a starting point. We were able to fork this repo and program the C program to the environment:</p>
            <Link 
                href="https://github.com/AndrewCarterUK/mnist-neural-network-plain-c"
                className={"bold-uline"}
            >
                github.com/AndrewCarterUK/mnist-neural-network-plain-c
            </Link>
        </div>

        <p>Though this implementation is a good start, there is much to be improved upon. Refer to “Future Works” on further optimization I plan on making to improve the accuracy of our model.</p>
        <p>For now, with the limited memory on the FPGA (only 128MB!) and 60,000 images in the dataset, we were limited to choosing 30 random images to train on and, for the sake of time, limited our number of training cycles to be 100 steps.</p>
       
        <div>
          <p className="bold-uline">How does the Convolution Neural Network work?</p>
          <p>In the broadest sense, a CNN takes pixels, multiplies each pixel by a series of weights, and applies the resulting values to some mathematical functions (ReLU) to produce a series of probabilities for each digit.</p>
        </div>
        <div>
            <h2 className={styles.heading}>Results</h2>
            <p>Well… it works? We were able to train a model on a single FPGA and obtain up to 36% accuracy. Though obviously this is not great, I hope to continue to work on optimizing the performance of our neural network in terms of speed and accuracy.</p>
        </div>
        <h2 className={styles.heading}>Challenges/Takeaways</h2>

        <ul>
          <li>
            This project was a great exercise in learning completely from scratch. 
          </li>    
            <ul>
            <li style={{marginLeft: "20px"}}>Our entire project group had no knowledge of CNNs before starting the project. Furthermore, without the use of nice Python libraries like PyTorch or Tensorflow, it was a big challenge learning the math behind each layer and brainstorming ways to implement it in Verilog. </li>
            </ul>      
          <li>
            Cadence has a lot of tools and not enough documentation.
          </li> 
          <li>
            Setup takes a long time!
          </li>
            <ul>
                <li style={{marginLeft: "20px"}}>The Altera DE2-115 FPGA is an old board with a very limited amount of documentation about interfacing with software</li>
            </ul> 
        </ul>

        <h2 className={styles.heading}>Future Work</h2>
        <p>It&apos;s known that semi-custom and/or gate arrays create a faster time to market but at the cost of performance. I want to put this to the test: </p>
        <ul>
          <li>
            Improving our model: 
          </li>    
            <ul>
                <li style={{marginLeft: "20px"}}>
                    Train on more images by deallocating and reallocating images every training cycle so that our model is exposed to a variety of images.
                </li>
                <li style={{marginLeft: "20px"}}>
                    Rather than applying one large kernel to the entire image, we would apply multiple kernels.
                </li>
            </ul>      
          <li>
            RS-232 communication
          </li> 
            <ul>
                <li style={{marginLeft: "20px"}}>
                    A lack of guidance on how to utilize this protocol led us to purchasing non-crossover cable, which is not compatible for FPGA-to-FPGA communication. 
                </li>
                <li style={{marginLeft: "20px"}}>
                    This is something I hope to implement to take advantage to improve the performance of the training by taking advantage for more memory and  pipelining structures.
                </li>
            </ul> 
        </ul>
    </>
  );
}
