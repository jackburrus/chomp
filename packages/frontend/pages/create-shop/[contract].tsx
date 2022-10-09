import { Vendor } from '@/../backend/typechain-types/Vendor';
import CreateShopProducts from '@/components/createshop/CreateShopProducts';
import FinishShopCreation from '@/components/createshop/FinishShopCreation';
import Header from '@/components/Header';
import { NETWORK_ID } from '@/config';
import contracts from '@/contracts/hardhat_contracts.json';
import { useEffect, useState } from 'react';
import { useContract, useSigner } from 'wagmi';
import { generateStepPercentage } from '../create-shop';
export default function CreateShop({ contract }: { contract: string }) {
	const [createShopStep, setCreateShopStep] = useState(1);
	const [shopName, setShopName] = useState('');
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;
	const vendorContract = useContract<Vendor>({
		addressOrName: contract,
		contractInterface: vendorABI,
		signerOrProvider: signerData,
	});

	const handleFetchShop = async () => {
		const shop = await vendorContract.getVendorName();
		setShopName(shop);
	};

	return (
		<>
			<Header />
			<div className="w-full flex mt-10 flex-1  items-center justify-center">
				<div className=" w-[600px] rounded-full h-2.5 bg-[#DFE6F4]">
					<div
						className="bg-blue-600 h-2.5 rounded-full"
						style={{ width: generateStepPercentage(createShopStep) }}
					></div>
				</div>
			</div>
			{createShopStep === 1 ? (
				<CreateShopProducts contract={contract} vendorContract={vendorContract} setCreateShopStep={setCreateShopStep} />
			) : (
				<FinishShopCreation contract={contract} />
			)}
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
