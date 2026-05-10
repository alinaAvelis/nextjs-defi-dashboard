"use client";

import { useState } from "react";
import ConnectWalletButton from "./connect-wallet-button";

import ConnectWalletModal from "./connect-wallet-modal";

export default function ConnectWal() {
	const [isModalOpen, setIsModalOpen] = useState(false);

	function openWalletsModal() {
		setIsModalOpen(true);
	}

	function closeWalletsModal() {
		setIsModalOpen(false);
	}

	return (
		<>
			<ConnectWalletButton onClick={openWalletsModal} />

			<ConnectWalletModal
				isOpen={isModalOpen}
				onClose={closeWalletsModal}
			/>
		</>
	);
}
