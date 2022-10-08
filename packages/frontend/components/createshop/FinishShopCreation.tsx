import Link from 'next/link';

export default function FinishShopCreation({ contract }: { contract: string }) {
	return (
		<>
			<div className="flex flex-col  items-center justify-center pt-10 font-SFPro_Rounded_Bold">
				<div className="w-full items-center justify-center flex flex-col ">
					<h1 className="text-4xl">Print Shop Code</h1>
					{/* <div>
						{products.map((product, index) => (
							<div key={index} className="flex mt-6 flex-row items-center justify-center">
								<h1 className="text-2xl">{product.productName} -</h1>
								<h1 className="text-2xl ml-4">${product.productPrice}</h1>
							</div>
						))}
					</div> */}
					{/* create an input for the shop name with sick styles */}
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
