"use client";
import { publicClient } from "@/clients/wallet-client";
import { tokenAbi } from "../abis/token-abi";

export type GetTokenParams = {
	tokenAddress: `0x${string}`;
	userAddress: `0x${string}`;
};

// plan
// get balaces for dashborad
// add to local state
// get from there for balance in form

export async function getTokensBalances({
	tokensAddresses,
	userAddress,
}: {
	tokensAddresses: `0x${string}`[];
	userAddress: `0x${string}`;
}) {
	const contracts = tokensAddresses.map((tokenAddress: `0x${string}`) => ({
		address: tokenAddress.toLowerCase() as `0x${string}`,
		abi: tokenAbi,

		functionName: "balanceOf",
		args: [userAddress.toLowerCase() as `0x${string}`],
	}));

	return await publicClient.multicall({
		contracts,
	});
}
