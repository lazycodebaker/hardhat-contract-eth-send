/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../common";

export interface MockPayableInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "ETH_to_USD"
      | "getContractBalance"
      | "getConversionRate"
      | "getLatestPrice"
      | "getOwnerBalance"
      | "owner"
      | "sendViaCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "ETH_to_USD",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getContractBalance",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getConversionRate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLatestPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getOwnerBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendViaCall",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "ETH_to_USD", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getContractBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getConversionRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLatestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getOwnerBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendViaCall",
    data: BytesLike
  ): Result;
}

export interface MockPayable extends BaseContract {
  connect(runner?: ContractRunner | null): MockPayable;
  waitForDeployment(): Promise<this>;

  interface: MockPayableInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  ETH_to_USD: TypedContractMethod<[], [string], "view">;

  getContractBalance: TypedContractMethod<[], [bigint], "view">;

  getConversionRate: TypedContractMethod<[], [bigint], "view">;

  getLatestPrice: TypedContractMethod<[], [bigint], "view">;

  getOwnerBalance: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  sendViaCall: TypedContractMethod<[_to: AddressLike], [void], "payable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "ETH_to_USD"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "getContractBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getConversionRate"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getLatestPrice"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getOwnerBalance"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sendViaCall"
  ): TypedContractMethod<[_to: AddressLike], [void], "payable">;

  filters: {};
}
