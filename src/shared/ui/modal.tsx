"use client";

import { ReactNode, useRef } from "react";
import useCloseOnAction from "@/shared/hooks/use-close-on-action";

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
	const modalRef = useRef<HTMLDivElement | null>(null);

	// close on outside click and on esc key press
	useCloseOnAction({
		ref: modalRef,
		onClose,
	});

	if (!isOpen) return null;

	return (
		<div
			ref={modalRef}
			className="fixed inset-0 z-50 flex items-center justify-center "
		>
			{/* Backdrop */}
			<div className="absolute inset-0 bg-shadow-gray-700/30 dark:bg-shadow-gray-300/30 backdrop-blur-xl" onClick={onClose} />

			{/* Modal */}
			<div className="relative z-10 w-full max-w-lg rounded-lg bg-white dark:bg-black p-6 mx-4 sm:mx-0 box-shadow">
				<button
					onClick={onClose}
					className="absolute right-3 top-3 rounded-md p-1 transition cursor-pointer hover:opacity-80"
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
