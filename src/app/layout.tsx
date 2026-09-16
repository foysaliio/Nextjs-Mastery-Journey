import Link from "next/link";
import React from "react";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js Mastery Journey",
  description: "Learning modern full-stack development with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-950 text-white">
        <header className="border-b border-zinc-800">
          <nav className="mx-auto flex max-w-5xl gap-6 px-6 py-4">
            <Link href="/" className="transition hover:text-blue-400">
              Home
            </Link>
            <Link href="/about" className="transition hover:text-blue-400">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-blue-400">
              Contact
            </Link>
          </nav>
        </header>

        {children}
      </body>
    </html>
  );
}
