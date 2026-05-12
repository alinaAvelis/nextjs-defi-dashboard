"use client";

import Button from "@/shared/ui/button";
import useDisconnectWallet from "../hooks/use-disconnect-wallet";

export default function DisconnectButton() {
	const { onDisconnect } = useDisconnectWallet();

	return (
		<Button variant="transparent" onClick={onDisconnect}>
			Disconnect
		</Button>
	);
}
