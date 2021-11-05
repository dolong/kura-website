import Head from "next/head"

import Contact from "../components/elements/Contact"
import Home from "../components/elements/Home"
import Portfolio from "../components/elements/Portfolio"
import Skills from "../components/elements/Skills"
import Timeline from "../components/elements/Timeline"
// import News from "../components/elements/News";
// import Price from "../components/elements/Price";
import Footer from "../components/layout/Footer"
import Header from "../components/layout/Header"

export default function Index() {
  const pageTitle = "Thomas Boittin - Front End Developer"
  const description =
    "Thomas Boittin - Portfolio. French developer enthusiast with graphic skills."
  const currentURL = "https://kura-website.vercel.app/"
  const previewImage = "img/hero/1.jpg"
  return (
    <div id="opened">
      <div className="kura_tm_all_wrap" data-color="orange">
        <div id="preloader">
          <div className="loader_line"></div>
        </div>

        <Head>
          <title>{pageTitle}</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <meta name="description" content={description} />

          <meta property="og:title" content={pageTitle} key="ogtitle" />
          <meta property="og:description" content={description} key="ogdesc" />
          <meta property="og:url" content={currentURL} key="ogurl" />
          <meta property="og:image" content={previewImage} key="ogimage" />
          <meta property="og:site_name" content={pageTitle} key="ogsitename" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content={previewImage} />
          <meta name="twitter:image:alt" content={pageTitle} />

        </Head>

        <Header />

        <Home />

        <Portfolio />

        <Skills />

        <Timeline />

        {/* <Price />

                <News /> */}

        <Contact />

        <Footer />

        <audio id="audio1">
          <source src="/audio/1.mp3" />
        </audio>
        <audio id="audio2">
          <source src="/audio/2.mp3" />
        </audio>

        <div className="mouse-cursor cursor-outer"></div>
        <div className="mouse-cursor cursor-inner"></div>
      </div>
    </div>
  )
}
