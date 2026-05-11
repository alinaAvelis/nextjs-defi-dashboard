"use client";
import { useState } from "react";

import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";
import Selector from "@/shared/ui/selector";
import Asset from "@/shared/ui/asset";
import Card from "@/shared/ui/card";

type TokenOption = {
	label: string;
	value: string;
	symbol: string;
	balance: string;
	icon?: string;
};

const TOKENS: TokenOption[] = [
	{
		label: "Ethereum",
		value: "eth",
		symbol: "ETH",
		balance: "1.245",
	},
	{
		label: "USD Coin",
		value: "usdc",
		symbol: "USDC",
		balance: "542.10",
	},
	{
		label: "Tether",
		value: "usdt",
		symbol: "USDT",
		balance: "1200.00",
	},
];

export default function SendTransactionForm() {
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState("");
	const [selectedToken, setSelectedToken] = useState<TokenOption>(TOKENS[0]);

	return (
		<Card>
			<form>
                	{/* Token selector */}
				<div className="flex flex-col gap-2">
					<label className="text-sm font-medium text-gray-700">
						Select Token
					</label>

					<Selector
						value={selectedToken.value}
						//   onChange={(value: string) => {
						//     const token = TOKENS.find((t) => t.value === value);

						//     if (token) {
						//       setSelectedToken(token);
						//     }
						//   }}
						options={TOKENS.map((token) => ({
							label: token.label,
							value: token.value,
						}))}
					/>

					{/* Selected asset preview */}
					{/* <div className="rounded-lg border border-slate-200 p-3">
						<Asset
							description={selectedToken.label}
							name={selectedToken.symbol}
							// balance={selectedToken.balance}
							// image={selectedToken.icon}
						/>
					</div> */}
				</div>
				{/* Recipient */}
				<Input
					label="Recipient"
					placeholder="0x..."
					value={recipient}
					onChange={(e) => setRecipient(e.target.value)}
					required
				/>

			

				{/* Amount */}
				<Input
					label="Amount"
					type="number"
					placeholder="0.00"
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					showMaxButton
					onMaxClick={() => setAmount(selectedToken.balance)}
					bottomText={`Available balance: ${selectedToken.balance} ${selectedToken.symbol}`}
					required
				/>

				{/* Submit */}
				<Button type="submit" variant="primary">
					Send Transaction
				</Button>
			</form>
			<p className="text-center text-xs text-slate-500">
				You will be asked to confirm this transaction in your wallet
				before it is submitted to the blockchain.
			</p>
		</Card>
	);
}
