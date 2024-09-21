import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import SessionWrapper from '@/components/SessionWrapper';

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

export const metadata = {
  title: "Buy Me a Soda",
  description: "Support creators, entrepreneurs, or causes with a simple gesture. Buy Me a Soda allows you to contribute by treating someone to their favorite beverage, helping them fund their passion, projects, or ideas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-300 bg-slate-950 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:40px_60px]`}>
        <SessionWrapper>
          <Navbar />
          {children}
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}