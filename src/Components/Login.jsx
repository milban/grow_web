import React from 'react'
import styled from 'styled-components'
import KakaoLogin from './KakaoLogin'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  & *:not(:nth-child(1)) {
    margin-top: 10px;
    display: none;
  }
  & .visible {
    display: block;
  }
`

const Button = styled.button`
  width: 182px;
  height: 48px;
  border-radius: 23.5px;
  border: none;
  background-color: ${props => props.theme.color.point};
  color: white;
  font-size: 24px;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

const Login = ({ history }) => {
  const onClick = e => {
    const {
      target: {
        parentNode: { childNodes }
      }
    } = e
    childNodes.forEach((child, idx) => (idx !== 0 ? child.classList.toggle('visible') : null))
  }
  return (
    <Container>
      <Button onClick={onClick}>Login</Button>
      <KakaoLogin />
    </Container>
  )
}

export default Login
