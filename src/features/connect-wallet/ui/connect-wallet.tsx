"use client";

import { useEffect, useRef, useState } from "react";
import ConnectWalletButton from "./connect-wallet-button";
import DisconnectButton from "./disconnect-button";

type ConnectWalletButtonProps = {
  isConnected: boolean;
  address?: string;

  onConnect?: () => void;
  onDisconnect?: () => void;
};

export default function ConnectWallet({
  isConnected,
  address,
  onConnect,
  onDisconnect,
}: ConnectWalletButtonProps) {
  const [open, setOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // close dropdown outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(
          event.target as Node
        )
      ) {
        setOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const shortAddress = address
    ? `${address.slice(0, 6)}...${address.slice(-4)}`
    : "";

  // not connected
  if (!isConnected) {
    return (
      <ConnectWalletButton />
    );
  }

  return (
    <div
      className="relative inline-block"
      ref={dropdownRef}
    >
      {/* Wallet button */}
      {/* <Button
        variant="secondary"
        onClick={() => setOpen(!open)}
      >
        {shortAddress}
      </Button> */}

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 rounded-lg border border-gray-200 bg-white p-2 shadow-lg">
          <button
            onClick={() => {
              navigator.clipboard.writeText(
                address || ""
              );

              setOpen(false);
            }}
            className="w-full rounded-md px-3 py-2 text-left hover:bg-gray-100"
          >
            Copy Address
          </button>

          <DisconnectButton />
        </div>
      )}
    </div>
  );
}