"use client";
import { readContract } from "@/shared/blockchain/read-contract";
import { tokenAbi } from "../abis/token-abi";

export type GetTokenDecimalsParams = {
	tokenAddress: `0x${string}`;
};

export async function getTokenDecimals({ tokenAddress }: GetTokenDecimalsParams) {
	return await readContract({
		address: tokenAddress,
		abi: tokenAbi,
		functionName: "decimals",
		args: [],
	});
}
