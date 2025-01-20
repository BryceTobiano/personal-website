export default function Heading2({ className, children }) {
    const heading2style = {
        fontWeight: "900",
        fontFamily: "var(--font-geist-mono)",
        fontSize: "2em",
        lineHeight: "1em"
    };

    return (
        <h1 style={heading2style} className={className}>
            <span>{children}</span>
        </h1>
    )
}

