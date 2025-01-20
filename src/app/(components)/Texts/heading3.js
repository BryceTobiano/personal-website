export default function Heading3({ className, children }) {
    const heading3style = {
        fontWeight: "700",
        fontFamily: "var(--font-geist-mono)",
        fontSize: "1.5em",
        lineHeight: "1em"
    };

    return (
        <h1 style={heading3style} className={className}>
            <span>{children}</span>
        </h1>
    )
}

