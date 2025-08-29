function Footer() {
  return (
    <div className="relative w-full h-[300px] md:h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/5 z-[1]" />
      <div className="flex flex-col-reverse md:flex-row gap-15 md:gap-0 max-w-7xl h-full mx-auto z-[2]  justify-center items-center p-10 md:p-40">
        <div className="w-full md:w-[30%] flex flex-row md:flex-col justify-around md:justify-center gap-10 uppercase text-sm">
          <div>
            <span className="opacity-40">Info</span>
            <ul className="tracking-normal mt-5 md:mt-10">
              <li>Pricing</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <span className="opacity-40">Languages</span>
            <ul className="tracking-normal mt-5 md:mt-10">
              <li>Eng</li>
              <li>Arb</li>
            </ul>
          </div>
        </div>
        <div className="w-[70%] uppercase flex flex-col justify-center items-center md:mr-45">
          <img
            src="/logo.svg"
            alt="Icon"
            className="h-[40px] w-[40px] md:h-[50px] md:w-[50px] mr-9"
          />
          <img
            src="/SKR.svg"
            alt="Icon"
            className="h-[45px] w-[170px] md:h-[60px] md:w-[200px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
