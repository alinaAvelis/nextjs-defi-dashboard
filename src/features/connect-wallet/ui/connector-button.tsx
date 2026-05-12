
import { Connector } from "wagmi";
import Button from "@/shared/ui/button";
import { useConnector } from "../hooks/use-connector";

export default function ConnectorButton({
	connector,
	onClick,
}: {
	connector: Connector;
	onClick: () => void;
}) {
	const { ready } = useConnector(connector);

	return (
		<Button disabled={!ready} onClick={onClick} variant="secondary">
			{connector.name}
		</Button>
	);
}
