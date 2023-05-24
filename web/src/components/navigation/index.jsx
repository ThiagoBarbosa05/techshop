import { ShoppingCartSimple, User } from "phosphor-react";
import { Link } from "react-router-dom";
import { isLogged } from "../../middlewares/Auth";

export default function Navigation() {
  const isAuthenticated = isLogged()
  return (
    <nav className="flex items-center mr-[5rem] gap-[1.12rem]">
      <div className="flex flex-col justify-center items-center relative">
        <ShoppingCartSimple size={22} className="text-[#8B96A5]" />
        <span className="text-xs text-[#8B96A5] pt-[0.23rem]">cart</span>
      </div>
      <Link to={isAuthenticated ? '/profile' : '/signin'} className="flex flex-col justify-center items-center">
        <User size={22} className="text-[#8B96A5]" />
        <span className="text-xs text-[#8B96A5] pt-[0.23rem]">profile</span>
      </Link>
    </nav>
  );
}
