import clsx from "clsx";

function SearchBar({ className }: { className?: string }) {
  return (
    <label
      className={clsx("input h-10 md:h-[50px] bg-[#D9D9D9] rounded-[2px]", className)}
    >
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
      <input
        type="search"
        name="search"
        required
        placeholder="Search"
        className="items-end"
      />
    </label>
  );
}

export default SearchBar;
