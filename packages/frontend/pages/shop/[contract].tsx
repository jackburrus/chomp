import { Vendor } from '@/../backend/typechain-types/Vendor';
import Header from '@/components/Header';
import { useContract, useSigner } from 'wagmi';
import contracts from '@/contracts/hardhat_contracts.json';
import { NETWORK_ID } from '@/config';
export default function ShopPage({ contract }: { contract: string }) {
	const chainId = Number(NETWORK_ID);
	const { data: signerData } = useSigner();
	const allContracts = contracts as any;
	const vendorABI = allContracts[chainId][0].contracts.Vendor.abi;
	const vendorContract = useContract<Vendor>({
		addressOrName: contract,
		contractInterface: vendorABI,
		signerOrProvider: signerData,
	});
	return (
		<>
			<Header />
			<h1>{contract}</h1>
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
