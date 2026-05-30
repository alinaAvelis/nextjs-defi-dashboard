import {alchemyClient} from "@/clients/alchemy-client";

export async function getUserBalances(
  userAddress: `0x${string}`
) {
  const balances =
    await alchemyClient.core.getTokenBalances(
      userAddress
    )

  return balances.tokenBalances
}