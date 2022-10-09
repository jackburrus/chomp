import { useRouter } from 'next/router';
import { useContractEvent, useContractRead } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { NETWORK_ID } from '@/config';
import Header from '@/components/Header';
import { useEffect } from 'react';
export default function ReceiptPage() {
	const router = useRouter();
	const chainId = Number(NETWORK_ID);
	const { contract, tokenId } = router.query;
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;

	const { data: nftData } = useContractRead({
		addressOrName: contract as string,
		contractInterface: vendorABI,
		functionName: 'tokenURI',
		args: [tokenId?.toString()],
	});

	const svg = new Blob([nftData], { type: 'image/svg+xml' });
	const url = URL.createObjectURL(svg);

	return (
		<>
			<Header />
			<div className="flex flex-1 border border-orange-500 items-center justify-center mt-10">
				<img src={url} />
			</div>
		</>
	);
}
