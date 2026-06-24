// src/stores/useCounterStore.ts

import { create } from "zustand";
import { getUserBalances } from "@/services/blockchain/alchemy/get-user-balances";
import { TokenBalance } from "alchemy-sdk";
import { fromHex } from "viem";
import { parseAmount } from "@/shared/utils/parse-amount";
import { getTokensInfo } from "@/services/blockchain/read/get-token-info";
type balancesObjectType = {
	[key: string]: number;
};

interface BalancesStore {
	balancesObject: balancesObjectType;
	loading: boolean;
	error: null | string;
	setBalancesObject: (balances: balancesObjectType) => void;
	fetchBalances: (userAddress: `0x${string}`) => void;
}

export const useBalancesStore = create<BalancesStore>((set) => ({
	balancesObject: {},
	loading: false,
	error: null,

	setBalancesObject: (balances) =>
		set({
			balancesObject: balances,
		}),

	fetchBalances: async (userAddress) => {
		set({ loading: true });

		try {
			const newBalancesObject: balancesObjectType = {};
			const tokensAdresses: `0x${string}`[] = [];
			const balances = await getUserBalances(userAddress);

			balances.forEach((item) => {
				let amount = 0;
				if (item.tokenBalance) {
					amount = fromHex(
						item?.tokenBalance as `0x${string}`,
						"number",
					);
				}
				tokensAdresses.push(item.contractAddress as `0x${string}`);
				newBalancesObject[item.contractAddress] = amount;
			});

			getTokensInfo(tokensAdresses).then(res => console.log(res));
			

			set({ balancesObject: newBalancesObject, loading: false });
		} catch (error) {
			set({ loading: false });

			console.log(error);

			set({ error: "Невозможно получить балансы" });
		}
	},
}));
