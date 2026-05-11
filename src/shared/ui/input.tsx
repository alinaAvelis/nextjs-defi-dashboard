type InputProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  type?: string;

  topText?: string;
  bottomText?: string;

  error?: string;
  required?: boolean;

  showMaxButton?: boolean;
  onMaxClick?: () => void;

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input({
  label,
  value,
  placeholder,
  type = "text",
  topText,
  bottomText,
  error,
  required = false,
  showMaxButton = false,
  onMaxClick,
  onChange,
}: InputProps) {
  const hasError = Boolean(error);

  return (
    <div className="flex flex-col gap-1">
      {/* Label */}
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Top helper text */}
      {topText && !hasError && (
        <span className="text-xs text-gray-500">{topText}</span>
      )}

      {/* Input wrapper */}
      <div className="relative">
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`
            w-full rounded-md border px-3 py-2 outline-none transition
            ${showMaxButton ? "pr-16" : ""}
            ${
              hasError
                ? "border-red-500 focus:ring-2 focus:ring-red-200"
                : "border-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            }
          `}
        />

        {/* Max button */}
        {showMaxButton && (
          <button
            type="button"
            onClick={onMaxClick}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 hover:bg-slate-200"
          >
            MAX
          </button>
        )}
      </div>

      {/* Bottom helper text / error */}
      {hasError ? (
        <span className="text-xs text-red-500">{error}</span>
      ) : (
        bottomText && (
          <span className="text-xs text-gray-500">{bottomText}</span>
        )
      )}
    </div>
  );
}