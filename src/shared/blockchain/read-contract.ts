"use client";
import { publicClient } from "@/clients/wallet-client";
import { type Abi } from 'viem'

export type ReadContractParams = {
    address: `0x${string}`;
    abi: Abi;
    functionName: string;
    args: unknown[];
};

export async function readContract({
    address,
    abi,
    functionName,
    args,
}: ReadContractParams) {

    return await publicClient.readContract({
        address: address.toLowerCase() as `0x${string}`,
        abi: abi,

        functionName: functionName,
        args: args,
    });
}
