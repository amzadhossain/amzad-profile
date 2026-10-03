import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

// ============================================================
// METADATA - Update with your information
// Prompt: "Update the page title and description for SEO"
// ============================================================
export const metadata: Metadata = {
  title: "Md Amzad Hossain - Solution Architect | Forward Deployed Engineer",
  description: "Solution Architect & Back-end Engineer with 19+ years at Apple, Cisco, and PNC. Java, Kafka, AWS, Kubernetes. Open to Forward Deployed Engineer roles.",
  keywords: ["Forward Deployed Engineer", "Solution Architect", "Java", "Spring Boot", "Kafka", "AWS", "Kubernetes", "Microservices"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
