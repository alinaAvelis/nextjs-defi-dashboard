"use client";

import { create } from "zustand";
import { fetchTokenList, UniswapTokenListType } from "@/services/requests/fetch-uniswap-tokens";
type UniswapTokenStore = {
    allChainsTokensList: UniswapTokenListType,
    loading: boolean,
    error: string | null,
    fetchUniswapTokensList: () => void
};
export const useUniswapTokensStore = create<UniswapTokenStore>((set) => ({
	allChainsTokensList: [],

	loading: false,
	error: null,

	fetchUniswapTokensList: async () => {
		set({ loading: true });
		try {
			const tokens = await fetchTokenList();
			set({
				allChainsTokensList: tokens,
				loading: false,
			});
		} catch (error) {
			set({ loading: false });
			console.log(error);
			set({ error: "Unable to fetch uniswap tokens list" });
		}
	},
}));
