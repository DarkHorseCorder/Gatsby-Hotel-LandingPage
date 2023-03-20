import React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import { Link } from "gatsby"
import Navbar from "./nav"

const EnlaceHome = styled(Link)`
  color: #ffff;
  text-align: center;
  text-decoration: none;
`

const Footer = ({title}) => {

    const year = new Date().getFullYear();

  return (
      <>
    <footer
      css={css`
        background-color: rgba(44,62,80);
        margin-top: 5rem;
        padding: 1rem;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
        `}
      >
        <Navbar />
        <EnlaceHome to={"/"}>
          <h1>Hotel Gatsby</h1>
        </EnlaceHome>
      </div>
    </footer>
    <p css={css`
    text-align: center;
    background-color: rgb(33,44,55);
    margin: 0;
    padding: 1rem;
    color: #fff;
    `}>{title}. Todos los derechos reservados {year} &copy</p>
    </>
  )
}

export default Footer
