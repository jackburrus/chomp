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
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "submitPaymentForShoppingCart",
    outputs: [],
    stateMutability: "payable",
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
  "0x60806040523480156200001157600080fd5b50604051620019e9380380620019e983398181016040528101906200003791906200038c565b80600090805190602001906200004f929190620000da565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555033600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000457565b828054620000e89062000421565b90600052602060002090601f0160209004810192826200010c576000855562000158565b82601f106200012757805160ff191683800117855562000158565b8280016001018555821562000158579182015b82811115620001575782518255916020019190600101906200013a565b5b5090506200016791906200016b565b5090565b5b80821115620001865760008160009055506001016200016c565b5090565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001cb826200019e565b9050919050565b620001dd81620001be565b8114620001e957600080fd5b50565b600081519050620001fd81620001d2565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000258826200020d565b810181811067ffffffffffffffff821117156200027a57620002796200021e565b5b80604052505050565b60006200028f6200018a565b90506200029d82826200024d565b919050565b600067ffffffffffffffff821115620002c057620002bf6200021e565b5b620002cb826200020d565b9050602081019050919050565b60005b83811015620002f8578082015181840152602081019050620002db565b8381111562000308576000848401525b50505050565b6000620003256200031f84620002a2565b62000283565b90508281526020810184848401111562000344576200034362000208565b5b62000351848285620002d8565b509392505050565b600082601f83011262000371576200037062000203565b5b8151620003838482602086016200030e565b91505092915050565b60008060408385031215620003a657620003a562000194565b5b6000620003b685828601620001ec565b925050602083015167ffffffffffffffff811115620003da57620003d962000199565b5b620003e88582860162000359565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043a57607f821691505b60208210811415620004515762000450620003f2565b5b50919050565b61158280620004676000396000f3fe6080604052600436106100e85760003560e01c80637acc0b201161008a578063c29b2f2011610059578063c29b2f20146102c6578063d5f39488146102f1578063e75722301461031c578063f475409f14610359576100e8565b80637acc0b201461020557806386ae747014610245578063893d20e8146102705780638da5cb5b1461029b576100e8565b8063459b01c9116100c6578063459b01c91461016a5780634b673d11146101955780636ebdac12146101c05780637753c64e146101e9576100e8565b8063125b0b34146100ed5780632bf32ec31461011657806330523e7e1461013f575b600080fd5b3480156100f957600080fd5b50610114600480360381019061010f9190610e18565b610384565b005b34801561012257600080fd5b5061013d60048036038101906101389190610e87565b610456565b005b34801561014b57600080fd5b50610154610485565b6040516101619190610f3c565b60405180910390f35b34801561017657600080fd5b5061017f610517565b60405161018c919061101c565b60405180910390f35b3480156101a157600080fd5b506101aa610572565b6040516101b7919061104d565b60405180910390f35b3480156101cc57600080fd5b506101e760048036038101906101e29190610e87565b61057e565b005b61020360048036038101906101fe9190610e87565b6105f7565b005b34801561021157600080fd5b5061022c60048036038101906102279190610e87565b6107eb565b60405161023c9493929190611068565b60405180910390f35b34801561025157600080fd5b5061025a6108a3565b6040516102679190610f3c565b60405180910390f35b34801561027c57600080fd5b50610285610931565b60405161029291906110f5565b60405180910390f35b3480156102a757600080fd5b506102b061095b565b6040516102bd91906110f5565b60405180910390f35b3480156102d257600080fd5b506102db610981565b6040516102e8919061127f565b60405180910390f35b3480156102fd57600080fd5b50610306610afd565b60405161031391906110f5565b60405180910390f35b34801561032857600080fd5b50610343600480360381019061033e9190610e87565b610b23565b604051610350919061104d565b60405180910390f35b34801561036557600080fd5b5061036e610b43565b60405161037b919061104d565b60405180910390f35b60036000815480929190610397906112d0565b9190505550604051806080016040528084815260200183815260200182815260200160035481525060046000600354815260200190815260200160002060008201518160000190805190602001906103f0929190610bbd565b506020820151816001015560408201518160020155606082015181600301559050507f9ddd3dd44e5393e7babcc1912d120d2d687d9b6402bce4423d9b050281b4f3658383836003546040516104499493929190611068565b60405180910390a1505050565b600560010181908060018154018082558091505060019003906000526020600020016000909190919091505550565b60606000805461049490611348565b80601f01602080910402602001604051908101604052809291908181526020018280546104c090611348565b801561050d5780601f106104e25761010080835404028352916020019161050d565b820191906000526020600020905b8154815290600101906020018083116104f057829003601f168201915b5050505050905090565b6060600560010180548060200260200160405190810160405280929190818152602001828054801561056857602002820191906000526020600020905b815481526020019060010190808311610554575b5050505050905090565b60058060000154905081565b60005b6005600101805490508110156105f35781600560010182815481106105a9576105a861137a565b5b906000526020600020015414156105e057600560010181815481106105d1576105d061137a565b5b90600052602060002001600090555b80806105eb906112d0565b915050610581565b5050565b6105ff610b43565b8114610640576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610637906113f5565b60405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156106a8573d6000803e3d6000fd5b5060005b6005600101805490508110156107e7577f9ddd3dd44e5393e7babcc1912d120d2d687d9b6402bce4423d9b050281b4f36560046000600560010184815481106106f8576106f761137a565b5b90600052602060002001548152602001908152602001600020600001600460006005600101858154811061072f5761072e61137a565b5b906000526020600020015481526020019081526020016000206001015460046000600560010186815481106107675761076661137a565b5b9060005260206000200154815260200190815260200160002060020154600460006005600101878154811061079f5761079e61137a565b5b90600052602060002001548152602001908152602001600020600301546040516107cc94939291906114aa565b60405180910390a180806107df906112d0565b9150506106ac565b5050565b600460205280600052604060002060009150905080600001805461080e90611348565b80601f016020809104026020016040519081016040528092919081815260200182805461083a90611348565b80156108875780601f1061085c57610100808354040283529160200191610887565b820191906000526020600020905b81548152906001019060200180831161086a57829003601f168201915b5050505050908060010154908060020154908060030154905084565b600080546108b090611348565b80601f01602080910402602001604051908101604052809291908181526020018280546108dc90611348565b80156109295780601f106108fe57610100808354040283529160200191610929565b820191906000526020600020905b81548152906001019060200180831161090c57829003601f168201915b505050505081565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6060600060035467ffffffffffffffff8111156109a1576109a0610cb7565b5b6040519080825280602002602001820160405280156109da57816020015b6109c7610c43565b8152602001906001900390816109bf5790505b50905060005b600354811015610af557600460006001836109fb91906114f6565b8152602001908152602001600020604051806080016040529081600082018054610a2490611348565b80601f0160208091040260200160405190810160405280929190818152602001828054610a5090611348565b8015610a9d5780601f10610a7257610100808354040283529160200191610a9d565b820191906000526020600020905b815481529060010190602001808311610a8057829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382015481525050828281518110610ad757610ad661137a565b5b60200260200101819052508080610aed906112d0565b9150506109e0565b508091505090565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600060046000838152602001908152602001600020600101549050919050565b6000806000905060005b600560010180549050811015610bb5576004600060056001018381548110610b7857610b7761137a565b5b906000526020600020015481526020019081526020016000206001015482610ba091906114f6565b91508080610bad906112d0565b915050610b4d565b508091505090565b828054610bc990611348565b90600052602060002090601f016020900481019282610beb5760008555610c32565b82601f10610c0457805160ff1916838001178555610c32565b82800160010185558215610c32579182015b82811115610c31578251825591602001919060010190610c16565b5b509050610c3f9190610c6b565b5090565b6040518060800160405280606081526020016000815260200160008152602001600081525090565b5b80821115610c84576000816000905550600101610c6c565b5090565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610cef82610ca6565b810181811067ffffffffffffffff82111715610d0e57610d0d610cb7565b5b80604052505050565b6000610d21610c88565b9050610d2d8282610ce6565b919050565b600067ffffffffffffffff821115610d4d57610d4c610cb7565b5b610d5682610ca6565b9050602081019050919050565b82818337600083830152505050565b6000610d85610d8084610d32565b610d17565b905082815260208101848484011115610da157610da0610ca1565b5b610dac848285610d63565b509392505050565b600082601f830112610dc957610dc8610c9c565b5b8135610dd9848260208601610d72565b91505092915050565b6000819050919050565b610df581610de2565b8114610e0057600080fd5b50565b600081359050610e1281610dec565b92915050565b600080600060608486031215610e3157610e30610c92565b5b600084013567ffffffffffffffff811115610e4f57610e4e610c97565b5b610e5b86828701610db4565b9350506020610e6c86828701610e03565b9250506040610e7d86828701610e03565b9150509250925092565b600060208284031215610e9d57610e9c610c92565b5b6000610eab84828501610e03565b91505092915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610eee578082015181840152602081019050610ed3565b83811115610efd576000848401525b50505050565b6000610f0e82610eb4565b610f188185610ebf565b9350610f28818560208601610ed0565b610f3181610ca6565b840191505092915050565b60006020820190508181036000830152610f568184610f03565b905092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610f9381610de2565b82525050565b6000610fa58383610f8a565b60208301905092915050565b6000602082019050919050565b6000610fc982610f5e565b610fd38185610f69565b9350610fde83610f7a565b8060005b8381101561100f578151610ff68882610f99565b975061100183610fb1565b925050600181019050610fe2565b5085935050505092915050565b600060208201905081810360008301526110368184610fbe565b905092915050565b61104781610de2565b82525050565b6000602082019050611062600083018461103e565b92915050565b600060808201905081810360008301526110828187610f03565b9050611091602083018661103e565b61109e604083018561103e565b6110ab606083018461103e565b95945050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006110df826110b4565b9050919050565b6110ef816110d4565b82525050565b600060208201905061110a60008301846110e6565b92915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061115882610eb4565b611162818561113c565b9350611172818560208601610ed0565b61117b81610ca6565b840191505092915050565b600060808301600083015184820360008601526111a3828261114d565b91505060208301516111b86020860182610f8a565b5060408301516111cb6040860182610f8a565b5060608301516111de6060860182610f8a565b508091505092915050565b60006111f58383611186565b905092915050565b6000602082019050919050565b600061121582611110565b61121f818561111b565b9350836020820285016112318561112c565b8060005b8581101561126d578484038952815161124e85826111e9565b9450611259836111fd565b925060208a01995050600181019050611235565b50829750879550505050505092915050565b60006020820190508181036000830152611299818461120a565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006112db82610de2565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561130e5761130d6112a1565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061136057607f821691505b6020821081141561137457611373611319565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f596f75206d757374207061792074686520657861637420616d6f756e74000000600082015250565b60006113df601d83610ebf565b91506113ea826113a9565b602082019050919050565b6000602082019050818103600083015261140e816113d2565b9050919050565b60008190508160005260206000209050919050565b6000815461143781611348565b6114418186610ebf565b9450600182166000811461145c576001811461146e576114a1565b60ff19831686526020860193506114a1565b61147785611415565b60005b838110156114995781548189015260018201915060208101905061147a565b808801955050505b50505092915050565b600060808201905081810360008301526114c4818761142a565b90506114d3602083018661103e565b6114e0604083018561103e565b6114ed606083018461103e565b95945050505050565b600061150182610de2565b915061150c83610de2565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611541576115406112a1565b5b82820190509291505056fea2646970667358221220ad7c54105a051caff59c018ccc2cb983687919f31dc4042c7e6bd845fb73be8764736f6c634300080a0033";

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
