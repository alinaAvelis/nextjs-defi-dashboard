// "use client";

import Button from "@/shared/ui/button";

type ConnectWalletButtonProps = {
  onClick?: () => void;
};

export default function DisconnectButton({
  onClick,
}: ConnectWalletButtonProps) {
  return (
    <Button
      variant="transparent"
      onClick={onClick}
    >
      Disconnect
    </Button>
  );
}