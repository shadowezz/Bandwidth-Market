/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type { Aion, AionInterface } from "../../../contracts/DefiV4.sol/Aion";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blocknumber",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gaslimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "gasprice",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "schedType",
        type: "bool",
      },
    ],
    name: "ScheduleCall",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "serviceFee",
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
];

export class Aion__factory {
  static readonly abi = _abi;
  static createInterface(): AionInterface {
    return new utils.Interface(_abi) as AionInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Aion {
    return new Contract(address, _abi, signerOrProvider) as Aion;
  }
}