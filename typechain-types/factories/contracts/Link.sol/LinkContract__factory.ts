/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  LinkContract,
  LinkContractInterface,
} from "../../../contracts/Link.sol/LinkContract";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "initialTokenSupply",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_linkCapacity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_timeInterval",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "tokenName",
        type: "string",
      },
      {
        internalType: "string",
        name: "tokenSymbol",
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
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address[]",
        name: "users",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
    ],
    name: "TokensReallocated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "originalValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "TotalBidChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
    ],
    name: "acceptNewBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "allocateBandwidth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "currentTimestamp",
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
    name: "currentTotalBid",
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
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getUserCurrentBid",
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
    name: "hasUserBidded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "linkCapacity",
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
    name: "name",
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
    name: "previousTotalBid",
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
    name: "symbol",
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
    name: "timeInterval",
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
    name: "totalSupply",
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newBid",
        type: "uint256",
      },
    ],
    name: "updateBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002b1f38038062002b1f8339818101604052810190620000379190620004b3565b81818160039080519060200190620000519291906200022b565b5080600490805190602001906200006a9291906200022b565b5050504260078190555083600681905550826008819055506200009430866200009f60201b60201c565b505050505062000741565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141562000112576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001099062000600565b60405180910390fd5b62000126600083836200022160201b60201c565b80600560008282546200013a919062000651565b9250508190555080600d6000600754815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051620002019190620006bf565b60405180910390a36200021d600083836200022660201b60201c565b5050565b505050565b505050565b82805462000239906200070b565b90600052602060002090601f0160209004810192826200025d5760008555620002a9565b82601f106200027857805160ff1916838001178555620002a9565b82800160010185558215620002a9579182015b82811115620002a85782518255916020019190600101906200028b565b5b509050620002b89190620002bc565b5090565b5b80821115620002d7576000816000905550600101620002bd565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6200030481620002ef565b81146200031057600080fd5b50565b6000815190506200032481620002f9565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200037f8262000334565b810181811067ffffffffffffffff82111715620003a157620003a062000345565b5b80604052505050565b6000620003b6620002db565b9050620003c4828262000374565b919050565b600067ffffffffffffffff821115620003e757620003e662000345565b5b620003f28262000334565b9050602081019050919050565b60005b838110156200041f57808201518184015260208101905062000402565b838111156200042f576000848401525b50505050565b60006200044c6200044684620003c9565b620003aa565b9050828152602081018484840111156200046b576200046a6200032f565b5b62000478848285620003ff565b509392505050565b600082601f8301126200049857620004976200032a565b5b8151620004aa84826020860162000435565b91505092915050565b600080600080600060a08688031215620004d257620004d1620002e5565b5b6000620004e28882890162000313565b9550506020620004f58882890162000313565b9450506040620005088882890162000313565b935050606086015167ffffffffffffffff8111156200052c576200052b620002ea565b5b6200053a8882890162000480565b925050608086015167ffffffffffffffff8111156200055e576200055d620002ea565b5b6200056c8882890162000480565b9150509295509295909350565b600082825260208201905092915050565b7f42616e647769647468546f6b656e3a206d696e7420746f20746865207a65726f60008201527f2061646472657373000000000000000000000000000000000000000000000000602082015250565b6000620005e860288362000579565b9150620005f5826200058a565b604082019050919050565b600060208201905081810360008301526200061b81620005d9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200065e82620002ef565b91506200066b83620002ef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620006a357620006a262000622565b5b828201905092915050565b620006b981620002ef565b82525050565b6000602082019050620006d66000830184620006ae565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200072457607f821691505b602082108114156200073b576200073a620006dc565b5b50919050565b6123ce80620007516000396000f3fe60806040526004361061012a5760003560e01c806370a08231116100ab578063a457c2d71161006f578063a457c2d7146103de578063a6d1c3c51461041b578063a9059cbb14610446578063c419dc1314610483578063d5a7128b1461049a578063dd62ed3e146104c55761012a565b806370a08231146102f55780637cffaf2e146103325780638f5164381461035d57806395d89b41146103885780639ff077bd146103b35761012a565b8063313ce567116100f2578063313ce5671461022a578063395093511461025557806343129de114610292578063431e4926146102ae5780636d27e2c9146102ca5761012a565b806306fdde031461012f578063095ea7b31461015a57806318160ddd146101975780631e2ff94f146101c257806323b872dd146101ed575b600080fd5b34801561013b57600080fd5b50610144610502565b6040516101519190611668565b60405180910390f35b34801561016657600080fd5b50610181600480360381019061017c9190611723565b610594565b60405161018e919061177e565b60405180910390f35b3480156101a357600080fd5b506101ac6105b7565b6040516101b991906117a8565b60405180910390f35b3480156101ce57600080fd5b506101d76105c1565b6040516101e491906117a8565b60405180910390f35b3480156101f957600080fd5b50610214600480360381019061020f91906117c3565b6105c7565b604051610221919061177e565b60405180910390f35b34801561023657600080fd5b5061023f6105f6565b60405161024c9190611832565b60405180910390f35b34801561026157600080fd5b5061027c60048036038101906102779190611723565b6105fb565b604051610289919061177e565b60405180910390f35b6102ac60048036038101906102a7919061184d565b610632565b005b6102c860048036038101906102c3919061184d565b6108ab565b005b3480156102d657600080fd5b506102df610ac1565b6040516102ec919061177e565b60405180910390f35b34801561030157600080fd5b5061031c6004803603810190610317919061187a565b610b0b565b60405161032991906117a8565b60405180910390f35b34801561033e57600080fd5b50610347610b67565b60405161035491906117a8565b60405180910390f35b34801561036957600080fd5b50610372610b6d565b60405161037f91906117a8565b60405180910390f35b34801561039457600080fd5b5061039d610b73565b6040516103aa9190611668565b60405180910390f35b3480156103bf57600080fd5b506103c8610c05565b6040516103d591906117a8565b60405180910390f35b3480156103ea57600080fd5b5061040560048036038101906104009190611723565b610c0b565b604051610412919061177e565b60405180910390f35b34801561042757600080fd5b50610430610c82565b60405161043d91906117a8565b60405180910390f35b34801561045257600080fd5b5061046d60048036038101906104689190611723565b610c88565b60405161047a919061177e565b60405180910390f35b34801561048f57600080fd5b50610498610cab565b005b3480156104a657600080fd5b506104af610fa6565b6040516104bc91906117a8565b60405180910390f35b3480156104d157600080fd5b506104ec60048036038101906104e791906118a7565b610fed565b6040516104f991906117a8565b60405180910390f35b60606003805461051190611916565b80601f016020809104026020016040519081016040528092919081815260200182805461053d90611916565b801561058a5780601f1061055f5761010080835404028352916020019161058a565b820191906000526020600020905b81548152906001019060200180831161056d57829003601f168201915b5050505050905090565b60008061059f611074565b90506105ac81858561107c565b600191505092915050565b6000600554905090565b60075481565b6000806105d2611074565b90506105df858285611247565b6105ea8585856112d3565b60019150509392505050565b600090565b600080610606611074565b90506106278185856106188589610fed565b6106229190611977565b61107c565b600191505092915050565b60003390506000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414156106ba576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106b190611a19565b60405180910390fd5b600082116106fd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106f490611a85565b60405180910390fd5b6000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808314156107505750506108a8565b808311156107aa5780836107649190611aa5565b34146107a5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161079c90611b25565b60405180910390fd5b610809565b600083826107b89190611aa5565b905060008390508073ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050158015610805573d6000803e3d6000fd5b5050505b82600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508281600a5461085c9190611aa5565b6108669190611977565b600a819055507f2f9b5f6ba5c3228e4c15404d4995dba2b6c85e1c54d3a0e7546b85fbafb4e264818460405161089d929190611b45565b60405180910390a150505b50565b600033905060003490506000600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610937576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092e90611bba565b60405180910390fd5b6000831161097a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097190611a85565b60405180910390fd5b8083146109bc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109b390611b25565b60405180910390fd5b600b829080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600c60008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506000600a54905060008482610a789190611977565b905080600a819055507f2f9b5f6ba5c3228e4c15404d4995dba2b6c85e1c54d3a0e7546b85fbafb4e2648282604051610ab2929190611b45565b60405180910390a15050505050565b600080600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541415905090565b6000600d6000600754815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60065481565b60085481565b606060048054610b8290611916565b80601f0160208091040260200160405190810160405280929190818152602001828054610bae90611916565b8015610bfb5780601f10610bd057610100808354040283529160200191610bfb565b820191906000526020600020905b815481529060010190602001808311610bde57829003601f168201915b5050505050905090565b600a5481565b600080610c16611074565b90506000610c248286610fed565b905083811015610c69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c6090611c4c565b60405180910390fd5b610c76828686840361107c565b60019250505092915050565b60095481565b600080610c93611074565b9050610ca08185856112d3565b600191505092915050565b6000429050600854600754610cc09190611977565b811015610d02576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cf990611cb8565b60405180910390fd5b6000600b80549050905060008167ffffffffffffffff811115610d2857610d27611cd8565b5b604051908082528060200260200182016040528015610d565781602001602082028036833780820191505090505b50905060005b82811015610f40576000600b8281548110610d7a57610d79611d07565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1690506000600c60008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205490506000600a5460055483610dfe9190611d36565b610e089190611dbf565b905080600d600089815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080858581518110610e7357610e72611d07565b5b6020026020010181815250506000600c60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508273ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610f2291906117a8565b60405180910390a35050508080610f3890611df0565b915050610d5c565b507f70ea83d1324fb25ba2c1d12b6ce2857d2d5c3d50278b8f242b864eccc8717900600b82604051610f7392919061201b565b60405180910390a182600781905550600a546009819055506000600a81905550600b6000610fa19190611591565b505050565b6000600c60003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156110ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e3906120c4565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561115c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161115390612156565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161123a91906117a8565b60405180910390a3505050565b60006112538484610fed565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146112cd57818110156112bf576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016112b6906121c2565b60405180910390fd5b6112cc848484840361107c565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611343576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133a90612254565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156113b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113aa906122e6565b60405180910390fd5b6113be838383611587565b6000600d6000600754815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611458576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161144f90612378565b60405180910390fd5b818103600d6000600754815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600d6000600754815260200190815260200160002060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8460405161156e91906117a8565b60405180910390a361158184848461158c565b50505050565b505050565b505050565b50805460008255906000526020600020908101906115af91906115b2565b50565b5b808211156115cb5760008160009055506001016115b3565b5090565b600081519050919050565b600082825260208201905092915050565b60005b838110156116095780820151818401526020810190506115ee565b83811115611618576000848401525b50505050565b6000601f19601f8301169050919050565b600061163a826115cf565b61164481856115da565b93506116548185602086016115eb565b61165d8161161e565b840191505092915050565b60006020820190508181036000830152611682818461162f565b905092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006116ba8261168f565b9050919050565b6116ca816116af565b81146116d557600080fd5b50565b6000813590506116e7816116c1565b92915050565b6000819050919050565b611700816116ed565b811461170b57600080fd5b50565b60008135905061171d816116f7565b92915050565b6000806040838503121561173a5761173961168a565b5b6000611748858286016116d8565b92505060206117598582860161170e565b9150509250929050565b60008115159050919050565b61177881611763565b82525050565b6000602082019050611793600083018461176f565b92915050565b6117a2816116ed565b82525050565b60006020820190506117bd6000830184611799565b92915050565b6000806000606084860312156117dc576117db61168a565b5b60006117ea868287016116d8565b93505060206117fb868287016116d8565b925050604061180c8682870161170e565b9150509250925092565b600060ff82169050919050565b61182c81611816565b82525050565b60006020820190506118476000830184611823565b92915050565b6000602082840312156118635761186261168a565b5b60006118718482850161170e565b91505092915050565b6000602082840312156118905761188f61168a565b5b600061189e848285016116d8565b91505092915050565b600080604083850312156118be576118bd61168a565b5b60006118cc858286016116d8565b92505060206118dd858286016116d8565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061192e57607f821691505b60208210811415611942576119416118e7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611982826116ed565b915061198d836116ed565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156119c2576119c1611948565b5b828201905092915050565b7f496e76616c69642073656e646572000000000000000000000000000000000000600082015250565b6000611a03600e836115da565b9150611a0e826119cd565b602082019050919050565b60006020820190508181036000830152611a32816119f6565b9050919050565b7f426964206d75737420626520706f736974697665000000000000000000000000600082015250565b6000611a6f6014836115da565b9150611a7a82611a39565b602082019050919050565b60006020820190508181036000830152611a9e81611a62565b9050919050565b6000611ab0826116ed565b9150611abb836116ed565b925082821015611ace57611acd611948565b5b828203905092915050565b7f496e636f727265637420616d6f756e742073656e740000000000000000000000600082015250565b6000611b0f6015836115da565b9150611b1a82611ad9565b602082019050919050565b60006020820190508181036000830152611b3e81611b02565b9050919050565b6000604082019050611b5a6000830185611799565b611b676020830184611799565b9392505050565b7f557365722068617320616c726561647920626964646564000000000000000000600082015250565b6000611ba46017836115da565b9150611baf82611b6e565b602082019050919050565b60006020820190508181036000830152611bd381611b97565b9050919050565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000611c366025836115da565b9150611c4182611bda565b604082019050919050565b60006020820190508181036000830152611c6581611c29565b9050919050565b7f43757272656e7420726f756e6420686173206e6f7420656e6465640000000000600082015250565b6000611ca2601b836115da565b9150611cad82611c6c565b602082019050919050565b60006020820190508181036000830152611cd181611c95565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000611d41826116ed565b9150611d4c836116ed565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d8557611d84611948565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611dca826116ed565b9150611dd5836116ed565b925082611de557611de4611d90565b5b828204905092915050565b6000611dfb826116ed565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e2e57611e2d611948565b5b600182019050919050565b600081549050919050565b600082825260208201905092915050565b60008190508160005260206000209050919050565b611e73816116af565b82525050565b6000611e858383611e6a565b60208301905092915050565b60008160001c9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611ed1611ecc83611e91565b611e9e565b9050919050565b6000611ee48254611ebe565b9050919050565b6000600182019050919050565b6000611f0382611e39565b611f0d8185611e44565b9350611f1883611e55565b8060005b83811015611f5057611f2d82611ed8565b611f378882611e79565b9750611f4283611eeb565b925050600181019050611f1c565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611f92816116ed565b82525050565b6000611fa48383611f89565b60208301905092915050565b6000602082019050919050565b6000611fc882611f5d565b611fd28185611f68565b9350611fdd83611f79565b8060005b8381101561200e578151611ff58882611f98565b975061200083611fb0565b925050600181019050611fe1565b5085935050505092915050565b600060408201905081810360008301526120358185611ef8565b905081810360208301526120498184611fbd565b90509392505050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b60006120ae6024836115da565b91506120b982612052565b604082019050919050565b600060208201905081810360008301526120dd816120a1565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006121406022836115da565b915061214b826120e4565b604082019050919050565b6000602082019050818103600083015261216f81612133565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b60006121ac601d836115da565b91506121b782612176565b602082019050919050565b600060208201905081810360008301526121db8161219f565b9050919050565b7f42616e647769647468546f6b656e3a207472616e736665722066726f6d20746860008201527f65207a65726f2061646472657373000000000000000000000000000000000000602082015250565b600061223e602e836115da565b9150612249826121e2565b604082019050919050565b6000602082019050818103600083015261226d81612231565b9050919050565b7f42616e647769647468546f6b656e3a207472616e7366657220746f207468652060008201527f7a65726f20616464726573730000000000000000000000000000000000000000602082015250565b60006122d0602c836115da565b91506122db82612274565b604082019050919050565b600060208201905081810360008301526122ff816122c3565b9050919050565b7f42616e647769647468546f6b656e3a207472616e7366657220616d6f756e742060008201527f657863656564732062616c616e63650000000000000000000000000000000000602082015250565b6000612362602f836115da565b915061236d82612306565b604082019050919050565b6000602082019050818103600083015261239181612355565b905091905056fea264697066735822122029829b747f0fa4d49cc49df67196b7d45c23cbb5ada353887f0a827b610466cd64736f6c63430008090033";

type LinkContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LinkContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LinkContract__factory extends ContractFactory {
  constructor(...args: LinkContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initialTokenSupply: PromiseOrValue<BigNumberish>,
    _linkCapacity: PromiseOrValue<BigNumberish>,
    _timeInterval: PromiseOrValue<BigNumberish>,
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LinkContract> {
    return super.deploy(
      initialTokenSupply,
      _linkCapacity,
      _timeInterval,
      tokenName,
      tokenSymbol,
      overrides || {}
    ) as Promise<LinkContract>;
  }
  override getDeployTransaction(
    initialTokenSupply: PromiseOrValue<BigNumberish>,
    _linkCapacity: PromiseOrValue<BigNumberish>,
    _timeInterval: PromiseOrValue<BigNumberish>,
    tokenName: PromiseOrValue<string>,
    tokenSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initialTokenSupply,
      _linkCapacity,
      _timeInterval,
      tokenName,
      tokenSymbol,
      overrides || {}
    );
  }
  override attach(address: string): LinkContract {
    return super.attach(address) as LinkContract;
  }
  override connect(signer: Signer): LinkContract__factory {
    return super.connect(signer) as LinkContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LinkContractInterface {
    return new utils.Interface(_abi) as LinkContractInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LinkContract {
    return new Contract(address, _abi, signerOrProvider) as LinkContract;
  }
}
