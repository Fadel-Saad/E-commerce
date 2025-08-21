import SearchBar from "@/components/SearchBar";
import PageNav from "../components/PageNav";
import ProductCard from "../components/ProductCard";
import { ChevronDown, ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { Link } from "react-router";
import { endPageProducts } from "@/data";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <>
      <div className="max-w-7xl w-full p-5 md:p-[50px] mx-auto">
        <PageNav />
        <section className="mt-17 mb-12.5 md:mb-18 flex flex-col gap-4">
          <p className="font-['Beatrice_Deck_Trial_Regular']">
            MEN
            <br />
            WOMEN
            <br />
            KIDS
          </p>
          <SearchBar className="w-full md:max-w-[370px]" />
        </section>

        {/* Desktop */}
        <section className="hidden md:grid grid-cols-4 lg:grid-cols-3 gap-4 mb-[150px]">
          <div className="flex col-span-2 lg:col-span-1 flex-col justify-between">
            {/* upper */}
            <div className="font-['Beatrice_Deck_Trial_Regular']">
              <h2 className="text-5xl mb-2 font-['Beatrice_Deck_Trial_Extrabold']">
                NEW <br /> COLLECTION
              </h2>
              <span>Summer</span>
              <br />
              <span>2024</span>
            </div>
            {/* lower */}
            <div className="grid grid-cols-4 items-center">
              <Link
                to={"/products"}
                className="flex justify-between col-span-3 bg-[#D9D9D9] px-4 py-2 w-[90%]"
              >
                <span className="tracking-normal font-medium">Go To Shop</span>
                <MoveRight />
              </Link>
              <div className="flex justify-around gap-2">
                <button className="btn w-10 h-10 border p-0 rounded-none border-[#A3A3A3]">
                  <ChevronLeft />
                </button>
                <button className="btn w-10 h-10 border p-0 rounded-none border-[#A3A3A3]">
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>
          {/* images */}
          <div className="flex col-span-2 gap-10">
            <ProductCard
              image={"/images/homepage1.png"}
              className="max-w-[370px] max-h-[380px]"
              info={false}
            />
            <ProductCard
              image={"/images/homepage2.png"}
              className="max-w-[370px] max-h-[380px]"
              info={false}
            />
          </div>
        </section>

        {/* Mobile */}
        <section className="md:hidden mb-[150px]">
          <div className="flex flex-col justify-between font-['Beatrice_Deck_Trial_Regular'] mb-15">
            <h2 className="text-5xl mb-2 w-fit font-['Beatrice_Deck_Trial_Extrabold']">
              NEW <br /> COLLECTION
            </h2>
            <span>
              summer <br /> 2024
            </span>
          </div>
          {/* images */}
          <div className="flex overflow-x-scroll gap-3 justify-between mb-5">
            <ProductCard
              productType={"Cotton T Shirt"}
              productName={"Full Sleeve Zipper"}
              slug={"full-sleeve-zipper"}
              price={"199"}
              image={"/images/end3.png"}
              className="min-w-[178px] max-h-[183px]"
            />

            <ProductCard
              productType={"Cotton T Shirt"}
              productName={"Full Sleeve Zipper"}
              slug={"full-sleeve-zipper2"}
              price={"199"}
              image={"/images/homepage2.png"}
              className="min-w-[178px] max-h-[183px]"
            />
            <ProductCard
              productType={"Cotton T Shirt"}
              productName={"Full Sleeve Zipper"}
              slug={"full-sleeve-zipper3"}
              price={"199"}
              image={"/images/end3.png"}
              className="min-w-[178px] max-h-[183px]"
            />
          </div>
          <Link
            to={"/products"}
            className="flex justify-between items-center bg-[#D9D9D9] px-6 py-2 w-[48%]"
          >
            <span className="tracking-normal text-sm font-medium">Go To Shop</span>
            <MoveRight />
          </Link>
        </section>

        <section className="mb-[150px]">
          <div className="flex justify-between mb-[30px]">
            <h2 className="text-5xl font-['Beatrice_Deck_Trial_Extrabold']">
              NEW <br /> THIS WEEK
              <sup className="text-[#000E8A] text-xl -top-10">{"(50)"}</sup>
            </h2>
            <Link to={"/"} className="text-[#5E5E5E] tracking-normal self-end">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-7">
            <ProductCard
              productType={"V-Neck T-Shirt"}
              productName={"Embroidered Seersucker Shirt"}
              price={"99"}
              image={"/images/new1.png"}
              className="max-w-[280px] max-h-[200px] md:max-h-[288px]"
            />
            <ProductCard
              productType={"Cotton T Shirt"}
              productName={"Basic Slim Fit T-Shirt"}
              price={"99"}
              image={"/images/new2.png"}
              className="max-w-[280px] max-h-[200px] md:max-h-[288px]"
            />
            <ProductCard
              productType={"Henley T-Shirt"}
              productName={"Blurred Print T-Shirt"}
              price={"99"}
              image={"/images/new3.png"}
              className="max-w-[280px] max-h-[200px] md:max-h-[288px]"
            />
            <ProductCard
              productType={"Crewneck T-Shirt"}
              productName={"Full Sleeve Zipper"}
              price={"99"}
              image={"/images/new4.png"}
              className="max-w-[280px] max-h-[200px] md:max-h-[288px]"
            />
          </div>
          <div className="flex justify-center gap-3">
            <button className="btn w-10 h-10 p-0 border rounded-none border-[#A3A3A3]">
              <ChevronLeft />
            </button>
            <button className="btn w-10 h-10 p-0 border rounded-none border-[#A3A3A3]">
              <ChevronRight />
            </button>
          </div>
        </section>
        <section className="mb-40">
          <h2 className="text-5xl font-['Beatrice_Deck_Trial_Extrabold'] mb-11">
            XIV <br /> Collections <br /> 23-24
          </h2>

          {/* Collection Category */}
          <div className="flex justify-between border-b border-[#DFDFDF] mb-10">
            <div className="flex justify-between tracking-normal pb-3 gap-8 ">
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
          <div className="grid grid-cols-3 gap-4 md:gap-10 mb-7">
            <ProductCard
              productType={"Cotton T Shirt"}
              productName={"Basic Heavy Weight T-shirt"}
              price={"199"}
              image={"/images/xiv1.png"}
              className="max-w-[366px] max-h-[376px]"
            />
            <ProductCard
              productType={"Cotton  jeans "}
              productName={"Soft Wash straight Fit Jeans"}
              price={"199"}
              image={"/images/xiv2.png"}
              className="max-w-[366px] max-h-[376px]"
            />
            <ProductCard
              productType={"Cotton T Shirt"}
              productName={"Basic Heavy Weight T-shirt"}
              price={"199"}
              image={"/images/xiv3.png"}
              className="max-w-[366px] max-h-[376px]"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Link className="flex flex-col items-center" to={"/products"}>
              <span className="text-[#8A8A8A]">More</span>
              <ChevronDown />
            </Link>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center mb-20 md:mb-37">
          <h2 className="text-center text-5xl mb-4 font-['Beatrice_Deck_Trial_Regular'] uppercase">
            Our Approach to fashion design
          </h2>
          <p className="max-w-[70%] md:max-w-[65%] text-center font-['Beatrice_Deck_Trial_Regular']">
            at AHMD ALS , we blend creativity with craftsmanship to create fashion that
            transcends trends and stands the test of time each design is meticulously
            crafted, ensuring the highest quelity exqulsite finish
          </p>
          <div className="grid grid-cols-4 gap-6 mt-32">
            {endPageProducts.map((product, i) => (
              <ProductCard
                key={i}
                image={product.image}
                info={false}
                className={`max-w-[270px] max-h-[100px] sm:max-h-[180px] md:max-h-[240px] lg:max-h-[360px] aspect-[3/4]  ${
                  i === 1 || i === 3 ? "mt-8 md:mt-16 " : ""
                }`}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
