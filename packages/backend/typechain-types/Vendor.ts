/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export declare namespace Vendor {
  export type ProductStruct = {
    name: PromiseOrValue<string>;
    price: PromiseOrValue<BigNumberish>;
    quantity: PromiseOrValue<BigNumberish>;
    id: PromiseOrValue<BigNumberish>;
  };

  export type ProductStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber
  ] & { name: string; price: BigNumber; quantity: BigNumber; id: BigNumber };
}

export interface VendorInterface extends utils.Interface {
  functions: {
    "addProduct(string,uint256,uint256)": FunctionFragment;
    "addProductToCart(uint256)": FunctionFragment;
    "deployer()": FunctionFragment;
    "getCartProductFromListOfProducts(uint256)": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getPrice(uint256)": FunctionFragment;
    "getProducts()": FunctionFragment;
    "getProductsInCart()": FunctionFragment;
    "getTotalPrice()": FunctionFragment;
    "getVendorName()": FunctionFragment;
    "owner()": FunctionFragment;
    "products(uint256)": FunctionFragment;
    "removeProductFromCart(uint256)": FunctionFragment;
    "shoppingCart()": FunctionFragment;
    "submitPaymentForShoppingCart(uint256)": FunctionFragment;
    "vendor_name()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "addProduct"
      | "addProductToCart"
      | "deployer"
      | "getCartProductFromListOfProducts"
      | "getOwner"
      | "getPrice"
      | "getProducts"
      | "getProductsInCart"
      | "getTotalPrice"
      | "getVendorName"
      | "owner"
      | "products"
      | "removeProductFromCart"
      | "shoppingCart"
      | "submitPaymentForShoppingCart"
      | "vendor_name"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "addProduct",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "addProductToCart",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "deployer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getCartProductFromListOfProducts",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPrice",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getProducts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProductsInCart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVendorName",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "products",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "removeProductFromCart",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "shoppingCart",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "submitPaymentForShoppingCart",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "vendor_name",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "addProduct", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addProductToCart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deployer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getCartProductFromListOfProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPrice", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getProducts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductsInCart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVendorName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "products", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeProductFromCart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "shoppingCart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "submitPaymentForShoppingCart",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vendor_name",
    data: BytesLike
  ): Result;

  events: {
    "ProductAdded(string,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ProductAdded"): EventFragment;
}

export interface ProductAddedEventObject {
  name: string;
  price: BigNumber;
  quantity: BigNumber;
  id: BigNumber;
}
export type ProductAddedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  ProductAddedEventObject
>;

export type ProductAddedEventFilter = TypedEventFilter<ProductAddedEvent>;

export interface Vendor extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VendorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    addProductToCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    deployer(overrides?: CallOverrides): Promise<[string]>;

    getCartProductFromListOfProducts(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[Vendor.ProductStructOutput]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    getPrice(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getProducts(
      overrides?: CallOverrides
    ): Promise<[Vendor.ProductStructOutput[]]>;

    getProductsInCart(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getTotalPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVendorName(overrides?: CallOverrides): Promise<[string]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        name: string;
        price: BigNumber;
        quantity: BigNumber;
        id: BigNumber;
      }
    >;

    removeProductFromCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    shoppingCart(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { id: BigNumber }>;

    submitPaymentForShoppingCart(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    vendor_name(overrides?: CallOverrides): Promise<[string]>;
  };

  addProduct(
    _name: PromiseOrValue<string>,
    _price: PromiseOrValue<BigNumberish>,
    _quantity: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  addProductToCart(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  deployer(overrides?: CallOverrides): Promise<string>;

  getCartProductFromListOfProducts(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Vendor.ProductStructOutput>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  getPrice(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getProducts(overrides?: CallOverrides): Promise<Vendor.ProductStructOutput[]>;

  getProductsInCart(overrides?: CallOverrides): Promise<BigNumber[]>;

  getTotalPrice(overrides?: CallOverrides): Promise<BigNumber>;

  getVendorName(overrides?: CallOverrides): Promise<string>;

  owner(overrides?: CallOverrides): Promise<string>;

  products(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber, BigNumber] & {
      name: string;
      price: BigNumber;
      quantity: BigNumber;
      id: BigNumber;
    }
  >;

  removeProductFromCart(
    _id: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  shoppingCart(overrides?: CallOverrides): Promise<BigNumber>;

  submitPaymentForShoppingCart(
    _amount: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  vendor_name(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    addProductToCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    deployer(overrides?: CallOverrides): Promise<string>;

    getCartProductFromListOfProducts(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Vendor.ProductStructOutput>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    getPrice(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProducts(
      overrides?: CallOverrides
    ): Promise<Vendor.ProductStructOutput[]>;

    getProductsInCart(overrides?: CallOverrides): Promise<BigNumber[]>;

    getTotalPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getVendorName(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber, BigNumber] & {
        name: string;
        price: BigNumber;
        quantity: BigNumber;
        id: BigNumber;
      }
    >;

    removeProductFromCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    shoppingCart(overrides?: CallOverrides): Promise<BigNumber>;

    submitPaymentForShoppingCart(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    vendor_name(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "ProductAdded(string,uint256,uint256,uint256)"(
      name?: null,
      price?: null,
      quantity?: null,
      id?: null
    ): ProductAddedEventFilter;
    ProductAdded(
      name?: null,
      price?: null,
      quantity?: null,
      id?: null
    ): ProductAddedEventFilter;
  };

  estimateGas: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    addProductToCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    deployer(overrides?: CallOverrides): Promise<BigNumber>;

    getCartProductFromListOfProducts(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    getPrice(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProducts(overrides?: CallOverrides): Promise<BigNumber>;

    getProductsInCart(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalPrice(overrides?: CallOverrides): Promise<BigNumber>;

    getVendorName(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    removeProductFromCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    shoppingCart(overrides?: CallOverrides): Promise<BigNumber>;

    submitPaymentForShoppingCart(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    vendor_name(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addProduct(
      _name: PromiseOrValue<string>,
      _price: PromiseOrValue<BigNumberish>,
      _quantity: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    addProductToCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    deployer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCartProductFromListOfProducts(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPrice(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProducts(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProductsInCart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVendorName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    products(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    removeProductFromCart(
      _id: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    shoppingCart(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    submitPaymentForShoppingCart(
      _amount: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    vendor_name(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
