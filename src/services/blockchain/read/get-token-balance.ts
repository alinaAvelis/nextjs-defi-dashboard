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
		address: tokenAddress,
		abi: tokenAbi,

		functionName: "balanceOf",
		args: [userAddress],
	});
}
