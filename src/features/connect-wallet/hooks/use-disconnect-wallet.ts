"use client";
import { useDisconnect } from "wagmi";

export default function useDisconnectWallet() {
	const disconnect = useDisconnect();

	const onDisconnect = () => {
		disconnect.mutate();
	};

	return {onDisconnect};
}
