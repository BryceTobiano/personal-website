import { Text } from "../Texts/texts";

export default function BulletList({ 
    items, 
    bullet = "•", 
    subBullet = "○",
    marginBottom = "10px"
}) {
    return (
        <ul style={{ marginLeft: "20px" }}>
            {items.map((item, index) => (
                <li key={index}>
                    {/* Main item */}
                    <div style={{ 
                        marginBottom: item.subItems ? "0px" : "10px",
                        display: "flex",
                        alignItems: "flex-start"
                    }}>
                        <Text>{item.text}</Text>
                    </div>
                    
                    {/* Sub items */}
                    {item.subItems && (
                        <ul style={{ paddingLeft: 0, marginLeft: "10px" }}>
                            {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex} style={{ 
                                    marginLeft: "20px", 
                                    marginBottom: "0px",
                                    display: "flex",
                                    alignItems: "flex-start"
                                }}>
                                    <span style={{ marginRight: "5px", marginTop: "2px", fontSize: "0.75em" }}>
                                        {subBullet}
                                    </span>
                                    <Text>{subItem}</Text>
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );
}