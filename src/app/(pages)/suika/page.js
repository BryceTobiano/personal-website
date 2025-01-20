"use client"
import dynamic from "next/dynamic";

// Wrapper necessary to disable SSR
const AppWithoutSSR = dynamic(() => import("./suika.js"), { ssr: false });
export default function Home() {
    return <AppWithoutSSR />;
}