// components/WalletCard.tsx

import {ReactNode} from "react";
import Card from "@/shared/ui/card";

type WalletCardProps = {
	title: string;
	subtitle?: ReactNode;
	description?: ReactNode;
	icon?: ReactNode;
};

export default function WalletCard({
	title,
	subtitle,
	description,
	icon,
}: WalletCardProps) {
	return (
		<Card>
			<p>{title}</p>
			<div className="flex gap-3 items-center">
				{icon && icon}
				<div>
					{subtitle && (
						<p className="text-2xl leading-none font-semibold">
							{subtitle}
						</p>
					)}

					{/* Description */}
					{description && (
						<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
							{description}
						</p>
					)}
				</div>
			</div>
		</Card>
	);
}
