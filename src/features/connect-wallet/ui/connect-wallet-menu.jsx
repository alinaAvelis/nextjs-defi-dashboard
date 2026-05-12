"use client";

import DropdownMenu from "@/shared/ui/dropdown-nemu";
import CopyButton from "@/shared/ui/copy-button";
import DisconnectButton from "./disconnect-button";
import ConnectWallet from "./connect-wallet";
import { useWallet } from "@/entities/wallet/hooks/use-wallet";

export default function ConnectWalletMenu() {
	const { shortAddress, address, isConnected } = useWallet();

	// not connected
	if (!isConnected) {
		return <ConnectWallet />;
	}

	return (
		<DropdownMenu trigger={<span>{shortAddress}</span>}>
			<CopyButton textToCopy={address || ""} buttonText="Copy address" />

			<DisconnectButton />
		</DropdownMenu>
	);
}
