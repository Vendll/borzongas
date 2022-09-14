import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import { Schedule } from '@/components/Schedule'
import { Speakers } from '@/components/Speakers'
import { Sponsors } from '@/components/Sponsors'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        <title>Soproni Borzsongás 2022</title>
        <meta name="description" content="Soproni Borzsongás 2022" />
      </Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,400;0,700;1,400&family=Montserrat:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />
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
      <Header />
      <main>
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
