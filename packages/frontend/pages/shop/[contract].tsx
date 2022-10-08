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

	useEffect(() => {
		console.log(products);
	}, [products]);

	return (
		<>
			<Header />
			<div className="flex flex-col   items-center justify-center pt-10 font-SFPro_Rounded_Bold">
				<div className="w-full items-center justify-center flex flex-col ">
					<h1 className="text-4xl">{vendorName}</h1>
					<div className="grid grid-cols-4 gap-8 mt-10">
						{products?.map((product, index) => {
							return <ProductCard key={index} contract={contract} product={product} />;
						})}
					</div>
					{/* <div>
						{products.map((product, index) => (
							<div key={index} className="flex mt-6 flex-row items-center justify-center">
								<h1 className="text-2xl">{product.productName} -</h1>
								<h1 className="text-2xl ml-4">${product.productPrice}</h1>
							</div>
						))}
					</div> */}
					{/* create an input for the shop name with sick styles */}
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
