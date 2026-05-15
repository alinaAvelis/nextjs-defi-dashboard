"use client";

import { ReactNode, useState, useRef, useId } from "react";
import useCloseOnAction from "@/shared/hooks/use-close-on-action";
type Option = {
	value: string;
	content: ReactNode;
};

type CustomSelectProps = {
	label?: string;
	options: Option[];
	value?: string;
	placeholder?: string;
	onChange?: (value: string) => void;
};

export default function CustomSelect({
	label,
	options,
	value,
	placeholder = "Select an option",
	onChange,
}: CustomSelectProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [selected, setSelected] = useState(value || "");
	const [highlightedIndex, setHighlightedIndex] = useState(0);

	const buttonRef = useRef<HTMLButtonElement>(null);
	const listRef = useRef<HTMLUListElement>(null);
	const selectContainerRef = useRef<HTMLDivElement>(null);

	const selectedOption = options.find((o) => o.value === selected);

	const listboxId = useId();
	const labelId = useId();

	const closeSelect = () => {
		setIsOpen(false);
		buttonRef.current?.focus();
	};

	useCloseOnAction({
		ref: selectContainerRef,
		onClose: () => closeSelect(),
	});

	const handleSelect = (option: Option) => {
		setSelected(option.value);
		onChange?.(option.value);
		closeSelect();
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		switch (e.key) {
			case "ArrowDown":
				e.preventDefault();

				if (!isOpen) {
					setIsOpen(true);
				} else {
					setHighlightedIndex((prev) =>
						prev < options.length - 1 ? prev + 1 : 0,
					);
				}
				break;

			case "ArrowUp":
				e.preventDefault();

				if (isOpen) {
					setHighlightedIndex((prev) =>
						prev > 0 ? prev - 1 : options.length - 1,
					);
				}
				break;

			case "Enter":
			case " ":
				e.preventDefault();

				if (!isOpen) {
					setIsOpen(true);
				} else {
					handleSelect(options[highlightedIndex]);
				}
				break;

			case "Tab":
				setIsOpen(false);
				break;
		}
	};

	return (
		<div ref={selectContainerRef} className="relative w-72">
			{label && (
				<label id={labelId} className="mb-2 block text-sm font-medium">
					{label}
				</label>
			)}

			<button
				ref={buttonRef}
				type="button"
				aria-haspopup="listbox"
				aria-expanded={isOpen}
				aria-labelledby={labelId}
				aria-controls={listboxId}
				onClick={() => setIsOpen((prev) => !prev)}
				onKeyDown={handleKeyDown}
				className="flex w-full items-center justify-between rounded-xl border theme-border bg-white dark:bg-gray-950 px-4 py-3 text-left shadow-sm outline-none transition focus:border-blue-700 focus:ring-2 focus:ring-blue-700"
			>
				<span>
					{selectedOption ? selectedOption.content : placeholder}
				</span>

				<svg
					className={`h-4 w-4 transition-transform ${
						isOpen ? "rotate-180" : ""
					}`}
					fill="none"
					stroke="currentColor"
					strokeWidth={2}
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</button>

			{isOpen && (
				<ul
					ref={listRef}
					id={listboxId}
					role="listbox"
					tabIndex={-1}
					aria-labelledby={labelId}
					className="absolute z-10 mt-2 max-h-60 w-full overflow-auto rounded-xl border theme-border bg-white dark:bg-gray-950 shadow-lg"
				>
					{options.map((option, index) => {
						const isSelected = selected === option.value;
						const isHighlighted = highlightedIndex === index;

						return (
							<li
								key={option.value}
								role="option"
								aria-selected={isSelected}
								onMouseEnter={() => setHighlightedIndex(index)}
								onClick={() => handleSelect(option)}
								className={`cursor-pointer px-4 py-3 transition ${
									isHighlighted
										? "bg-black text-white"
										: "bg-white text-black"
								}`}
							>
								{option.content}
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
}
