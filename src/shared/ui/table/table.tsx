import TableRow from "./table-row";
import { TTableRowCols } from "./types";
type TableProps = {
	head?: TTableRowCols;
	rows?: Array<TTableRowCols>;
	className?: string;
};

export default function Table({
	head = [],
	rows = [],
	className = "",
}: TableProps) {
	return (
		<div className={`flex flex-col gap-2 ${className}`}>
			{head.length > 0 && <TableRow data={head} />}

			<div className="flex flex-col gap-2">
				{rows.map((row, index) => (
					<TableRow key={index} data={row} />
				))}
			</div>
		</div>
	);
}

// Example usage:
// <Table
// 	className="w-full"
// 	theadRowClassName="font-semibold border-b pb-2"
// 	bodyRowClassName="py-2 border-b"
// 	head={[
// 		{ content: "Name" },
// 		{ content: "Email" },
// 		{ content: "Status", className: "text-right" },
// 	]}
// 	rows={[
// 		[
// 			{ content: "John Doe" },
// 			{ content: "john@example.com", className: "text-gray-500" },
// 			{ content: "Active", className: "text-right text-green-600" },
// 		],
// 		[
// 			{ content: "Jane Smith" },
// 			{ content: "jane@example.com", className: "text-gray-500" },
// 			{ content: "Pending", className: "text-right text-yellow-600" },
// 		],
// 	]}
// />
