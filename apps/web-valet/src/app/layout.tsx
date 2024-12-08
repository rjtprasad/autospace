import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloProvider } from '@autospace/network/src/config/apollo'
import { SessionProvider } from '@autospace/ui/src/components/molecules/SessionProvider'
import { Header } from '@autospace/ui/src/components/organisms/Header'
import { MenuItem } from '@autospace/util/types'
import { ToastContainer } from '@autospace/ui/src/components/molecules/Toast'
import { Container } from '@autospace/ui/src/components/atoms/Container'
import '@autospace/ui/src/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Autospace | Valet',
  description: 'Generated by create next app',
}

const MENUITEMS: MenuItem[] = [{ label: 'My Trips', href: '/my-trips' }]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-25`}>
        <SessionProvider>
          <ApolloProvider>
            <Header type="valet" menuItems={MENUITEMS} />
            <Container>{children}</Container>
          </ApolloProvider>
        </SessionProvider>
        <ToastContainer />
      </body>
    </html>
  )
}
