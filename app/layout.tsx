import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/lib/cart-context'
import { CartDrawer } from '@/components/cart-drawer'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif'
});
const lato = Lato({ 
  subsets: ["latin"],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
});

export const metadata: Metadata = {
  title: 'Laxmi Flowers and Indian Imports | Fresh Flowers, Garlands & Indian Gifts',
  description: 'Over 20 years of bringing beauty and tradition to your celebrations. Offering garlands, flower bouquets, wedding decorations, Indian gift items, silver items, traditional dresses, and more.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${playfair.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
          <CartDrawer />
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
