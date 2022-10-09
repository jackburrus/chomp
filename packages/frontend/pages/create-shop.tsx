import Header from '@/components/Header';
import { NETWORK_ID } from '@/config';
import { useContract, useSigner, useAccount, useContractEvent } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { VendorFactory } from '../../backend/typechain-types/VendorFactory';
import { Vendor } from '../../backend/typechain-types/Vendor';
import { useState } from 'react';
import CreateShopName from '@/components/createshop/CreateShopName';
import { useRouter } from 'next/router';

export const generateStepPercentage = (step: number) => {
	switch (step) {
		case 0:
			return '33%';
		case 1:
			return '66%';
		case 2:
			return '100%';
		default:
			return '100%';
	}
};

export default function CreateShop() {
	const chainId = Number(NETWORK_ID);
	console.log(chainId, 'chainId');
	const { data: signerData } = useSigner();
	const { address } = useAccount();
	const allContracts = contracts as any;
	const vendorFactoryAddress = allContracts[chainId][0].contracts.VendorFactory.address;
	const vendorFactoryABI = allContracts[chainId][0].contracts.VendorFactory.abi;
	const vendorFactoryContract = useContract<VendorFactory>({
		addressOrName: vendorFactoryAddress,
		contractInterface: vendorFactoryABI,
		signerOrProvider: signerData,
	});

	const [createShopStep, setCreateShopStep] = useState(0);

	const [shopName, setShopName] = useState('');
	const router = useRouter();

	useContractEvent({
		addressOrName: vendorFactoryAddress,
		contractInterface: vendorFactoryABI,
		eventName: 'VendorCreated',
		listener: (event) => {
			router.push(`/create-shop/${event[0]}`);
		},
	});

	const handleCreateVendor = async () => {
		if (address && shopName) {
			const tx = await vendorFactoryContract.createVendor(address, shopName);
			await tx.wait();
		}
	};

	const handleFetchShops = async () => {
		const shops = await vendorFactoryContract.getVendors();
		console.log(shops);
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

				{/* <div className={`relative w-[600px] h-2 bg-[#DFE6F4]  `}>
					<div
						className={`absolute w-[200px] top-0 left-0 bg-orange-500  ${
							createShopStep === 0 ? 'bg-orange-500' : 'bg-orange-300'
						}`}
					/>
				</div> */}
			</div>
			{createShopStep === 0 && (
				<CreateShopName handleCreateVendor={handleCreateVendor} shopName={shopName} setShopName={setShopName} />
			)}
			{createShopStep === 1 && (
				<div>
					<h1>Step 2</h1>
				</div>
			)}
			{/* <button onClick={handleFetchShops}>fetch all shops</button> */}
			{/* <button onClick={handleGetShopName}>get shop name</button> */}
		</>
	);
}
