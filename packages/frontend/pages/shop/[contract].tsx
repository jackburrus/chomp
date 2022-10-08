import { Vendor } from '@/../backend/typechain-types/Vendor';
import Header from '@/components/Header';
import { useContract, useContractRead, useSigner } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { NETWORK_ID } from '@/config';
import useVendorName from '@/hooks/useVendorName';
import { useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
export default function ShopPage({ contract }: { contract: string }) {
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;

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

	return (
		<>
			<Header />
			{productsInCart && (
				<div className="drawer absolute">
					<input id="my-drawer" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content">
						<label htmlFor="my-drawer" className="btn btn-primary drawer-button">
							Open drawer
						</label>
					</div>
					<div className="drawer-side">
						<label htmlFor="my-drawer" className="drawer-overlay"></label>
						<ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
							<li>
								<a>Sidebar Item 1</a>
							</li>
							<li>
								<a>Sidebar Item 2</a>
							</li>
						</ul>
					</div>
				</div>
			)}

			<div className="flex flex-col  items-center justify-center pt-10 font-SFPro_Rounded_Bold">
				<div className="w-full items-center justify-center flex flex-col ">
					<h1 className="text-4xl">{vendorName}</h1>
					<div className="grid grid-cols-4 gap-8 mt-10">
						{products?.map((product, index) => {
							return <ProductCard key={index} contract={contract} product={product} />;
						})}
					</div>
				</div>
			</div>
		</>
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
