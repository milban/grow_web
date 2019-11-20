import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import UserInfoProvider from './userInfoContext'
import dotenv from 'dotenv'

dotenv.config()

ReactDOM.render(
  <UserInfoProvider>
    <App />
  </UserInfoProvider>,
  document.getElementById('root')
)
