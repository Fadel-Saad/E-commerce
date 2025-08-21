import { Link } from "react-router";

function Register() {
  return (
    <div className="flex justify-between">
      {/* Form */}
      <div className="min-h-screen w-full max-w-[57%]">
        <div className="max-w-1/2 m-auto h-full flex flex-col items-center justify-center tracking-normal">
          <div className="w-full">
            <h3 className="text-[32px] font-medium mb-14 ">Get Started Now</h3>
            <fieldset className="fieldset">
              <div className="flex flex-col mb-6">
                <label className="label font-medium py-1 text-sm text-black">Name</label>
                <input
                  type="text"
                  required
                  className="text-[10px] w-full p-2 input-ghost validator rounded-[10px] border-1 border-black"
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

              <div className="flex flex-col mb-6">
                <label className="label font-medium py-1 text-sm text-black">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="text-[10px] w-full p-2 input-ghost validator rounded-[10px] border-1 border-black"
                />

                <div className="validator-hint hidden">Enter valid email address</div>
              </div>

              <div className="flex flex-col mb-6">
                <label className="label font-medium py-1 text-sm text-black">
                  Password
                </label>
                <input
                  type="password"
                  required
                  className="text-[10px] w-full p-2 input-ghost validator rounded-[10px] border-1 border-black"
                  placeholder="Enter your password"
                  minLength={8}
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                  title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                />

                <p className="validator-hint hidden">
                  Must be more than 8 characters, including
                  <br />
                  At least one number <br />
                  At least one lowercase letter <br />
                  At least one uppercase letter
                </p>
              </div>

              <label className="label mb-7.5">
                <input
                  type="checkbox"
                  className="checkbox checkbox-xs rounded-xs border border-black"
                />
                <span className="font-medium text-black">
                  I agree to the <u>terms and policy</u>
                </span>
              </label>
              <button className="btn btn-neutral rounded-[10px]">Sign Up</button>
            </fieldset>
          </div>
          <div className="flex flex-col justify-center items-center mt-15">
            <span className="mb-6">or</span>
            <button className="btn btn-outline btn-sm border font-medium text-black rounded-[10px] mb-9 px-6">
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
              Continue with Google
            </button>
            <div className="flex gap-2">
              <p className="font-medium">Have an account?</p>
              <Link className="font-bold underline" to={"/sign-in"}>
                sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* Image */}
      <div className="w-full max-w-[43%] border-l bg-[#eef1f5]">
        <img src="/images/register.png" alt="" className="h-full" />
      </div>
    </div>
  );
}

export default Register;
