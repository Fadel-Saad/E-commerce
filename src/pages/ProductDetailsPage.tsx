import PageNav from "@/components/PageNav";
import { useParams } from "react-router";
import { useState } from "react";

// Mock product data
const mockProduct = {
  id: 1,
  name: "ABSTRACT PRINT SHIRT",
  price: 99,
  description: "Relaxed-fit shirt. Camp collar and short sleeves. Button-up front.",
  images: [
    "/images/products1.png",
    "/images/products2.png",
    "/images/products3.png",
    "/images/products4.png",
    "/images/products5.png",
  ],
  colors: [
    { name: "Gray", value: "#9CA3AF", code: "gray" },
    { name: "Dark Gray", value: "#6B7280", code: "dark-gray" },
    { name: "Black", value: "#000000", code: "black" },
    { name: "Mint", value: "#6EE7B7", code: "mint" },
    { name: "White", value: "#FFFFFF", code: "white" },
    { name: "Light Blue", value: "#93C5FD", code: "light-blue" },
  ],
  sizes: ["XS", "S", "M", "L", "XL", "2X"],
};

function ProductDetailsPage() {
  const { slug } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(mockProduct.colors[0]);
  const [selectedSize, setSelectedSize] = useState("");

  // TODO: Use slug to fetch actual product data from backend
  console.log("Product slug:", slug);

  return (
    <div className="max-w-7xl flex flex-col w-full py-7 px-4.5 md:p-[50px] mx-auto h-screen">
      <PageNav />
      <div className="flex-1 py-8 md:py-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 h-full">
          {/* Left Side - Selected Image */}
          <div className="flex-1 flex justify-center items-center border border-[#D9D9D9] max-w-[360px] lg:max-h-[430px]">
            <div className="w-full max-w-md overflow-hidden">
              <img
                src={mockProduct.images[selectedImage]}
                alt={mockProduct.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Middle - Image Selector */}
          <div className="flex lg:flex-col gap-3 justify-center lg:justify-start overflow-x-auto lg:overflow-visible">
            {mockProduct.images.map((image, index) => (
              <div
                key={index}
                className={`w-16 h-16 lg:w-20 lg:h-20 bg-gray-100  overflow-hidden cursor-pointer border-2 transition-all ${
                  selectedImage === index
                    ? "border-black"
                    : "border-transparent hover:border-gray-300"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={image}
                  alt={`${mockProduct.name} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Side - Product Info */}
          <div className=" lg:max-w-[360px] space-y-6 p-10 border border-[#D9D9D9] ">
            <div>
              <h1 className="font-medium tracking-wide mb-2">{mockProduct.name}</h1>
              <p className="font-medium mb-4">${mockProduct.price}</p>
              <p className="text-xs text-gray-600 mb-6">MRP incl. of all taxes</p>
              <p className="text-xs font-medium">{mockProduct.description}</p>
            </div>

            {/* Color Selector */}
            <div>
              <h3 className="text-sm font-medium mb-3 text-gray-700">Color</h3>
              <div className="flex gap-2">
                {mockProduct.colors.map((color) => (
                  <button
                    key={color.code}
                    className={`w-8 h-8 rounded-full border-2 transition-all ${
                      selectedColor.code === color.code
                        ? "border-black scale-110"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    style={{ backgroundColor: color.value }}
                    onClick={() => setSelectedColor(color)}
                    title={color.name}
                  >
                    {color.value === "#FFFFFF" && (
                      <div className="w-full h-full rounded-full border border-gray-200"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-medium text-gray-700">Size</h3>
                <button className="text-xs underline text-gray-600 hover:text-black">
                  FIND YOUR SIZE | MEASUREMENT GUIDE
                </button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {mockProduct.sizes.map((size) => (
                  <button
                    key={size}
                    className={`py-2 px-4 border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? "border-black bg-black text-white"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <button className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-3 px-6 transition-colors">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
