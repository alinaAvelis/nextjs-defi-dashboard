"use client";
import { useDisconnect } from "wagmi";
import Button from "@/shared/ui/button";

export default function DisconnectButton() {
	const disconnect = useDisconnect();

	const onDisconnect = () => {
		disconnect.mutate();
	};

	return (
		<Button variant="transparent" onClick={onDisconnect}>
			Disconnect
		</Button>
	);
}
