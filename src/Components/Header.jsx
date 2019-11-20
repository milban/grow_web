import React from "react"
import styled from "styled-components"
import Nav from "./Nav"

const Container = styled.header`
  display: flex;
  height: 100px;
  margin: 0 auto;
  padding: 0 1rem;
`

const Header = () => {
  return (
    <Container>
      <Nav />
    </Container>
  )
}

export default Header
