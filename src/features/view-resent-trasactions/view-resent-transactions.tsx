import { TTableRowCols } from "@/shared/ui/table/types";
import Card from "@/shared/ui/card";
import Table from "@/shared/ui/table/table";
import StatusColumn from "./status-column";
import TypeColumn from "./type-column";

export default function ViewResentTransactions() {
	return (
		<Card>
			<h2>Latest Transactions</h2>

			<Table rows={mockRows} />
		</Card>
	);
}

const mockRows: TTableRowCols[] = [
	[
		{
			className: "",
			content: (
				<TypeColumn
					icon={undefined}
					type="Send"
					tsxHash="0x5b5d...5356"
				/>
			),
		},

		{
			className: "",
			content: "0.10" + " ETH",
		},
		{
			className: "",
			content: <StatusColumn status="confirmed" tsxTime="1 hour ago" />,
		},
	],
	[
		{
			className: "",
			content: (
				<TypeColumn
					icon={undefined}
					type="Receive"
					tsxHash="0x5b5d...5356"
				/>
			),
		},

		{
			className: "",
			content: "1" + " ETH",
		},
		{
			className: "",
			content: <StatusColumn status="failed" tsxTime="1 hour ago" />,
		},
	],
	[
		{
			className: "",
			content: (
				<TypeColumn
					icon={undefined}
					type="Send"
					tsxHash="0x5b5d...5356"
				/>
			),
		},

		{
			className: "",
			content: "1.23" + " ETH",
		},
		{
			className: "",
			content: <StatusColumn status="pending" tsxTime="1 second ago" />,
		},
	],
];
