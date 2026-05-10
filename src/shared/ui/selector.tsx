
type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  options: Option[];

  value?: string;

  placeholder?: string;

  onChange?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
};

export default function Selector({
  options,
  value,
  placeholder = "Select option",
  onChange,
}: SelectProps) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className="w-full appearance-none rounded-md border border-gray-300 bg-white px-4 py-2 pr-10 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

      {/* Arrow */}
      <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
        ▼
      </span>
    </div>
  );
}