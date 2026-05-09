
type ButtonVariant = "primary" | "secondary" | "transparent";

type ButtonProps = {
	children: React.ReactNode;
	onClick?: () => void;
	variant?: ButtonVariant;
	disabled?: boolean;
};

const baseStyles = "px-4 py-2 rounded-md transition cursor-pointer";

const variantStyles = {
	primary: "bg-black dark:bg-white text-white dark:text-black hover:bg-slate-700",
	secondary: "bg-none border border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800",
	transparent: "bg-none hover:opacity-80"
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
