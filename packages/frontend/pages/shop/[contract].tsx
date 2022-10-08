import { Vendor } from '@/../backend/typechain-types/Vendor';
import Header from '@/components/Header';
import { useContract, useContractRead, useSigner } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { NETWORK_ID } from '@/config';
import useVendorName from '@/hooks/useVendorName';
import { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import CloseIcon from '@/components/icons/CloseIcon';
import ProductCartCard from '@/components/ProductCartCard';
export default function ShopPage({ contract }: { contract: string }) {
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;
	const [cartOpen, setCartOpen] = useState(false);
	const {
		data: vendorName,
		isError,
		isLoading,
	} = useContractRead({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'getVendorName',
	});
	const {
		data: products,
		// isError,
		// isLoading,
	} = useContractRead({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'getProducts',
	});

	const { data: productsInCart } = useContractRead({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'getProductsInCart',
	});

	const { data: totalPrice } = useContractRead({
		addressOrName: contract,
		contractInterface: vendorABI,
		functionName: 'getTotalPrice',
	});

	useEffect(() => {
		console.log(totalPrice);
	}, [totalPrice]);

	return (
		<div className="relative justify-center">
			<Header />
			{productsInCart && cartOpen && (
				<div className="bg-[#DFE6F4] absolute right-0 w-1/3 h-screen justify-start px-5 ">
					<div className="flex flex-row items-center mt-10 justify-between ">
						<div>
							<h1 className="text-lg font-SFPro_Rounded_Bold ">My Order</h1>
							<h3 className="text-gray-600 font-SFPro_Rounded_Bold">{productsInCart.length} items</h3>
						</div>
						<div onClick={() => setCartOpen(false)} className="cursor-pointer">
							<CloseIcon />
						</div>
					</div>
					<div className="mt-8">
						{productsInCart.map((product, index) => {
							return <ProductCartCard key={index} contract={contract} product={product} />;
						})}
					</div>
					<div>{totalPrice?.toString()}</div>
				</div>
			)}

			<div className="flex flex-col  items-center justify-end pt-10 font-SFPro_Rounded_Bold">
				<div className="w-full items-center justify-center flex flex-col ">
					<h1 className="text-4xl">{vendorName}</h1>
					<div className="grid grid-cols-4 place-items-center gap-8 mt-10">
						{products?.map((product, index) => {
							return <ProductCard key={index} contract={contract} product={product} />;
						})}
					</div>
				</div>
				<button
					className="mt-8 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:bg-[#DFE6F4] hover:text-black active:opacity-70 md:text-base "
					onClick={() => setCartOpen(true)}
				>
					Checkout
				</button>
			</div>
		</div>
	);
}

export async function getServerSideProps(context: { params: { contract: string } }) {
	const { params } = context;
	const { contract } = params;

	return {
		props: {
			contract,
		},
	};
}
