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
    <div className="flex-1 py-10 mt-3">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Side - Payment Method Selection */}
        <div className="flex-1 lg:flex-[2] border border-[#D9D9D9] p-6 lg:p-8">
          <div className="max-w-lg">
            {/* Header */}
            <div className="mb-8 tracking-normal">
              <h1 className="text-[28px] font-medium mb-5">SELECT PAYMENT METHOD</h1>
              <p className="text-[10px]">
                WANT TO PAY WITH CASH ON DELIVERY?{" "}
                <span className="font-medium underline opacity-60">VERIFY YOUR ID</span>
              </p>
            </div>

            {/* Payment Options */}
            <div className="space-y-4 mb-8">
              {/* Cash on Delivery Option */}
              <label className="block">
                <div className="border border-[#D9D9D9] rounded-[12px] p-4 lg:p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash-on-delivery"
                      checked={selectedPayment === "cash-on-delivery"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-black focus:ring-black"
                    />

                    <div className="w-8 h-6 bg-gray-200 rounded flex items-center justify-center">
                      <img src="/cash.svg" alt="WHISH Logo" className="w-8 h-6" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-2 tracking-normal">
                        <span className="font-medium text-lg">CASH ON DELIVERY</span>
                        <span className="text-[7px] lg:text-[8px] text-gray-500 border px-2 py-1 rounded-4xl">
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
                <div className="border border-[#D9D9D9] rounded-[12px] p-6 cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="whish"
                      checked={selectedPayment === "whish"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="w-4 h-4 text-black focus:ring-black"
                    />

                    <div className="w-8 h-6 bg-red-500 rounded flex items-center justify-center">
                      <img src="/whish.svg" alt="WHISH Logo" className="w-8 h-6" />
                    </div>

                    <div className="flex-1">
                      <span className="font-medium text-lg tracking-[1px]">WHISH</span>
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
          <div className="flex items-center gap-3 p-3 border border-[#D9D9D9] rounded">
            <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-xs font-bold">i</span>
            </div>
            <p className="text-[10px] text-center text-gray-700 tracking-normal leading-relaxed">
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
