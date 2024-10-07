import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head"; // Import Head

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastDocs",
  description: "Custom ChatGPT for your docs",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" className="light">
        <Head>
          <link rel="icon" href="/favicon.ico" />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/public/favicon-32x32.png"
          />
        </Head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  );
}
