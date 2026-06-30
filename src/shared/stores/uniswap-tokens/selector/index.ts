import { useUniswapTokensStore } from "../use-uniswap-tokens-store";

export const useFetchUniswapTokensList = () => {
    const fetchUniswapTokensList = useUniswapTokensStore((state) => state.fetchUniswapTokensList);

    return fetchUniswapTokensList;
};

export const useGetChainsTokensList = () => {
    const allChainsTokensList = useUniswapTokensStore((state) => state.allChainsTokensList);

    return allChainsTokensList;
};