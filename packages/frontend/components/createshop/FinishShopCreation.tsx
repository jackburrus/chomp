import Link from 'next/link';
import React from 'react';
import ReactDOM from 'react-dom';
import QRCode from 'react-qr-code';

export default function FinishShopCreation({ contract }: { contract: string }) {
	return (
		<>
			<div className="flex flex-col  items-center justify-center pt-10 font-SFPro_Rounded_Bold">
				<div className="w-full items-center justify-center flex flex-col ">
					<h1 className="text-4xl">Print Shop Code</h1>
					<div className="pt-10" style={{ height: 'auto', margin: '0 auto', maxWidth: 500, width: '100%' }}>
						<QRCode
							size={256}
							style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
							value={`https://chomp-sigma.vercel.app/shop/` + contract}
							viewBox={`0 0 256 256`}
						/>
					</div>
				</div>
				<div className="flex flex-row">
					<Link href={`/shop/${contract}`}>
						<button className="mt-8 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:bg-[#DFE6F4] hover:text-black active:opacity-70 md:text-base ">
							Visit Store
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
