"use client";

// import { walletClient } from "../clients/wallet-client";

import { tokenAbi } from "../abis/token-abi";

type SendTokenParams = {
	tokenAddress: `0x${string}`;
	to: `0x${string}`;
	amount: bigint;
	account: `0x${string}`;
};

export async function sendToken({ tokenAddress, to, amount, account }: SendTokenParams) {
	// return walletClient.writeContract({
	// 	address: tokenAddress,

	// 	abi: tokenAbi,

	// 	functionName: "transfer",

	// 	args: [to, amount],

	// 	account,
	// });
}
