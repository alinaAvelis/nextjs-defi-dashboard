import { useEffect, useState } from "react";

export function useConnector(connector: {
  getProvider: () => Promise<unknown>;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const provider = await connector.getProvider();
      setReady(!!provider);
    })();
  }, [connector]);

  return { ready };
}