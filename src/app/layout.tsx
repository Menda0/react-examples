import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {Roboto} from '@next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400' // You can specify the weight if needed
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-800 p-10 text-white flex flex-row items-center justify-center h-screen`}>
        <div className="max-w-4xl bg-gray-900 rounded-lg p-5 w-full">{children}</div>
      </body>
    </html>
  );
}
