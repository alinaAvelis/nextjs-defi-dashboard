import { TTableRowCols } from "@/shared/ui/table/types";
import Card from "@/shared/ui/card";
import Table from "@/shared/ui/table/table";
import Asset from "@/shared/ui/asset";
import Image from "next/image";
import { useGetUserTokensArray } from "@/shared/stores/user-tokens/selector";
import { useMemo } from "react";

export default function ViewBalances() {
	const tokensArray = useGetUserTokensArray();
	// console.log(tokensArray)

	const rows = useMemo(() => {
		return tokensArray.map((item) => [
			{
				className: "",
				content: (
					<Asset
						name={item?.symbol}
						icon={
							item?.logo &&
							<Image
								src={item?.logo}
								alt={`${item?.name} logo`}
								width={20}
								height={20}
							/>
						}
						description={item?.name}
					/>
				),
			},

			{
				className: "",
				content: item?.balance + ` ${item?.symbol}`,
			},
			{
				className: "",
				content: "$0",
			},
		]);
	}, [tokensArray]);
	return (
		<Card>
			<h2>Token Balances</h2>

			<Table rows={rows} />
		</Card>
	);
}
