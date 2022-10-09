import '@nomiclabs/hardhat-waffle';
import * as dotenv from 'dotenv';
import { HardhatUserConfig } from 'hardhat/config';
import 'hardhat-deploy';
import '@nomiclabs/hardhat-ethers';

import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';

dotenv.config({ path: '../../.env' });
const defaultNetwork = 'localhost';

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.12',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
				details: { yul: false },
			},
		},
	},
	defaultNetwork,

	networks: {
		hardhat: {
			allowUnlimitedContractSize: true,
		},
		localhost: {
			chainId: 31337,
			allowUnlimitedContractSize: true,
		},
		'optimism-goerli': {
			accounts: [process.env.PRIVATE_KEY],
			chainId: 420,
			url: 'https://optimism-goerli.infura.io/v3/59ad6f621b7e47038b438c4ad3f81a02',
			// companionNetworks: {
			// 	hub: 'goerli',
			// },
		},
		'polygon-mumbai': {
			accounts: [process.env.PRIVATE_KEY],
			chainId: 80001,
			url: 'https://polygon-mumbai.infura.io/v3/59ad6f621b7e47038b438c4ad3f81a02',
		},

		/////////
		// L1 NETWORKS
		/////////

		// mainnet: {
		//   chainId: 1,
		//   url: `https://eth-mainnet.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
		//   url: `https://mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
		//   accounts: [`${process.env.PRIVATE_KEY}`],
		// },

		// L1 TEST NETWORKS

		// ropsten: {
		//   chainId: 3,
		//   url: `https://eth-ropsten.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
		//   url: `https://ropsten.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
		//   accounts: [`${process.env.PRIVATE_KEY}`],
		// },
		// rinkeby: {
		//   chainId: 4,
		//   url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
		//   url: `https://rinkeby.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
		//   accounts: [`${process.env.PRIVATE_KEY}`],
		// },
		// goerli: {
		//   chainId: 5,
		//   url: `https://eth-goerli.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
		//   url: `https://goerli.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
		//   accounts: [`${process.env.PRIVATE_KEY}`],
		// },
		// kovan: {
		//   chainId: 42,
		//   url: `https://eth-kovan.alchemyapi.io/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
		//   url: `https://kovan.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
		//   accounts: [`${process.env.PRIVATE_KEY}`],
		// },

		/////////
		// L2 NETWORKS
		/////////

		// polygon: {
		//   chainId: 137,
		//   url: `https://polygon-mainnet.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
		//   url: `https://polygon-mainnet.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
		//   accounts: [`${process.env.PRIVATE_KEY}`],
		// },

		// L2 TEST NETWORKS

		// mumbai: {
		//   chainId: 80001,
		//   url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env.NEXT_PUBLIC_ALCHEMY_ID}`,
		//   url: `https://polygon-mumbai.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_ID}`,
		//   accounts: [`${process.env.PRIVATE_KEY}`],
		// },
	},
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
		},
		tokenOwner: 1,
	},
};

export default config;
