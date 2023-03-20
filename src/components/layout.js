import React from "react"
import { Global, css } from "@emotion/react"
import Header from "./header"
import Footer from "./footer"
import Helmet from "react-helmet"
import useSeo from "../hooks/use-seo"

const Layout = ({ children }) => {

  const seo = useSeo();
  console.log(seo.fallbackSeo);
  return (
    <>
      <Global
        styles={css`
          html {
            font-size: 62.5%;
            font-family: "Lato", sans-serif;
            box-sizing: border-box;
          }

          *, *:before, *:after {
            box-sizing: inherit;
          }

          body {
            font-size: 18px;
            font-size: 1.8rem;
            line-height: 1.5;
          }

          h1,
          h2,
          h3 {
            margin: 0;
          }

          h1 {
            font-family: "Lato", sans-serif;
          }

          a{
            color: #ffff;
            text-decoration: none;
          }
        `}
      />
      <Helmet>
        <title>{seo.fallbackSeo.title}</title>
        <meta name="description" content={seo.fallbackSeo.description} />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Header />
      {children}
      <Footer title={seo.fallbackSeo.title}/>
    </>
  )
}

export default Layout
