import CountryPicker from "@/components/CountryPicker";
import { MoveRight } from "lucide-react";
import { mockCartItems } from "@/data";
import { Link, useLocation, useNavigate } from "react-router";
import { useState } from "react";

function Information() {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  // Form state management
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    country: "",
    state: "",
    address: "",
    city: "",
    postalCode: "",
    general: "",
  });

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Phone validation regex (basic international format)
  const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;

  // Validation function
  const validateForm = () => {
    const newErrors = {
      email: "",
      phone: "",
      firstName: "",
      lastName: "",
      country: "",
      state: "",
      address: "",
      city: "",
      postalCode: "",
      general: "",
    };

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters";
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    } else if (formData.lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters";
    }

    // Country validation
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }

    // State validation
    if (!formData.state.trim()) {
      newErrors.state = "State/Region is required";
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required";
    } else if (formData.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters";
    }

    // City validation
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    } else if (formData.city.length < 2) {
      newErrors.city = "City must be at least 2 characters";
    }

    // Postal code validation
    if (!formData.postalCode.trim()) {
      newErrors.postalCode = "Postal code is required";
    } else if (formData.postalCode.length < 3) {
      newErrors.postalCode = "Postal code must be at least 3 characters";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle country selection
  const handleCountryChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      country: value,
    }));

    // Clear country error when user selects a country
    if (errors.country) {
      setErrors((prev) => ({
        ...prev,
        country: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Form is valid, proceed to payment
      navigate("/payment", { state: { cartItems, addressInfo: formData } });
    } else {
      setErrors((prev) => ({
        ...prev,
        general: "Please fill in all required fields correctly",
      }));
    }
  };

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
            <form onSubmit={handleSubmit}>
              {/* General error message */}
              {errors.general && (
                <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                  {errors.general}
                </div>
              )}

              <div className="flex flex-col mb-4">
                <label className="label font-medium mb-5 text-sm text-black uppercase">
                  contact info
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                    errors.email ? "border-red-500" : "border-[#D9D9D9]"
                  }`}
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              <div className="flex flex-col mb-8">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                    errors.phone ? "border-red-500" : "border-[#D9D9D9]"
                  }`}
                  placeholder="Phone"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 mb-6">{errors.phone}</p>
                )}
              </div>

              <div className="flex flex-col mb-4">
                <label className="label font-medium mb-5 text-sm text-black uppercase">
                  delivery address
                </label>

                <div className="flex gap-1.5">
                  <div className="flex-1">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                        errors.firstName ? "border-red-500" : "border-[#D9D9D9]"
                      }`}
                      placeholder="First Name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="flex-1">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                        errors.lastName ? "border-red-500" : "border-[#D9D9D9]"
                      }`}
                      placeholder="Last Name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5 mb-5">
                <div className="relative">
                  <CountryPicker
                    value={formData.country}
                    onChange={handleCountryChange}
                    error={!!errors.country}
                  />
                  {errors.country && (
                    <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                      errors.state ? "border-red-500" : "border-[#D9D9D9]"
                    }`}
                    placeholder="State / Region"
                  />
                  {errors.state && (
                    <p className="text-red-500 text-xs mt-1">{errors.state}</p>
                  )}
                </div>

                <div>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                      errors.address ? "border-red-500" : "border-[#D9D9D9]"
                    }`}
                    placeholder="Address"
                  />
                  {errors.address && (
                    <p className="text-red-500 text-xs mt-1">{errors.address}</p>
                  )}
                </div>
              </div>

              {/* City + postal code */}
              <div className="flex gap-1.5 mb-3">
                <div className="flex-1">
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                      errors.city ? "border-red-500" : "border-[#D9D9D9]"
                    }`}
                    placeholder="City"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                  )}
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                    className={`text-xs w-full h-11 p-2 px-5 input-ghost validator border-1 ${
                      errors.postalCode ? "border-red-500" : "border-[#D9D9D9]"
                    }`}
                    placeholder="Postal Code"
                  />
                  {errors.postalCode && (
                    <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn rounded-none bg-[#D9D9D9] border-[#D9D9D9] flex w-full lg:w-1/2 justify-between font-medium text-sm"
                >
                  Payment
                  <MoveRight size={35} absoluteStrokeWidth />
                </button>
              </div>
            </form>
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
                          <Link to={"/cart"} className="underline self-start">
                            Change
                          </Link>
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
