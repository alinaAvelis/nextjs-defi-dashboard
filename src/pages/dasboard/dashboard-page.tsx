"use client";
import WalletInformation from "@/widjets/view-wallet-information/ui/wallet-information";
import ViewBalances from "@/features/view-balances/ui/view-balances";
import ViewResentTransactions from "@/features/view-resent-trasactions/view-resent-transactions";

export default function DashboardPage() {
	return (
		<div className="flex flex-col gap-5">
			<WalletInformation />

			<div className="grid grid-cols-2 gap-5">
				<ViewBalances />
				<ViewResentTransactions />
			</div>
		</div>
	);
}
