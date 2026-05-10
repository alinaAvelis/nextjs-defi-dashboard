import CurrentNetwork from "./current-network";
import TotalBalance from "./total-balance";
import WalletConnection from "./wallet-connection";

export default function WalletInformation() {
	return (
		<div className="grid grid-cols-3 gap-5">
			<TotalBalance />
			<WalletConnection />
			<CurrentNetwork />
		</div>
	);
}
