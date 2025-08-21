import PageNav from "@/components/PageNav";
import { useState } from "react";
import { X, Heart, Plus, Minus } from "lucide-react";
import { Link } from "react-router";

// Mock cart data
const mockCartItems = [
  {
    id: 1,
    name: "Full Sleeve Zipper",
    category: "Cotton T Shirt",
    price: 99,
    size: "L",
    color: "Black",
    image: "/images/products1.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Basic Slim Fit T-Shirt",
    category: "Cotton T Shirt",
    price: 99,
    size: "L",
    color: "Black",
    image: "/images/products2.png",
    quantity: 1,
  },
];

function Cart() {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [activeTab, setActiveTab] = useState("SHOPPING BAG");

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = 10;
  const total = subtotal + delivery;

  return (
    <div className="max-w-7xl flex flex-col w-full py-7 px-4.5 md:p-[50px] mx-auto min-h-screen">
      <PageNav />

      <div className="flex-1 py-8">
        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === "SHOPPING BAG"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("SHOPPING BAG")}
          >
            SHOPPING BAG
          </button>
          <button
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ml-8 ${
              activeTab === "FAVOURITES"
                ? "border-black text-black"
                : "border-transparent text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab("FAVOURITES")}
          >
            FAVOURITES
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Cart Items */}
          <div className="flex-1 lg:flex-[2]">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className=" border border-[#D9D9D9] rounded-lg p-6 relative"
                >
                  {/* Remove and Favorite buttons */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      className="p-1 hover:bg-gray-100 rounded"
                      onClick={() => removeItem(item.id)}
                    >
                      <X className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-1 hover:bg-gray-100 rounded">
                      <Heart className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>

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
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <p className="text-xs text-gray-500 uppercase mb-1">
                          {item.category}
                        </p>
                        <h3 className="text-sm font-medium mb-2">{item.name}</h3>
                        <p className="text-sm font-medium mb-4">${item.price}</p>

                        {/* Size and Color */}
                        <div className="flex gap-4 text-xs text-gray-600 mb-4">
                          <span>Size: {item.size}</span>
                          <span>Color: {item.color}</span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-3">
                        <button
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          <Minus className="w-3 h-3" />
                        </button>

                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>

                        <button
                          className="w-8 h-8 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {cartItems.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  Your shopping bag is empty
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="lg:w-80">
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
              <label className="flex items-center gap-3 mb-6 text-xs text-gray-600">
                <input
                  type="checkbox"
                  id="checkbox"
                  className="w-4 h-4 rounded border-gray-300"
                />
                <span className="tracking-normal">
                  I agree to the Terms and Conditions
                </span>
              </label>

              {/* Continue Button */}

              <Link to="/information" state={{ cartItems }}>
                <button
                  className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 px-6 transition-colors text-sm uppercase tracking-wide cursor-pointer"
                  disabled={cartItems.length === 0}
                >
                  CONTINUE
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
