import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Odonto Primus',
  description: 'Created by v0',
  generator: 'dev Filipi Dantas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
