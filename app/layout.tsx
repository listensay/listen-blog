// SEO配置
import type { Metadata } from "next";

// 引入谷歌字体
import { Inter } from "next/font/google";

// 公共CSS
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// SEO配置
export const metadata: Metadata = {
  title: "1梦的主页",
  description: "欢迎来到1梦的主页呀 (*╹▽╹*)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
