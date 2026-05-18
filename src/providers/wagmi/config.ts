import { createConfig, http } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { metaMask, walletConnect } from "wagmi/connectors";
import { createClient } from "viem";

const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "";

export const config = createConfig({
	chains: [ sepolia],
	syncConnectedChain: false,
	connectors: [walletConnect({ projectId }), metaMask()],
	ssr: true,

	client({ chain }) {
		return createClient({ chain, transport: http() });
	},
});
