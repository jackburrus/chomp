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

export interface VendorFactoryInterface extends utils.Interface {
  functions: {
    "createVendor(address,string)": FunctionFragment;
    "getVendors()": FunctionFragment;
    "list_of_vendors(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "createVendor" | "getVendors" | "list_of_vendors"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createVendor",
    values: [PromiseOrValue<string>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getVendors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "list_of_vendors",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createVendor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVendors", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "list_of_vendors",
    data: BytesLike
  ): Result;

  events: {
    "VendorCreated(address,address,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "VendorCreated"): EventFragment;
}

export interface VendorCreatedEventObject {
  vendor_address: string;
  owner: string;
  vendor_name: string;
}
export type VendorCreatedEvent = TypedEvent<
  [string, string, string],
  VendorCreatedEventObject
>;

export type VendorCreatedEventFilter = TypedEventFilter<VendorCreatedEvent>;

export interface VendorFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: VendorFactoryInterface;

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
    createVendor(
      _owner: PromiseOrValue<string>,
      _vendorName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getVendors(overrides?: CallOverrides): Promise<[string[]]>;

    list_of_vendors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createVendor(
    _owner: PromiseOrValue<string>,
    _vendorName: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getVendors(overrides?: CallOverrides): Promise<string[]>;

  list_of_vendors(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createVendor(
      _owner: PromiseOrValue<string>,
      _vendorName: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    getVendors(overrides?: CallOverrides): Promise<string[]>;

    list_of_vendors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {
    "VendorCreated(address,address,string)"(
      vendor_address?: null,
      owner?: null,
      vendor_name?: null
    ): VendorCreatedEventFilter;
    VendorCreated(
      vendor_address?: null,
      owner?: null,
      vendor_name?: null
    ): VendorCreatedEventFilter;
  };

  estimateGas: {
    createVendor(
      _owner: PromiseOrValue<string>,
      _vendorName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getVendors(overrides?: CallOverrides): Promise<BigNumber>;

    list_of_vendors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createVendor(
      _owner: PromiseOrValue<string>,
      _vendorName: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getVendors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    list_of_vendors(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
