
type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: ButtonVariant;
	disabled?: boolean;
};

const baseStyles = "px-4 py-2 rounded-md transition";

const variantStyles = {
	primary: "bg-slate-900 text-white hover:bg-slate-700",
	secondary: "bg-white border border-slate-500 text-black hover:bg-slay-300",
};

const disabledStyles = "bg-gray-400 text-gray-700 cursor-not-allowed";

export default function Button({
	children,
	onClick,
	variant = "primary",
	disabled = false,
}: ButtonProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={`${baseStyles} ${
				disabled ? disabledStyles : variantStyles[variant]
			}`}
		>
			{children}
		</button>
	);
}
