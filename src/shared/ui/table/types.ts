
import { ReactNode } from "react";

export type TTableRowCol = {
	className?: string;
	content: ReactNode;
};

export type TTableRowCols = Array<TTableRowCol>;