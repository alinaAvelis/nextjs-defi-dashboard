export type TokenAddressType = `0x${string}`
export type HexNumberType = `0x${string}`

export type TokenInfoType = {
		decimals: number;
		logo: string | null;
		name: string;
		symbol: string;
        address?: TokenAddressType;
	}

export const USDBalanceCalculation = (tokenBalance: number, oraclePrice: number) => {
    return tokenBalance * oraclePrice
}