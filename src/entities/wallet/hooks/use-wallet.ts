// entities/wallet/hooks/use-wallet.ts

"use client";

import { useConnection} from "wagmi";
import { UserWallet } from "../model/user-wallet";
import { zeroAddress } from "viem";
import { formatAddress } from "@/shared/utils/format-address";

export function useWallet() {
	const { address, isConnected } = useConnection();

	const userAddress = address || zeroAddress ;

	const shortAddress = formatAddress(userAddress);

	const isUserAddressExist = address && address !== zeroAddress ? true : false;

	// const chainId = useChainId();

	const userWallet: UserWallet = {
		address: userAddress ,
		shortAddress,
		// chainId,
		isConnected,
		isUserAddressExist
	};

	return userWallet;
}
