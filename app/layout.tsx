import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HTML boyicha vazifalar",
  description: "HTML, CSS va JavaScript vazifalar",
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
