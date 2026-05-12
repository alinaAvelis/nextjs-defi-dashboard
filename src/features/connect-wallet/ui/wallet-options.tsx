"use client";
import { useChainId, useConnect } from "wagmi";
import ConnectorButton from "./connector-button";

export default function WalletOptions() {
	const chainId = useChainId();
	const { connectors, connect } = useConnect();

	return (
		<div className="grid gap-5">
			{connectors.map((connector) => (
				<ConnectorButton
					key={connector.uid}
					connector={connector}
					onClick={() => connect({ connector, chainId })}
				/>
			))}
		</div>
	);
}
