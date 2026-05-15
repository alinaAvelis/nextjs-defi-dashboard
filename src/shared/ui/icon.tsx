import { ReactNode } from "react";
type IconProps = {
	icon?: ReactNode;
	size?: "small" | "medium" | "large";
};

const sizeStyles = {
	small: "w-6 h-6",
	medium: "w-10 h-10",
	large: "w-16 h-16",
};

export default function Icon({ icon, size = "medium" }: IconProps) {
	return (
		<span className={`bg-gray-500 rounded-full ${sizeStyles[size]}`}>
			{icon && icon}
		</span>
	);
}
