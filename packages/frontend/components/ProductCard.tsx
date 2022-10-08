import { ProductAddedEvent, Vendor } from '@/../backend/typechain-types/Vendor';
import { NETWORK_ID } from '@/config';
import { useContractRead, useContractWrite, useSigner } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { useEffect } from 'react';
export default function ProductCard({ product, contract }) {
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;

	console.log(product.id.toString());

	const { write } = useContractWrite({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'addProductToCart',
		args: [product.id.toString()],
	});

	const { data: productsInCart } = useContractRead({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'getProductsInCart',
	});

	useEffect(() => {
		console.log(productsInCart, 'in cart');
	}, [productsInCart]);

	return (
		<button
			disabled={!write}
			onClick={() => write?.()}
			className="h-36 cursor-pointer text-center shadow-md bg-white flex flex-col justify-center items-center w-36  rounded-lg"
		>
			<h1 className="max-w-[70%]">{product[0]}</h1>
			<h3 className="mt-2">${product[1].toString()}</h3>
		</button>
	);
}
