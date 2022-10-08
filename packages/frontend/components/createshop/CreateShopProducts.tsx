import { Vendor } from '@/../backend/typechain-types/Vendor';
import { useState } from 'react';

export default function CreateShopProducts({
	contract,
	vendorContract,
	setCreateShopStep,
}: {
	contract: string;
	vendorContract: Vendor;
	setCreateShopStep: () => void;
}) {
	const [productName, setProductName] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [products, setProducts] = useState<{ productName: string; productPrice: string }[]>([]);

	const handleAddProduct = async () => {
		const price = Number(productPrice);
		const tx = await vendorContract.addProduct(productName, price, '10');
		const res = await tx.wait();
		if (res.events) {
			const productName = res.events[0].args[0];
			//convert product price to eth
			const productPrice = res.events[0].args[1].toString();
			setProducts([...products, { productName, productPrice }]);
		}
	};

	const handleGetShopName = async () => {
		const shopName = await vendorContract.getVendorName();
		console.log(shopName);
	};

	const fetchCurrentProducts = async () => {
		const products = await vendorContract.getProducts();
		const convertedProducts = products.map((product) => {
			return {
				productName: product[0],
				productPrice: product[1].toString(),
			};
		});
		console.log(convertedProducts);
		setProducts(convertedProducts);
		// setProducts(products);
	};

	const handleFinishCreation = () => {
		setCreateShopStep(3);
	};

	return (
		<>
			<div className="flex flex-col  items-center justify-center pt-10 font-SFPro_Rounded_Bold">
				<div className="w-full items-center justify-center flex flex-col ">
					<h1 className="text-4xl">Add Products</h1>
					<div>
						{products.map((product, index) => (
							<div key={index} className="flex mt-6 flex-row items-center justify-center">
								<h1 className="text-2xl">{product.productName} -</h1>
								<h1 className="text-2xl ml-4">${product.productPrice}</h1>
							</div>
						))}
					</div>
					{/* create an input for the shop name with sick styles */}
					<div>
						<input
							className="bg-[#DFE6F4] rounded-md p-2 mt-8 w-[400px]"
							type="text"
							value={productName}
							onChange={(e) => setProductName(e.target.value)}
							placeholder="Product Name"
						/>
						<input
							className="bg-[#DFE6F4] ml-5 text-center rounded-md p-2 mt-8 w-[100px]"
							type="text"
							value={productPrice}
							onChange={(e) => setProductPrice(e.target.value)}
							placeholder="Price"
						/>
					</div>
				</div>
				<div className="flex flex-row">
					<button
						className="mt-8 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:bg-[#DFE6F4] hover:text-black active:opacity-70 md:text-base "
						onClick={handleAddProduct}
					>
						Add Product
					</button>
					{/* <button
						className="mt-8 ml-2 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:bg-[#DFE6F4] hover:text-black active:opacity-70 md:text-base "
						onClick={fetchCurrentProducts}
					>
						Fetch Current Products
					</button> */}
					<button
						className="mt-8 ml-2 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:bg-[#DFE6F4] hover:text-black active:opacity-70 md:text-base "
						onClick={handleFinishCreation}
					>
						Finish
					</button>
				</div>
			</div>
		</>
	);
}
