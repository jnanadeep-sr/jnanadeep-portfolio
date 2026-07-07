import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./lang/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteDescription =
  "Jnanadeep S R — Software Engineer and Data Scientist. Portfolio, experience, and projects.";

export const metadata: Metadata = {
  title: "Jnanadeep S R — Software Engineer & Data Scientist",
  description: siteDescription,
  openGraph: {
    title: "Jnanadeep S R — Software Engineer & Data Scientist",
    description: siteDescription,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jnanadeep S R — Software Engineer & Data Scientist",
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
