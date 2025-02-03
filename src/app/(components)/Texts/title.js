export default function Title({ className,children }) {
    const titleStyle = {
        fontWeight: "900",
        fontFamily: "Inter",
        fontSize: "3em",
        lineHeight: "1em"
    };

    return (
        <h1 style={titleStyle} className={className}>
            <span>{children}</span>
        </h1>
    )
}

