import { Vendor } from '@/../backend/typechain-types/Vendor';
import fetchVendorName from '@/components/api/fetchVendorName';
import { useQuery } from 'react-query';

export default function useVendorName(vendorContract: Vendor) {
	return useQuery(['vendorName'], () => fetchVendorName(vendorContract), {
		enabled: !!vendorContract,
		suspense: false,
	});
}
