import { Vendor } from '@/../backend/typechain-types/Vendor';
import Header from '@/components/Header';
import { NETWORK_ID } from '@/config';
import contracts from '@/contracts/hardhat_contracts.json';
import { useContract, useSigner } from 'wagmi';
export default function CreateShop({ contract }: { contract: string }) {
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
		console.log(shop);
	};
	return (
		<>
			<Header />
			<button onClick={handleFetchShop}>Fetch Shop</button>
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
