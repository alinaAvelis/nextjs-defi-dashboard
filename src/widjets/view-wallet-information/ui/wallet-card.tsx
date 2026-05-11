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
			<p className="text-lg font-semibold text-gray-900">{title}</p>
			<div>
				{icon && (
					<div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
						{icon}
					</div>
				)}
				<div>
					{subtitle && (
						<p className="text-sm text-gray-500">
							{subtitle}
						</p>
					)}

					{/* Description */}
					{description && (
						<p className="mt-2 text-sm text-gray-600">
							{description}
						</p>
					)}
				</div>
			</div>
		</Card>
	);
}
