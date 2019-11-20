import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, withRouter } from 'react-router-dom'
import logo from '../Images/logo_grow_web.png'
import Login from './Login'
import { useUserInfo, useIsLogined, useUserDispatch } from '../userInfoContext'
import { getAccount } from '../utils'
import { LOGIN } from '../actions'
import { useHistory } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.img`
  width: 60px;
  height: 70px;
`

const Row = styled.div`
  padding: 2rem 0;
  margin: 0 2rem;
  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
`

const RowChild = styled.div`
  padding: 0 10px;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`

const Nav = () => {
  const userInfo = useUserInfo()
  const userDispatch = useUserDispatch()
  const history = useHistory()

  useEffect(() => {
    if (localStorage.getItem('jwt') !== null) {
      getAccount(localStorage.getItem('jwt')).then(result => {
        userDispatch({ type: LOGIN, payload: { userInfo: result.data } })
        history.replace(`/user/${result.data.accountId}`)
      })
    }
  }, [history, userDispatch])

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} />
      </Link>
      {useIsLogined() ? (
        <Row style={{ display: 'flex' }}>
          <RowChild>{`ID: ${userInfo.accountId}`}</RowChild>
          <RowChild>{`이름: ${userInfo.userName}`}</RowChild>
          <RowChild>{`나이: ${userInfo.age}`}</RowChild>
          <RowChild>{`성별: ${userInfo.gender}`}</RowChild>
          <RowChild>{`키: ${userInfo.height}`}</RowChild>
          <RowChild>{`몸무게: ${userInfo.weight}`}</RowChild>
          <RowChild>{`이메일: ${userInfo.userEmail}`}</RowChild>
        </Row>
      ) : (
        <Login />
      )}
    </Container>
  )
}

export default withRouter(Nav)
