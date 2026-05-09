"use client"
import * as React from 'react';
import { Connector, useChainId, useConnect } from 'wagmi';
import Button from "@/shared/ui/button";

export default function WalletOptions() {
  const chainId = useChainId();
  const { connectors, connect } = useConnect();

  return (
    <div className="grid gap-5" >
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

function ConnectorButton({
  connector,
  onClick,
}: {
  connector: Connector;
  onClick: () => void;
}) {
  const [ready, setReady] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector, setReady]);

  return (
    <Button
     
      disabled={!ready}
      onClick={onClick}
      variant="secondary"
    >
      {connector.name}
    </Button>
  );
}
