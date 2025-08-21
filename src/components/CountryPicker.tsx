import countries from "world-countries";

function CountryPicker() {
  const countryOptions = countries.map((country) => ({
    label: country.name.common,
    value: country.cca2,
    flag: country.flag,
  }));

  return (
    <select
      defaultValue="Country"
      name="country"
      className="select select-ghost text-xs w-full h-11 p-2 px-5 border-1 border-[#D9D9D9]"
    >
      <option disabled={true}>Country</option>
      {countryOptions.map((country) => (
        <option key={country.value} value={country.value}>
          {country.label}
        </option>
      ))}
    </select>
  );
}

export default CountryPicker;
