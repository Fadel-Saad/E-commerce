import PageNav from "../components/PageNav";
import ProductCard from "../components/ProductCard";
import { MoveRight } from "lucide-react";

function HomePage() {
  return (
    <div className="p-[50px] max-w-7xl w-full mx-auto">
      <PageNav />
      <section className="mt-12 mb-18 flex flex-col gap-4">
        <p className="font-['Beatrice_Deck_Trial_Regular']">
          MEN
          <br />
          WOMEN
          <br />
          KIDS
        </p>
        <label className="input bg-[#D9D9D9]">
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </section>
      <section className="grid grid-cols-3 gap-10 mb-[150px]">
        <div className="flex flex-col justify-between">
          {/* upper */}
          <div className="font-['Beatrice_Deck_Trial_Regular']">
            <h2 className="text-5xl mb-2 font-['Beatrice_Deck_Trial_Extrabold']">
              NEW COLLECTION
            </h2>
            <span>summer</span>
            <br />
            <span>2024</span>
          </div>
          {/* lower */}
          <div className="grid grid-cols-4 items-center">
            <div className="flex justify-between col-span-3 bg-[#D9D9D9] px-4 py-2 w-[85%]">
              <span className="tracking-normal font-medium">Go To Shop</span>
              <MoveRight />
            </div>
            <div className="flex justify-around">
              <button className="btn w-10 h-10 border-[#A3A3A3]">&lt;</button>
              <button className="btn w-10 h-10 border-[#A3A3A3]">&gt;</button>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="border border-[#D7D7D7] w-full max-w-[366px] max-h-[376px]">
          <img
            src="/images/homepage1.png"
            alt=""
            height={376}
            width={366}
            className="max-w-full max-h-full object-cover object-[50%_85%]"
            loading="lazy"
          />
        </div>
        <div className="border border-[#D7D7D7] w-full max-w-[366px] max-h-[376px]">
          <img
            src="/images/homepage2.png"
            alt=""
            height={376}
            width={366}
            className="max-w-full max-h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
      <section className="mb-[150px]">
        <div className="flex justify-between mb-[30px]">
          <h2 className="text-5xl font-['Beatrice_Deck_Trial_Extrabold']">
            NEW <br /> THIS WEEK
          </h2>
          <span>See All</span>
        </div>
        <div className="grid grid-cols-4 gap-5 mb-7">
          <ProductCard
            size={"sm"}
            productType={"V-Neck T-Shirt"}
            productName={"Embroidered Seersucker Shirt"}
            price={"99"}
            image={"/images/new1.png"}
          />
          <ProductCard
            size={"sm"}
            productType={"Cotton T Shirt"}
            productName={"Basic Slim Fit T-Shirt"}
            price={"99"}
            image={"/images/new2.png"}
          />
          <ProductCard
            size={"sm"}
            productType={"Henley T-Shirt"}
            productName={"Blurred Print T-Shirt"}
            price={"99"}
            image={"/images/new3.png"}
          />
          <ProductCard
            size={"sm"}
            productType={"Crewneck T-Shirt"}
            productName={"Full Sleeve Zipper"}
            price={"99"}
            image={"/images/new4.png"}
          />
        </div>
        <div className="flex justify-center gap-3">
          <button className="btn w-10 h-10 border-[#A3A3A3]">&lt;</button>
          <button className="btn w-10 h-10 border-[#A3A3A3]">&gt;</button>
        </div>
      </section>
      <section className="mb-40">
        <h2 className="text-5xl font-['Beatrice_Deck_Trial_Extrabold'] mb-11">
          XIV <br /> Collections <br /> 23-24
        </h2>
        {/* Collection Category */}
        <div className="flex justify-between">
          <div className="flex justify-between gap-8 mb-10">
            <span>(ALL)</span>
            <span className="text-[#8A8A8A]">Men</span>
            <span className="text-[#8A8A8A]">Women</span>
            <span className="text-[#8A8A8A]">Kid</span>
          </div>
          <div>
            <span>Filters</span>
            <span>Sorts</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mb-7">
          <ProductCard
            size={"lg"}
            productType={"Crewneck T-Shirt"}
            productName={"Full Sleeve Zipper"}
            price={"99"}
            image={"/images/xiv1.png"}
          />
          <ProductCard
            size={"lg"}
            productType={"Crewneck T-Shirt"}
            productName={"Full Sleeve Zipper"}
            price={"99"}
            image={"/images/xiv2.png"}
          />
          <ProductCard
            size={"lg"}
            productType={"Crewneck T-Shirt"}
            productName={"Full Sleeve Zipper"}
            price={"99"}
            image={"/images/xiv3.png"}
          />
        </div>
        <div className="flex flex-col justify-center items-center">
          <span>More</span>
          <span>down arrow</span>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center">
        <h2 className="text-5xl mb-4 font-['Beatrice_Deck_Trial_Regular'] uppercase">
          Our Approach to fashion design
        </h2>
        <p className="max-w-[60%] text-center">
          at AHMD ALS , we blend creativity with craftsmanship to create fashion that
          transcends trends and stands the test of time each design is meticulously
          crafted, ensuring the highest quelity exqulsite finish
        </p>
        <div className="grid grid-cols-4"></div>
      </section>
    </div>
  );
}

export default HomePage;
