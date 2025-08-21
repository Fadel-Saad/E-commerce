import ProductCard from "@/components/ProductCard";
import PageNav from "../components/PageNav";
import SearchBar from "@/components/SearchBar";
import { useState } from "react";
import { products, categories } from "@/data";
import ProductFilters from "@/components/ProductFilters";
import { NavLink } from "react-router";
import { ChevronRight } from "lucide-react";

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("new");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="max-w-7xl w-full flex flex-col py-7 px-4.5 md:p-[50px] min-h-screen mx-auto">
      <PageNav />
      {/* Desktop */}
      <div className="hidden lg:grid grid-cols-4 gap-10 mt-15">
        {/* Left section - Filters */}
        <div className="col-span-1">
          <ProductFilters />
        </div>

        {/* Right section - product cards */}
        <div className="col-span-3">
          <div className="tracking-[1px] text-xs mb-2">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "opacity-100" : "opacity-65")}
            >
              Home
            </NavLink>{" "}
            <span>{" / "}</span>{" "}
            <NavLink
              to={"/products"}
              className={({ isActive }) => (isActive ? "opacity-100" : "opacity-65")}
            >
              Products
            </NavLink>
          </div>
          <h3 className="text-xl font-['Beatrice_Deck_Trial_Bold'] mb-2">PRODUCTS</h3>
          <div className="flex justify-between items-center gap-8 mb-10">
            <SearchBar />
            <div className="grid grid-cols-2 md:grid-cols-5 gap-x-2.5 gap-y-0.5 w-full max-w-[62%]">
              {categories.map((category) => (
                <button
                  className="btn btn-sm btn-outline border-[0.5px] border-[#A3A3A3] text-[10px] font-medium text-[#5E5E5E] tracking-normal px-3.5 max-h-6 rounded-[0px]"
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-3 gap-x-10 gap-y-8">
            {products.map((product, i) => (
              <ProductCard
                key={i}
                productType={product.type}
                productName={product.name}
                slug={product.slug}
                price={product.price}
                image={product.image}
                className="max-w-[265px] max-h-[314px]"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}

      <div className="lg:hidden mt-15">
        <div className="">
          {/* Custom Sidebar */}
          <div
            className={`
            fixed top-[27%] md:top-[31.7%] left-0 h-full z-40 transition-transform duration-300 ease-in-out
            ${isFiltersOpen ? "translate-x-0" : "-translate-x-full"}
            w-1/2  overflow-y-auto
          `}
          >
            <div className="p-5">
              <ProductFilters
                isFiltersOpen={isFiltersOpen}
                setIsFiltersOpen={setIsFiltersOpen}
              />
            </div>
          </div>

          {/* Close sidebar when clicked outside */}
          {/* {isFiltersOpen && (
            <div
              className="fixed inset-0  bg-opacity-50 z-30"
              onClick={() => setIsFiltersOpen(false)}
            />
          )} */}

          {/* Main Content - shifts when sidebar is open */}
          <div>
            <div className="flex flex-col justify-center items-center">
              {/* Header */}
              <div className="tracking-[1px] text-xs mb-2">
                <NavLink
                  to={"/"}
                  className={({ isActive }) => (isActive ? "opacity-100" : "opacity-65")}
                >
                  Home
                </NavLink>{" "}
                <span>{" / "}</span>{" "}
                <NavLink
                  to={"/products"}
                  className={({ isActive }) => (isActive ? "opacity-100" : "opacity-65")}
                >
                  Products
                </NavLink>
              </div>

              <div className="w-full flex justify-between items-center mb-5">
                <h3 className="text-xl font-['Beatrice_Deck_Trial_Bold']">PRODUCTS</h3>
              </div>

              <SearchBar className="w-full" />

              {/* Filters Toggle Button */}
              <div
                className={`
             transition-all duration-300 ease-in-out
            ${isFiltersOpen ? "ml-[50%]" : "ml-0 w-full overflow-x-scroll"}
          `}
              >
                {!isFiltersOpen && (
                  <button
                    onClick={() => setIsFiltersOpen(true)}
                    className="font-['Beatrice_Deck_Trial_Bold'] font-medium self-start cursor-pointer w-fit"
                  >
                    <div className="flex items-center gap-0.5 mt-5">
                      <span>Filters</span>
                      <ChevronRight size={18} />
                    </div>
                  </button>
                )}

                {/* Category buttons */}
                <div className="flex flex-wrap gap-x-1.5 gap-y-0.5 my-2.5 overflow-x-auto w-full max-w-full">
                  {categories.map((category) => (
                    <button
                      className="btn btn-sm btn-outline border-[0.5px] border-[#A3A3A3] text-[10px] font-medium text-[#5E5E5E] tracking-normal px-2 max-h-6 xs:w-[24%] rounded-[0px] flex-shrink-0"
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Product grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full">
                  {products.map((product, i) => (
                    <ProductCard
                      key={i}
                      productType={product.type}
                      productName={
                        product.name.length > 18
                          ? product.name.slice(0, 18) + "..."
                          : product.name
                      }
                      slug={product.slug}
                      price={product.price}
                      image={product.image}
                      className="max-h-[200px]"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
