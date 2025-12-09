import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'आम वाला और पुलिस वाला - AI Cartoon',
  description: 'एक मज़ेदार कहानी - आम वाला और पुलिस वाला',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
