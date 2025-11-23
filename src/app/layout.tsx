import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '改图大师 TU-Designer',
  description: 'AI 智能设计评分与文件生成工具 - AI-powered design scoring and PSD export tool',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}>
        {children}
      </body>
    </html>
  );
}
