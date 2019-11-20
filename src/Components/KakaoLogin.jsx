import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { grow } from '../api'
import { useHistory } from 'react-router-dom'
import { getAccount } from '../utils'
import { useUserDispatch } from '../userInfoContext'
import { LOGIN } from '../actions'

const Anchor = styled.a`
  width: 182px;
  height: 48px;
  #kakao-login-btn {
    width: 100%;
    height: 100%;
  }
`

const KakaoLogin = () => {
  const [Kakao, setKakao] = useState()

  let history = useHistory()
  const userDispatch = useUserDispatch()

  useEffect(() => {
    setKakao(window.Kakao)
  }, [])

  useEffect(() => {
    const postKakaoLgoin = async authObj => {
      try {
        const {
          headers: { authorization }
        } = await grow.growKakaoLogin(authObj)
        localStorage.setItem('jwt', authorization)
        getAccount(authorization).then(result => {
          userDispatch({ type: LOGIN, payload: { userInfo: result.data } })
          history.replace(`/user/${result.data.accountId}`)
        })
      } catch (error) {
        console.log(error)
      }
    }
    if (Kakao !== undefined) {
      Kakao.init(process.env.REACT_APP_KAKAO)
      Kakao.Auth.createLoginButton({
        container: '#kakao-login-btn',
        success: function(authObj) {
          console.log('kakologin [kakao]', JSON.stringify(authObj))
          postKakaoLgoin(authObj)
        },
        fail: function(err) {
          alert(JSON.stringify(err))
        }
      })
    }
  }, [Kakao, history, userDispatch])

  return <Anchor id="kakao-login-btn"></Anchor>
}

export default KakaoLogin
