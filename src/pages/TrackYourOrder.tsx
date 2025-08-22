import { mockCartItems } from "@/data";

function TrackYourOrder() {
  const orderSteps = [
    { title: "Order Confirmed", date: "Wed, 11th Jan", isCompleted: true },
    { title: "Shipped", date: "Wed, 11th Jan", isCompleted: false },
    { title: "Out For Delivery", date: "Wed, 11th Jan", isCompleted: false },
    { title: "Delivered", date: "Expected by, Mon 16th", isCompleted: false },
  ];

  // Mock pricing data
  const subtotal = 180;
  const delivery = 10;
  const total = subtotal + delivery;

  return (
    <div className="flex-1 py-10 mt-3">
      <div className="max-w-3xl mx-auto px-4 pt-8 pb-18">
        <div className="relative">
          {/* The line */}
          <div className="absolute w-[70%] lg:w-[80%] top-3 left-13 lg:left-17 h-0.5 bg-gray-300" />

          {/* The steps */}
          <div className="relative flex justify-between items-center">
            {orderSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Circle */}
                <div
                  className={
                    "w-6 h-6 rounded-full z-10 " +
                    (step.isCompleted ? "bg-green-500" : "bg-black")
                  }
                />
                {/* Text */}
                <div className="mt-3">
                  <p
                    className={
                      "text-xs lg:text-sm tracking-normal font-medium " +
                      (step.isCompleted ? "text-green-600" : "text-black")
                    }
                  >
                    {step.title}
                  </p>
                  <p className="text-[10px] lg:text-xs tracking-normal text-gray-500 mt-1">
                    {step.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <h3 className="text-[40px] font-medium uppercase mb-5 text-center lg:text-start">
        Order Summary
      </h3>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:justify-around py-10 border border-[#D9D9D9]">
        {/* left section - total price */}
        <div className="mt-0 lg:mt-10 mb-10 lg:mb-0">
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
        </div>

        {/* middle section - products */}
        <div className="mb-10 lg:mb-0">
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
        </div>

        {/* Right section - Delivery and payment */}
        <div className="tracking-normal flex flex-row lg:flex-col gap-5 lg:gap-12">
          <div className="flex flex-col gap-1.5">
            <h3 className="text-xl font-semibold">Delivery</h3>
            <span className="text-[#667085] text-sm">Address</span>
            <span className="text-[#667085] text-sm">Tripoli, Mina. </span>
            <span className="text-[#667085] text-sm">Condor Street, 9 Flr</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <div className="text-xl font-semibold">Payment</div>
            <div className="text-[#667085] text-sm">Whish +961 465 759</div>
            <div className="w-8 h-6 bg-red-500 rounded flex items-center justify-center">
              <img src="/whish.svg" alt="WHISH Logo" className="w-8 h-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TrackYourOrder;
