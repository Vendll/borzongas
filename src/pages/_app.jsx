import 'focus-visible'
import '@/styles/tailwind.css'
import Script from 'next/script'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0MWZ3RQ41R"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-0MWZ3RQ41R');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
