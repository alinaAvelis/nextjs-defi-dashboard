import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID;

export const config = createConfig({
	chains: [mainnet, sepolia],
	connectors: [walletConnect({ projectId }), metaMask()],
	ssr: true,
	transports: {
		[mainnet.id]: http(),
		[sepolia.id]: http(),
	},
});
