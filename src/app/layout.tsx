import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
// {Abril}
// Playfair


export const metadata: Metadata = {
  title: "Africa Fashion Week Nigeria",
  description: "Exploring Creative African",
};

const mulish = Mulish({subsets:["latin"]})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mulish.className} bg-black antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
