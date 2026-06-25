import { useUserTokensStore } from "../use-user-tokens-store";

export const useFetchTokens = () => {
	const fetchTokens = useUserTokensStore((state) => state.fetchTokens);

	return fetchTokens;
};
export const useFetchBalances = () => {
	const fetchBalances = useUserTokensStore((state) => state.fetchBalances);

	return fetchBalances;
};


// export const useGetBalancesObject = () => {
//     const balancesObject = useUserTokensStore((state) => state.balancesObject);

//     return balancesObject
// }

export const useGetUserTokensObject = () => {
	const tokensObject = useUserTokensStore((state) => state.tokensObject);

	return tokensObject;
};

export const useGetUserTokensArray = () => {
	const tokensArray = useUserTokensStore((state) => state.tokensArray);

	return tokensArray;
};

export const useGetUserTokensLoading = () => {
	const loading = useUserTokensStore((state) => state.loading);

	return loading;
};

export const useGetUserTokensError = () => {
	const error = useUserTokensStore((state) => state.error);

	return error;
};
