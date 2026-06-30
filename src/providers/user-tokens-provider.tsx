"use client";

import { useEffect } from "react";
import { useFetchTokens } from "@/shared/stores/user-tokens/selector";
import { useWallet } from "@/entities/wallet/hooks/use-wallet";


export function UserTokensProvider({ children }: { children: React.ReactNode }) {
	const { address, isUserAddressExist } = useWallet();
	const fetchTokens = useFetchTokens();
	

	useEffect(() => {
		if (isUserAddressExist) {
			fetchTokens(address)

		}
	}, [address, isUserAddressExist, fetchTokens]);

	return <>{children}</>;
}
