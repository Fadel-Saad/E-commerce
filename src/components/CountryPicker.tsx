import countries from "world-countries";

function CountryPicker({
  value,
  onChange,
  error,
}: {
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean;
}) {
  const countryOptions = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2,
    flag: country.flag,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <select
      value={value || ""}
      name="country"
      onChange={handleChange}
      className={`select select-ghost text-xs text-[#8d8989] w-full h-11 p-2 px-5 border-1 ${
        error ? "border-red-500" : "border-[#D9D9D9]"
      }`}
    >
      <option value="" disabled>
        Country
      </option>
      {countryOptions.map((country) => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}
    </select>
  );
}

export default CountryPicker;
