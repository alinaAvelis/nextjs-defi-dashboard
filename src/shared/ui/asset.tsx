import { ReactNode } from "react";
import Icon from "./icon";

type AssetProps = {
	icon?: ReactNode;
	name: string;
	description?: string;
};

export default function Asset({ icon, name, description }: AssetProps) {
	return (
		<div className="flex gap-3 items-center">
			<Icon icon={icon} />
			<div>
				<p>{name}</p>
				{description && <p>{description}</p>}
			</div>
		</div>
	);
}
