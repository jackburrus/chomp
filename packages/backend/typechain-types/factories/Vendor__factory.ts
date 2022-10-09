/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Vendor, VendorInterface } from "../Vendor";

const _abi = [
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
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProductAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProductAddedToCart",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "ProductPurchased",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_quantity",
        type: "uint256",
      },
    ],
    name: "addProduct",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "addProductToCart",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "deployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getCartProductFromListOfProducts",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct Vendor.Product",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProducts",
    outputs: [
      {
        components: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "price",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "quantity",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
        ],
        internalType: "struct Vendor.Product[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProductsInCart",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalPrice",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVendorName",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
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
    name: "products",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "quantity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "removeProductFromCart",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "sendEtherToVendor",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "shoppingCart",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vendor_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001e1c38038062001e1c83398181016040528101906200003791906200038c565b80600090805190602001906200004f929190620000da565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000457565b828054620000e89062000421565b90600052602060002090601f0160209004810192826200010c576000855562000158565b82601f106200012757805160ff191683800117855562000158565b8280016001018555821562000158579182015b82811115620001575782518255916020019190600101906200013a565b5b5090506200016791906200016b565b5090565b5b80821115620001865760008160009055506001016200016c565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001cb826200019e565b9050919050565b620001dd81620001be565b8114620001e957600080fd5b50565b600081519050620001fd81620001d2565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000258826200020d565b810181811067ffffffffffffffff821117156200027a57620002796200021e565b5b80604052505050565b60006200028f6200018a565b90506200029d82826200024d565b919050565b600067ffffffffffffffff821115620002c057620002bf6200021e565b5b620002cb826200020d565b9050602081019050919050565b60005b83811015620002f8578082015181840152602081019050620002db565b8381111562000308576000848401525b50505050565b6000620003256200031f84620002a2565b62000283565b90508281526020810184848401111562000344576200034362000208565b5b62000351848285620002d8565b509392505050565b600082601f83011262000371576200037062000203565b5b8151620003838482602086016200030e565b91505092915050565b60008060408385031215620003a657620003a562000194565b5b6000620003b685828601620001ec565b925050602083015167ffffffffffffffff811115620003da57620003d962000199565b5b620003e88582860162000359565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043a57607f821691505b60208210811415620004515762000450620003f2565b5b50919050565b6119b580620004676000396000f3fe6080604052600436106100f35760003560e01c8063893d20e81161008a578063d870b79711610059578063d870b7971461030c578063de8b538d14610349578063e757223014610353578063f475409f14610390576100f3565b8063893d20e8146102605780638da5cb5b1461028b578063c29b2f20146102b6578063d5f39488146102e1576100f3565b80634b673d11116100c65780634b673d11146101a05780636ebdac12146101cb5780637acc0b20146101f457806386ae747014610235576100f3565b80632bf32ec3146100f857806330523e7e146101215780633a2a925c1461014c578063459b01c914610175575b600080fd5b34801561010457600080fd5b5061011f600480360381019061011a919061105e565b6103bb565b005b34801561012d57600080fd5b50610136610495565b6040516101439190611124565b60405180910390f35b34801561015857600080fd5b50610173600480360381019061016e919061127b565b610527565b005b34801561018157600080fd5b5061018a61061f565b60405161019791906113d8565b60405180910390f35b3480156101ac57600080fd5b506101b561067a565b6040516101c29190611409565b60405180910390f35b3480156101d757600080fd5b506101f260048036038101906101ed919061105e565b610686565b005b34801561020057600080fd5b5061021b6004803603810190610216919061105e565b6106ff565b60405161022c959493929190611424565b60405180910390f35b34801561024157600080fd5b5061024a610845565b6040516102579190611124565b60405180910390f35b34801561026c57600080fd5b506102756108d3565b60405161028291906114c6565b60405180910390f35b34801561029757600080fd5b506102a06108fd565b6040516102ad91906114c6565b60405180910390f35b3480156102c257600080fd5b506102cb610923565b6040516102d8919061166a565b60405180910390f35b3480156102ed57600080fd5b506102f6610b31565b60405161030391906114c6565b60405180910390f35b34801561031857600080fd5b50610333600480360381019061032e919061105e565b610b57565b6040516103409190611709565b60405180910390f35b610351610cc6565b005b34801561035f57600080fd5b5061037a6004803603810190610375919061105e565b610ea8565b6040516103879190611409565b60405180910390f35b34801561039c57600080fd5b506103a5610ec8565b6040516103b29190611409565b60405180910390f35b60056001018190806001815401808255809150506001900390600052602060002001600090919091909150557ff2984bdc0ce5f88de2f42cd8fc34fe3eddf8d42434e2ba1f537df310f4e2274b600460008381526020019081526020016000206000016004600084815260200190815260200160002060010154600460008581526020019081526020016000206002016004600086815260200190815260200160002060030154600460008781526020019081526020016000206004015460405161048a959493929190611821565b60405180910390a150565b6060600080546104a49061175a565b80601f01602080910402602001604051908101604052809291908181526020018280546104d09061175a565b801561051d5780601f106104f25761010080835404028352916020019161051d565b820191906000526020600020905b81548152906001019060200180831161050057829003601f168201915b5050505050905090565b6003600081548092919061053a906118b1565b91905055506040518060a001604052808581526020018481526020018381526020018281526020016003548152506004600060035481526020019081526020016000206000820151816000019080519060200190610599929190610f42565b506020820151816001015560408201518160020190805190602001906105c0929190610f42565b5060608201518160030155608082015181600401559050507fe3b25aa175d4abb6345ae28b959875b745e963873f0d50229dfa7100efd3b04784848484600354604051610611959493929190611424565b60405180910390a150505050565b6060600560010180548060200260200160405190810160405280929190818152602001828054801561067057602002820191906000526020600020905b81548152602001906001019080831161065c575b5050505050905090565b60058060000154905081565b60005b6005600101805490508110156106fb5781600560010182815481106106b1576106b06118fa565b5b906000526020600020015414156106e857600560010181815481106106d9576106d86118fa565b5b90600052602060002001600090555b80806106f3906118b1565b915050610689565b5050565b60046020528060005260406000206000915090508060000180546107229061175a565b80601f016020809104026020016040519081016040528092919081815260200182805461074e9061175a565b801561079b5780601f106107705761010080835404028352916020019161079b565b820191906000526020600020905b81548152906001019060200180831161077e57829003601f168201915b5050505050908060010154908060020180546107b69061175a565b80601f01602080910402602001604051908101604052809291908181526020018280546107e29061175a565b801561082f5780601f106108045761010080835404028352916020019161082f565b820191906000526020600020905b81548152906001019060200180831161081257829003601f168201915b5050505050908060030154908060040154905085565b600080546108529061175a565b80601f016020809104026020016040519081016040528092919081815260200182805461087e9061175a565b80156108cb5780601f106108a0576101008083540402835291602001916108cb565b820191906000526020600020905b8154815290600101906020018083116108ae57829003601f168201915b505050505081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600060035467ffffffffffffffff81111561094357610942611150565b5b60405190808252806020026020018201604052801561097c57816020015b610969610fc8565b8152602001906001900390816109615790505b50905060005b600354811015610b29576004600060018361099d9190611929565b81526020019081526020016000206040518060a00160405290816000820180546109c69061175a565b80601f01602080910402602001604051908101604052809291908181526020018280546109f29061175a565b8015610a3f5780601f10610a1457610100808354040283529160200191610a3f565b820191906000526020600020905b815481529060010190602001808311610a2257829003601f168201915b5050505050815260200160018201548152602001600282018054610a629061175a565b80601f0160208091040260200160405190810160405280929190818152602001828054610a8e9061175a565b8015610adb5780601f10610ab057610100808354040283529160200191610adb565b820191906000526020600020905b815481529060010190602001808311610abe57829003601f168201915b5050505050815260200160038201548152602001600482015481525050828281518110610b0b57610b0a6118fa565b5b60200260200101819052508080610b21906118b1565b915050610982565b508091505090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b5f610fc8565b600460008381526020019081526020016000206040518060a0016040529081600082018054610b8d9061175a565b80601f0160208091040260200160405190810160405280929190818152602001828054610bb99061175a565b8015610c065780601f10610bdb57610100808354040283529160200191610c06565b820191906000526020600020905b815481529060010190602001808311610be957829003601f168201915b5050505050815260200160018201548152602001600282018054610c299061175a565b80601f0160208091040260200160405190810160405280929190818152602001828054610c559061175a565b8015610ca25780601f10610c7757610100808354040283529160200191610ca2565b820191906000526020600020905b815481529060010190602001808311610c8557829003601f168201915b50505050508152602001600382015481526020016004820154815250509050919050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc349081150290604051600060405180830381858888f19350505050158015610d2e573d6000803e3d6000fd5b5060005b600560010180549050811015610ea5577ffaabebfc042be040ffe38cdbde83eb863656dec8e75ee5bcf5dc88b7fe7415886004600060056001018481548110610d7e57610d7d6118fa565b5b906000526020600020015481526020019081526020016000206000016004600060056001018581548110610db557610db46118fa565b5b90600052602060002001548152602001908152602001600020600101546004600060056001018681548110610ded57610dec6118fa565b5b906000526020600020015481526020019081526020016000206002016004600060056001018781548110610e2457610e236118fa565b5b90600052602060002001548152602001908152602001600020600301546004600060056001018881548110610e5c57610e5b6118fa565b5b9060005260206000200154815260200190815260200160002060040154604051610e8a959493929190611821565b60405180910390a18080610e9d906118b1565b915050610d32565b50565b600060046000838152602001908152602001600020600101549050919050565b6000806000905060005b600560010180549050811015610f3a576004600060056001018381548110610efd57610efc6118fa565b5b906000526020600020015481526020019081526020016000206001015482610f259190611929565b91508080610f32906118b1565b915050610ed2565b508091505090565b828054610f4e9061175a565b90600052602060002090601f016020900481019282610f705760008555610fb7565b82601f10610f8957805160ff1916838001178555610fb7565b82800160010185558215610fb7579182015b82811115610fb6578251825591602001919060010190610f9b565b5b509050610fc49190610ff7565b5090565b6040518060a0016040528060608152602001600081526020016060815260200160008152602001600081525090565b5b80821115611010576000816000905550600101610ff8565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b61103b81611028565b811461104657600080fd5b50565b60008135905061105881611032565b92915050565b6000602082840312156110745761107361101e565b5b600061108284828501611049565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156110c55780820151818401526020810190506110aa565b838111156110d4576000848401525b50505050565b6000601f19601f8301169050919050565b60006110f68261108b565b6111008185611096565b93506111108185602086016110a7565b611119816110da565b840191505092915050565b6000602082019050818103600083015261113e81846110eb565b905092915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b611188826110da565b810181811067ffffffffffffffff821117156111a7576111a6611150565b5b80604052505050565b60006111ba611014565b90506111c6828261117f565b919050565b600067ffffffffffffffff8211156111e6576111e5611150565b5b6111ef826110da565b9050602081019050919050565b82818337600083830152505050565b600061121e611219846111cb565b6111b0565b90508281526020810184848401111561123a5761123961114b565b5b6112458482856111fc565b509392505050565b600082601f83011261126257611261611146565b5b813561127284826020860161120b565b91505092915050565b600080600080608085870312156112955761129461101e565b5b600085013567ffffffffffffffff8111156112b3576112b2611023565b5b6112bf8782880161124d565b94505060206112d087828801611049565b935050604085013567ffffffffffffffff8111156112f1576112f0611023565b5b6112fd8782880161124d565b925050606061130e87828801611049565b91505092959194509250565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b61134f81611028565b82525050565b60006113618383611346565b60208301905092915050565b6000602082019050919050565b60006113858261131a565b61138f8185611325565b935061139a83611336565b8060005b838110156113cb5781516113b28882611355565b97506113bd8361136d565b92505060018101905061139e565b5085935050505092915050565b600060208201905081810360008301526113f2818461137a565b905092915050565b61140381611028565b82525050565b600060208201905061141e60008301846113fa565b92915050565b600060a082019050818103600083015261143e81886110eb565b905061144d60208301876113fa565b818103604083015261145f81866110eb565b905061146e60608301856113fa565b61147b60808301846113fa565b9695505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006114b082611485565b9050919050565b6114c0816114a5565b82525050565b60006020820190506114db60008301846114b7565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b60006115298261108b565b611533818561150d565b93506115438185602086016110a7565b61154c816110da565b840191505092915050565b600060a0830160008301518482036000860152611574828261151e565b91505060208301516115896020860182611346565b50604083015184820360408601526115a1828261151e565b91505060608301516115b66060860182611346565b5060808301516115c96080860182611346565b508091505092915050565b60006115e08383611557565b905092915050565b6000602082019050919050565b6000611600826114e1565b61160a81856114ec565b93508360208202850161161c856114fd565b8060005b85811015611658578484038952815161163985826115d4565b9450611644836115e8565b925060208a01995050600181019050611620565b50829750879550505050505092915050565b6000602082019050818103600083015261168481846115f5565b905092915050565b600060a08301600083015184820360008601526116a9828261151e565b91505060208301516116be6020860182611346565b50604083015184820360408601526116d6828261151e565b91505060608301516116eb6060860182611346565b5060808301516116fe6080860182611346565b508091505092915050565b60006020820190508181036000830152611723818461168c565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061177257607f821691505b602082108114156117865761178561172b565b5b50919050565b60008190508160005260206000209050919050565b600081546117ae8161175a565b6117b88186611096565b945060018216600081146117d357600181146117e557611818565b60ff1983168652602086019350611818565b6117ee8561178c565b60005b83811015611810578154818901526001820191506020810190506117f1565b808801955050505b50505092915050565b600060a082019050818103600083015261183b81886117a1565b905061184a60208301876113fa565b818103604083015261185c81866117a1565b905061186b60608301856113fa565b61187860808301846113fa565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006118bc82611028565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156118ef576118ee611882565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600061193482611028565b915061193f83611028565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561197457611973611882565b5b82820190509291505056fea26469706673582212203d08d16f612e27fef0d7edc30fe8ffe0ce943d6ea115ed4a620682ce20f3fef764736f6c634300080a0033";

type VendorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VendorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Vendor__factory extends ContractFactory {
  constructor(...args: VendorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _vendorName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Vendor> {
    return super.deploy(
      _owner,
      _vendorName,
      overrides || {}
    ) as Promise<Vendor>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _vendorName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _vendorName, overrides || {});
  }
  override attach(address: string): Vendor {
    return super.attach(address) as Vendor;
  }
  override connect(signer: Signer): Vendor__factory {
    return super.connect(signer) as Vendor__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VendorInterface {
    return new utils.Interface(_abi) as VendorInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Vendor {
    return new Contract(address, _abi, signerOrProvider) as Vendor;
  }
}
