import styles from "@/app/(components)/templates/blog-post/blog-post.module.css";
import Link from "next/link"
import { TitleMono, Heading1, Heading2, Subheading, Text, StyledLink } from "@/app/(components)/Texts/texts";
import BulletList from "@/app/(components)/Lists/bulletlist";
import NumberedList from "@/app/(components)/Lists/numberedlist";

export const metadata = {
  title: 'Bryce Tobiano | CNN on FPGA',
  description: 'The process of running an CNN on an FPGA'
};

export default function SystolicArray() {

  return (
    <>
        <TitleMono>RUNNING A CONVOLUTIONAL <br/>NEURAL NETWORK ON AN FPGA</TitleMono>
        <div className={styles.block}>
          <Heading2>TL;DR</Heading2>
          <BulletList 
              items={[
                        {
                            text: "This project aimed to implement and test a Convolutional Neural Network (CNN) on Altera DE2-115 FPGAs to identify handwritten digits from the MNIST dataset."
                        },
                        {
                            text: "Due to limitations in Verilog for backpropagation, we used Nios II soft processors and adapted an existing C-based implementation, achieving basic functionality"
                        },
                        {
                            text: "Challenges included limited FPGA memory (128MB), the steep learning curve of CNNs without libraries like PyTorch, and outdated hardware with scarce documentation."
                        },
                        {
                            text: "Future work will focus on optimizing training by reallocating memory, and enabling FPGA-to-FPGA communication using RS-232 for improved performance and scalability."
                        },
                    ]
                    } 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>1. THE PROJECT</Heading1>
          <Text>
            The overarching project aim was to train and test an Convolutional Neural Network (CNN) programmed onto an Altera DE2-115 FPGA. The CNN would train on the MNIST dataset in order to identify handwritten digits.
          </Text>
        </div>

        <div>
          <Text>
            The project was initially broken into three parts.
          </Text>
          <NumberedList 
              items={[
                        {
                            text: "Build the CNN in Verilog and simulate the results."
                        },
                        {
                            text: "Program the CNN onto two separate FPGAs that communicate with each other to train and test the model."
                        },
                        {
                            text: "Challenges included limited FPGA memory (128MB), the steep learning curve of CNNs without libraries like PyTorch, and outdated hardware with scarce documentation."
                        },
                        {
                            text: "Compare the FPGA&apos;s performance with CUDA, a modern parallel computing platform. "
                        },
                    ]
                    } 
          />
        </div>
        
        <Text>
          This post will focus on the part that programming the CNN onto the interconnected FPGAs.
        </Text>

        <Text>
          Once we realized Verilog was not a viable option due its struggle to perform backpropagation calculations, we turned to Nios II.
        </Text>

        <Text>
          Nios II is a soft processor IP, essentially simulating a CPU, which provides the power and flexibility of the open-source RISC-V architecture needed to program the CNN in an FPGA environment.
        </Text>

        <div>
          <Text>
            Luckily, we had a starting point. We were able to fork this repo and program the C program to the environment:
          </Text>
          <StyledLink 
              href="https://github.com/AndrewCarterUK/mnist-neural-network-plain-c"
              className={"bold-uline"}
          >
              github.com/AndrewCarterUK/mnist-neural-network-plain-c
          </StyledLink>
        </div>

        <Text>
          Though this implementation is a good start, there is much to be improved upon. Refer to “Future Works” on further optimization I plan on making to improve the accuracy of our model.
        </Text>

        <Text>
          For now, with the limited memory on the FPGA (only 128MB!) and 60,000 images in the dataset, we were limited to choosing 30 random images to train on and, for the sake of time, limited our number of training cycles to be 100 steps.
        </Text>
       
        <div>
          <Subheading>How does the Convolution Neural Network work?</Subheading>
          <Text>
            In the broadest sense, a CNN takes pixels, multiplies each pixel by a series of weights, and applies the resulting values to some mathematical functions (ReLU) to produce a series of probabilities for each digit.
          </Text>
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>2. RESULTS</Heading1>
          <Text>
            Well… it works? We were able to train a model on a single FPGA and obtain up to 36% accuracy. Though obviously this is not great, I hope to continue to work on optimizing the performance of our neural network in terms of speed and accuracy.
          </Text>
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>3. CHALLENGES & TAKEAWAYS</Heading1>
          <BulletList 
              items={[
                  {
                      text: "This project was a great exercise in self-learning. More specifically in machine learning and FPGA concepts.",
                      subItems: [
                        "Our entire project group had no knowledge of CNNs before starting the project. Furthermore, without the use of nice Python libraries like PyTorch or Tensorflow, it was a big challenge learning the math behind each layer and brainstorming ways to implement it in Verilog."
                      ]
                  },
                  {
                      text: "Cadence has a lot of tools and not a lot publicaly available documentation."
                  },
                  {
                      text: "Setup takes a long time!",
                      subItems: [
                        "The Altera DE2-115 FPGA is an old board with a very limited amount of documentation about interfacing with software"
                      ]
                  },
              ]} 
          />
        </div>

        <div style={{borderTop: "5px solid var(--light-gray)", borderRadius: "10px"}} />

        <div>
          <Heading1>4. FUTURE WORK</Heading1>
          <BulletList 
              items={[
                  {
                      text: "Improving our model:",
                      subItems: [
                        "Train on more images by deallocating and reallocating images every training cycle so that our model is exposed to a variety of images.",
                        "Rather than applying one large kernel to the entire image, we would apply multiple kernels."
                      ]
                  },
                  {
                      text: "RS-232 communication",
                      subItems: [
                        "A lack of guidance on how to utilize this protocol led us to purchasing non-crossover cable, which is not compatible for FPGA-to-FPGA communication.",
                        "This is something I hope to implement to take advantage to improve the performance of the training by taking advantage for more memory and  pipelining structures."
                      ]
                  },
              ]} 
          />
        </div>

    </>
  );
}
