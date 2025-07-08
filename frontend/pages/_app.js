import '../styles/globals.css'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=prismic-nextjs-fastapi-dashboard"
        strategy="afterInteractive"
      />
      <Component {...pageProps} />
    </>
  )
}