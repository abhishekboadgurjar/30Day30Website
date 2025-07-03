import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '30 Day 30 Website ',
  description: 'Created with Abhishek Gurjar',
  generator: 'v0.dev',
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
