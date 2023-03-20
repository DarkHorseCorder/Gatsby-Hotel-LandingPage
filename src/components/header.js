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

const Header = () => {
  return (
    <header
      css={css`
        background-color: rgba(44, 62, 80);
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
        <EnlaceHome to={"/"}>
          <h1>Hotel Gatsby</h1>
        </EnlaceHome>

        <Navbar />
      </div>
    </header>
  )
}

export default Header
