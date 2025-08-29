import { useState } from "react";
import { Link } from "react-router";

function ForgotPass() {
  const [email, setEmail] = useState("");
  const [codeSent, setCodeSent] = useState(false);

  const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+$/.test(email);

  return (
    <div className="flex justify-between max-h-screen">
      <div className="min-h-screen w-full md:max-w-1/2">
        <div className="max-w-4/5 m-auto h-full flex flex-col items-center justify-center tracking-normal">
          {/* Email Form */}
          {!codeSent && (
            <div className="w-full flex flex-col">
              <Link to={"/sign-in"} className="flex items-center ml-1 mb-7 gap-2">
                <span className="text-3xl">&lt;</span>
                <p className="font-medium">Back to Login</p>
              </Link>

              <h2 className="font-semibold text-3xl mb-7">
                A code will be sent to your inbox
              </h2>
              <div className="join gap-3">
                <div className="w-full">
                  <label className="input input-ghost rounded-[10px] border-1 border-black w-full validator join-item">
                    <svg
                      className="h-[1em] opacity-50"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </g>
                    </svg>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="mail@site.com"
                      required
                    />
                  </label>
                  <div className="validator-hint">Enter valid email address</div>
                </div>
                <button
                  type="submit"
                  className="btn btn-neutral rounded-[10px] join-item"
                  onClick={() => {
                    if (isValidEmail(email)) {
                      setCodeSent(true);
                    }
                  }}
                >
                  Send Code
                </button>
              </div>
            </div>
          )}

          {/* Verify Code */}
          {codeSent && (
            <div className="w-full flex flex-col">
              <button
                onClick={() => setCodeSent(false)}
                className="flex items-center cursor-pointer ml-1 mb-5 gap-2"
              >
                <span className="text-3xl">&lt;</span>
                <p className="font-medium">Back</p>
              </button>

              <h2 className="font-semibold text-[40px] mb-5">Verfiy code</h2>
              <p className="text-[#313131] opacity-75 mb-5">
                An authentication code has been sent to your email.
              </p>
              <div className="mb-6 mr-10 flex gap-2.5 self-center">
                {[...Array(5)].map((_, i) => (
                  <div className="h-[61px] w-[49px] rounded-[10px] border" key={i}></div>
                ))}
              </div>
              <div className="flex justify-between mb-9.5">
                <p className="font-medium text-[#313131]">
                  Didn&apos;t receive a code?{" "}
                  <span className="text-[#FF0800AD] font-semibold">Resend</span>
                </p>
                <span className="opacity-50 font-semibold">0:59</span>
              </div>
              <button className="btn btn-neutral rounded-[10px] w-full max-w-4/5 self-center">
                Verify
              </button>
            </div>
          )}
        </div>
      </div>
      {/* Image */}
      <div className="w-full hidden md:block max-w-1/2 bg-[#eef1f5]">
        <img src="/images/forgotPass.png" alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default ForgotPass;
