"use client";

import { useEffect, useRef, useState } from "react";
import ConnectWalletButton from "./connect-wallet-button";
import DisconnectButton from "./disconnect-button";
import { formatAddress } from "@/shared/utils/format-address";
import DropdownMenu from "@/shared/ui/dropdown-nemu";
import CopyButton from "@/shared/ui/copy-button";
import { useConnection, useEnsName } from "wagmi";
import ConnectWalletModal from "./connect-wallet-modal";

// type ConnectWalletButtonProps = {
// 	isConnected: boolean;
// 	address?: string;

// 	onConnect?: () => void;
// 	onDisconnect?: () => void;
// };

export default function ConnectWal() {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const { address, isConnected } = useConnection();
	const { data, error, status } = useEnsName({ address });
	console.log(data, error, status);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// // close dropdown outside click
	// useEffect(() => {
	// 	function handleClickOutside(event: MouseEvent) {
	// 		if (
	// 			dropdownRef.current &&
	// 			!dropdownRef.current.contains(event.target as Node)
	// 		) {
	// 			setOpen(false);
	// 		}
	// 	}

	// 	document.addEventListener("mousedown", handleClickOutside);

	// 	return () => {
	// 		document.removeEventListener("mousedown", handleClickOutside);
	// 	};
	// }, []);

	const shortAddress = formatAddress(address);

	function openWalletsModal() {
		setIsModalOpen(true)
		alert("open")
	}

	function closeWalletsModal() {
		setIsModalOpen(false)
	}
	// not connected
	if (!isConnected) {
		return (
			<>
				<ConnectWalletButton onClick={openWalletsModal} />

				<ConnectWalletModal isOpen={isModalOpen} onClose={closeWalletsModal}/>
			</>
		);
	}

	return (
		<>
			<div className="relative inline-block" ref={dropdownRef}>
				{/* Wallet button */}
				<DropdownMenu trigger={<span>{shortAddress}</span>}>
					<CopyButton
						textToCopy={address || ""}
						buttonText="Copy address"
					/>

					<DisconnectButton />
				</DropdownMenu>
			</div>

			
		</>
	);
}
