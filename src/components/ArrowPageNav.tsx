import { Link } from "react-router";
import { Heart, User, ShoppingBag, MoveLeft } from "lucide-react";

function ArrowPageNav() {
  return (
    <>
      {/* Desktop Nav */}
      <div className=" hidden md:flex flex-row justify-between items-center">
        <Link to={"/cart"}>
          <MoveLeft size={50} absoluteStrokeWidth />
        </Link>

        {/* User section */}
        <div className="flex flex-row flex-1 justify-end gap-[50px]">
          <div className="relative rounded-full bg-black w-[50px] h-[50px] opacity-85">
            <Heart
              width={20}
              height={20}
              className="absolute top-[15px] right-[15px] z-10 rotate-315"
              color="white"
            />
          </div>

          <Link to={"/cart"}>
            <div className="flex">
              <div className="relative rounded-[22px] bg-black w-[70px] h-[50px] opacity-85">
                <span className="absolute top-[17px] right-[17px] z-10 text-xs text-white">
                  Cart
                </span>
              </div>
              <Link
                to={"/cart"}
                className="relative rounded-full bg-black w-[50px] h-[50px] opacity-85"
              >
                <ShoppingBag
                  width={20}
                  height={20}
                  className="absolute top-[15px] right-[15px] z-10"
                  color="white"
                />
              </Link>
            </div>
          </Link>

          <Link
            to={"/sign-in"}
            className="relative rounded-full bg-black w-[50px] h-[50px] opacity-85"
          >
            <User
              width={20}
              height={20}
              className="absolute top-[15px] right-[15px] z-10"
              color="white"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Nav*/}
      <div className="md:hidden flex flex-row justify-between items-center">
        {/* Nav bar */}
        <Link
          to={"/cart"}
          className="flex-1 flex flex-row justify-between items-center gap-8"
        >
          <MoveLeft size={50} absoluteStrokeWidth />
        </Link>

        {/* Logo */}
        <img src="/logo.svg" alt="Icon" className="h-[30px] w-[30px]" />
        {/* User section */}
        <div className="flex-1 flex flex-row justify-end gap-1.5">
          <Link
            to={"/cart"}
            className="relative rounded-full bg-black w-[40px] h-[40px] opacity-85"
          >
            <ShoppingBag
              width={20}
              height={20}
              className="absolute top-[10px] right-[10px] z-10"
              color="white"
            />
          </Link>

          <Link
            to={"/sign-in"}
            className="relative rounded-full bg-black w-[40px] h-[40px] opacity-85"
          >
            <User
              width={20}
              height={20}
              className="absolute top-[10px] right-[10px] z-10"
              color="white"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ArrowPageNav;
