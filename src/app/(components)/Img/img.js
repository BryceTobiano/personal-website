import Image from "next/image"
import { Description } from "../Texts/texts";

export default function Img({ src, desc, alt }) {
    const imgstyle = {
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center", 
        alignItems: "center",
        margin: "20px"
        
    };
    return (
        <div style={imgstyle}>
            <Image
                src={src}
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "75%", height: "auto"}}
                alt={alt || "Image"} 
            />
            <Description style={{paddingTop: "5px"}}>{desc}</Description>
        </div>
    )
}