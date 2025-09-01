
export const Title = ({ className, children, style }) => {
    const titleStyle = {
        fontWeight: "900",
        fontFamily: "Inter",
        fontSize: "3em",
        lineHeight: "1em",
        paddingBottom: "0.75em",
        ...style
    };

    return (
        <h1 style={titleStyle} className={className}>
            <span>{children}</span>
        </h1>
    )
}

export const TitleMono = ({ className, children, style}) => {
    const titleMonoStyle = {
        fontWeight: "900",
        fontFamily: "var(--font-geist-mono), var(--font-jet-mono), 'Courier New', Courier, monospace",
        fontSize: "3.5em",
        lineHeight: "100%",
        letterSpacing: "0%",
        paddingBottom: "0.35em",
        ...style
    };

    return (
        <h1 style={titleMonoStyle} className={className}>
            <span>{children}</span>
        </h1>
    )
}

export const Heading1 = ({ className, children, style }) => {
    const heading1style = {
        fontWeight: "900",
        fontFamily: "var(--font-jet-mono),var(--font-geist-mono), 'Courier New', Courier, monospace",
        fontSize: "2.5em",
        lineHeight: "100%",
        letterSpacing: "0%",
        paddingBottom: "0.15em",
        ...style
    };

    return (
        <h1 style={heading1style} className={className}>
            <span>{children}</span>
        </h1>
    )
}

export const Heading2 = ({ className, children, style }) => {
    const heading2style = {
        fontWeight: "900",
        fontFamily: "var(--font-jet-mono), var(--font-geist-mono), 'Courier New', Courier, monospace",
        fontSize: "1.75em",
        lineHeight: "100%",
        letterSpacing: "0%",
        paddingBottom: "0.5em",
        ...style
    };


    return (
        <h2 style={heading2style} className={className}>
            <span>{children}</span>
        </h2>
    )
}



export const Heading3 = ({ className, children, style }) => {
    const heading3style = {
        fontWeight: "700",
        fontFamily: "var(--font-jet-mono),var(--font-geist-mono), 'Courier New', Courier, monospace",
        fontSize: "1.5em",
        lineHeight: "1em",
        ...style
    };

    return (
        <h3 style={heading3style} className={className}>
            <span>{children}</span>
        </h3>
    )
}

export const Subheading = ({ className, children, style }) => {
    const subheadingStyle = {
        fontWeight: "900",
        fontFamily: "var(--font-jet-mono),var(--font-geist-mono), 'Courier New', Courier, monospace",
        fontSize: "1.5em",
        lineHeight: "125%",
        letterSpacing: "0%",
        textDecoration: "underline",
        textUnderlineOffset: "0.2em",
        paddingBottom: "0.5em",
        ...style
    };

    return (
        <p style={subheadingStyle} className={className}>
            <span>{children}</span>
        </p>
    )
}

export const Text = ({ className, children, style}) => {
    const textStyle = {
        fontWeight: "400",
        fontFamily: "Inter",
        fontSize: "18px",
        letterSpacing: "0%",
        lineHeight: "175%",
        ...style
    };

    return (
        <p style={textStyle} className={className}>
            <span>{children}</span>
        </p>
    )
}

export const Description = ({ className, children, style}) => {
    const descriptonStyle = {
        fontWeight: "normal",
        fontFamily: "Inter",
        fontSize: "1em",
        fontStyle: "italic",
        lineHeight: "100%",
        letterSpacing: "0",
        ...style
    };

    return (
        <p style={descriptonStyle} className={className}>
            <span>{children}</span>
        </p>
    )
}

import Link from "next/link";
export const StyledLink = ({ className, children, style, href}) => {
    const linkstyle = {
        fontWeight: "normal",
        fontFamily: "Inter",
        fontSize: "18px",
        // fontStyle: "italic",
        textDecoration: "underline",
        lineHeight: "100%",
        letterSpacing: "0",
        ...style
    };

    return (
        <Link href={href} style={linkstyle} className={className}>
            <span>{children}</span>
        </Link>
    )
}


