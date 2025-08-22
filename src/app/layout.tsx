import { GeistSans } from 'geist/font/sans'
import type { Metadata } from 'next'
import './globals.css'

import Footer from '@template-solar/components/molecules/footer'
import { NavBar } from '@template-solar/components/molecules/navbar'
import { siteConfig } from './site-config'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.metadata.metadataBase),
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  keywords: siteConfig.metadata.keywords,
  authors: siteConfig.metadata.authors,
  creator: siteConfig.metadata.creator,
  openGraph: siteConfig.metadata.openGraph,
  twitter: siteConfig.metadata.twitter,
  icons: siteConfig.metadata.icons,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
