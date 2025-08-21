import clsx from "clsx";
import { Link } from "react-router";

function ProductCard({
  info = true,
  productType,
  productName,
  slug,
  price,
  image,
  className,
}: {
  info?: boolean;
  productType?: string;
  productName?: string;
  slug?: string;
  price?: string;
  image: string;
  className?: string;
}) {
  return (
    <div
      className={clsx("flex flex-col justify-between tracking-normal font-medium w-full")}
    >
      <div className={clsx("border border-[#D7D7D7] w-full h-full", className)}>
        <Link to={`/products/${slug}`} className="">
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
        </Link>
      </div>
      {info && (
        <div className="mt-2.5">
          <Link to={""} className="hover:opacity-60">
            <span className="text-[11px] md:text-xs text-black/66">{productType}</span>
            <div className="text-xs md:text-sm flex justify-between">
              <p>{productName}</p>
              <span>${price}</span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default ProductCard;
