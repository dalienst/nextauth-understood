"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
