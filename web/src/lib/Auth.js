import { api } from "./api";
import Cookies from 'js-cookies'

const Auth = {
  login: async (email, password) => {
    try {
      const response = await api.post("/login", {
        email,
        password,
      },
      )

      return response;
    } catch (err) {
      return err.response.data;
    }
  },
  getUserInfo: async () => {
    try {
      const token = Cookies.getItem('token')
      const response = await api.get('/profile', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      return response
    } catch (err) { 
      console.log(err)
    }
  }
};

export default () => Auth;
