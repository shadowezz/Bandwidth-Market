/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MaliciousContract,
  MaliciousContractInterface,
} from "../../../contracts/Malicious.sol/MaliciousContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_victimAddress",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "depleteFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405260405161045c38038061045c833981810160405281019061002591906100ce565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550506100fb565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061009b82610070565b9050919050565b6100ab81610090565b81146100b657600080fd5b50565b6000815190506100c8816100a2565b92915050565b6000602082840312156100e4576100e361006b565b5b60006100f2848285016100b9565b91505092915050565b6103528061010a6000396000f3fe6080604052600436106100225760003560e01c80638d762864146100fe576100f9565b366100f957600560008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163111156100f75760008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634c5eb4ea600560006040518363ffffffff1660e01b81526004016100c492919061029d565b600060405180830381600087803b1580156100de57600080fd5b505af11580156100f2573d6000803e3d6000fd5b505050505b005b600080fd5b34801561010a57600080fd5b50610113610115565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663431e4926600a806040518363ffffffff1660e01b81526004016101709190610301565b6000604051808303818588803b15801561018957600080fd5b505af115801561019d573d6000803e3d6000fd5b505050505060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634c5eb4ea600560006040518363ffffffff1660e01b81526004016101ff92919061029d565b600060405180830381600087803b15801561021957600080fd5b505af115801561022d573d6000803e3d6000fd5b50505050565b6000819050919050565b6000819050919050565b6000819050919050565b600061026c61026761026284610233565b610247565b61023d565b9050919050565b61027c81610251565b82525050565b60008115159050919050565b61029781610282565b82525050565b60006040820190506102b26000830185610273565b6102bf602083018461028e565b9392505050565b6000819050919050565b60006102eb6102e66102e1846102c6565b610247565b61023d565b9050919050565b6102fb816102d0565b82525050565b600060208201905061031660008301846102f2565b9291505056fea26469706673582212209657293f0ce0e71f4476a74b159951bf99e6def5b91b0f42c37d28506e0288e464736f6c63430008090033";

type MaliciousContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MaliciousContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MaliciousContract__factory extends ContractFactory {
  constructor(...args: MaliciousContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _victimAddress: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<MaliciousContract> {
    return super.deploy(
      _victimAddress,
      overrides || {}
    ) as Promise<MaliciousContract>;
  }
  override getDeployTransaction(
    _victimAddress: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_victimAddress, overrides || {});
  }
  override attach(address: string): MaliciousContract {
    return super.attach(address) as MaliciousContract;
  }
  override connect(signer: Signer): MaliciousContract__factory {
    return super.connect(signer) as MaliciousContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MaliciousContractInterface {
    return new utils.Interface(_abi) as MaliciousContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MaliciousContract {
    return new Contract(address, _abi, signerOrProvider) as MaliciousContract;
  }
}
