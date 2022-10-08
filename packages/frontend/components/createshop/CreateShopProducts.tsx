import { Vendor } from '@/../backend/typechain-types/Vendor';
import { useEffect, useState } from 'react';
import ImageIcon from '../icons/ImageIcon';
import ImageUploading from 'react-images-uploading';
import { NFTStorage, File, Blob } from 'nft.storage';

const NFT_STORAGE_TOKEN = 'your-api-token';
const client = new NFTStorage({ token: process.env.NFT_STORAGE_TOKEN });

function dataURLtoBlob(dataurl) {
	const arr = dataurl.split(',');
	const mime = arr[0].match(/:(.*?);/)[1];
	const bstr = atob(arr[1]);
	let n = bstr.length;
	const u8arr = new Uint8Array(n);
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n);
	}
	return new Blob([u8arr], { type: mime });
}

export default function CreateShopProducts({
	contract,
	vendorContract,
	setCreateShopStep,
}: {
	contract: string;
	vendorContract: Vendor;
	setCreateShopStep: () => void;
}) {
	const [images, setImages] = useState([]);
	const [ipfsUrl, setIpfsUrl] = useState('');
	const maxNumber = 69;

	const handleUploadImage = async () => {
		//store the image to ipfs and return cid

		const image = dataURLtoBlob(images[0].data_url);
		const imageCID = await client.storeBlob(image);
		console.log(imageCID);
		setIpfsUrl('https://ipfs.io/ipfs/' + imageCID);
		// const cid = await client.storeBlob(file);
		// console.log(cid, 'cid');
		// setImageIpfsHash(cid);
	};

	useEffect(() => {
		if (images.length > 0) {
			handleUploadImage();
		}
	}, [images]);

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};
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
					<div className="flex flex-row  items-end">
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
						<div className="flex flex-end  justify-end">
							<ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
								{({
									imageList,
									onImageUpload,
									onImageRemoveAll,
									onImageUpdate,
									onImageRemove,
									isDragging,
									dragProps,
								}) => (
									// write your building UI
									<div className="upload__image-wrapper flex flex-end">
										<button
											onClick={onImageUpload}
											{...dragProps}
											className=" ml-4 rounded-md flex items-center justify-center h-10 w-14 bg-[#DFE6F4]"
										>
											{!imageList.length ? (
												<ImageIcon />
											) : (
												<div>
													<img src={imageList[0]['data_url']} alt="" className="w-10 h-10 rounded-md" />
												</div>
											)}
										</button>

										{imageList.length > 0 && (
											<div className=" flex items-center">
												<button className=" ml-2 mr-2" onClick={() => onImageUpdate(0)}>
													Update
												</button>
												<button onClick={() => onImageRemove(0)}>Remove</button>
											</div>
										)}
									</div>
								)}
							</ImageUploading>
						</div>
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
