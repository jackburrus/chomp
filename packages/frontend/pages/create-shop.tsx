import Header from '@/components/Header';
import { NETWORK_ID } from '@/config';
import { useContract, useSigner, useAccount } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';

export default function CreateShop() {
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const { address } = useAccount();
	const allContracts = contracts as any;
	const vendorFactoryAddress = allContracts[chainId][0].contracts.VendorFactory.address;
	const vendorFactoryABI = allContracts[chainId][0].contracts.VendorFactory.abi;
	const vendorFactoryContract = useContract({
		addressOrName: vendorFactoryAddress,
		contractInterface: vendorFactoryABI,
		signerOrProvider: signerData,
	});

	const handleCreateVendor = async () => {
		const tx = await vendorFactoryContract.createVendor(address, '50000');
		const res = await tx.wait();
		console.log(res);
	};

	const handleFetchShops = async () => {
		const shops = await vendorFactoryContract.getVendors();
		console.log(shops);
	};

	return (
		<>
			<Header />
			<button onClick={handleCreateVendor}>Create Shop</button>
			<button onClick={handleFetchShops}>Fetch shops</button>
		</>
	);
}
