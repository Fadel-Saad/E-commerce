import { useState } from "react";
import { Link, useLocation } from "react-router";

function Payment() {
  const location = useLocation();
  const cartItems = location.state?.cartItems || [];

  // Mock pricing data
  const subtotal = 180;
  const delivery = 10;
  const total = subtotal + delivery;

  const [selectedPayment, setSelectedPayment] = useState("");
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);

  return (
    <div className="max-w-7xl flex flex-col w-full py-7 px-4.5 md:p-[50px] mx-auto min-h-screen">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Payment Method Selection */}
        <div className="flex-1 lg:flex-[2]">
          <div className="max-w-lg">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-xl font-medium tracking-[1px] mb-2">
                SELECT PAYMENT METHOD
              </h1>
              <p className="text-sm text-gray-600 tracking-normal">
                WANT TO PAY WITH CASH ON DELIVERY?{" "}
                <span className="font-medium">VERIFY YOUR ID</span>
              </p>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 mb-8">
              {/* Cash on Delivery Option */}
              <label className="block">
                <div className="border border-[#D9D9D9] p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      checked={selectedPayment === "cash-on-delivery"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-black focus:ring-black"
                    />

                    <div className="w-8 h-8 bg-gray-200 rounded flex items-center justify-center">
                      {/* cash SVG */}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-sm tracking-[1px]">
                          CASH ON DELIVERY
                        </span>
                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                          VERIFIED USERS ONLY
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mt-1 tracking-normal">
                        PAY WHEN YOU RECEIVE YOUR ORDER
                      </p>
                    </div>
                  </div>
                </div>
              </label>

              {/* WHISH Payment Option */}
              <label className="block">
                <div className="border border-[#D9D9D9] p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="whish"
                      checked={selectedPayment === "whish"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-black focus:ring-black"
                    />

                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center">
                      {/* whish SVG */}
                    </div>

                    <div className="flex-1">
                      <span className="font-medium text-sm tracking-[1px]">WHISH</span>
                      <p className="text-xs text-gray-600 mt-1 tracking-normal">
                        PAY USING WHISH
                      </p>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>

        {/* Right Side - Order Summary */}
        <div className="lg:w-80 flex flex-col gap-6">
          <div className="border border-[#D9D9D9] px-8 py-10 sticky top-8">
            <h2 className="text-sm font-medium uppercase tracking-[1px] mb-6">
              ORDER SUMMARY
            </h2>
            <div className="space-y-4 mb-6 tracking-[1px]">
              <div className="flex justify-between font-medium text-xs">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between font-medium text-xs">
                <span>Delivery</span>
                <span>${delivery}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6 tracking-[1px]">
              <div className="flex justify-between font-medium">
                <span>
                  TOTAL <span className="text-xs opacity-55">(TAX INCL.)</span>
                </span>
                <span>${total}</span>
              </div>
            </div>

            {/* Terms and Conditions */}
            <label className="flex items-center gap-3 mb-6 text-xs text-gray-600 cursor-pointer">
              <input
                type="checkbox"
                checked={isTermsAccepted}
                onChange={(e) => setIsTermsAccepted(e.target.checked)}
                className="w-4 h-4 rounded border-gray-300"
              />
              <span className="tracking-normal">I agree to the Terms and Conditions</span>
            </label>

            {/* Confirm Payment Button */}
            <Link
              to="/track-your-order"
              state={{ cartItems, paymentMethod: selectedPayment }}
            >
              <button
                className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 px-6 transition-colors text-sm uppercase tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!selectedPayment || !isTermsAccepted}
              >
                CONFIRM PAYMENT
              </button>
            </Link>
          </div>

          {/* Info Message */}
          <div className="flex items-start gap-3 p-4  border border-[#D9D9D9] rounded">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <p className="text-[10px] text-gray-700 leading-relaxed">
              YOUR ORDER WILL BE PROCESSED ONCE PAYMENT IS COMPLETE. THANK YOU FOR
              SHOPPING WITH US
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
