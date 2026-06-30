
export interface TokenListToken {
	chainId: number;
	address: string;
	symbol: string;
	name: string;
	decimals: number;
	logoURI?: string;
}

export type UniswapTokenListType = TokenListToken[]

export interface TokenList {
	name: string;
	tokens: UniswapTokenListType;
}


export async function fetchTokenList(): Promise<UniswapTokenListType> {
	const response = await fetch("https://tokens.uniswap.org");

	if (!response.ok) {
		throw new Error("Failed to fetch token list");
	}

	const data: TokenList = await response.json();

	return data.tokens;
}