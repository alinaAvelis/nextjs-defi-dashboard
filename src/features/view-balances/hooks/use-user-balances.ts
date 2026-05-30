"use client";

import { useEffect, useState } from "react";
import { getUserBalances } from "@/services/blockchain/alchemy/get-user-balances";
import { TokenBalance } from "alchemy-sdk";

export function useUserBalances({
	userAddress,
}: {
	userAddress: `0x${string}`;
}) {
	const [balances, setBalances] = useState<TokenBalance[]>([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);
	const fetchBalances = async (userAddress: `0x${string}`) => {
		if (!Boolean(userAddress)) {
			setError(
				new Error(
					"Cannot fetch token balance: Missing tokenAddress or userAddress",
				),
			);

			return;
		}
		setLoading(true);

		try {
			const balances = await getUserBalances(userAddress);

			setBalances(balances);

			setLoading(false);
		} catch (error) {
			const err =
				error instanceof Error
					? error
					: new Error("Failed to fetch token balance");
			setLoading(false);
			setError(err);
		}
	};

	useEffect(() => {
		(async () => {
			await fetchBalances(userAddress);
		})();
	}, [userAddress]);

	return {
		balance: balances,
		loading,
		error,
		refetchBalance: fetchBalances,
	};
}
