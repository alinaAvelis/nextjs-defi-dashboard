import WalletCard from "./wallet-card";

export default function CurrentNetwork() {
	return (
		<WalletCard
			title="Current Network"
			subtitle="Sepolia"
			description="Testnet"
			icon={<span className="bg-gray-500 rounded-full w-10 h-10" />}
		/>
	);
}
