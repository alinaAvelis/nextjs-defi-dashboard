"use client";

import { useWriteContract } from "wagmi";

import { tokenAbi } from "@/services/blockchain/abis/token-abi";

type ApproveTokenParams = {
	tokenAddress: `0x${string}`;
	spender: `0x${string}`;
	amount: bigint;
};

export function useApproveToken() {
	const { mutateAsync, isError, isIdle, isPending, isSuccess } =
		useWriteContract();

	async function approve({
		tokenAddress,
		spender,
		amount,
	}: ApproveTokenParams) {
		return mutateAsync({
			address: tokenAddress,

			abi: tokenAbi,

			functionName: "approve",

			args: [spender, amount],
		});
	}

	return {
		approve,
		isPending,
		isError,
		isIdle,
		isSuccess,
	};
}
