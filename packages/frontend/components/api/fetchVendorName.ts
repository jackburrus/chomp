import { Vendor } from '@/../backend/typechain-types/Vendor';

export default async function fetchVendorName(vendorContract: Vendor) {
	const vendorName = await vendorContract.getVendorName();
	return vendorName;
}
