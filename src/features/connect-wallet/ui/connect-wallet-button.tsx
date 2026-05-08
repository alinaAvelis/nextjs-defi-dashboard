// "use client";

import Button from "@/shared/ui/button";

type ConnectWalletButtonProps = {
  onClick?: () => void;
};

export default function ConnectWalletButton({
  onClick,
}: ConnectWalletButtonProps) {
  return (
    <Button
      variant="secondary"
      onClick={onClick}
    >
      Connect Wallet
    </Button>
  );
}