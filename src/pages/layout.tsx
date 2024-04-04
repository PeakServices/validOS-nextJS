import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'nextOS',
  description: 'webOS made in Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
