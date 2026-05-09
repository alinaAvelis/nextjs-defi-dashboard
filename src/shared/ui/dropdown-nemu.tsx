import { ReactNode } from "react";

type DropdownMenuProps = {
  trigger: ReactNode;
  children: ReactNode;
};

export default function DropdownMenu({
  trigger,
  children,
}: DropdownMenuProps) {
  return (
    <details className="group relative inline-block">
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
          absolute right-0 z-50 mt-2 min-w-[180px]
          rounded-lg border border-gray-200 bg-white p-2 shadow-lg
          opacity-0 translate-y-1 scale-95
          transition-all duration-200
          group-open:opacity-100
          group-open:translate-y-0
          group-open:scale-100
        "
      >
        <div className="flex flex-col gap-1">
          {children}
        </div>
      </div>
    </details>
  );
}