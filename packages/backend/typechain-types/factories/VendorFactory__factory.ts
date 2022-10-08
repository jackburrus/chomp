/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { VendorFactory, VendorFactoryInterface } from "../VendorFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "vendor_address",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "vendor_name",
        type: "string",
      },
    ],
    name: "VendorCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "_vendorName",
        type: "string",
      },
    ],
    name: "createVendor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getVendors",
    outputs: [
      {
        internalType: "contract Vendor[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "list_of_vendors",
    outputs: [
      {
        internalType: "contract Vendor",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506126b2806100206000396000f3fe60806040523480156200001157600080fd5b5060043610620000465760003560e01c806364bebcc5146200004b57806391452ef4146200006d578063eac310ac14620000a3575b600080fd5b62000055620000c3565b60405162000064919062000447565b60405180910390f35b6200008b6004803603810190620000859190620004ba565b62000153565b6040516200009a9190620004fd565b60405180910390f35b620000c16004803603810190620000bb9190620006c1565b62000193565b005b606060018054806020026020016040519081016040528092919081815260200182805480156200014957602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311620000fe575b5050505050905090565b600181815481106200016457600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8181604051620001a390620002f1565b620001b0929190620007cb565b604051809103906000f080158015620001cd573d6000803e3d6000fd5b506000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160008054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f72ed0dee50bf115b04570644917f9048aa993a4fb79cb71fb9801f770d7f288a60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff168383604051620002e593929190620007ff565b60405180910390a15050565b611e39806200084483390190565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600062000376620003706200036a846200032b565b6200034b565b6200032b565b9050919050565b60006200038a8262000355565b9050919050565b60006200039e826200037d565b9050919050565b620003b08162000391565b82525050565b6000620003c48383620003a5565b60208301905092915050565b6000602082019050919050565b6000620003ea82620002ff565b620003f681856200030a565b935062000403836200031b565b8060005b838110156200043a5781516200041e8882620003b6565b97506200042b83620003d0565b92505060018101905062000407565b5085935050505092915050565b60006020820190508181036000830152620004638184620003dd565b905092915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b62000494816200047f565b8114620004a057600080fd5b50565b600081359050620004b48162000489565b92915050565b600060208284031215620004d357620004d262000475565b5b6000620004e384828501620004a3565b91505092915050565b620004f78162000391565b82525050565b6000602082019050620005146000830184620004ec565b92915050565b600062000527826200032b565b9050919050565b62000539816200051a565b81146200054557600080fd5b50565b60008135905062000559816200052e565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b620005b48262000569565b810181811067ffffffffffffffff82111715620005d657620005d56200057a565b5b80604052505050565b6000620005eb6200046b565b9050620005f98282620005a9565b919050565b600067ffffffffffffffff8211156200061c576200061b6200057a565b5b620006278262000569565b9050602081019050919050565b82818337600083830152505050565b60006200065a6200065484620005fe565b620005df565b90508281526020810184848401111562000679576200067862000564565b5b6200068684828562000634565b509392505050565b600082601f830112620006a657620006a56200055f565b5b8135620006b884826020860162000643565b91505092915050565b60008060408385031215620006db57620006da62000475565b5b6000620006eb8582860162000548565b925050602083013567ffffffffffffffff8111156200070f576200070e6200047a565b5b6200071d858286016200068e565b9150509250929050565b62000732816200051a565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156200077457808201518184015260208101905062000757565b8381111562000784576000848401525b50505050565b6000620007978262000738565b620007a3818562000743565b9350620007b581856020860162000754565b620007c08162000569565b840191505092915050565b6000604082019050620007e2600083018562000727565b8181036020830152620007f681846200078a565b90509392505050565b600060608201905062000816600083018662000727565b62000825602083018562000727565b81810360408301526200083981846200078a565b905094935050505056fe60806040523480156200001157600080fd5b5060405162001e3938038062001e3983398181016040528101906200003791906200038c565b80600090805190602001906200004f929190620000da565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000457565b828054620000e89062000421565b90600052602060002090601f0160209004810192826200010c576000855562000158565b82601f106200012757805160ff191683800117855562000158565b8280016001018555821562000158579182015b82811115620001575782518255916020019190600101906200013a565b5b5090506200016791906200016b565b5090565b5b80821115620001865760008160009055506001016200016c565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001cb826200019e565b9050919050565b620001dd81620001be565b8114620001e957600080fd5b50565b600081519050620001fd81620001d2565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000258826200020d565b810181811067ffffffffffffffff821117156200027a57620002796200021e565b5b80604052505050565b60006200028f6200018a565b90506200029d82826200024d565b919050565b600067ffffffffffffffff821115620002c057620002bf6200021e565b5b620002cb826200020d565b9050602081019050919050565b60005b83811015620002f8578082015181840152602081019050620002db565b8381111562000308576000848401525b50505050565b6000620003256200031f84620002a2565b62000283565b90508281526020810184848401111562000344576200034362000208565b5b62000351848285620002d8565b509392505050565b600082601f83011262000371576200037062000203565b5b8151620003838482602086016200030e565b91505092915050565b60008060408385031215620003a657620003a562000194565b5b6000620003b685828601620001ec565b925050602083015167ffffffffffffffff811115620003da57620003d962000199565b5b620003e88582860162000359565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043a57607f821691505b60208210811415620004515762000450620003f2565b5b50919050565b6119d280620004676000396000f3fe6080604052600436106100f35760003560e01c806386ae74701161008a578063d5f3948811610059578063d5f39488146102fd578063d870b79714610328578063e757223014610365578063f475409f146103a2576100f3565b806386ae747014610251578063893d20e81461027c5780638da5cb5b146102a7578063c29b2f20146102d2576100f3565b80634b673d11116100c65780634b673d11146101a05780636ebdac12146101cb5780637753c64e146101f45780637acc0b2014610210576100f3565b80632bf32ec3146100f857806330523e7e146101215780633a2a925c1461014c578063459b01c914610175575b600080fd5b34801561010457600080fd5b5061011f600480360381019061011a919061100f565b6103cd565b005b34801561012d57600080fd5b506101366103fc565b60405161014391906110d5565b60405180910390f35b34801561015857600080fd5b50610173600480360381019061016e919061122c565b61048e565b005b34801561018157600080fd5b5061018a610586565b6040516101979190611389565b60405180910390f35b3480156101ac57600080fd5b506101b56105e1565b6040516101c291906113ba565b60405180910390f35b3480156101d757600080fd5b506101f260048036038101906101ed919061100f565b6105ed565b005b61020e6004803603810190610209919061100f565b610666565b005b34801561021c57600080fd5b506102376004803603810190610232919061100f565b610892565b6040516102489594939291906113d5565b60405180910390f35b34801561025d57600080fd5b506102666109d8565b60405161027391906110d5565b60405180910390f35b34801561028857600080fd5b50610291610a66565b60405161029e9190611477565b60405180910390f35b3480156102b357600080fd5b506102bc610a90565b6040516102c99190611477565b60405180910390f35b3480156102de57600080fd5b506102e7610ab6565b6040516102f4919061161b565b60405180910390f35b34801561030957600080fd5b50610312610cc4565b60405161031f9190611477565b60405180910390f35b34801561033457600080fd5b5061034f600480360381019061034a919061100f565b610cea565b60405161035c91906116ba565b60405180910390f35b34801561037157600080fd5b5061038c6004803603810190610387919061100f565b610e59565b60405161039991906113ba565b60405180910390f35b3480156103ae57600080fd5b506103b7610e79565b6040516103c491906113ba565b60405180910390f35b600560010181908060018154018082558091505060019003906000526020600020016000909190919091505550565b60606000805461040b9061170b565b80601f01602080910402602001604051908101604052809291908181526020018280546104379061170b565b80156104845780601f1061045957610100808354040283529160200191610484565b820191906000526020600020905b81548152906001019060200180831161046757829003601f168201915b5050505050905090565b600360008154809291906104a19061176c565b91905055506040518060a001604052808581526020018481526020018381526020018281526020016003548152506004600060035481526020019081526020016000206000820151816000019080519060200190610500929190610ef3565b50602082015181600101556040820151816002019080519060200190610527929190610ef3565b5060608201518160030155608082015181600401559050507fe3b25aa175d4abb6345ae28b959875b745e963873f0d50229dfa7100efd3b047848484846003546040516105789594939291906113d5565b60405180910390a150505050565b606060056001018054806020026020016040519081016040528092919081815260200182805480156105d757602002820191906000526020600020905b8154815260200190600101908083116105c3575b5050505050905090565b60058060000154905081565b60005b600560010180549050811015610662578160056001018281548110610618576106176117b5565b5b9060005260206000200154141561064f57600560010181815481106106405761063f6117b5565b5b90600052602060002001600090555b808061065a9061176c565b9150506105f0565b5050565b61066e610e79565b81146106af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106a690611830565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610717573d6000803e3d6000fd5b5060005b60056001018054905081101561088e577fe3b25aa175d4abb6345ae28b959875b745e963873f0d50229dfa7100efd3b0476004600060056001018481548110610767576107666117b5565b5b90600052602060002001548152602001908152602001600020600001600460006005600101858154811061079e5761079d6117b5565b5b906000526020600020015481526020019081526020016000206001015460046000600560010186815481106107d6576107d56117b5565b5b90600052602060002001548152602001908152602001600020600201600460006005600101878154811061080d5761080c6117b5565b5b90600052602060002001548152602001908152602001600020600301546004600060056001018881548110610845576108446117b5565b5b90600052602060002001548152602001908152602001600020600401546040516108739594939291906118e5565b60405180910390a180806108869061176c565b91505061071b565b5050565b60046020528060005260406000206000915090508060000180546108b59061170b565b80601f01602080910402602001604051908101604052809291908181526020018280546108e19061170b565b801561092e5780601f106109035761010080835404028352916020019161092e565b820191906000526020600020905b81548152906001019060200180831161091157829003601f168201915b5050505050908060010154908060020180546109499061170b565b80601f01602080910402602001604051908101604052809291908181526020018280546109759061170b565b80156109c25780601f10610997576101008083540402835291602001916109c2565b820191906000526020600020905b8154815290600101906020018083116109a557829003601f168201915b5050505050908060030154908060040154905085565b600080546109e59061170b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a119061170b565b8015610a5e5780601f10610a3357610100808354040283529160200191610a5e565b820191906000526020600020905b815481529060010190602001808311610a4157829003601f168201915b505050505081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600060035467ffffffffffffffff811115610ad657610ad5611101565b5b604051908082528060200260200182016040528015610b0f57816020015b610afc610f79565b815260200190600190039081610af45790505b50905060005b600354811015610cbc5760046000600183610b309190611946565b81526020019081526020016000206040518060a0016040529081600082018054610b599061170b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b859061170b565b8015610bd25780601f10610ba757610100808354040283529160200191610bd2565b820191906000526020600020905b815481529060010190602001808311610bb557829003601f168201915b5050505050815260200160018201548152602001600282018054610bf59061170b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c219061170b565b8015610c6e5780601f10610c4357610100808354040283529160200191610c6e565b820191906000526020600020905b815481529060010190602001808311610c5157829003601f168201915b5050505050815260200160038201548152602001600482015481525050828281518110610c9e57610c9d6117b5565b5b60200260200101819052508080610cb49061176c565b915050610b15565b508091505090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610cf2610f79565b600460008381526020019081526020016000206040518060a0016040529081600082018054610d209061170b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d4c9061170b565b8015610d995780601f10610d6e57610100808354040283529160200191610d99565b820191906000526020600020905b815481529060010190602001808311610d7c57829003601f168201915b5050505050815260200160018201548152602001600282018054610dbc9061170b565b80601f0160208091040260200160405190810160405280929190818152602001828054610de89061170b565b8015610e355780601f10610e0a57610100808354040283529160200191610e35565b820191906000526020600020905b815481529060010190602001808311610e1857829003601f168201915b50505050508152602001600382015481526020016004820154815250509050919050565b600060046000838152602001908152602001600020600101549050919050565b6000806000905060005b600560010180549050811015610eeb576004600060056001018381548110610eae57610ead6117b5565b5b906000526020600020015481526020019081526020016000206001015482610ed69190611946565b91508080610ee39061176c565b915050610e83565b508091505090565b828054610eff9061170b565b90600052602060002090601f016020900481019282610f215760008555610f68565b82601f10610f3a57805160ff1916838001178555610f68565b82800160010185558215610f68579182015b82811115610f67578251825591602001919060010190610f4c565b5b509050610f759190610fa8565b5090565b6040518060a0016040528060608152602001600081526020016060815260200160008152602001600081525090565b5b80821115610fc1576000816000905550600101610fa9565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b610fec81610fd9565b8114610ff757600080fd5b50565b60008135905061100981610fe3565b92915050565b60006020828403121561102557611024610fcf565b5b600061103384828501610ffa565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561107657808201518184015260208101905061105b565b83811115611085576000848401525b50505050565b6000601f19601f8301169050919050565b60006110a78261103c565b6110b18185611047565b93506110c1818560208601611058565b6110ca8161108b565b840191505092915050565b600060208201905081810360008301526110ef818461109c565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6111398261108b565b810181811067ffffffffffffffff8211171561115857611157611101565b5b80604052505050565b600061116b610fc5565b90506111778282611130565b919050565b600067ffffffffffffffff82111561119757611196611101565b5b6111a08261108b565b9050602081019050919050565b82818337600083830152505050565b60006111cf6111ca8461117c565b611161565b9050828152602081018484840111156111eb576111ea6110fc565b5b6111f68482856111ad565b509392505050565b600082601f830112611213576112126110f7565b5b81356112238482602086016111bc565b91505092915050565b6000806000806080858703121561124657611245610fcf565b5b600085013567ffffffffffffffff81111561126457611263610fd4565b5b611270878288016111fe565b945050602061128187828801610ffa565b935050604085013567ffffffffffffffff8111156112a2576112a1610fd4565b5b6112ae878288016111fe565b92505060606112bf87828801610ffa565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61130081610fd9565b82525050565b600061131283836112f7565b60208301905092915050565b6000602082019050919050565b6000611336826112cb565b61134081856112d6565b935061134b836112e7565b8060005b8381101561137c5781516113638882611306565b975061136e8361131e565b92505060018101905061134f565b5085935050505092915050565b600060208201905081810360008301526113a3818461132b565b905092915050565b6113b481610fd9565b82525050565b60006020820190506113cf60008301846113ab565b92915050565b600060a08201905081810360008301526113ef818861109c565b90506113fe60208301876113ab565b8181036040830152611410818661109c565b905061141f60608301856113ab565b61142c60808301846113ab565b9695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061146182611436565b9050919050565b61147181611456565b82525050565b600060208201905061148c6000830184611468565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006114da8261103c565b6114e481856114be565b93506114f4818560208601611058565b6114fd8161108b565b840191505092915050565b600060a083016000830151848203600086015261152582826114cf565b915050602083015161153a60208601826112f7565b506040830151848203604086015261155282826114cf565b915050606083015161156760608601826112f7565b50608083015161157a60808601826112f7565b508091505092915050565b60006115918383611508565b905092915050565b6000602082019050919050565b60006115b182611492565b6115bb818561149d565b9350836020820285016115cd856114ae565b8060005b8581101561160957848403895281516115ea8582611585565b94506115f583611599565b925060208a019950506001810190506115d1565b50829750879550505050505092915050565b6000602082019050818103600083015261163581846115a6565b905092915050565b600060a083016000830151848203600086015261165a82826114cf565b915050602083015161166f60208601826112f7565b506040830151848203604086015261168782826114cf565b915050606083015161169c60608601826112f7565b5060808301516116af60808601826112f7565b508091505092915050565b600060208201905081810360008301526116d4818461163d565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061172357607f821691505b60208210811415611737576117366116dc565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061177782610fd9565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156117aa576117a961173d565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f596f75206d757374207061792074686520657861637420616d6f756e74000000600082015250565b600061181a601d83611047565b9150611825826117e4565b602082019050919050565b600060208201905081810360008301526118498161180d565b9050919050565b60008190508160005260206000209050919050565b600081546118728161170b565b61187c8186611047565b9450600182166000811461189757600181146118a9576118dc565b60ff19831686526020860193506118dc565b6118b285611850565b60005b838110156118d4578154818901526001820191506020810190506118b5565b808801955050505b50505092915050565b600060a08201905081810360008301526118ff8188611865565b905061190e60208301876113ab565b81810360408301526119208186611865565b905061192f60608301856113ab565b61193c60808301846113ab565b9695505050505050565b600061195182610fd9565b915061195c83610fd9565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119915761199061173d565b5b82820190509291505056fea2646970667358221220788de69302bea5f0e6b30560409b7abadab2447082b276a750b6d0c4adf2b01464736f6c634300080a0033a264697066735822122084f5afb85d6f42106c2285e25d99e71b683b54bb74e7c8e14140948f979b685464736f6c634300080a0033";

type VendorFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VendorFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VendorFactory__factory extends ContractFactory {
  constructor(...args: VendorFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VendorFactory> {
    return super.deploy(overrides || {}) as Promise<VendorFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): VendorFactory {
    return super.attach(address) as VendorFactory;
  }
  override connect(signer: Signer): VendorFactory__factory {
    return super.connect(signer) as VendorFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VendorFactoryInterface {
    return new utils.Interface(_abi) as VendorFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VendorFactory {
    return new Contract(address, _abi, signerOrProvider) as VendorFactory;
  }
}
