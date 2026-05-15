import { parseUnits } from "viem";

type ParseAmountParams = {
	amount: string;
	decimals?: number;
};

export function parseAmount({ amount, decimals = 18 }: ParseAmountParams) {
	return parseUnits(amount, decimals);
}
