import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { client } from '../lib/prismic'
export default async function RootLayout({ children }) {
  const settings = await client.getSingle('settings').catch(() => null)
  return (
    <html lang="en">
      <head>
        <Script
          async
          defer
          src="https://static.cdn.prismic.io/prismic.js?new=true&repo=prismic-nextjs-fastapi-dashboard"
          strategy="afterInteractive"
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <Header settings={settings?.data} />
        <main className="flex-1">{children}</main>
        <Footer settings={settings?.data} />
      </body>
    </html>
  )
}

