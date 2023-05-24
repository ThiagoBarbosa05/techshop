import { User } from "phosphor-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../lib/Auth";
import Cookies from "js-cookies";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate()

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError("");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await login(email, password);

      if (!result.use) {
        setError(result.message);
      }

      const token = Cookies.setItem("token", result.data);
      navigate('/', {replace: true})
      window.location.href = '/'
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="border-[1px] w-[90%] max-w-[21.87rem] mx-auto rounded-md shadow bg-white absolute z-10 top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%]">
        {error && (
          <div className="w-[90%] max-w-[21.87rem] mx-auto bg-[#E90202] mt-[1rem] py-[.55rem] rounded-md text-white text-center">
            <p>{error}</p>
          </div>
        )}

        <div className="border-b-[1px] flex justify-center py-[2rem]">
          <User size={55} className="text-[#8B96A5]" />
        </div>

        <form onSubmit={handleSubmit} className="p-5">
          <div className="pb-[1.45rem] flex flex-col">
            <label className="pb-[.34rem] font-medium">Email:</label>
            <input
              className="border-[1px] border-[#0D6EFD] outline-none placeholder:text-sm py-[.34rem] px-[.24rem] rounded-md"
              type="email"
              name="email"
              placeholder="example@email.com"
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="flex flex-col">
            <label className="pb-[.34rem] font-medium">Password:</label>
            <input
              className="border-[1px] border-[#0D6EFD] outline-none py-[.34rem] px-[.24rem] rounded-md"
              type="password"
              name="password"
              placeholder="your password..."
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button className="bg-gradient-to-b from-[#127FFF] to-[#0D6EFD] w-[100%] mt-[1.45rem] py-[.84rem] text-white rounded-md">
            Sign in
          </button>
          <p className="text-sm text-[#353638] pt-[.24rem]">
            New to techshop?{" "}
            <Link to="/sign-up" className="text-[#0D6EFD]">
              Sign up now
            </Link>
          </p>
        </form>
      </div>
      <div className="bg-black absolute top-0 bottom-0 right-0 left-0 opacity-40"></div>
    </div>
  );
}
