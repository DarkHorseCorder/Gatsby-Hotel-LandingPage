import React from "react"
import { graphql, useStaticQuery } from "gatsby";
import Image from 'gatsby-image';
import {css} from '@emotion/react';
import styled from '@emotion/styled';


const Contenido = styled.main`
padding-top: 4rem;
max-width: 1200px;
width: 95%;
margin: 0 auto;

@media(min-width: 768px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
}

p{
    line-height: 2;
    margin-top: 2rem;
}
`

const ContenidoNosotros = () => {
  const informacion = useStaticQuery(graphql`
    query {
      allDatoCmsPagina(filter: { slog: { eq: "Nosotros" } }) {
        nodes {
          titulo
          contenido
          imagen {
            fluid {
                ...GatsbyDatoCmsFluid
            }
          }
        }
      }
    }
  `)

  const {titulo, contenido, imagen} = informacion.allDatoCmsPagina.nodes[0];

  return (
    <>
      <h2
      css={css`
      text-align: center;
      font-size: 4rem;
      margin-top: 4rem;`}
      >{titulo}</h2>
      <Contenido>
      <p>{contenido}</p>
      <Image fluid={imagen.fluid} />
      </Contenido>
    </>
  )
}

export default ContenidoNosotros
