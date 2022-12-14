import Head from 'next/head';

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { GetGreeter, SetGreeter } from '../components/contract';
import Header from '@/components/Header';
import Link from 'next/link';
import LinkOutIcon from '@/components/icons/LinkOutIcon';

export default function Home() {
	return (
		<div className={''}>
			<Head>
				<title>Chomp</title>
				<meta name="description" content="Helping vendors keep more of their money." />
				<link rel="icon" href="/Logo.png" />
			</Head>
			<Header />

			<main
				style={{
					minHeight: '60vh',
					flex: '1',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
				className="font-SFPro_Rounded_Bold"
			>
				<div className="text-6xl max-w-3xl  w-full items-start justify-start mb-4 flex">Chomp</div>
				<div className="text-3xl max-w-3xl  w-full items-start text-gray-600 justify-start flex">
					Restaurant point of sale payments on Ethereum.
				</div>
				<div className="text-3xl max-w-3xl mt-2 w-full  items-start text-gray-600 justify-start flex">
					Helping vendors keep more of their money.
				</div>
				<div className=" max-w-3xl mt-10 flex-col flex items-end w-full">
					<Link href={'/create-shop'}>
						<button className="w-20 h-20 flex items-center justify-center hover:scale-105 transition ease-in-out bg-[#283247] rounded-full">
							<LinkOutIcon />
						</button>
					</Link>
					<Link href={'/create-shop'}>
						<button className="mt-2">Start a Shop</button>
					</Link>
				</div>
			</main>
		</div>
	);
}
