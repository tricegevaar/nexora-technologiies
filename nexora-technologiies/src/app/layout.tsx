import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Nexora Technologies | Enterprise Software & Digital Transformation",
  description: "Engineering intelligent digital experiences for modern businesses. Secure, scalable and AI-powered solutions that accelerate digital transformation.",
  keywords: "software development, digital transformation, IT consulting, web development, AI solutions, South Africa",
  icons: {
    icon: "/photos/favicon.ico",
    apple: "/photos/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: "rgba(7, 21, 38, 0.97)",
              color: "#fff",
              border: "1px solid rgba(0, 180, 255, 0.3)",
              backdropFilter: "blur(20px)",
              padding: "16px 24px",
              borderRadius: "12px",
            },
            success: {
              iconTheme: { primary: "#00B4FF", secondary: "#071526" },
            },
            error: {
              iconTheme: { primary: "#ef4444", secondary: "#071526" },
            },
          }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
