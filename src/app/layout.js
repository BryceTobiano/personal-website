import localFont from "next/font/local";
import { Inter } from 'next/font/google'
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const jetMono = localFont({
  src: "./fonts/JetBrainsMono-VF.ttf",
  variable: "--font-jet-mono",
  weight: "100 900",
});

const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: "Bryce Tobiano | Home" ,
  description: "Bryce Tobiano's Personal Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} ${jetMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
