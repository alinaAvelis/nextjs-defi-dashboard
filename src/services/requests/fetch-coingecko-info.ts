
import { TokenInfoType } from "@/entities/tokens/model";
interface platform   {
    id: string,
    name: string,
    chain_identifier: number
  }

  export type CoingeckoPlatformsType = platform[];

// 1. Get all supported platforms
export async function getPlatforms() {
	const res = await fetch("https://api.coingecko.com/api/v3/asset_platforms");
	if (!res.ok) throw new Error("Failed to fetch platforms");
	return await res.json();
}

// 2. Get token data by contract
async function getTokenByContract(platform: platform, contractAddress: TokenInfoType) {
	const url = `https://api.coingecko.com/api/v3/coins/${platform}/contract/${contractAddress}`;

	const res = await fetch(url);
	if (!res.ok) throw new Error(`Token not found: ${res.status}`);

	return await res.json();
}

// 3. Extract token image
async function getTokenImage(platform: platform, contractAddress: TokenInfoType) {
	const token = await getTokenByContract(platform, contractAddress);

	return {
		name: token.name,
		symbol: token.symbol,
		image: token.image?.large || token.image?.small || token.image?.thumb,
	};
}


// 4. Example usage
export const getCoingeckoImage = async (
	chainId: number,
	tokenAddress: `0x${string}`,
) => {
	// optional: list platforms
	const platforms = await getPlatforms();
	let image = null;
	  console.log("Available platforms:", platforms.map(p => p.id));

	const currentPlatform = platforms?.find(
		(item: platform) => item.chain_identifier === chainId,
	)?.id;

    console.log(currentPlatform)

	// example token (USDC on Ethereum)

	if (currentPlatform) {
		image = await getTokenImage(currentPlatform, tokenAddress);
	}

    return image
};