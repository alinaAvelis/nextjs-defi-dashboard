"use client";
import {readContract} from "@/shared/blockchain/read-contract";
import { tokenAbi } from "../abis/token-abi";

export type GetTokenParams = {
	tokenAddress: `0x${string}`;
	userAddress: `0x${string}`;
};

export async function getTokenBalance({
	tokenAddress,
	userAddress,
}: GetTokenParams) {

	return await readContract({
		address: tokenAddress,
		abi: tokenAbi,

		functionName: "balanceOf",
		args: [userAddress.toLowerCase() as `0x${string}`],
	}) as bigint;
}
