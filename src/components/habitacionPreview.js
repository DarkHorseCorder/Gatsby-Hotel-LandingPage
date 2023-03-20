import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

const Boton = styled(Link)`
  text-align: center;
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(44, 62, 80, .90);
  width: 100%;
  color: #fff;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
`

const HabitacionPreview = ({ habitacion }) => {
  const { contenido, imagen, titulo, slog } = habitacion
  return (
    <div
      css={css`
        border: 1px solid #e1e1e1;
        margin-bottom: 2.5rem;
      `}
    >
      <Image fluid={imagen.fluid} />
      <div css={css`
      padding: 2rem;
      `}>
        <h3>{titulo}</h3>
        <p css={css`
        text-align: justify;
        `}>{contenido}</p>
        <Boton to={slog}>Ver Habitacion</Boton>
      </div>
    </div>
  )
}

export default HabitacionPreview
