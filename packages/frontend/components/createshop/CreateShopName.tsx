interface CreateShopNameProps {
	shopName: string;
	setShopName: (shopName: string) => void;
	handleCreateVendor: () => void;
}

export default function CreateShopName({ shopName, setShopName, handleCreateVendor }: CreateShopNameProps) {
	return (
		<div className="flex flex-col  items-center justify-center pt-10 font-SFPro_Rounded_Bold">
			<div className="w-full items-center justify-center flex flex-col ">
				<h1 className="text-4xl">Create a shop</h1>
				{/* create an input for the shop name with sick styles */}
				<input
					className="bg-[#DFE6F4] rounded-md p-2 mt-8 w-[400px]"
					type="text"
					value={shopName}
					onChange={(e) => setShopName(e.target.value)}
					placeholder="Shop Name"
				/>
			</div>

			<button
				className="mt-8 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:bg-[#DFE6F4] hover:text-black active:opacity-70 md:text-base "
				onClick={handleCreateVendor}
			>
				Create Shop
			</button>
		</div>
	);
}
