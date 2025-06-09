import type { Metadata } from "next";
import { Caveat, Angkor } from "next/font/google";
import "./styles/globals.css";

const caveat = Caveat({
  weight: "400",
  subsets: ["latin"],
});

const angkor = Angkor({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio web-site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-text">
        {children}
      </body>
    </html>
  );
}
