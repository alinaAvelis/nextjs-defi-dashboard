"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

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

	const canFetch = useMemo(() => {
		return Boolean(tokenAddress && userAddress);
	}, [tokenAddress, userAddress]);

	const fetchBalance = useCallback(
		async () => {
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
		[userAddress, tokenAddress],
	);

	useEffect(() => {
		if (canFetch) {
			(async () => {
				await fetchBalance();
			})();
		}
	}, [fetchBalance, canFetch,]);

	// useEffect(() => {
	// 	if (!refreshInterval || !canFetch) {
	// 		return;
	// 	}

	// 	const interval = setInterval(() => {
	// 		fetchBalance();
	// 	}, refreshInterval);

	// 	return () => clearInterval(interval);
	// }, [refreshInterval, canFetch, fetchBalance]);

	return {
		balance: balance,
		loading,
		error,
		refetch: fetchBalance,
	};
}
