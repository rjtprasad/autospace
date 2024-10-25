import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@autospace/ui/src/app/globals.css'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
import { SessionProvider } from '@autospace/ui/src/components/molecules/SessionProvider'
import { Header } from '@autospace/ui/src/components/organisms/Header'
import { MenuItem } from '@autospace/util/types'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

const MENUITEMS: MenuItem[] = [
  { label: 'Search', href: '/search' },
  { label: 'Bookings', href: '/bookings' },
  { label: 'About', href: '/about' },
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <SessionProvider>
        <ApolloProvider>
          <body className={inter.className}>
            <Header menuItems={MENUITEMS} />
            {children}
          </body>
        </ApolloProvider>
      </SessionProvider>
    </html>
  )
}
