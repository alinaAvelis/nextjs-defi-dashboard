"use client";

import { useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { tokenAbi } from "@/services/blockchain/abis/token-abi";

type ApproveTokenParams = {
	tokenAddress: `0x${string}`;
	spender: `0x${string}`;
	amount: string;
};

export function useApproveToken() {
	const { mutateAsync, isError, isIdle, isPending, isSuccess } =
		useWriteContract();

	async function approve({ tokenAddress, spender, amount }: ApproveTokenParams) {
		return mutateAsync({
			address: tokenAddress,

			abi: tokenAbi,

			functionName: "approve",

			args: [spender, parseUnits(amount, 18)],
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
