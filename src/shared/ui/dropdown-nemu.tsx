import React, { ReactNode, useEffect, useRef } from "react";

type DropdownMenuProps = {
	trigger: ReactNode;
	children: ReactNode;
};

export default function DropdownMenu({ trigger, children }: DropdownMenuProps) {
	const detailsRef = useRef<HTMLDetailsElement>(null);
	// close on outside click
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (
				detailsRef.current &&
				!detailsRef.current.contains(event.target as Node)
			) {
				detailsRef.current.removeAttribute("open");
			}
		}

		// close on ESC
		function handleEscape(event: KeyboardEvent) {
			if (event.key === "Escape") {
				detailsRef.current?.removeAttribute("open");
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		document.addEventListener("keydown", handleEscape);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);

			document.removeEventListener("keydown", handleEscape);
		};
	}, []);

	return (
		<details className="group relative inline-block" ref={detailsRef}>
			{/* Trigger */}
			<summary className="flex cursor-pointer list-none items-center gap-2 select-none">
				{trigger}

				{/* Arrow */}
				<span className="text-xs transition-transform duration-300 group-open:rotate-180">
					▼
				</span>
			</summary>

			{/* Dropdown content */}
			<div
				className="
          absolute right-0 z-50 mt-2 min-w-45
          rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-2 shadow-lg
          opacity-0 translate-y-1 scale-95
          transition-all duration-200
          group-open:opacity-100
          group-open:translate-y-0
          group-open:scale-100
        "
			>
				<div className="flex flex-col gap-1">{children}</div>
			</div>
		</details>
	);
}
