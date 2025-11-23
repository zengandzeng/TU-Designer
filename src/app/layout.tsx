import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "改图大师 (TU-Designer)",
  description: "AI 智能设计评分与文件生成工具",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
