import Cookies from 'js-cookies'

export const isLogged = () => {
  const token = Cookies.getItem('token')

  return token ? true : false
}