import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lara Bahia Nails - Design de Unhas Profissional",
  description: "Transforme suas unhas em obras de arte. Design de unhas profissional com técnicas modernas e delicadas.",
  keywords: "nail designer, design de unhas, manicure, pedicure, unhas decoradas",
  authors: [{ name: "Lara Bahia Nails" }],
  openGraph: {
    title: "Lara Bahia Nails - Design de Unhas Profissional",
    description: "Transforme suas unhas em obras de arte. Design de unhas profissional com técnicas modernas e delicadas.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "font-link": "https://use.typekit.net/fly6yya.css",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/fly6yya.css" />
      </head>
      <body className={`${montserrat.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

