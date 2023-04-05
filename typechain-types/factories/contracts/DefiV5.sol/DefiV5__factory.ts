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
  DefiV5,
  DefiV5Interface,
} from "../../../contracts/DefiV5.sol/DefiV5";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "_links",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_timeSlots",
        type: "uint256",
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
        internalType: "uint256[][]",
        name: "bandwidthAllocated",
        type: "uint256[][]",
      },
      {
        indexed: false,
        internalType: "uint256[][]",
        name: "users",
        type: "uint256[][]",
      },
    ],
    name: "AllocateBandwidth",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "PriceUpdated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "addressMap",
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
    name: "allUsers",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "budgetAllocation",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "budgets",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "links",
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
    name: "marketPrices",
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
        name: "budget",
        type: "uint256",
      },
      {
        internalType: "uint256[][]",
        name: "targetResources",
        type: "uint256[][]",
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
        internalType: "uint256",
        name: "userId",
        type: "uint256",
      },
    ],
    name: "receiveNewAllocation",
    outputs: [],
    stateMutability: "nonpayable",
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
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "resourcesRequestedPerUser",
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
    name: "terminateRound",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeSlots",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
    name: "usersRequestedPerResource",
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

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620025c8380380620025c88339818101604052810190620000379190620005df565b336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060018190555060005b8251811015620000e7576002838281518110620000a357620000a262000645565b5b602002602001015190806001815401808255809150506001900390600052602060002001600090919091909150558080620000de90620006a3565b91505062000081565b5060006001905060005b82811015620002ee576000845167ffffffffffffffff8111156200011a576200011962000445565b5b6040519080825280602002602001820160405280156200014f57816020015b6060815260200190600190039081620001395790505b5090506000855167ffffffffffffffff81111562000172576200017162000445565b5b604051908082528060200260200182016040528015620001a15781602001602082028036833780820191505090505b50905060005b86518110156200025957600067ffffffffffffffff811115620001cf57620001ce62000445565b5b604051908082528060200260200182016040528015620001fe5781602001602082028036833780820191505090505b5083828151811062000215576200021462000645565b5b60200260200101819052508482828151811062000237576200023662000645565b5b60200260200101818152505080806200025090620006a3565b915050620001a7565b5060038190806001815401808255809150506001900390600052602060002001600090919091909150908051906020019062000297929190620002f8565b50600682908060018154018082558091505060019003906000526020600020016000909190919091509080519060200190620002d59291906200034a565b5050508080620002e590620006a3565b915050620000f1565b50505050620006f1565b82805482825590600052602060002090810192821562000337579160200282015b828111156200033657825182559160200191906001019062000319565b5b509050620003469190620003b1565b5090565b8280548282559060005260206000209081019282156200039e579160200282015b828111156200039d5782518290805190602001906200038c929190620002f8565b50916020019190600101906200036b565b5b509050620003ad9190620003d0565b5090565b5b80821115620003cc576000816000905550600101620003b2565b5090565b5b80821115620003f45760008181620003ea9190620003f8565b50600101620003d1565b5090565b5080546000825590600052602060002090810190620004189190620003b1565b50565b6000604051905090565b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6200047f8262000434565b810181811067ffffffffffffffff82111715620004a157620004a062000445565b5b80604052505050565b6000620004b66200041b565b9050620004c4828262000474565b919050565b600067ffffffffffffffff821115620004e757620004e662000445565b5b602082029050602081019050919050565b600080fd5b6000819050919050565b6200051281620004fd565b81146200051e57600080fd5b50565b600081519050620005328162000507565b92915050565b60006200054f6200054984620004c9565b620004aa565b90508083825260208201905060208402830185811115620005755762000574620004f8565b5b835b81811015620005a257806200058d888262000521565b84526020840193505060208101905062000577565b5050509392505050565b600082601f830112620005c457620005c36200042f565b5b8151620005d684826020860162000538565b91505092915050565b60008060408385031215620005f957620005f862000425565b5b600083015167ffffffffffffffff8111156200061a57620006196200042a565b5b6200062885828601620005ac565b92505060206200063b8582860162000521565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000620006b082620004fd565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415620006e657620006e562000674565b5b600182019050919050565b611ec780620007016000396000f3fe6080604052600436106100c25760003560e01c80638bc6801e1161007f578063a3c811c211610059578063a3c811c21461026d578063a91f6b48146102aa578063b588ea53146102e7578063d5b5408214610324576100c2565b80638bc6801e146101ee5780638da5cb5b1461022b5780639692b06214610256576100c2565b8063047d800f146100c75780634579a4cf146100f057806369f0e05f1461010c578063881d8a40146101495780638855fbe614610186578063898ac534146101c3575b600080fd5b3480156100d357600080fd5b506100ee60048036038101906100e991906114f6565b610361565b005b61010a6004803603810190610105919061175d565b610742565b005b34801561011857600080fd5b50610133600480360381019061012e91906114f6565b610bfd565b60405161014091906117c8565b60405180910390f35b34801561015557600080fd5b50610170600480360381019061016b91906114f6565b610c21565b60405161017d91906117c8565b60405180910390f35b34801561019257600080fd5b506101ad60048036038101906101a891906117e3565b610c45565b6040516101ba91906117c8565b60405180910390f35b3480156101cf57600080fd5b506101d8610c9b565b6040516101e591906117c8565b60405180910390f35b3480156101fa57600080fd5b5061021560048036038101906102109190611836565b610ca1565b60405161022291906117c8565b60405180910390f35b34801561023757600080fd5b50610240610cde565b60405161024d91906118b7565b60405180910390f35b34801561026257600080fd5b5061026b610d02565b005b34801561027957600080fd5b50610294600480360381019061028f9190611836565b6111f6565b6040516102a191906117c8565b60405180910390f35b3480156102b657600080fd5b506102d160048036038101906102cc91906117e3565b611233565b6040516102de91906117c8565b60405180910390f35b3480156102f357600080fd5b5061030e600480360381019061030991906118fe565b611289565b60405161031b9190611959565b60405180910390f35b34801561033057600080fd5b5061034b600480360381019061034691906117e3565b6112b8565b60405161035891906117c8565b60405180910390f35b600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082815260200190815260200160002060009054906101000a900460ff166103fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103f5906119d1565b60405180910390fd5b60008060078381548110610415576104146119f1565b5b90600052602060002001905060005b81805490508110156104ff576003828281548110610445576104446119f1565b5b90600052602060002001600081548110610462576104616119f1565b5b90600052602060002001548154811061047e5761047d6119f1565b5b9060005260206000200182828154811061049b5761049a6119f1565b5b906000526020600020016001815481106104b8576104b76119f1565b5b9060005260206000200154815481106104d4576104d36119f1565b5b9060005260206000200154836104ea9190611a4f565b925080806104f790611aa5565b915050610424565b5060005b8180549050811015610710576000828281548110610524576105236119f1565b5b90600052602060002001600081548110610541576105406119f1565b5b906000526020600020015490506000838381548110610563576105626119f1565b5b906000526020600020016001815481106105805761057f6119f1565b5b90600052602060002001549050600085600488815481106105a4576105a36119f1565b5b9060005260206000200154600385815481106105c3576105c26119f1565b5b9060005260206000200184815481106105df576105de6119f1565b5b90600052602060002001546105f49190611aee565b6105fe9190611b77565b9050600060056000858152602001908152602001600020600084815260200190815260200160002060008981526020019081526020016000205490508160056000868152602001908152602001600020600085815260200190815260200160002060008a81526020019081526020016000208190555060028381548110610688576106876119f1565b5b9060005260206000200154818361069f9190611ba8565b6106a99190611b77565b600385815481106106bd576106bc6119f1565b5b9060005260206000200184815481106106d9576106d86119f1565b5b9060005260206000200160008282546106f29190611a4f565b9250508190555050505050808061070890611aa5565b915050610503565b507f76c74e04943e98772a9411b1ccd1fa3b4d2185de1e05102a672195c18b2b0a2760405160405180910390a1505050565b81341015610785576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161077c90611c4e565b60405180910390fd5b600060048054905090506004839080600181540180825580915050600190039060005260206000200160009091909190915055600960405180604001604052803373ffffffffffffffffffffffffffffffffffffffff16815260200183815250908060018154018082558091505060019003906000526020600020016000909190919091509060026108189291906112ea565b506001600860003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600083815260200190815260200160002060006101000a81548160ff0219169083151502179055506007829080600181540180825580915050600190039060005260206000200160009091909190915090805190602001906108bd929190611337565b506000805b83518110156109905760038482815181106108e0576108df6119f1565b5b60200260200101516000815181106108fb576108fa6119f1565b5b602002602001015181548110610914576109136119f1565b5b90600052602060002001848281518110610931576109306119f1565b5b602002602001015160018151811061094c5761094b6119f1565b5b602002602001015181548110610965576109646119f1565b5b90600052602060002001548261097b9190611a4f565b9150808061098890611aa5565b9150506108c2565b506000805b8451811015610bc95760008582815181106109b3576109b26119f1565b5b60200260200101516000815181106109ce576109cd6119f1565b5b6020026020010151905060008683815181106109ed576109ec6119f1565b5b6020026020010151600181518110610a0857610a076119f1565b5b6020026020010151905060068281548110610a2657610a256119f1565b5b906000526020600020018181548110610a4257610a416119f1565b5b90600052602060002001869080600181540180825580915050600190039060005260206000200160009091909190915055600060018851610a839190611ba8565b841415610a9d578489610a969190611ba8565b9050610aff565b858960038581548110610ab357610ab26119f1565b5b906000526020600020018481548110610acf57610ace6119f1565b5b9060005260206000200154610ae49190611aee565b610aee9190611b77565b90508085610afc9190611a4f565b94505b8060056000858152602001908152602001600020600084815260200190815260200160002060008981526020019081526020016000208190555060028281548110610b4d57610b4c6119f1565b5b906000526020600020015481610b639190611b77565b60038481548110610b7757610b766119f1565b5b906000526020600020018381548110610b9357610b926119f1565b5b906000526020600020016000828254610bac9190611a4f565b925050819055505050508080610bc190611aa5565b915050610995565b507f76c74e04943e98772a9411b1ccd1fa3b4d2185de1e05102a672195c18b2b0a2760405160405180910390a15050505050565b60048181548110610c0d57600080fd5b906000526020600020016000915090505481565b60028181548110610c3157600080fd5b906000526020600020016000915090505481565b60068381548110610c5557600080fd5b906000526020600020018281548110610c6d57600080fd5b906000526020600020018181548110610c8557600080fd5b9060005260206000200160009250925050505481565b60015481565b60038281548110610cb157600080fd5b906000526020600020018181548110610cc957600080fd5b90600052602060002001600091509150505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610d90576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d8790611cba565b60405180910390fd5b6000600280549050600154610da59190611aee565b905060008167ffffffffffffffff811115610dc357610dc2611539565b5b604051908082528060200260200182016040528015610df657816020015b6060815260200190600190039081610de15790505b50905060008267ffffffffffffffff811115610e1557610e14611539565b5b604051908082528060200260200182016040528015610e4857816020015b6060815260200190600190039081610e335790505b50905060005b6001548110156111025760005b6002805490508110156110ee57600060068381548110610e7e57610e7d6119f1565b5b906000526020600020018281548110610e9a57610e996119f1565b5b9060005260206000200180549050905060008167ffffffffffffffff811115610ec657610ec5611539565b5b604051908082528060200260200182016040528015610ef45781602001602082028036833780820191505090505b50905060008267ffffffffffffffff811115610f1357610f12611539565b5b604051908082528060200260200182016040528015610f415781602001602082028036833780820191505090505b50905060005b8381101561107857600060068781548110610f6557610f646119f1565b5b906000526020600020018681548110610f8157610f806119f1565b5b906000526020600020018281548110610f9d57610f9c6119f1565b5b9060005260206000200154905060038781548110610fbe57610fbd6119f1565b5b906000526020600020018681548110610fda57610fd96119f1565b5b90600052602060002001546005600089815260200190815260200160002060008881526020019081526020016000206000838152602001908152602001600020546110259190611b77565b848381518110611038576110376119f1565b5b60200260200101818152505080838381518110611058576110576119f1565b5b60200260200101818152505050808061107090611aa5565b915050610f47565b506000846002805490508761108d9190611aee565b6110979190611a4f565b9050828882815181106110ad576110ac6119f1565b5b6020026020010181905250818782815181106110cc576110cb6119f1565b5b60200260200101819052505050505080806110e690611aa5565b915050610e5b565b5080806110fa90611aa5565b915050610e4e565b507ffc34ab54eaf4e470d6e598e6c2fc84089ec3b6c96e2757e965b42917d6cc84fa8282604051611134929190611e5a565b60405180910390a16004600061114a9190611397565b6007600061115891906113b8565b60005b6001548110156111e25760005b6002805490508110156111ce5760068281548110611189576111886119f1565b5b9060005260206000200181815481106111a5576111a46119f1565b5b9060005260206000200160006111bb9190611397565b80806111c690611aa5565b915050611168565b5080806111da90611aa5565b91505061115b565b50600960006111f191906113d9565b505050565b6009828154811061120657600080fd5b90600052602060002001818154811061121e57600080fd5b90600052602060002001600091509150505481565b6007838154811061124357600080fd5b90600052602060002001828154811061125b57600080fd5b90600052602060002001818154811061127357600080fd5b9060005260206000200160009250925050505481565b60086020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b600560205282600052604060002060205281600052604060002060205280600052604060002060009250925050505481565b828054828255906000526020600020908101928215611326579160200282015b8281111561132557825182559160200191906001019061130a565b5b50905061133391906113fa565b5090565b828054828255906000526020600020908101928215611386579160200282015b82811115611385578251829080519060200190611375929190611417565b5091602001919060010190611357565b5b5090506113939190611464565b5090565b50805460008255906000526020600020908101906113b591906113fa565b50565b50805460008255906000526020600020908101906113d69190611488565b50565b50805460008255906000526020600020908101906113f79190611464565b50565b5b808211156114135760008160009055506001016113fb565b5090565b828054828255906000526020600020908101928215611453579160200282015b82811115611452578251825591602001919060010190611437565b5b50905061146091906113fa565b5090565b5b80821115611484576000818161147b9190611397565b50600101611465565b5090565b5b808211156114a8576000818161149f91906113d9565b50600101611489565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6114d3816114c0565b81146114de57600080fd5b50565b6000813590506114f0816114ca565b92915050565b60006020828403121561150c5761150b6114b6565b5b600061151a848285016114e1565b91505092915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61157182611528565b810181811067ffffffffffffffff821117156115905761158f611539565b5b80604052505050565b60006115a36114ac565b90506115af8282611568565b919050565b600067ffffffffffffffff8211156115cf576115ce611539565b5b602082029050602081019050919050565b600080fd5b600067ffffffffffffffff821115611600576115ff611539565b5b602082029050602081019050919050565b600061162461161f846115e5565b611599565b90508083825260208201905060208402830185811115611647576116466115e0565b5b835b81811015611670578061165c88826114e1565b845260208401935050602081019050611649565b5050509392505050565b600082601f83011261168f5761168e611523565b5b813561169f848260208601611611565b91505092915050565b60006116bb6116b6846115b4565b611599565b905080838252602082019050602084028301858111156116de576116dd6115e0565b5b835b8181101561172557803567ffffffffffffffff81111561170357611702611523565b5b808601611710898261167a565b855260208501945050506020810190506116e0565b5050509392505050565b600082601f83011261174457611743611523565b5b81356117548482602086016116a8565b91505092915050565b60008060408385031215611774576117736114b6565b5b6000611782858286016114e1565b925050602083013567ffffffffffffffff8111156117a3576117a26114bb565b5b6117af8582860161172f565b9150509250929050565b6117c2816114c0565b82525050565b60006020820190506117dd60008301846117b9565b92915050565b6000806000606084860312156117fc576117fb6114b6565b5b600061180a868287016114e1565b935050602061181b868287016114e1565b925050604061182c868287016114e1565b9150509250925092565b6000806040838503121561184d5761184c6114b6565b5b600061185b858286016114e1565b925050602061186c858286016114e1565b9150509250929050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006118a182611876565b9050919050565b6118b181611896565b82525050565b60006020820190506118cc60008301846118a8565b92915050565b6118db81611896565b81146118e657600080fd5b50565b6000813590506118f8816118d2565b92915050565b60008060408385031215611915576119146114b6565b5b6000611923858286016118e9565b9250506020611934858286016114e1565b9150509250929050565b60008115159050919050565b6119538161193e565b82525050565b600060208201905061196e600083018461194a565b92915050565b600082825260208201905092915050565b7f496e76616c696420757365720000000000000000000000000000000000000000600082015250565b60006119bb600c83611974565b91506119c682611985565b602082019050919050565b600060208201905081810360008301526119ea816119ae565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611a5a826114c0565b9150611a65836114c0565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611a9a57611a99611a20565b5b828201905092915050565b6000611ab0826114c0565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611ae357611ae2611a20565b5b600182019050919050565b6000611af9826114c0565b9150611b04836114c0565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611b3d57611b3c611a20565b5b828202905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611b82826114c0565b9150611b8d836114c0565b925082611b9d57611b9c611b48565b5b828204905092915050565b6000611bb3826114c0565b9150611bbe836114c0565b925082821015611bd157611bd0611a20565b5b828203905092915050565b7f45746865722073656e74206d757374206265206174206c6561737420796f757260008201527f2062756467657400000000000000000000000000000000000000000000000000602082015250565b6000611c38602783611974565b9150611c4382611bdc565b604082019050919050565b60006020820190508181036000830152611c6781611c2b565b9050919050565b7f4f6e6c79206f776e65722063616e207465726d696e61746520726f756e640000600082015250565b6000611ca4601e83611974565b9150611caf82611c6e565b602082019050919050565b60006020820190508181036000830152611cd381611c97565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611d3b816114c0565b82525050565b6000611d4d8383611d32565b60208301905092915050565b6000602082019050919050565b6000611d7182611d06565b611d7b8185611d11565b9350611d8683611d22565b8060005b83811015611db7578151611d9e8882611d41565b9750611da983611d59565b925050600181019050611d8a565b5085935050505092915050565b6000611dd08383611d66565b905092915050565b6000602082019050919050565b6000611df082611cda565b611dfa8185611ce5565b935083602082028501611e0c85611cf6565b8060005b85811015611e485784840389528151611e298582611dc4565b9450611e3483611dd8565b925060208a01995050600181019050611e10565b50829750879550505050505092915050565b60006040820190508181036000830152611e748185611de5565b90508181036020830152611e888184611de5565b9050939250505056fea2646970667358221220f7e1ea6c142368bf6a6cbec6e9431a0404219b83ec4f9d44c8143a04a1a3a60b64736f6c63430008090033";

type DefiV5ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefiV5ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DefiV5__factory extends ContractFactory {
  constructor(...args: DefiV5ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _links: PromiseOrValue<BigNumberish>[],
    _timeSlots: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DefiV5> {
    return super.deploy(_links, _timeSlots, overrides || {}) as Promise<DefiV5>;
  }
  override getDeployTransaction(
    _links: PromiseOrValue<BigNumberish>[],
    _timeSlots: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_links, _timeSlots, overrides || {});
  }
  override attach(address: string): DefiV5 {
    return super.attach(address) as DefiV5;
  }
  override connect(signer: Signer): DefiV5__factory {
    return super.connect(signer) as DefiV5__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefiV5Interface {
    return new utils.Interface(_abi) as DefiV5Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DefiV5 {
    return new Contract(address, _abi, signerOrProvider) as DefiV5;
  }
}
