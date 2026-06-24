import { useBalancesStore } from "@/shared/stores/user-tokens/use-balances-store";

export const useFetchBalance = () => {
    const fetchBalances = useBalancesStore((state) => state.fetchBalances);

    return fetchBalances
}

export const useGetBalancesObject = () => {
    const balancesObject = useBalancesStore((state) => state.balancesObject);

    return balancesObject
}