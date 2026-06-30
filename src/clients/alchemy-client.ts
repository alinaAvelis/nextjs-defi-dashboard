

import { Alchemy, Network } from 'alchemy-sdk'

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY
export const sepolia = Network.ETH_SEPOLIA

export const alchemyClient = new Alchemy({
  apiKey: apiKey,
  network: sepolia,
})

export const alchemyURL =`https://api.g.alchemy.com/data/v1/${apiKey}/`;