import { grow } from './api'

export const getAccount = async jwt => {
  const result = await grow.getAccount(jwt)
  return result
}
