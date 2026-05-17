import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/navigation/Footer";
import { SITE_CONFIG } from "@/lib/constants";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} ${SITE_CONFIG.englishName} - ${SITE_CONFIG.slogan}`,
  description: SITE_CONFIG.description,
  keywords: ["AI 原生组织", "AI 编程培训", "Claude Code", "组织效率", "开发效率", "数字员工", "CEO 驾驶舱"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.variable}>
        <Navbar />
        <main className="min-h-screen pt-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
