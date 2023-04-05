/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  KeeperBase,
  KeeperBaseInterface,
} from "../../../../../@chainlink/contracts/src/v0.8/KeeperBase";

const _abi = [
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea26469706673582212206aa45e942e13b175cb919aee44a1eb7e1bc7c4a0be57dc54780c2679a342faff64736f6c63430008090033";

type KeeperBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: KeeperBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class KeeperBase__factory extends ContractFactory {
  constructor(...args: KeeperBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<KeeperBase> {
    return super.deploy(overrides || {}) as Promise<KeeperBase>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): KeeperBase {
    return super.attach(address) as KeeperBase;
  }
  override connect(signer: Signer): KeeperBase__factory {
    return super.connect(signer) as KeeperBase__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): KeeperBaseInterface {
    return new utils.Interface(_abi) as KeeperBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): KeeperBase {
    return new Contract(address, _abi, signerOrProvider) as KeeperBase;
  }
}
