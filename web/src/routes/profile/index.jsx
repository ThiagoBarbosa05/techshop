import Cookies from "js-cookies";
import { useNavigate } from "react-router-dom";
import useAuth from '../../lib/Auth'
import { useEffect } from "react";

export default function Profile() {
  const navigate = useNavigate()
  const {getUserInfo} = useAuth()

  const fetchUserInfo = async () => {
    const result = await getUserInfo()

    console.log(result)
  }

  useEffect(() => {
    fetchUserInfo()
  },[])

  return (
    <>
      <div>profile</div>
      <button onClick={() => {
        Cookies.removeItem('token')
        navigate('/', {replace: true})
        window.location.href = '/'
      }}>logout</button>
    </>
  );
}
