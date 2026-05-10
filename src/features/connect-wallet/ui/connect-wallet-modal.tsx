import Modal from "@/shared/ui/modal";
import  WalletOptions  from "./wallet-options";

type ConnectWalletModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ConnectWalletModal({
  isOpen,
  onClose,
}: ConnectWalletModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Connect Wallet"
    >
      <div className="space-y-3">
        <p className="text-sm text-gray-500">
          Connect Your Wallet
        </p>

        <WalletOptions/>
      </div>
    </Modal>
  );
}