import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Module 10",
  description: "Advanced Frontend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}