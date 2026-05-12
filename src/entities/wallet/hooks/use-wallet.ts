// entities/wallet/hooks/use-wallet.ts

"use client";

import {
	useConnection,
	//   useChainId,
} from "wagmi";
import { UserWallet } from "../model/user-wallet";
import { zeroAddress } from "viem";
import { formatAddress } from "@/shared/utils/format-address";

export function useWallet() {
	const { address, isConnected } = useConnection();

	const userAddress = address || zeroAddress;

	const shortAddress = formatAddress(userAddress);

	//   const chainId = useChainId()

	const userWallet: UserWallet = {
		address: userAddress,
		shortAddress,
		// chainId,
		isConnected,
	};

	return userWallet;
}
