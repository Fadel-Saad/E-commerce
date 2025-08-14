import clsx from "clsx";

function ProductCard({
  size,
  productType,
  productName,
  price,
  image,
}: {
  size: "sm" | "lg";
  productType: string;
  productName: string;
  price: string;
  image: string;
}) {
  const dimensions = size === "sm" ? { w: 280, h: 288 } : { w: 366, h: 376 };

  return (
    <div className="flex flex-col justify-between tracking-normal font-medium">
      <div
        className={clsx(
          "border border-[#D7D7D7] w-full",
          size === "sm" ? "max-w-[280px] max-h-[288px]" : "max-w-[366px] max-h-[376px]"
        )}
      >
        <img
          src={image}
          alt=""
          width={dimensions.w}
          height={dimensions.h}
          className="max-w-full max-h-full object-cover"
          loading="lazy"
        />
      </div>
      <span className="text-xs mt-3.5 text-black/66">{productType}</span>
      <div className="flex justify-between mt-1">
        <p className="text-sm">{productName}</p>
        <span className="text-sm">${price}</span>
      </div>
    </div>
  );
}

export default ProductCard;
