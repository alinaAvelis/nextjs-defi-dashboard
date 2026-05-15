"use client";

import { useReadContract } from "wagmi";
import { tokenAbi } from "@/services/blockchain/abis/token-abi";

type GetAllowanceParams = {
	tokenAddress: `0x${string}`;
	spender: `0x${string}`;
	amount: bigint;
};

export function useGetAllowance({
	tokenAddress,
	spender,
	amount,
}: GetAllowanceParams) {
	return useReadContract({
		abi: tokenAbi,
		address: tokenAddress,
		functionName: "allowance",

		args: [spender, amount],
	});
}
