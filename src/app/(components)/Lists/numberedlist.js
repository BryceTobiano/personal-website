import { Text } from "../Texts/texts";

export default function NumberedList({ 
    items, 
    marginBottom = "10px"
}) {
    return (
        <ol style={{ marginBottom, paddingLeft: "20px" }}>
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
                        <ol style={{ listStyle: "none", paddingLeft: 0, marginBottom: "10px" }}>
                            {item.subItems.map((subItem, subIndex) => (
                                <li key={subIndex} style={{ 
                                    marginLeft: "20px", 
                                    marginBottom: "0px",
                                    display: "flex",
                                    alignItems: "flex-start"
                                }}>
                                    <Text>{subItem}</Text>
                                </li>
                            ))}
                        </ol>
                    )}
                </li>
            ))}
        </ol>
    );
}