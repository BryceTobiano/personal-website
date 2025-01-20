export default function Heading1({ className, children }) {
    const heading1style = {
        fontWeight: "900",
        fontFamily: "var(--font-geist-mono)",
        fontSize: "3em",
        lineHeight: "1em"
    };

    return (
        <h1 style={heading1style} className={className}>
            <span>{children}</span>
        </h1>
    )
}

