"use client";

import { create } from "zustand";
import { getUserBalances } from "@/services/blockchain/alchemy/get-user-balances";
import { TokenBalance } from "alchemy-sdk";
import { fromHex, Hex } from "viem";
import { parseAmount } from "@/shared/utils/parse-amount";
import { getTokensInfo } from "@/services/blockchain/read/get-token-info";
import { TokenAddressType, HexNumberType } from "@/entities/tokens/model";
import { UserWalletAddressType } from "@/entities/wallet/model/user-wallet";
import { formatAmount } from "@/shared/utils/format-amount";
type BalancesObjectType = {
	[key: TokenAddressType]: HexNumberType;
};

type UserTokenInfoType = {
	name: string;
	balance?: string | number;
	symbol: string;
	address: TokenAddressType;
	decimals: number;
};

type TokensAddressesType = Array<TokenAddressType>;
type UserTokensInfoType = Array<UserTokenInfoType>;
type UserTokensObjectType = {
	[key: TokenAddressType]: UserTokenInfoType;
};

interface UserTokensStore {
	// balancesObject: BalancesObjectType;
	tokensObject: UserTokensObjectType;
	tokensArray: UserTokensInfoType;
	// tokensAddresses: TokensAddressesType;
	loading: boolean;
	error: null | string;
	// setBalancesObject: (balances: BalancesObjectType) => void;
	fetchTokens: (userAddress: UserWalletAddressType) => void;
	// fetchBalances: (userAddress: UserWalletAddressType) => void;
	// setUserTokens: () => void;
}

export const useUserTokensStore = create<UserTokensStore>((set, get) => ({
	// balancesObject: {},
	tokensObject: {},
	tokensArray: [],
	// tokensAddresses: [],
	loading: false,
	error: null,

	fetchTokens: async (userAddress) => {
		set({ loading: true });
		const newTokensObject: UserTokensObjectType = {};
		const newTokensArray: UserTokensInfoType = [];

		const newBalancesObject: BalancesObjectType = {};
		const newTokensAddresses: TokensAddressesType = [];

		try {
			const balances = await getUserBalances(userAddress);
			console.log(balances);

			balances.forEach((item) => {
				const balance = item?.tokenBalance as HexNumberType;
				const tokenAddress =
					item?.contractAddress.toLowerCase() as TokenAddressType;

				newTokensAddresses.push(tokenAddress);
				newBalancesObject[tokenAddress] = balance;
			});
		} catch (error) {
			set({ loading: false });

			console.log(error);

			set({ error: "Невозможно получить балансы" });
		}

		try {
			const tokensInfoArray = await getTokensInfo(newTokensAddresses);

			tokensInfoArray.forEach((item, i) => {
				const tokenAddress =
					item?.address.toLowerCase() as TokenAddressType;
				const decimals = item?.decimals;
				const formattedBalance =  formatAmount(
							newBalancesObject?.[tokenAddress],
							decimals,
							true,
						)
				const newInfo = {
					...item,
					balance:
						formattedBalance || 0,
				};
				newTokensObject[tokenAddress] = newInfo;

				newTokensArray[i] = newInfo;
			});

			set({
				// balancesObject: newBalancesObject,
				tokensArray: newTokensArray,
				tokensObject: newTokensObject,
				loading: false,
			});
		} catch (error) {
			set({ loading: false });

			console.log(error);

			set({ error: "Невозможно получить токены" });
		}
	},
}));
