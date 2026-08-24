import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCY Intelligence",
  description:
    "SCY Intelligence — AI engineering, automation, creative technology, and digital solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
