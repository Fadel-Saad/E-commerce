import CountryPicker from "@/components/CountryPicker";
import { MoveRight } from "lucide-react";
import { mockCartItems } from "@/data";
import { Link } from "react-router";

function Information() {
  // Calculate totals from cartItems
  const subtotal = mockCartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const delivery = 10; // Fixed delivery cost
  const total = subtotal + delivery;

  return (
    <div className="flex-1 py-10">
      <div className="flex flex-col lg:flex-row justify-between">
        {/* form */}
        <div className="lg:w-[40%] mb-10 lg:mb-0">
          <fieldset className="fieldset tracking-normal">
            <div className="flex flex-col mb-4">
              <label className="label font-medium mb-5 text-sm text-black uppercase">
                contact info
              </label>
              <input
                type="text"
                name="name"
                required
                className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                placeholder="Enter your name"
                pattern="[A-Za-z][A-Za-z0-9\-]*"
                minLength={3}
                maxLength={30}
                title="Only letters, numbers or dash"
              />

              <p className="validator-hint hidden">
                Must be 3 to 30 characters
                <br />
                containing only letters, numbers or dash
              </p>
            </div>

            <div className="flex flex-col mb-8">
              <input
                type="tel"
                name="phone"
                required
                className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                placeholder="Phone"
                minLength={8}
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />

              <p className="validator-hint hidden mb-6">
                Must be more than 8 characters, including
                <br />
                At least one number <br />
                At least one lowercase letter <br />
                At least one uppercase letter
              </p>
            </div>

            <div className="flex flex-col mb-4">
              <label className="label font-medium mb-5 text-sm text-black uppercase">
                delivery address
              </label>

              <div className="flex gap-1.5">
                <div className="flex-1">
                  <input
                    type="text"
                    required
                    className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                    placeholder="Enter your name"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength={3}
                    maxLength={30}
                    title="Only letters, numbers or dash"
                  />

                  <p className="validator-hint hidden">
                    Must be 3 to 30 characters
                    <br />
                    containing only letters, numbers or dash
                  </p>
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    required
                    className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                    placeholder="Enter your name"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength={3}
                    maxLength={30}
                    title="Only letters, numbers or dash"
                  />

                  <p className="validator-hint hidden">
                    Must be 3 to 30 characters
                    <br />
                    containing only letters, numbers or dash
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5 mb-5">
              <CountryPicker />

              <input
                type="text"
                required
                className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                placeholder="State / Region"
              />

              <input
                type="text"
                required
                className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                placeholder="Address"
              />
            </div>

            {/* City + postal code */}
            <div className="flex gap-1.5 mb-3">
              <div className="flex-1">
                <input
                  type="text"
                  required
                  className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                  placeholder="City"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength={3}
                  maxLength={30}
                  title="Only letters, numbers or dash"
                />

                <p className="validator-hint hidden">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  required
                  className="text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 border-[#D9D9D9]"
                  placeholder="Postal Code"
                  pattern="[A-Za-z][A-Za-z0-9\-]*"
                  minLength={3}
                  maxLength={30}
                  title="Only letters, numbers or dash"
                />

                <p className="validator-hint hidden">
                  Must be 3 to 30 characters
                  <br />
                  containing only letters, numbers or dash
                </p>
              </div>
            </div>
            <div className="flex justify-end">
              <Link to={"/payment"} className="w-full lg:w-1/2">
                <button className="btn rounded-none bg-[#D9D9D9] border-[#D9D9D9]  flex w-full justify-between font-medium text-sm">
                  Payment
                  <MoveRight size={35} absoluteStrokeWidth />
                </button>
              </Link>
            </div>
          </fieldset>
        </div>

        {/* Right Side - Order */}
        <div className="lg:w-102">
          <div className="border border-[#D9D9D9] px-5 py-9 sticky top-8">
            <div className="flex justify-between">
              <h2 className="text-sm font-medium uppercase tracking-[1px] mb-6">
                your order
              </h2>
              <span>(2)</span>
            </div>

            <div className="space-y-6 mb-8 tracking-normal">
              {mockCartItems.map((item) => (
                <div key={item.id} className="relative">
                  <div className="flex gap-6">
                    {/* Product Image */}
                    <div className="w-32 h-40 border border-[#D9D9D9] overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 flex flex-col justify-between text-xs">
                      <div>
                        <div className="flex justify-between font-medium gap-1 mb-3">
                          <span>{item.name}</span>
                          <span className="underline self-start">Change</span>
                        </div>
                        <span className="opacity-65 font-medium">
                          {item.color}/{item.size}
                        </span>
                      </div>
                      <div className="flex justify-between items-center font-medium">
                        <span>{item.quantity}</span>
                        <span>${item.price}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 py-4 space-y-4 tracking-[1px]">
              <div className="flex justify-between font-medium text-xs">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between font-medium text-xs">
                <span>Shipping</span>
                <span>${delivery}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 tracking-[1px]">
              <div className="flex justify-between font-medium">
                <span>TOTAL</span>
                <span>${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
