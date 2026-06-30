"use client";
import { useState } from "react";
import { useChainId, useConnect, useReadContract } from "wagmi";
import Input from "@/shared/ui/input";
import Button from "@/shared/ui/button";
import Selector from "@/shared/ui/selector";
import Asset from "@/shared/ui/asset";
import Card from "@/shared/ui/card";
import { tokensArray, Token } from "@/shared/config/tokens-contracts";
import { useTokenBalance } from "@/features/send-token/hooks/use-token-balance";
import { useGetAllowance } from "../hooks/use-get-allowance";
import { parseAmount } from "@/shared/utils/parse-amount";
import { useApproveToken } from "../hooks/use-approve-token";
import { useTransferToken } from "../hooks/use-transfer-token";
import { useWallet } from "@/entities/wallet/hooks/use-wallet";
import { erc20Abi } from "viem";
import { config } from "@/providers/wagmi/config";
import { useGetUserTokensObject } from "@/shared/stores/user-tokens/selector";

type TokenOption = {
	label: string;
	value: string;
	symbol: string;
	balance: string;
	icon?: string;
};

export default function SendTransactionForm() {
	const tokensObject = useGetUserTokensObject()

	const { shortAddress, address, isConnected } = useWallet();
	const chainId = useChainId();
	const [recipient, setRecipient] = useState("");
	const [amount, setAmount] = useState<string>("0");
	const [selectedTokenSymbol, setSelectedTokenSymbol] = useState<string>(
		tokensArray[0].symbol,
	);

	const selectedToken = tokensArray.find(
		(token) => token.symbol === selectedTokenSymbol,
	) as Token;

	const { balance, refetchBalance } = useTokenBalance({
		tokenAddress: selectedToken.contract[chainId],
		userAddress: address,
	});

	const tokenBalance = String(balance);
	const options = tokensArray.map((token) => ({
		content: (
			<Asset
				description={token.name}
				name={token.symbol}
				// balance={selectedToken.balance}
				// image={selectedToken.icon}
			/>
		),
		value: token.symbol,
	}));

	return (
		<Card>
			<form>
				{/* Token selector */}
				<div className="flex flex-col gap-2">
					<label className="text-sm font-medium text-gray-700">
						Select Token
					</label>

					<Selector
						value={selectedToken.symbol}
						onChange={(value: string) => {
							setSelectedTokenSymbol(value);
							refetchBalance({
								tokenAddress: selectedToken.contract[chainId],
								userAddress: address,
							});
						}}
						options={options}
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
					onMaxClick={() => setAmount(tokenBalance)}
					bottomText={`Available balance: ${balance} ${selectedToken.symbol}`}
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
