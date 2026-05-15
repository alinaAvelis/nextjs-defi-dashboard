export type UserWallet = {
	address: `0x${string}`;
	chainId?: number;
	shortAddress: string;
	isConnected: boolean;
};
