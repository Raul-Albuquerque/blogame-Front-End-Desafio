import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Blogame - Desafio Front-End',
  description: 'Front-End Challenge',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className="bg-dark30 font-nunito">{children}</body>
    </html>
  )
}
