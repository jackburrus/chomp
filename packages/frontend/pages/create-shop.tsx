import Header from '@/components/Header';
import { NETWORK_ID } from '@/config';
import { useContract, useSigner, useAccount } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { VendorFactory } from '../../backend/typechain-types/VendorFactory';
import { Vendor } from '../../backend/typechain-types/Vendor';
import { useState } from 'react';
import CreateShopName from '@/components/createshop/CreateShopName';
import { useRouter } from 'next/router';

export default function CreateShop() {
	const chainId = Number(NETWORK_ID);
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

	// const vendorAddress = allContracts[chainId][0].contracts.Vendor.address;
	// const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;
	// const vendorContract = useContract<Vendor>({
	// 	addressOrName: vendorAddress,
	// 	contractInterface: vendorABI,
	// 	signerOrProvider: signerData,
	// });

	const [createShopStep, setCreateShopStep] = useState(0);

	const [shopName, setShopName] = useState('');
	const router = useRouter();

	const handleCreateVendor = async () => {
		if (address && shopName) {
			const tx = await vendorFactoryContract.createVendor(address, shopName);
			const res = await tx.wait();
			if (res.transactionHash) {
				router.push(`/create-shop/${res.events[0].args[0]}`);
				setCreateShopStep(1);
			}
		}
	};

	const handleFetchShops = async () => {
		const shops = await vendorFactoryContract.getVendors();
		console.log(shops);
	};

	const generateStepPercentage = (step: number) => {
		switch (step) {
			case 0:
				return '33%';
			case 1:
				return '66%';
			case 2:
				return '100%';
			default:
				return '0%';
		}
	};

	// const handleGetShopName = async () => {
	// 	const shopName = await vendorContract.getVendorName();
	// 	console.log(shopName);
	// };

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
			<button onClick={handleFetchShops}>fetch all shops</button>
			{/* <button onClick={handleGetShopName}>get shop name</button> */}
		</>
	);
}
