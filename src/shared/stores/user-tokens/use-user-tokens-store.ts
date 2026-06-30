"use client";

import { create } from "zustand";
import { getUserBalances } from "@/services/blockchain/alchemy/get-user-balances";
import { TokenBalance } from "alchemy-sdk";
import { fromHex, Hex } from "viem";
import { getUserTokens } from "@/services/blockchain/alchemy/get-user-tokens";
import { parseAmount } from "@/shared/utils/parse-amount";
import { getTokensInfo } from "@/services/blockchain/read/get-token-info";
import { TokenAddressType, HexNumberType, TokenInfoType } from "@/entities/tokens/model";
import { UserWalletAddressType } from "@/entities/wallet/model/user-wallet";
import { formatAmount } from "@/shared/utils/format-amount";
import { getTokenIcon } from "@/services/requests/get-token-icon";

type TokenPriceType = {
	currency: string;
	value: string;
	lastUpdatedAt: string;
};

type AllAlchemyTokenInfoType = {
	address: UserWalletAddressType;
	network: string;
	tokenAddress: TokenAddressType;
	tokenBalance: HexNumberType;
	tokenMetadata: TokenInfoType;

	tokenPrices: TokenPriceType[];
};
type BalancesObjectType = {
	[key: TokenAddressType]: HexNumberType;
};

type UserTokenInfoType = {
	name: string;
	balance?: string | number;
	symbol: string;
	address: TokenAddressType;
	decimals: number;
	price: TokenPriceType | null;
	logo: string | null;
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

export const useUserTokensStore = create<UserTokensStore>((set) => ({
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

		const allTokensInfoFromAlchemy = await getUserTokens(userAddress);
		const allTokensInfo: AllAlchemyTokenInfoType[] =
			allTokensInfoFromAlchemy?.data?.tokens;
		if (allTokensInfo.length > 0) {
			try {
				allTokensInfo.forEach((item: AllAlchemyTokenInfoType) => {
					if (item.tokenAddress) {
						const formattedBalance = formatAmount(
							item.tokenBalance,
							item.tokenMetadata.decimals,
							true,
						);
						const logo = item.tokenMetadata.logo;
						// if(!logo) {
						// 	console.log("here")
						// 	 getTokenIcon({
						// 		...item.tokenMetadata,
						// 		address: item.tokenAddress
						// 	 }, 11155111).then(res => logo = res)
						// }
						const info = {
							name: item.tokenMetadata.name,
							balance: formattedBalance,
							symbol: item.tokenMetadata.symbol,
							address:
								item.tokenAddress.toLowerCase() as TokenAddressType,
							decimals: item.tokenMetadata.decimals,
							logo: logo,
							price:
								item.tokenPrices.length > 0
									? item.tokenPrices[0]
									: null,
						};
						newTokensObject[item.tokenAddress] = info;
						newTokensArray.push(info)
					}
				});
			} catch (error) {
				set({ loading: false });

				console.log(error);
				set({ error: "Unable to fetch the user's tokens" });
			}
		} else {
			const newBalancesObject: BalancesObjectType = {};
			const newTokensAddresses: TokensAddressesType = [];
			try {
				const balances = await getUserBalances(userAddress);
				// console.log(balances);

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

				set({ error: "Unable to fetch the user's tokens balance" });
			}

			try {
				const tokensInfoArray = await getTokensInfo(newTokensAddresses);

				tokensInfoArray.forEach((item, i) => {
					const tokenAddress =
						item?.address.toLowerCase() as TokenAddressType;
					const decimals = item?.decimals;
					const formattedBalance = formatAmount(
						newBalancesObject?.[tokenAddress],
						decimals,
						true,
					);
					const newInfo = {
						...item,
						logo: null,
						price: null,
						balance: formattedBalance || 0,
					};
					newTokensObject[tokenAddress] = newInfo;

					newTokensArray[i] = newInfo;
				});
			} catch (error) {
				set({ loading: false });

				console.log(error);

				set({ error: "Unable to fetch the user's tokens info" });
			}
		}

		set({
			// balancesObject: newBalancesObject,
			tokensArray: newTokensArray,
			tokensObject: newTokensObject,
			loading: false,
		});
	},
}));
