import '../styles/globals.css'
import Script from 'next/script'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=prismic-nextjs-fastapi-dashboard"
        strategy="afterInteractive"
      />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}