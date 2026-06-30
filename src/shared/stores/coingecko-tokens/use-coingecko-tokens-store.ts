"use client";

import { create } from "zustand";
import { fetchTokenList, UniswapTokenListType } from "@/services/requests/fetch-uniswap-tokens";
import {    CoingeckoPlatformsType, getPlatforms } from "@/services/requests/fetch-coingecko-info";
type CoingeckoTokensStore = {
    allChainsTokensList: UniswapTokenListType,
    platforms: CoingeckoPlatformsType;
    loading: boolean,
    error: string | null,
    fetchUniswapTokensList: () => void
};
export const useCoingeckoTokensStore = create<CoingeckoTokensStore>((set) => ({
    allChainsTokensList: [],
platforms: [],
    loading: false,
    error: null,

    fetchCoingeckoPlatforms: async () => {
        set({ loading: true });
        try {
           const platforms = await getPlatforms();
            set({
                platforms,
                loading: false,
            });
        } catch (error) {
            set({ loading: false });
            console.log(error);
            set({ error: "Unable to fetch uniswap tokens list" });
        }
    },

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
