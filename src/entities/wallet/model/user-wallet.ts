
export type UserWalletAddressType = `0x${string}`

export type UserWallet = {
	address: UserWalletAddressType;
	chainId?: number;
	shortAddress: string;
	isConnected: boolean;
	isUserAddressExist: boolean
};
