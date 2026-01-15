import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { siteConfig } from "@/data/site";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.greeting.subtitles[0],
  icons: {
    icon: "/favicon.jpg",
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.greeting.subtitles[0],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.greeting.subtitles[0],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
