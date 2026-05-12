"use client";

import { useWallet } from "@/entities/wallet/hooks/use-wallet";
import WalletCard from "./wallet-card";

export default function WalletConnection() {
	const { shortAddress, address, isConnected } = useWallet();
	const connectedText = isConnected ? "Connected" : "Not connected";
	return (
		<WalletCard
			title="Wallet"
			subtitle={shortAddress}
			description={connectedText}
		/>
	);
}
