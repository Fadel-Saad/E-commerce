import { Link, useNavigate } from "react-router";
import { useState } from "react";

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    password: "",
    termsAccepted: "",
    general: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear specific error when user starts typing/clicking
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {
      name: "",
      password: "",
      termsAccepted: "",
      general: "",
    };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    // Validate terms and policy checkbox
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must agree to the terms and policy";
    }

    setErrors(newErrors);
    return !newErrors.name && !newErrors.password && !newErrors.termsAccepted;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // Handle successful login here
      console.log("Login successful", formData);
      // Redirect to homepage
      navigate("/");
    } else {
      setErrors((prev) => ({
        ...prev,
        general: "Please fill in all required fields correctly",
      }));
    }
  };
  return (
    <div className="flex justify-between max-h-screen">
      {/* Form */}
      <div className="min-h-screen w-full md:max-w-[57%]">
        <div className="max-w-[85%] md:max-w-1/2 m-auto h-full flex flex-col items-center justify-center tracking-normal">
          <div className="w-full">
            <h3 className="text-[32px] font-medium mb-14 ">Welcome Back!</h3>
            <fieldset className="fieldset">
              <form onSubmit={handleSubmit}>
                {/* General error message */}
                {errors.general && (
                  <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm">
                    {errors.general}
                  </div>
                )}

                <div className="flex flex-col mb-9">
                  <label className="label font-medium py-1 text-sm text-black">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`text-[10px] w-full p-2 input-ghost validator rounded-[10px] border-1 ${
                      errors.name ? "border-red-500" : "border-black"
                    }`}
                    placeholder="Enter your name"
                    pattern="[A-Za-z][A-Za-z0-9\-]*"
                    minLength={3}
                    maxLength={30}
                    title="Only letters, numbers or dash"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                  )}

                  <p className="validator-hint hidden">
                    Must be 3 to 30 characters
                    <br />
                    containing only letters, numbers or dash
                  </p>
                </div>

                <div className="flex flex-col mb-4">
                  <label className="label font-medium py-1 text-sm text-black">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`text-[10px] w-full p-2 input-ghost validator rounded-[10px] border-1 ${
                      errors.password ? "border-red-500" : "border-black"
                    }`}
                    placeholder="Enter your password"
                    minLength={8}
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                    title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                  )}

                  <p className="label text-xs font-bold text-black justify-end mt-2">
                    <Link to={"/forgot-pass"}>
                      <u>forgot password</u>
                    </Link>
                  </p>
                  <p className="validator-hint hidden mb-6">
                    Must be more than 8 characters, including
                    <br />
                    At least one number <br />
                    At least one lowercase letter <br />
                    At least one uppercase letter
                  </p>
                </div>

                <label className="label mb-7.5 w-full">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    className="checkbox checkbox-xs rounded-xs border border-black"
                  />
                  <span className="font-medium text-black">
                    I agree to the <u>terms and policy</u>
                  </span>
                </label>
                {errors.termsAccepted && (
                  <p className="text-red-500 text-xs mt-1 mb-4">{errors.termsAccepted}</p>
                )}
                <button type="submit" className="btn btn-neutral w-full rounded-[10px]">
                  Log In
                </button>
              </form>
            </fieldset>
          </div>
          <div className="flex flex-col justify-center items-center mt-15">
            <span className="mb-6">or</span>
            <button className="btn btn-outline btn-sm font-medium border text-black rounded-[10px] mb-9 px-6">
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <div className="flex gap-2">
              <p className="font-medium">Don't have an account?</p>
              <Link className="font-bold underline" to={"/register"}>
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full hidden md:block max-w-[43%] border-l bg-[#e9ebee] overflow-hidden">
        <img
          src="/images/sign-in.png"
          alt=""
          className="h-full w-[90%] object-cover object-[center_20%] transition-transform duration-300 "
        />
      </div>
    </div>
  );
}

export default SignIn;
