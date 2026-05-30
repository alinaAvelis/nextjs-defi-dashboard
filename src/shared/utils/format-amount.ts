import { fromHex, formatUnits } from "viem";
import { getTokenDecimals } from "@/services/blockchain/read/get-token-decimals";

export const formatAmount = async (
	tokenAddress: `0x${string}`,
	amount: bigint | `0x${string}`,
	isFromHex?: boolean,
) => {
	const decimals = (await getTokenDecimals({ tokenAddress })) as number;

	let newAmount = amount;
	if (typeof amount === "string" && isFromHex) {
		newAmount = fromHex(amount, "bigint");
	}
	if (decimals) {
		return formatUnits(newAmount as bigint, decimals);
	}
};
