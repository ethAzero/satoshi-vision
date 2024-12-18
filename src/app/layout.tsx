import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import Navbar from "./components/navbar";

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

export const metadata: Metadata = {
  title: "Satoshi Vision",
  description:
    "Agent AI for Crypto on chain base and solana, it's not just a tool—it’s a movement toward smarter, decentralized blockchain intelligence. Discover the future of crypto intelligence with Satoshi AI agent. Join the revolution today. Satoshi Vision. Your gateway to the future of crypto intelligence. Unlock the power of AI in blockchain data. Satoshi AI agent. Your gateway to the future of crypto intelligence. Unlock the power of AI in blockchain data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
