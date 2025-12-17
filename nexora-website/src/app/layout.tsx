import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Nexora Technologies | Premium Software Solutions",
  description: "Transforming digital experiences through cutting-edge technology and exceptional user experiences.",
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
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 5000,
            style: {
              background: 'rgba(10, 22, 40, 0.95)',
              color: '#fff',
              border: '1px solid rgba(0, 212, 255, 0.3)',
              backdropFilter: 'blur(20px)',
              padding: '16px 24px',
              borderRadius: '12px',
            },
            success: {
              iconTheme: { primary: '#00d4ff', secondary: '#0a1628' },
            },
            error: {
              iconTheme: { primary: '#ef4444', secondary: '#0a1628' },
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
