import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';

const main: DeployFunction = async function ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();

	const args = ['Hello!!!!!!!!'];
	await deploy('Greeter', {
		// Learn more about args here: https://www.npmjs.com/package/hardhat-deploy#deploymentsdeploy
		args: args,
		from: deployer,
		log: true,
	});

	await deploy('VendorFactory', {
		args: [],
		from: deployer,
		log: true,
	});

	const vendorArgs = ['0xE35ef95A80839C3c261197B6c93E5765C9A6a31a', 'Example Restaurant'];
	await deploy('Vendor', {
		args: vendorArgs,
		from: deployer,
		log: true,
	});
};

export default main;

export const tags = ['all', 'greeter'];
