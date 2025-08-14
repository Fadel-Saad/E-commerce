import { NavLink } from "react-router";
import { Heart, User, ShoppingBag } from "lucide-react";

function PageNav() {
  return (
    <div className="flex flex-row justify-between items-center py-4">
      {/* Nav bar */}
      <nav className="flex flex-row justify-between items-center gap-8">
        <img src="/side-bar.svg" alt="Icon" className="h-8 w-8" />
        <ul className="flex gap-8 font-medium">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Collections</NavLink>
          </li>
          <li>
            <NavLink to="new">New</NavLink>
          </li>
        </ul>
      </nav>
      {/* Logo */}
      <img src="/logo.svg" alt="Icon" className="h-[50px] w-[50px]" />
      {/* User section */}
      <div className="flex flex-row justify-between gap-[50px]">
        <div className="relative rounded-full bg-black w-[50px] h-[50px] opacity-85">
          <Heart
            width={20}
            height={20}
            className="absolute top-[15px] right-[15px] z-10 rotate-315"
            color="white"
          />
        </div>

        <div className="flex">
          <div className="relative rounded-[22px] bg-black w-[70px] h-[50px] opacity-85">
            <span className="absolute top-[17px] right-[17px] z-10 text-xs text-white">
              Cart
            </span>
          </div>
          <div className="relative rounded-full bg-black w-[50px] h-[50px] opacity-85">
            <ShoppingBag
              width={20}
              height={20}
              className="absolute top-[15px] right-[15px] z-10"
              color="white"
            />
          </div>
        </div>
        <div className="relative rounded-full bg-black w-[50px] h-[50px] opacity-85">
          <User
            width={20}
            height={20}
            className="absolute top-[15px] right-[15px] z-10"
            color="white"
          />
        </div>
      </div>
    </div>
  );
}

export default PageNav;
