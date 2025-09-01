import styles from "./about.module.css";
import Image from "next/image";
import NavBar from "@/app/(components)/Nav/nav";
import { Heading2, Text } from "@/app/(components)/Texts/texts";
import { StyledLink } from "@/app/(components)/Texts/texts";
import Link from "next/link";
import { LinkedInLogoIcon, FileTextIcon, GitHubLogoIcon} from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
    <NavBar />
    <div className={styles.page}>
      <div className={styles.content}>
        <div className={styles.headshot}>
            <Image
              src={"/about_headshot.png"}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto", boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)', borderRadius: "35px" }}
              alt="Schematic graphic for a processing element" 
            />
            <div style={{display: "flex", gap: "16px"}}>
              <Link 
                href="/" 
                rel="noopener noreferrer"
                className={styles.primary}
              >
                <LinkedInLogoIcon height="32" width="32"/>
              </Link>
              <Link 
                href="/" 
                rel="noopener noreferrer"
                className={styles.primary}
              >
                <GitHubLogoIcon height="32" width="32"/>
              </Link>
                            <Link 
                href="/" 
                rel="noopener noreferrer"
                className={styles.primary}
              >
                <FileTextIcon height="32" width="32"/>
              </Link>
            </div>
        </div>
        <div>
          <Heading2>Hey there!👋</Heading2>
          <Text>My name is Bryce Tobiano.<br /></Text>
          <Text>I&apos;m currently at USC finishing up the following:</Text>
 
         <ul style={{ marginLeft: "20px" }}>
            <li>
              <Text>
                <StyledLink href="https://www.cs.usc.edu/academic-programs/undergrad/computer-engineering-and-computer-science/" target="_blank" rel="noopener noreferrer">
                  B.S. in Computer Engineering and Computer Science
                </StyledLink>
              </Text>
            </li>
            <li>
              <Text>
                <StyledLink href="https://www.cs.usc.edu/academic-programs/undergrad/computer-engineering-and-computer-science/" target="_blank" rel="noopener noreferrer">
                  M.S. in Electrical Engineering
                </StyledLink>
              </Text>
            </li>
          </ul>
                    
          {/* <br />

          <Text>My main engineering interests are in semiconductors and software engineering.</Text> */}

          <br />

          <Text>I&apos;m currently interning part-time at <StyledLink href="https://www.northropgrumman.com/what-we-do/mission-solutions/microelectronics">Northrop Grumman&apos;s Microelectronics Center (NGMC)</StyledLink> working on a variety of initiatives such as: developing <StyledLink href="https://en.wikipedia.org/wiki/Process_design_kit" >PDKs</StyledLink>, implementing ML defect detection, creating custom tooling software, and more!</Text>

          </div>
      </div>
    </div>



    </>
  );
}
