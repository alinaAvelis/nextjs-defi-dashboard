
import { sepolia, mainnet } from 'viem/chains'

export type Token = {
	symbol: string;
	name: string;
	contract: {
		[key: string]: `0x${string}`;
	};
};

type Tokens = {
	[key: string]: Token;
};

type TokensArray = Token[];

export const tokens: Tokens = {
	WETH: {
		symbol: "WETH",
		name: "Wrapped Ether",
		contract: {
			[sepolia.id]: "0x7b79995e5f793a07bc00c21412e50ecae098e7f9",
			[mainnet.id]: "0xC02aaA39b223FE8D0A0E5C4F27eAD9083C756Cc2",
		},
	},
	USDC: {
		symbol: "USDC",
		name: "USD Coin",	
		contract: {
			[sepolia.id]: "0x10279e6333f9d0EE103F4715b8aaEA75BE61464C",
			[mainnet.id]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
		}
	},
	
};

export const tokensArray: TokensArray = Object.values(tokens);
