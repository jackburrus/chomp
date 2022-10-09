import { useContractEvent, useContractWrite } from 'wagmi';
import CheckIcon from './icons/CheckIcon';
import contracts from '@/contracts/hardhat_contracts.json';
import { NETWORK_ID } from '@/config';
import { useRouter } from 'next/router';
export default function ViewReceipt({ contract }: { contract: string }) {
	const router = useRouter();
	const chainId = Number(NETWORK_ID);
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;
	const { write: mintNFT } = useContractWrite({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'mintAReceipt',
	});

	useContractEvent({
		addressOrName: contract as string,
		contractInterface: vendorABI,
		eventName: 'ReceiptMinted',
		listener: (event) => {
			console.log(event, 'receipt event');
			router.push(`/receipt/${contract}/${event[0].toString()}`);
		},
	});

	return (
		<div className="flex flex-col font-SFPro_Rounded_Bold items-center justify-center mt-10 ">
			<CheckIcon />
			<span className="mt-2">Thank you for your purchase.</span>
			<button
				disabled={!mintNFT}
				onClick={() => mintNFT?.()}
				className="mt-4 ml-2 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded-md  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:scale-105  active:opacity-70 md:text-base"
			>
				View Receipt
			</button>
		</div>
	);
}
