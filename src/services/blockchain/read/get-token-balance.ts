"use client";
import { publicClient } from "../clients/wallet-client";
import { tokenAbi } from "../abis/token-abi";

export type GetTokenParams = {
	tokenAddress: `0x${string}`;
	userAddress: `0x${string}`;
};

export async function getTokenBalance({
	tokenAddress,
	userAddress,
}: GetTokenParams) {

	return await publicClient.readContract({
		address: tokenAddress.toLowerCase() as `0x${string}`,
		abi: tokenAbi,

		functionName: "balanceOf",
		args: [userAddress.toLowerCase() as `0x${string}`],
	});
}
