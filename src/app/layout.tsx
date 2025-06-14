import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { EntryProvider } from "./context/EntryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Contest Arena",
  description: "Join our exciting contests and win amazing prizes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <EntryProvider>
            {children}
          </EntryProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
