import Script from 'next/script'

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
      <body>{children}</body>
    </html>
  )
}
