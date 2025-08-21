import { NavLink } from "react-router";

export default function CheckoutNav() {
  return (
    <div className="mt-6">
      <h2 className="uppercase text-xl lg:text-[32px] mb-8 font-['Beatrice_Deck_Trial_Extrabold']">
        checkout
      </h2>
      <nav className="flex justify-between w-full md:w-[60%] lg:w-[43%] tracking-normal uppercase text-xs lg:text-[16px]">
        <NavLink
          to={"/information"}
          className={({ isActive }) => (isActive ? "" : "text-[#8A8A8A]")}
        >
          information
        </NavLink>
        <NavLink
          to={"/payment"}
          className={({ isActive }) => (isActive ? "" : "text-[#8A8A8A]")}
        >
          payment
        </NavLink>
        <NavLink
          to={"/track-your-order"}
          className={({ isActive }) => (isActive ? "" : "text-[#8A8A8A]")}
        >
          track your order
        </NavLink>
      </nav>
    </div>
  );
}
