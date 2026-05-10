"use client";
import Link from "next/link";
import { ReactNode } from "react";

type NavLinkProps = {
  href: string;
  text: string;
  icon?: ReactNode;
  active?: boolean;
  onClick?: () => void;
};

export default function NavLink({
  href,
  text,
  icon,
  active = false,
  onClick,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`
        flex items-center gap-3 rounded-md px-3 py-2 transition
        ${
          active
            ? "bg-blue-600 "
            : " hover:bg-gray-100 dark:hover:bg-slate-800 "
        }
      `}
    >
      {icon && <span>{icon}</span>}

      <span>{text}</span>
    </Link>
  );
}