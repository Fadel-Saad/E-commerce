import PageNav from "../components/PageNav";

function Products() {
  return (
    <div className="max-w-7xl h-screen w-full flex flex-col p-[50px] mx-auto">
      <PageNav />
      <div className="grid grid-cols-3">
        <div className="col-span-1">
          <div className="flex flex-col">
            <span>Filters</span>
            <div>
              <span></span>
              <p>size boxes</p>
            </div>
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
}

export default Products;
