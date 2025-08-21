import ArrowPageNav from "@/components/ArrowPageNav";
import CheckoutNav from "@/components/CheckoutNav";
import { Outlet } from "react-router";

function CheckOut() {
  return (
    <div className="max-w-7xl flex flex-col w-full py-7 px-4.5 md:p-[50px] mx-auto min-h-screen">
      <ArrowPageNav />
      <CheckoutNav />
      <Outlet />
    </div>
  );
}

export default CheckOut;
