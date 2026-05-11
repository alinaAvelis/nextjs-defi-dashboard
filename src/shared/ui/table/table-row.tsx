
import { TTableRowCols, TTableRowCol } from "./types";


type TableRowProps = {
	data?: TTableRowCols;
};

export default function TableRow({ data = [] }: TableRowProps) {
	const columnCount = data.length;

	return (
		<div
			className={`grid items-center gap-2`}
			style={{
				gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
			}}
		>
			{data.map((item: TTableRowCol, index: number) => (
				<div key={index} className={item.className}>
					{item.content}
				</div>
			))}
		</div>
	);
}
