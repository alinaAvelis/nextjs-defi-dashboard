"use client";

import { useWriteContract } from "wagmi";
import { tokenAbi } from "@/services/blockchain/abis/token-abi";
import { parseUnits } from "viem";

type TransferTokenParams = {
	address: `0x${string}`;
	to: `0x${string}`;
	amount: string;
};

export function useTransferToken() {
	const { mutateAsync, isError, isIdle, isPending, isSuccess } =
		useWriteContract();

	async function transferToken({ address, to, amount }: TransferTokenParams) {
		return mutateAsync({
			address,
			abi: tokenAbi,
			functionName: "transfer",
			args: [to, parseUnits(amount, 18)],
		});
	}

	return {
		transferToken,
		isPending,
		isError,
		isIdle,
		isSuccess,
	};
}
