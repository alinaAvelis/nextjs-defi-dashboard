import {
	getTokenBalance,
	GetTokenParams,
} from "@/services/blockchain/read/get-token-balance";

export class ReadBalance {
	#loading = false;
	#balance: bigint = 0n;
	#error: Error | null = null;
	// ##tokenAddress: `0x${string}`;
	// ##userAddress: `0x${string}`;
	// constructor(tokenAddress: `0x${string}`, userAddress: `0x${string}`) {
	// 	this.tokenAddress = tokenAddress;
	// 	this.userAddress = userAddress;
	// }

	set loading(value: boolean) {
		this.#loading = value;
	}

	set error(value: Error | null) {
		this.#error = value;
	}

	set balance(value: bigint) {
		this.#balance = value;
	}

	async fetchBalance({ tokenAddress, userAddress }: GetTokenParams) {
		if (!Boolean(tokenAddress && userAddress)) {
			return;
		}
		try {
			this.loading = true;
			this.error = null;

			const result = await getTokenBalance({
				tokenAddress: tokenAddress,
				userAddress: userAddress,
			});

			if (result) {
				console.log("Fetched token balance:", result);
				this.balance = result;
			}
		} catch (err) {
			this.error =
				err instanceof Error
					? err
					: new Error("Failed to fetch token balance");
		} finally {
			this.loading = false;
		}
	}

	get balance() {
		console.log("Balance from balance getter:", this.#balance);
		return this.#balance;
	}
	get loading() {
		return this.#loading;
	}

	get error() {
		return this.#error;
	}
}
