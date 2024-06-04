"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "NextJS and Next-Auth Authentication",
//   description: "Explained simple next-auth authentication",
// };

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
