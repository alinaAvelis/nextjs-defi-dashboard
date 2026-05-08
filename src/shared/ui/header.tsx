"use client";

import { useState } from "react";
import Link from "next/link";
import NavLink from "@/shared/ui/navigation-link";
import { navigation } from "@/shared/config/navigation";

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);

	const mobileNavigation = navigation.map((item) => (
		<NavLink
			key={item.href}
			href={item.href}
			onClick={() => setIsOpen(false)}
			text={item.label}
		/>
	));

	return (
		<header className="border-b bg-white border-slate-500">
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
				{/* Logo */}
				<Link href="/" className="text-xl font-bold">
					Logo
				</Link>

				{/* Desktop Menu */}

				{/* Mobile Button */}
				<button
					className="md:hidden"
					onClick={() => setIsOpen(!isOpen)}
				>
					{isOpen ? "✕" : "☰"}
				</button>
			</div>

			{/* Mobile Menu */}
			{isOpen && (
				<nav className="flex flex-col gap-4 border-t p-4 md:hidden">
					{mobileNavigation}
				</nav>
			)}
		</header>
	);
}
