"use client";

import { alchemyURL, sepolia } from "@/clients/alchemy-client";

export async function getUserTokens(
	userAddress: `0x${string}`,
	networkName: string = sepolia,
) {

    const options = {
  method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify({
    addresses: [
      {
        address: userAddress,
        networks: [networkName]
      }
    ],
    withMetadata: true,
    withPrices: true,
    includeNativeTokens: true,
    includeErc20Tokens: true
  })
};
	const res = await fetch(`${alchemyURL}/assets/tokens/by-address`, options);

	const data = await res.json();
	console.log(data);

	return data;
}
