import type { IResponseGetAccessToken } from '@/services'

export const SetLocalToken = (token: IResponseGetAccessToken) => {
  localStorage.setItem('token', JSON.stringify(token))
}
export const GetLocalToken = () => {
  const auth: IResponseGetAccessToken = JSON.parse(localStorage.getItem('token')!)
    
  return auth
}
export const DeleteLocalToken = () => localStorage.removeItem('token')
