"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "@/shared/ui/navigation-link";
import Button from "@/shared/ui/button";
import { navigation } from "@/shared/config/navigation";
import useLockBodyScroll from "@/shared/hooks/useLockBodyScroll";
import ConnectWalletMenu from "@/features/connect-wallet/ui/connect-wallet-menu";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	// stop page scroll when menu is open
	useLockBodyScroll(isOpen);

	const mobileNavigation = navigation.map((item) => (
		<NavLink
			key={item.href}
			href={item.href}
			onClick={() => setIsOpen(false)}
			text={item.label}
		/>
	));

	return (
		<header className="border-b theme-border">
			<div className="mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold">
					Logo
				</Link>

				{/* Desktop Menu */}
				<div>
					<ConnectWalletMenu />
				</div>

				{/* Mobile Button */}
				<button
					className="md:hidden cursor-pointer hover:opacity-80"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? "✕" : "☰"}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<div className="min-h-dvh fixed inset-0 top-16 z-40 bg-white dark:bg-black">
					<nav className="flex flex-col gap-4 border-t p-4 md:hidden">
						{mobileNavigation}
					</nav>
				</div>
			)}
		</header>
	);
}
