"use client";

import { useCallback, useEffect, useState } from "react";

import {
	getTokenBalance,
	GetTokenParams,
} from "@/services/blockchain/read/get-token-balance";

type UseTokenBalanceParams = GetTokenParams;

export function useTokenBalance({
	tokenAddress,
	userAddress,
}: UseTokenBalanceParams) {
	const [balance, setBalance] = useState<bigint>(0n);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const fetchBalance = useCallback(
		async ({ tokenAddress, userAddress }: UseTokenBalanceParams) => {
			if (!Boolean(tokenAddress && userAddress)) {
				new Error(
					"Cannot fetch token balance: Missing tokenAddress or userAddress",
				);

				return;
			}
			try {
				setLoading(true);
				setError(null);

				const result = await getTokenBalance({
					tokenAddress,
					userAddress,
				});

				console.log("Fetched token balance:", result);

				setBalance(result);
			} catch (err) {
				setError(
					err instanceof Error
						? err
						: new Error("Failed to fetch token balance"),
				);
			} finally {
				setLoading(false);
			}
		},
		[],
	);

	useEffect(() => {
		(async () => {
			await fetchBalance({ tokenAddress, userAddress });
		})();
	}, [fetchBalance, tokenAddress, userAddress]);


	return {
		balance: balance,
		loading,
		error,
		refetchBalance: fetchBalance,
	};
}
