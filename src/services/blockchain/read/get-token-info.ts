import { publicClient } from "@/clients/wallet-client";
import { tokenAbi } from "../abis/token-abi";

export async function getTokensInfo(addresses: `0x${string}`[]) {
  const contracts = addresses.flatMap((address) => [
    {
      address,
      abi: tokenAbi,
      functionName: 'name',
    },
    {
      address,
      abi: tokenAbi,
      functionName: 'symbol',
    },
    {
      address,
      abi: tokenAbi,
      functionName: 'decimals',
    },
  ])

  const results = await publicClient.multicall({
    contracts,
  })

  return addresses.map((address, index) => ({
    address,
    name: results[index * 3]?.result as string,
    symbol: results[index * 3 + 1]?.result as string,
    decimals: results[index * 3 + 2]?.result as number,
  }))
}