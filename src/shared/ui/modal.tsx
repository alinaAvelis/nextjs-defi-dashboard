"use client";

import { ReactNode, useEffect } from "react";

type ModalProps = {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	children: ReactNode;
};

export default function Modal({
	isOpen,
	onClose,
	title,
	children,
}: ModalProps) {
	// close on ESC
	useEffect(() => {
		function handleKeyDown(e: KeyboardEvent) {
			if (e.key === "Escape") onClose();
		}

		if (isOpen) {
			document.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div className="absolute inset-0 bg-black/50" onClick={onClose} />

			{/* Modal */}
			<div className="relative z-10 w-full max-w-lg rounded-lg bg-white p-6 shadow-xl mx-4 sm:mx-0">
				<button
					onClick={onClose}
					className="absolute right-3 top-3 text-gray-500 hover:text-black hover:bg-gray-100 rounded-md p-1 transition"
					aria-label="Close modal"
				>
					✕
				</button>

				{title && (
					<h2 className="mb-4 text-lg font-semibold">{title}</h2>
				)}

				<div>{children}</div>
			</div>
		</div>
	);
}
