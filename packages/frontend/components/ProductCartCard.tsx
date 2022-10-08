import { NETWORK_ID } from '@/config';
import contracts from '@/contracts/hardhat_contracts.json';
import { useEffect } from 'react';
import { useContractRead, useContractWrite, useSigner } from 'wagmi';
import RemoveIcon from './icons/RemoveIcon';

export default function ProductCartCard({ contract, product }: { contract: string; product: any }) {
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;
	const productId = product.toString();
	// console.log(productId);
	const { data: productFromCart, isFetching } = useContractRead({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'getCartProductFromListOfProducts',
		args: [productId.toString()],
	});

	const { write } = useContractWrite({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'removeProductFromCart',
		args: [productId.toString()],
	});

	if (isFetching) return null;
	if (productFromCart?.id.toString() === '0') return null;
	return (
		<div className="h-16 mb-5 pl-4 items-center justify-between pr-4 rounded-md bg-white w-full flex flex-row">
			<div className="flex flex-row items-center">
				<div className="h-14 w-14 border flex items-center justify-center p-4 rounded-md mr-4">Image</div>
				<div className="flex flex-col">
					<h3>{productFromCart?.name}</h3>
					<span className="text-sm">${productFromCart?.price.toString()}</span>
				</div>
			</div>
			<button disabled={!write} onClick={() => write?.()}>
				<RemoveIcon />
			</button>
		</div>
	);
}
