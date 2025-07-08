import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function RootLayout({ children }) {
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
