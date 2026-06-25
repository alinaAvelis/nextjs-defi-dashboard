import { fromHex, formatUnits } from "viem";

export const formatAmount = (
	amount: bigint | `0x${string}`,
	decimals: number,
	isFromHex?: boolean,
) => {

	let newAmount = amount;
	if (typeof amount === "string" && isFromHex) {
		newAmount = fromHex(amount, "bigint");
	}
	if (decimals) {
		return formatUnits(newAmount as bigint, decimals);
	}
};
