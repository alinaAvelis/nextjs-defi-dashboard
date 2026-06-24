"use client";

import { useEffect } from "react";
import { useFetchBalance } from "@/shared/stores/user-tokens/selector";
import { useWallet } from "@/entities/wallet/hooks/use-wallet";

export function BalanceProvider({ children }: { children: React.ReactNode }) {
	const { address } = useWallet();
	const fetchBalances = useFetchBalance()

	useEffect(() => {
		if (address) {
			fetchBalances(address);
		}
	}, [address, fetchBalances]);

	return <>{children}</>;
}
