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
  DefiMain,
  DefiMainInterface,
} from "../../../contracts/DefiV4.sol/DefiMain";

const _abi = [
  {
    inputs: [
      {
        internalType: "int128",
        name: "_bandwidth",
        type: "int128",
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
        internalType: "int128[][48]",
        name: "bandwidthAllocated",
        type: "int128[][48]",
      },
      {
        indexed: false,
        internalType: "address[][48]",
        name: "bids",
        type: "address[][48]",
      },
    ],
    name: "AllocateBandwidth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "int128[48]",
        name: "marketPrices",
        type: "int128[48]",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isNewBid",
        type: "bool",
      },
    ],
    name: "PriceUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "agents",
    outputs: [
      {
        internalType: "contract DefiAgent",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bids",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "budgetAllocation",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getMarketPrices",
    outputs: [
      {
        internalType: "int128[48]",
        name: "",
        type: "int128[48]",
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
    name: "marketPrices",
    outputs: [
      {
        internalType: "int128",
        name: "",
        type: "int128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128",
        name: "budget",
        type: "int128",
      },
      {
        internalType: "uint256",
        name: "startSlot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endSlot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "interval",
        type: "uint256",
      },
    ],
    name: "placeBid",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "int128[]",
        name: "newAllocation",
        type: "int128[]",
      },
      {
        internalType: "uint256",
        name: "startSlot",
        type: "uint256",
      },
    ],
    name: "receiveNewAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "terminateRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620039a8380380620039a883398181016040528101906200003791906200013c565b806000806101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555060005b6030811015620000f15760018082603081106200009757620000966200016e565b5b600291828204019190066010026101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055508080620000e890620001d6565b91505062000075565b505062000224565b600080fd5b600081600f0b9050919050565b6200011681620000fe565b81146200012257600080fd5b50565b60008151905062000136816200010b565b92915050565b600060208284031215620001555762000154620000f9565b5b6000620001658482850162000125565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000819050919050565b6000620001e382620001cc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156200021957620002186200019d565b5b600182019050919050565b61377480620002346000396000f3fe608060405260043610620000865760003560e01c80637e6c587911620000555780637e6c587914620001875780637f31edf614620001cb5780639692b06214620001eb578063cd86a03c14620002055762000086565b806302241739146200008b57806314aebade14620000bb578063513856c814620000ff5780637b3c4baa1462000143575b600080fd5b3480156200009857600080fd5b50620000a362000233565b604051620000b29190620010bd565b60405180910390f35b348015620000c857600080fd5b50620000e76004803603810190620000e191906200112a565b620002a8565b604051620000f691906200116d565b60405180910390f35b3480156200010c57600080fd5b506200012b60048036038101906200012591906200112a565b620002d6565b6040516200013a919062001215565b60405180910390f35b3480156200015057600080fd5b506200016f600480360381019062000169919062001232565b62000316565b6040516200017e91906200129e565b60405180910390f35b3480156200019457600080fd5b50620001b36004803603810190620001ad9190620012ec565b62000369565b604051620001c291906200116d565b60405180910390f35b620001e96004803603810190620001e3919062001364565b6200039c565b005b348015620001f857600080fd5b50620002036200079b565b005b3480156200021257600080fd5b506200023160048036038101906200022b91906200154b565b62000a2c565b005b6200023d62000f9b565b60016030806020026040519081016040528092919082603080156200029e576020028201916000905b82829054906101000a9004600f0b600f0b81526020019060100190602082600f01049283019260010382029150808411620002665790505b5050505050905090565b60018160308110620002b957600080fd5b60029182820401919006601002915054906101000a9004600f0b81565b60798181548110620002e757600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b604982603081106200032757600080fd5b0181815481106200033757600080fd5b906000526020600020016000915091509054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b601982603081106200037a57600080fd5b016020528060005260406000206000915091509054906101000a9004600f0b81565b836fffffffffffffffffffffffffffffffff163411620003f3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003ea9062001638565b60405180910390fd5b6000846fffffffffffffffffffffffffffffffff163462000415919062001689565b8530868686604051620004289062000fbe565b62000438959493929190620016d5565b6040518091039082f090508015801562000456573d6000803e3d6000fd5b5090506079819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000808590505b8481116200052a576200051260018260308110620004e657620004e562001732565b5b600291828204019190066010029054906101000a9004600f0b83600f0b62000d5790919063ffffffff16565b91508080620005219062001761565b915050620004c3565b50600081600f0b1415620005435762000542620017af565b5b60008590505b8481116200074b576000620005b1886200059f856001866030811062000574576200057362001732565b5b600291828204019190066010029054906101000a9004600f0b600f0b62000dc090919063ffffffff16565b600f0b62000e5090919063ffffffff16565b90508060198360308110620005cb57620005ca62001732565b5b0160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055506049826030811062000659576200065862001732565b5b01849080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060018360308110620006d357620006d262001732565b5b600291828204019190066010028282829054906101000a9004600f0b620006fb9190620017de565b92506101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff160217905550508080620007429062001761565b91505062000549565b507fa77ce6082e46760650f9ad319c883539f0da13636dd20254525c0ea652dc234b60018060405162000780929190620019f8565b60405180910390a1620007938262000ebd565b505050505050565b620007a562000fcc565b60005b6030811015620009ec57600060498260308110620007cb57620007ca62001732565b5b0180549050905060008167ffffffffffffffff811115620007f157620007f0620013ec565b5b604051908082528060200260200182016040528015620008205781602001602082028036833780820191505090505b50905060005b604984603081106200083d576200083c62001732565b5b0180549050811015620009b45760006200097060008054906101000a9004600f0b6200095e6001886030811062000879576200087862001732565b5b600291828204019190066010029054906101000a9004600f0b60198960308110620008a957620008a862001732565b5b01600060498b60308110620008c357620008c262001732565b5b018881548110620008d957620008d862001732565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9004600f0b600f0b62000dc090919063ffffffff16565b600f0b62000e5090919063ffffffff16565b90508083838151811062000989576200098862001732565b5b6020026020010190600f0b9081600f0b81525050508080620009ab9062001761565b91505062000826565b5080848460308110620009cc57620009cb62001732565b5b602002018190525050508080620009e39062001761565b915050620007a8565b507f0450e134f67a6f765b9a739ed20cffd0176235bad8ea3b1e4ec4a37d2c81694381604960405162000a2192919062001d80565b60405180910390a150565b600033905060005b835181101562000d09576000818462000a4e919062001dbb565b905084828151811062000a665762000a6562001732565b5b60200260200101516019826030811062000a855762000a8462001732565b5b0160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555060006001826030811062000b155762000b1462001732565b5b600291828204019190066010026101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555060005b6049826030811062000b735762000b7262001732565b5b018054905081101562000cf15762000c806019836030811062000b9b5762000b9a62001732565b5b0160006049856030811062000bb55762000bb462001732565b5b01848154811062000bcb5762000bca62001732565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a9004600f0b6001846030811062000c555762000c5462001732565b5b600291828204019190066010029054906101000a9004600f0b600f0b62000d5790919063ffffffff16565b6001836030811062000c975762000c9662001732565b5b600291828204019190066010026101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff160217905550808062000ce89062001761565b91505062000b5c565b5050808062000d009062001761565b91505062000a34565b507fa77ce6082e46760650f9ad319c883539f0da13636dd20254525c0ea652dc234b6001600060405162000d3f929190620019f8565b60405180910390a162000d528162000ebd565b505050565b60008082600f0b84600f0b0190507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801562000dac57506f7fffffffffffffffffffffffffffffff600f0b8113155b62000db657600080fd5b8091505092915050565b60008082600f0b141562000dd357600080fd5b600082600f0b604085600f0b901b8162000df25762000df162001e18565b5b0590507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801562000e3c57506f7fffffffffffffffffffffffffffffff600f0b8113155b62000e4657600080fd5b8091505092915050565b600080604083600f0b85600f0b02901d90507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801562000ea957506f7fffffffffffffffffffffffffffffff600f0b8113155b62000eb357600080fd5b8091505092915050565b60005b60798054905081101562000f97576079818154811062000ee55762000ee462001732565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166366c690886001846040518363ffffffff1660e01b815260040162000f4d92919062001e47565b600060405180830381600087803b15801562000f6857600080fd5b505af115801562000f7d573d6000803e3d6000fd5b50505050808062000f8e9062001761565b91505062000ec0565b5050565b604051806106000160405280603090602082028036833780820191505090505090565b6118c88062001e7783390190565b6040518061060001604052806030905b606081526020019060019003908162000fdc5790505090565b600060309050919050565b600081905092915050565b6000819050919050565b600081600f0b9050919050565b6200102d8162001015565b82525050565b600062001041838362001022565b60208301905092915050565b6000602082019050919050565b620010658162000ff5565b62001071818462001000565b92506200107e826200100b565b8060005b83811015620010b557815162001099878262001033565b9650620010a6836200104d565b92505060018101905062001082565b505050505050565b600061060082019050620010d560008301846200105a565b92915050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6200110481620010ef565b81146200111057600080fd5b50565b6000813590506200112481620010f9565b92915050565b600060208284031215620011435762001142620010e5565b5b6000620011538482850162001113565b91505092915050565b620011678162001015565b82525050565b60006020820190506200118460008301846200115c565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000620011d5620011cf620011c9846200118a565b620011aa565b6200118a565b9050919050565b6000620011e982620011b4565b9050919050565b6000620011fd82620011dc565b9050919050565b6200120f81620011f0565b82525050565b60006020820190506200122c600083018462001204565b92915050565b600080604083850312156200124c576200124b620010e5565b5b60006200125c8582860162001113565b92505060206200126f8582860162001113565b9150509250929050565b600062001286826200118a565b9050919050565b620012988162001279565b82525050565b6000602082019050620012b560008301846200128d565b92915050565b620012c68162001279565b8114620012d257600080fd5b50565b600081359050620012e681620012bb565b92915050565b60008060408385031215620013065762001305620010e5565b5b6000620013168582860162001113565b92505060206200132985828601620012d5565b9150509250929050565b6200133e8162001015565b81146200134a57600080fd5b50565b6000813590506200135e8162001333565b92915050565b60008060008060808587031215620013815762001380620010e5565b5b600062001391878288016200134d565b9450506020620013a48782880162001113565b9350506040620013b78782880162001113565b9250506060620013ca8782880162001113565b91505092959194509250565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200142682620013db565b810181811067ffffffffffffffff82111715620014485762001447620013ec565b5b80604052505050565b60006200145d620010db565b90506200146b82826200141b565b919050565b600067ffffffffffffffff8211156200148e576200148d620013ec565b5b602082029050602081019050919050565b600080fd5b6000620014bb620014b58462001470565b62001451565b90508083825260208201905060208402830185811115620014e157620014e06200149f565b5b835b818110156200150e5780620014f988826200134d565b845260208401935050602081019050620014e3565b5050509392505050565b600082601f83011262001530576200152f620013d6565b5b813562001542848260208601620014a4565b91505092915050565b60008060408385031215620015655762001564620010e5565b5b600083013567ffffffffffffffff811115620015865762001585620010ea565b5b620015948582860162001518565b9250506020620015a78582860162001113565b9150509250929050565b600082825260208201905092915050565b7f45746865722073656e74206d757374206265206d6f7265207468616e2062756460008201527f6765740000000000000000000000000000000000000000000000000000000000602082015250565b600062001620602383620015b1565b91506200162d82620015c2565b604082019050919050565b60006020820190508181036000830152620016538162001611565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200169682620010ef565b9150620016a383620010ef565b925082821015620016b957620016b86200165a565b5b828203905092915050565b620016cf81620010ef565b82525050565b600060a082019050620016ec60008301886200115c565b620016fb60208301876200128d565b6200170a6040830186620016c4565b620017196060830185620016c4565b620017286080830184620016c4565b9695505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60006200176e82620010ef565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415620017a457620017a36200165a565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b6000620017eb8262001015565b9150620017f88362001015565b9250816f7fffffffffffffffffffffffffffffff038313600083121516156200182657620018256200165a565b5b817fffffffffffffffffffffffffffffffff800000000000000000000000000000000383126000831216156200186157620018606200165a565b5b828201905092915050565b600060309050919050565b6000819050919050565b60008160001c9050919050565b600081600f0b9050919050565b6000620018b2620018ac8362001881565b6200188e565b9050919050565b60008160801c9050919050565b6000620018dd620018d783620018b9565b6200188e565b9050919050565b620018ef816200186c565b620018fb818462001000565b925082620019098362001877565b600060011562001971575b83600160020382011015620019705781546200193b8762001935836200189b565b62001022565b60208701965062001957876200195183620018c6565b62001022565b6020870196506001830192505060028101905062001914565b5b600015620019d3578154600015620019a657620019998762001993836200189b565b62001022565b6020870196506001820191505b600015620019d157620019c487620019be83620018c6565b62001022565b6020870196506001820191505b505b505050505050565b60008115159050919050565b620019f281620019db565b82525050565b60006106208201905062001a106000830185620018e4565b62001a20610600830184620019e7565b9392505050565b600060309050919050565b600081905092915050565b6000819050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000602082019050919050565b600062001a8d8262001a47565b62001a99818562001a52565b935062001aa68362001a63565b8060005b8381101562001add57815162001ac1888262001033565b975062001ace8362001a73565b92505060018101905062001aaa565b5085935050505092915050565b600062001af8838362001a80565b905092915050565b6000602082019050919050565b600062001b1a8262001a27565b62001b26818562001a32565b93508360208202850162001b3a8562001a3d565b8060005b8581101562001b7c578484038952815162001b5a858262001aea565b945062001b678362001b00565b925060208a0199505060018101905062001b3e565b50829750879550505050505092915050565b600060309050919050565b600081905092915050565b6000819050919050565b600081549050919050565b600082825260208201905092915050565b60008190508160005260206000209050919050565b62001bea8162001279565b82525050565b600062001bfe838362001bdf565b60208301905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600062001c4162001c3b8362001881565b62001c0a565b9050919050565b600062001c56825462001c2a565b9050919050565b6000600182019050919050565b600062001c778262001bae565b62001c83818562001bb9565b935062001c908362001bca565b8060005b8381101562001cd05762001ca88262001c48565b62001cb4888262001bf0565b975062001cc18362001c5d565b92505060018101905062001c94565b5085935050505092915050565b600062001ceb838362001c6a565b905092915050565b6000600182019050919050565b600062001d0d8262001b8e565b62001d19818562001b99565b93508360208202850162001d2d8562001ba4565b8060005b8581101562001d6e5784840389528162001d4c858262001cdd565b945062001d598362001cf3565b925060208a0199505060018101905062001d31565b50829750879550505050505092915050565b6000604082019050818103600083015262001d9c818562001b0d565b9050818103602083015262001db2818462001d00565b90509392505050565b600062001dc882620010ef565b915062001dd583620010ef565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562001e0d5762001e0c6200165a565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006106208201905062001e5f6000830185620018e4565b62001e6f6106008301846200128d565b939250505056fe6080604052604051620018c8380380620018c8833981810160405281019062000029919062000456565b846000806101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff16021790555083600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508260028190555081600381905550600454905073cbe7ab529a147149b1cf982c3a169f728bc0c3ca600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000601e60006101000a81548160ff021916908315150217905550620001386200014360201b60201c565b5050505050620007d6565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638abdf5aa6040518163ffffffff1660e01b815260040160206040518083038186803b158015620001ae57600080fd5b505afa158015620001c3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001e99190620004de565b66071afd498d0000620001fd91906200053f565b90504781106200020e575062000371565b60007f049be38c44fe6cbc6b00d365fb24a4c40a0db089b219907187b37a58fb01b31a604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dea8dc4f83600f42620002e491906200053f565b306000621e8480633b9aca008860016040518963ffffffff1660e01b815260040162000317979695949392919062000752565b6020604051808303818588803b1580156200033157600080fd5b505af115801562000346573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906200036d9190620004de565b5050505b565b600080fd5b600081600f0b9050919050565b620003908162000378565b81146200039c57600080fd5b50565b600081519050620003b08162000385565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003e382620003b6565b9050919050565b620003f581620003d6565b81146200040157600080fd5b50565b6000815190506200041581620003ea565b92915050565b6000819050919050565b62000430816200041b565b81146200043c57600080fd5b50565b600081519050620004508162000425565b92915050565b600080600080600060a0868803121562000475576200047462000373565b5b600062000485888289016200039f565b9550506020620004988882890162000404565b9450506040620004ab888289016200043f565b9350506060620004be888289016200043f565b9250506080620004d1888289016200043f565b9150509295509295909350565b600060208284031215620004f757620004f662000373565b5b600062000507848285016200043f565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006200054c826200041b565b915062000559836200041b565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111562000591576200059062000510565b5b828201905092915050565b620005a7816200041b565b82525050565b620005b881620003d6565b82525050565b6000819050919050565b6000819050919050565b6000620005f3620005ed620005e784620005be565b620005c8565b6200041b565b9050919050565b6200060581620005d2565b82525050565b6000819050919050565b600062000636620006306200062a846200060b565b620005c8565b6200041b565b9050919050565b620006488162000615565b82525050565b6000819050919050565b600062000679620006736200066d846200064e565b620005c8565b6200041b565b9050919050565b6200068b8162000658565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015620006cd578082015181840152602081019050620006b0565b83811115620006dd576000848401525b50505050565b6000601f19601f8301169050919050565b6000620007018262000691565b6200070d81856200069c565b93506200071f818560208601620006ad565b6200072a81620006e3565b840191505092915050565b60008115159050919050565b6200074c8162000735565b82525050565b600060e08201905062000769600083018a6200059c565b620007786020830189620005ad565b620007876040830188620005fa565b6200079660608301876200063d565b620007a5608083018662000680565b81810360a0830152620007b98185620006f4565b9050620007ca60c083018462000741565b98975050505050505050565b6110e280620007e66000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c8063022417391461005c578063049be38c1461007a57806314aebade1461008457806366c69088146100b4578063a4b11015146100d0575b600080fd5b6100646100da565b6040516100719190610957565b60405180910390f35b61008261014b565b005b61009e600480360381019061009991906109b8565b610387565b6040516100ab91906109f4565b60405180910390f35b6100ce60048036038101906100c99190610be0565b6103b4565b005b6100d8610419565b005b6100e2610795565b6006603080602002604051908101604052809291908260308015610141576020028201916000905b82829054906101000a9004600f0b600f0b81526020019060100190602082600f0104928301926001038202915080841161010a5790505b5050505050905090565b6000600160025460035461015f9190610c51565b6101699190610c85565b67ffffffffffffffff81111561018257610181610a25565b5b6040519080825280602002602001820160405280156101b05781602001602082028036833780820191505090505b50905060008060025490505b600354811161021c57610207600682603081106101dc576101db610cdb565b5b600291828204019190066010029054906101000a9004600f0b83600f0b61063990919063ffffffff16565b9150808061021490610d0a565b9150506101bc565b50600081600f0b141561023257610231610d53565b5b60005b82518110156102e9576102af60008054906101000a9004600f0b61029e846006600254866102639190610c85565b6030811061027457610273610cdb565b5b600291828204019190066010029054906101000a9004600f0b600f0b6106a090919063ffffffff16565b600f0b61072a90919063ffffffff16565b8382815181106102c2576102c1610cdb565b5b6020026020010190600f0b9081600f0b8152505080806102e190610d0a565b915050610235565b50600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663cd86a03c836002546040518363ffffffff1660e01b8152600401610349929190610e28565b600060405180830381600087803b15801561036357600080fd5b505af1158015610377573d6000803e3d6000fd5b50505050610383610419565b5050565b6006816030811061039757600080fd5b60029182820401919006601002915054906101000a9004600f0b81565b8160069060306103c59291906107b8565b503073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610415576001601e60006101000a81548160ff0219169083151502179055505b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638abdf5aa6040518163ffffffff1660e01b815260040160206040518083038186803b15801561048357600080fd5b505afa158015610497573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104bb9190610e6d565b66071afd498d00006104cd9190610c85565b90504781106104dc5750610637565b60007f049be38c44fe6cbc6b00d365fb24a4c40a0db089b219907187b37a58fb01b31a604051602401604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050509050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663dea8dc4f83600f426105b09190610c85565b306000621e8480633b9aca008860016040518963ffffffff1660e01b81526004016105e19796959493929190611007565b6020604051808303818588803b1580156105fa57600080fd5b505af115801561060e573d6000803e3d6000fd5b50505050506040513d601f19601f820116820180604052508101906106339190610e6d565b5050505b565b60008082600f0b84600f0b0190507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801561068d57506f7fffffffffffffffffffffffffffffff600f0b8113155b61069657600080fd5b8091505092915050565b60008082600f0b14156106b257600080fd5b600082600f0b604085600f0b901b816106ce576106cd61107d565b5b0590507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801561071757506f7fffffffffffffffffffffffffffffff600f0b8113155b61072057600080fd5b8091505092915050565b600080604083600f0b85600f0b02901d90507fffffffffffffffffffffffffffffffff80000000000000000000000000000000600f0b811215801561078257506f7fffffffffffffffffffffffffffffff600f0b8113155b61078b57600080fd5b8091505092915050565b604051806106000160405280603090602082028036833780820191505090505090565b8260306001016002900481019282156108715791602002820160005b8382111561083357835183826101000a8154816fffffffffffffffffffffffffffffffff0219169083600f0b6fffffffffffffffffffffffffffffffff1602179055509260200192601001602081600f010492830192600103026107d4565b801561086f5782816101000a8154906fffffffffffffffffffffffffffffffff0219169055601001602081600f01049283019260010302610833565b505b50905061087e9190610882565b5090565b5b8082111561089b576000816000905550600101610883565b5090565b600060309050919050565b600081905092915050565b6000819050919050565b600081600f0b9050919050565b6108d5816108bf565b82525050565b60006108e783836108cc565b60208301905092915050565b6000602082019050919050565b6109098161089f565b61091381846108aa565b925061091e826108b5565b8060005b8381101561094f57815161093687826108db565b9650610941836108f3565b925050600181019050610922565b505050505050565b60006106008201905061096d6000830184610900565b92915050565b6000604051905090565b600080fd5b6000819050919050565b61099581610982565b81146109a057600080fd5b50565b6000813590506109b28161098c565b92915050565b6000602082840312156109ce576109cd61097d565b5b60006109dc848285016109a3565b91505092915050565b6109ee816108bf565b82525050565b6000602082019050610a0960008301846109e5565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610a5d82610a14565b810181811067ffffffffffffffff82111715610a7c57610a7b610a25565b5b80604052505050565b6000610a8f610973565b9050610a9b8282610a54565b919050565b600067ffffffffffffffff821115610abb57610aba610a25565b5b602082029050919050565b600080fd5b610ad4816108bf565b8114610adf57600080fd5b50565b600081359050610af181610acb565b92915050565b6000610b0a610b0584610aa0565b610a85565b90508060208402830185811115610b2457610b23610ac6565b5b835b81811015610b4d5780610b398882610ae2565b845260208401935050602081019050610b26565b5050509392505050565b600082601f830112610b6c57610b6b610a0f565b5b6030610b79848285610af7565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610bad82610b82565b9050919050565b610bbd81610ba2565b8114610bc857600080fd5b50565b600081359050610bda81610bb4565b92915050565b6000806106208385031215610bf857610bf761097d565b5b6000610c0685828601610b57565b925050610600610c1885828601610bcb565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c5c82610982565b9150610c6783610982565b925082821015610c7a57610c79610c22565b5b828203905092915050565b6000610c9082610982565b9150610c9b83610982565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610cd057610ccf610c22565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6000610d1582610982565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610d4857610d47610c22565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052600160045260246000fd5b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6000602082019050919050565b6000610dc682610d82565b610dd08185610d8d565b9350610ddb83610d9e565b8060005b83811015610e0c578151610df388826108db565b9750610dfe83610dae565b925050600181019050610ddf565b5085935050505092915050565b610e2281610982565b82525050565b60006040820190508181036000830152610e428185610dbb565b9050610e516020830184610e19565b9392505050565b600081519050610e678161098c565b92915050565b600060208284031215610e8357610e8261097d565b5b6000610e9184828501610e58565b91505092915050565b610ea381610ba2565b82525050565b6000819050919050565b6000819050919050565b6000610ed8610ed3610ece84610ea9565b610eb3565b610982565b9050919050565b610ee881610ebd565b82525050565b6000819050919050565b6000610f13610f0e610f0984610eee565b610eb3565b610982565b9050919050565b610f2381610ef8565b82525050565b6000819050919050565b6000610f4e610f49610f4484610f29565b610eb3565b610982565b9050919050565b610f5e81610f33565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610f9e578082015181840152602081019050610f83565b83811115610fad576000848401525b50505050565b6000610fbe82610f64565b610fc88185610f6f565b9350610fd8818560208601610f80565b610fe181610a14565b840191505092915050565b60008115159050919050565b61100181610fec565b82525050565b600060e08201905061101c600083018a610e19565b6110296020830189610e9a565b6110366040830188610edf565b6110436060830187610f1a565b6110506080830186610f55565b81810360a08301526110628185610fb3565b905061107160c0830184610ff8565b98975050505050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fdfea26469706673582212205ef109e267329447ac9abcddabc959e0af3a2bcecb16e55dbd9cf709c895cdbe64736f6c63430008090033a26469706673582212208087a2007dc073308c96a17c67b19488f14c9f367e6d40adc28047cf6f4357cf64736f6c63430008090033";

type DefiMainConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefiMainConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DefiMain__factory extends ContractFactory {
  constructor(...args: DefiMainConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _bandwidth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DefiMain> {
    return super.deploy(_bandwidth, overrides || {}) as Promise<DefiMain>;
  }
  override getDeployTransaction(
    _bandwidth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_bandwidth, overrides || {});
  }
  override attach(address: string): DefiMain {
    return super.attach(address) as DefiMain;
  }
  override connect(signer: Signer): DefiMain__factory {
    return super.connect(signer) as DefiMain__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefiMainInterface {
    return new utils.Interface(_abi) as DefiMainInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DefiMain {
    return new Contract(address, _abi, signerOrProvider) as DefiMain;
  }
}
