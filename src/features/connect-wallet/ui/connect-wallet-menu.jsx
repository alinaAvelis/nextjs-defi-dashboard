"use client";

import { useConnection, useEnsName } from "wagmi";
import { formatAddress } from "@/shared/utils/format-address";
import DropdownMenu from "@/shared/ui/dropdown-nemu";
import CopyButton from "@/shared/ui/copy-button";
import DisconnectButton from "./disconnect-button";
import ConnectWallet from "./connect-wallet";

export default function ConnectWalletMenu() {
	const { address, isConnected } = useConnection();
	const { data, error, status } = useEnsName({ address });
	console.log(data, error, status);

	const shortAddress = formatAddress(address);

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
