"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import NavLink from "@/shared/ui/navigation-link";
import { navigation } from "@/shared/config/navigation";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	// stop page scroll when menu is open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}

		return () => {
			document.body.style.overflow = "auto";
		};
	}, [isOpen]);

	const mobileNavigation = navigation.map((item) => (
		<NavLink
			key={item.href}
			href={item.href}
			onClick={() => setIsOpen(false)}
			text={item.label}
		/>
	));

	return (
		<header className="border-b  border-gray-300 dark:border-gray-700">
			<div className="mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold">
					Logo
				</Link>

				{/* Desktop Menu */}

				{/* Mobile Button */}
				<button
					className="md:hidden cursor-pointer"
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
