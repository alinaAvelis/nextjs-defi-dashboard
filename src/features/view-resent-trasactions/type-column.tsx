import { ReactNode } from "react";
import Icon from "@/shared/ui/icon";

type TypeColumnProps = {
	icon?: ReactNode;
	type: string;
	tsxHash: string;
};

export default function TypeColumn({ icon, type, tsxHash }: TypeColumnProps) {
	return (
		<div className="flex gap-2">
			{icon && <Icon icon={icon} />}
			<div>
				<p>{type}</p>
				<p>{tsxHash}</p>
			</div>
		</div>
	);
}
