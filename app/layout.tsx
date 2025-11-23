import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TU-Designer: 改图大师',
  description: 'AI 智能设计评分与文件生成工具',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
}
