function Footer() {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0 bg-black/5 z-[1]" />
      <div className="max-w-7xl h-full mx-auto z-[2] flex justify-center items-center p-40">
        <div className="w-[30%] flex flex-col justify-center gap-10 uppercase text-sm">
          <div>
            <span className="opacity-40">Info</span>
            <ul className="tracking-normal mt-10">
              <li>Pricing</li>
              <li>About</li>
              <li>Contacts</li>
            </ul>
          </div>
          <div>
            <span className="opacity-40">Languages</span>
            <ul className="tracking-normal mt-10">
              <li>Eng</li>
              <li>Arb</li>
            </ul>
          </div>
        </div>
        <div className="w-[70%] uppercase flex flex-col justify-center items-center mr-45">
          <img src="/logo.svg" alt="Icon" className="h-[50px] w-[50px] mr-9" />
          <img src="/SKR.svg" alt="Icon" className="h-[60px] w-[200px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
