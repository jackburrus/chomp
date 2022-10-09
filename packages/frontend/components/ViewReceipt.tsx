import CheckIcon from './icons/CheckIcon';

export default function ViewReceipt() {
	return (
		<div className="flex flex-col font-SFPro_Rounded_Bold items-center justify-center mt-10 ">
			<CheckIcon />
			<span className="mt-2">Thank you for your purchase.</span>
			<button className="mt-4 ml-2 flex h-12 cursor-pointer items-center justify-center whitespace-nowrap rounded-md  bg-[#283247] pl-8 pr-8 text-sm text-white transition-all duration-300 hover:scale-105  active:opacity-70 md:text-base">
				View Receipt
			</button>
		</div>
	);
}
