import { Link } from "react-router";

function ForgotPass() {
  return (
    <div className="flex justify-between max-h-screen">
      {/* Form */}
      <div className="min-h-screen w-full max-w-1/2">
        <div className="max-w-4/5 m-auto h-full flex flex-col items-center justify-center tracking-normal">
          <div className="w-full flex flex-col">
            <Link to={"/sign-in"} className="flex items-center ml-1 mb-5 gap-2">
              <span className="text-3xl">&lt;</span>
              <p className="font-medium">Back to Login</p>
            </Link>

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
        </div>
      </div>
      {/* Image */}
      <div className="w-full max-w-1/2 bg-[#eef1f5]">
        <img src="/images/forgotPass.png" alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
}

export default ForgotPass;
