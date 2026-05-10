"use client";

import { useConnection } from "wagmi";
import { formatAddress } from "@/shared/utils/format-address";

import WalletCard from "./wallet-card";

export default function WalletConnection() {
	const { address, isConnected } = useConnection();
	const shortAddress = formatAddress(address);
	const connectedText = isConnected ? "Connected" : "Not connected";
	return (
		<WalletCard
			title="Wallet"
			subtitle={shortAddress}
			description={connectedText}
		/>
	);
}
