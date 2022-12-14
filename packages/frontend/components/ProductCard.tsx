import { ProductAddedEvent, Vendor } from '@/../backend/typechain-types/Vendor';
import { NETWORK_ID } from '@/config';
import { useContractEvent, useContractRead, useContractWrite, useSigner } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { useEffect } from 'react';
export default function ProductCard({ product, contract }) {
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;

	const { write } = useContractWrite({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'addProductToCart',
		args: [product.id.toString()],
	});

	const { data: productsInCart, refetch } = useContractRead({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'getProductsInCart',
	});

	useContractEvent({
		addressOrName: contract,
		contractInterface: vendorABI,
		eventName: 'ProductAddedToCart',
		listener: (event) => {
			refetch();
		},
	});

	//convert cart to array of numbers
	const cart = productsInCart?.map((product) => {
		return product.toString();
	});

	const isInCart = cart?.includes(product.id.toString());

	return (
		<button
			disabled={!write}
			onClick={() => write?.()}
			className={`h-48 cursor-pointer text-center shadow-md bg-white flex flex-col justify-center items-center w-48  rounded-lg ${
				isInCart && 'border border-orange-500'
			}`}
		>
			<img src={product[2]} className="w-36 h-w-36 rounded-md mb-2" />

			<h1 className="max-w-[70%]">{product[0]}</h1>
			<h3 className="mt-2">${product[1].toString()}</h3>
		</button>
	);
}
