import axios from 'axios';
import { useQuery, UseQueryOptions } from 'react-query';

const ETH_USD_PRICE_URL = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=ethereum';

interface EthereumPrice {
	ethereum: {
		usd: number;
	};
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export async function getEthPrice() {
	const res = await axios.get<EthereumPrice>(ETH_USD_PRICE_URL);
	if (res.status !== 200) {
		throw new Error('Price fetch error');
	}
	return res.data;
}

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export default function useETHPrice(options?: UseQueryOptions<EthereumPrice, Error, number>) {
	return useQuery(useETHPrice.getKey(), getEthPrice, {
		...options,
		select: (res) => res.ethereum.usd,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		// 1hr in ms
		staleTime: 60 * 60 * 1000,
		retry: 10,
		retryDelay: 2500,
	});
}

useETHPrice.getKey = () => ['EthPrice'];
