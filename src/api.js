import axios from 'axios'

const growApi = axios.create({
  baseURL: 'http://172.16.208.79:8080/'
})

growApi.interceptors.request.use(req => {
  // console.log('interceptor req: ', req)
  return req
})

growApi.interceptors.response.use(res => {
  // console.log('hi')
  // console.log('interceptor res: ', res)
  return res
})

export const grow = {
  growKakaoLogin: userObj => growApi.post('/oauth/login/kakao/web', userObj),
  getAccount: jwt =>
    growApi
      .get('/account', {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      .catch(err => {
        if (err.response) {
          console.log(err.response)
        }
      }),
  getOneRMExercies: jwt =>
    growApi.get('/1rm/exercise', {
      headers: { Authorization: `Bearer ${jwt}` }
    }),
  getOneRM: (jwt, exerciseId) =>
    growApi.get('/1rm', {
      headers: { Authorization: `Bearer ${jwt}` },
      params: { exerciseId }
    }),
  getFiveBest: jwt =>
    growApi.get('1rm/5best', {
      headers: { Authorization: `Bearer ${jwt}` }
    }),
  getAllOneRM: jwt =>
    growApi.get('1rm/list', {
      headers: { Authorization: `Bearer ${jwt}` }
    })
}
