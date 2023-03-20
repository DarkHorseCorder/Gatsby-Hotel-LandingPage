import React from "react"
import styled from "@emotion/styled"
import {css} from '@emotion/react';
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImagenBackground = styled(BackgroundImage)`
  height: 700px;
`

const TextoImagen = styled.div`
  background-image: linear-gradient(
    to top,
    rgba(34, 49, 63, 0.9),
    rgba(34, 49, 63, 0.8)
  );
  color: #fff;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 3rem;
    margin: 0;
    text-align: center;

    @media (min-width: 768px) {
      font-size: 5.8rem;
    }
}

    p {
      font-size: 2rem !important;

      @media (min-width: 768px) {
        font-size: 2.6rem !important;
      }
    }
  
`

const ImagenHotel = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "8.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  //console.log(image.sharp.fluid)

  return (
    <ImagenBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <TextoImagen>
        <h1>Welcome to the Hotel Gatsby</h1>
        <p>The best place to your vacations</p>
      </TextoImagen>
    </ImagenBackground>
  )
}

export default ImagenHotel
