import WalletCard from "./wallet-card";
import Icon from "@/shared/ui/icon";

export default function CurrentNetwork() {
	return (
		<WalletCard
			title="Current Network"
			subtitle="Sepolia"
			description="Testnet"
			icon={<Icon />}
		/>
	);
}
