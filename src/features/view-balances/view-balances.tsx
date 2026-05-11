import { TTableRowCols } from "@/shared/ui/table/types";
import Card from "@/shared/ui/card";
import Table from "@/shared/ui/table/table";
import Asset from "@/shared/ui/asset";

export default function ViewBalances() {
	return (
		<Card>
			<h2>Token Balances</h2>

			<Table rows={mockRows} />
		</Card>
	);
}

const mockRows: TTableRowCols[] = [
	[
		{
			className: "",
			content: <Asset name="ETH" description="Ethereum" />,
		},

		{
			className: "",
			content: "1.2345" + " ETH",
		},
		{
			className: "",
			content: "$2,345.67",
		},
	],
];
