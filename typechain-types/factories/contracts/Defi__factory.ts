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
import type { PromiseOrValue } from "../../common";
import type { Defi, DefiInterface } from "../../contracts/Defi";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_totalBandwidth",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_reservePrice",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bandwidthAllocation",
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
        name: "",
        type: "address",
      },
    ],
    name: "bandwidthRequested",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isGuaranteed",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "timeSinceUpdate",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "costIncurred",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "checkUpkeep",
    outputs: [
      {
        internalType: "bool",
        name: "upkeepNeeded",
        type: "bool",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bandwidth",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isGuaranteed",
        type: "bool",
      },
    ],
    name: "getBandwidthPricing",
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
    name: "hasUpdate",
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
        internalType: "bytes",
        name: "performData",
        type: "bytes",
      },
    ],
    name: "performUpkeep",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bandwidth",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isGuaranteed",
        type: "bool",
      },
    ],
    name: "requestBandwidth",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "reservePrice",
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
    name: "terminateSession",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "totalBandwidth",
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
    name: "totalGuaranteedBandwidthRequested",
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
    name: "totalStandardBandwidthRequested",
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
    name: "users",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162001d9838038062001d988339818101604052810190620000379190620000b8565b8160058190555080600681905550600060048190555060006003819055506000600760006101000a81548160ff0219169083151502179055505050620000ff565b600080fd5b6000819050919050565b62000092816200007d565b81146200009e57600080fd5b50565b600081519050620000b28162000087565b92915050565b60008060408385031215620000d257620000d162000078565b5b6000620000e285828601620000a1565b9250506020620000f585828601620000a1565b9150509250929050565b611c89806200010f6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80636372ea041161008c57806395f6efd01161006657806395f6efd014610219578063db2e1eed14610249578063e3b8f7fe14610267578063f88051f214610283576100cf565b80636372ea04146101ac5780636e04ff0d146101ca5780637587bae3146101fb576100cf565b8063132b3a95146100d45780632b79c26e146100de57806333d7332d1461010e578063365b98b21461012c5780634585e33b1461015c5780634fef04b114610178575b600080fd5b6100dc6102a1565b005b6100f860048036038101906100f39190611102565b610667565b6040516101059190611151565b60405180910390f35b6101166106ef565b604051610123919061117b565b60405180910390f35b61014660048036038101906101419190611196565b610702565b6040516101539190611204565b60405180910390f35b61017660048036038101906101719190611284565b610741565b005b610192600480360381019061018d91906112fd565b61087d565b6040516101a395949392919061132a565b60405180910390f35b6101b46108c0565b6040516101c19190611151565b60405180910390f35b6101e460048036038101906101df9190611284565b6108c6565b6040516101f2929190611416565b60405180910390f35b610203610d53565b6040516102109190611151565b60405180910390f35b610233600480360381019061022e91906112fd565b610d59565b6040516102409190611151565b60405180910390f35b610251610d71565b60405161025e9190611151565b60405180910390f35b610281600480360381019061027c9190611102565b610d77565b005b61028b61107a565b6040516102989190611151565b60405180910390f35b600033905060005b600280549050811015610433578173ffffffffffffffffffffffffffffffffffffffff16600282815481106102e1576102e0611446565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610420576002600160028054905061033c91906114a4565b8154811061034d5761034c611446565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff166002828154811061038c5761038b611446565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060028054806103e6576103e56114d8565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690559055610433565b808061042b90611507565b9150506102a9565b506000808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090556000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154111561066457600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff161561057657600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001546004600082825461056a91906114a4565b925050819055506105d2565b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154600360008282546105ca91906114a4565b925050819055505b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000808201600090556001820160006101000a81549060ff021916905560028201600090556003820160009055600482016000905550506001600760006101000a81548160ff0219169083151502179055505b50565b600081156106d857600060045460055461068191906114a4565b9050600081856003546106949190611550565b8661069f91906115d5565b6106a99190611606565b90508481866006546106bb9190611606565b6106c591906115d5565b6106cf9190611606565b925050506106e9565b826006546106e69190611606565b90505b92915050565b600760009054906101000a900460ff1681565b6002818154811061071257600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600760009054906101000a900460ff1661075a57610879565b6000828281019061076b91906118f3565b9050806020015151816000015151146107b9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b0906119bf565b60405180910390fd5b60005b81600001515181101561085b57816020015181815181106107e0576107df611446565b5b60200260200101516000808460000151848151811061080257610801611446565b5b602002602001015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550808061085390611507565b9150506107bc565b506000600760006101000a81548160ff021916908315150217905550505b5050565b60016020528060005260406000206000915090508060000154908060010160009054906101000a900460ff16908060020154908060030154908060040154905085565b60055481565b60006060600760009054906101000a900460ff166108f95760006040518060200160405280600081525091509150610d4c565b6000600280548060200260200160405190810160405280929190818152602001828054801561097d57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610933575b50505050509050600060028054905067ffffffffffffffff8111156109a5576109a4611665565b5b6040519080825280602002602001820160405280156109d35781602001602082028036833780820191505090505b5090506005546004541115610ade5760006003546004546109f49190611550565b905060005b600280549050811015610ad7576000600554836001600060028681548110610a2457610a23611446565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154610a9791906115d5565b610aa19190611606565b905080848381518110610ab757610ab6611446565b5b602002602001018181525050508080610acf90611507565b9150506109f9565b5050610d0f565b6000600454600554610af091906114a4565b905060005b600280549050811015610d0c576001600060028381548110610b1a57610b19611446565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160009054906101000a900460ff1615610c3a576001600060028381548110610bad57610bac611446565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154838281518110610c2957610c28611446565b5b602002602001018181525050610cf9565b6000826003546001600060028681548110610c5857610c57611446565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000154610ccb91906115d5565b610cd59190611606565b905080848381518110610ceb57610cea611446565b5b602002602001018181525050505b8080610d0490611507565b915050610af5565b50505b6001604051806040016040528084815260200183815250604051602001610d369190611b9f565b6040516020818303038152906040529350935050505b9250929050565b60045481565b60006020528060005260406000206000915090505481565b60065481565b60008211610dba576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610db190611c33565b60405180910390fd5b6000610dc68383610667565b90506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600001541415610f2f576002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506040518060a0016040528084815260200183151581526020014281526020018281526020016000815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160020155606082015181600301556080820151816004015590505061105a565b6000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506000816002015442610f8491906114a4565b8260030154610f939190611606565b8260040154610fa29190611550565b90506040518060a00160405280868152602001851515815260200142815260200184815260200182815250600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000820151816000015560208201518160010160006101000a81548160ff02191690831515021790555060408201518160020155606082015181600301556080820151816004015590505050505b6001600760006101000a81548160ff021916908315150217905550505050565b60035481565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6110a781611094565b81146110b257600080fd5b50565b6000813590506110c48161109e565b92915050565b60008115159050919050565b6110df816110ca565b81146110ea57600080fd5b50565b6000813590506110fc816110d6565b92915050565b600080604083850312156111195761111861108a565b5b6000611127858286016110b5565b9250506020611138858286016110ed565b9150509250929050565b61114b81611094565b82525050565b60006020820190506111666000830184611142565b92915050565b611175816110ca565b82525050565b6000602082019050611190600083018461116c565b92915050565b6000602082840312156111ac576111ab61108a565b5b60006111ba848285016110b5565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006111ee826111c3565b9050919050565b6111fe816111e3565b82525050565b600060208201905061121960008301846111f5565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126112445761124361121f565b5b8235905067ffffffffffffffff81111561126157611260611224565b5b60208301915083600182028301111561127d5761127c611229565b5b9250929050565b6000806020838503121561129b5761129a61108a565b5b600083013567ffffffffffffffff8111156112b9576112b861108f565b5b6112c58582860161122e565b92509250509250929050565b6112da816111e3565b81146112e557600080fd5b50565b6000813590506112f7816112d1565b92915050565b6000602082840312156113135761131261108a565b5b6000611321848285016112e8565b91505092915050565b600060a08201905061133f6000830188611142565b61134c602083018761116c565b6113596040830186611142565b6113666060830185611142565b6113736080830184611142565b9695505050505050565b600081519050919050565b600082825260208201905092915050565b60005b838110156113b757808201518184015260208101905061139c565b838111156113c6576000848401525b50505050565b6000601f19601f8301169050919050565b60006113e88261137d565b6113f28185611388565b9350611402818560208601611399565b61140b816113cc565b840191505092915050565b600060408201905061142b600083018561116c565b818103602083015261143d81846113dd565b90509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006114af82611094565b91506114ba83611094565b9250828210156114cd576114cc611475565b5b828203905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b600061151282611094565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561154557611544611475565b5b600182019050919050565b600061155b82611094565b915061156683611094565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561159b5761159a611475565b5b828201905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006115e082611094565b91506115eb83611094565b9250826115fb576115fa6115a6565b5b828204905092915050565b600061161182611094565b915061161c83611094565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561165557611654611475565b5b828202905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61169d826113cc565b810181811067ffffffffffffffff821117156116bc576116bb611665565b5b80604052505050565b60006116cf611080565b90506116db8282611694565b919050565b600080fd5b600067ffffffffffffffff821115611700576116ff611665565b5b602082029050602081019050919050565b600061172461171f846116e5565b6116c5565b9050808382526020820190506020840283018581111561174757611746611229565b5b835b81811015611770578061175c88826112e8565b845260208401935050602081019050611749565b5050509392505050565b600082601f83011261178f5761178e61121f565b5b813561179f848260208601611711565b91505092915050565b600067ffffffffffffffff8211156117c3576117c2611665565b5b602082029050602081019050919050565b60006117e76117e2846117a8565b6116c5565b9050808382526020820190506020840283018581111561180a57611809611229565b5b835b81811015611833578061181f88826110b5565b84526020840193505060208101905061180c565b5050509392505050565b600082601f8301126118525761185161121f565b5b81356118628482602086016117d4565b91505092915050565b60006040828403121561188157611880611660565b5b61188b60406116c5565b9050600082013567ffffffffffffffff8111156118ab576118aa6116e0565b5b6118b78482850161177a565b600083015250602082013567ffffffffffffffff8111156118db576118da6116e0565b5b6118e78482850161183d565b60208301525092915050565b6000602082840312156119095761190861108a565b5b600082013567ffffffffffffffff8111156119275761192661108f565b5b6119338482850161186b565b91505092915050565b600082825260208201905092915050565b7f5573657273206c656e67746820616e6420616c6c6f636174696f6e206c656e6760008201527f7468206d7573742062652073616d650000000000000000000000000000000000602082015250565b60006119a9602f8361193c565b91506119b48261194d565b604082019050919050565b600060208201905081810360008301526119d88161199c565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611a14816111e3565b82525050565b6000611a268383611a0b565b60208301905092915050565b6000602082019050919050565b6000611a4a826119df565b611a5481856119ea565b9350611a5f836119fb565b8060005b83811015611a90578151611a778882611a1a565b9750611a8283611a32565b925050600181019050611a63565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b611ad281611094565b82525050565b6000611ae48383611ac9565b60208301905092915050565b6000602082019050919050565b6000611b0882611a9d565b611b128185611aa8565b9350611b1d83611ab9565b8060005b83811015611b4e578151611b358882611ad8565b9750611b4083611af0565b925050600181019050611b21565b5085935050505092915050565b60006040830160008301518482036000860152611b788282611a3f565b91505060208301518482036020860152611b928282611afd565b9150508091505092915050565b60006020820190508181036000830152611bb98184611b5b565b905092915050565b7f5265717565737465642062616e647769647468206d757374206265206d6f726560008201527f207468616e203000000000000000000000000000000000000000000000000000602082015250565b6000611c1d60278361193c565b9150611c2882611bc1565b604082019050919050565b60006020820190508181036000830152611c4c81611c10565b905091905056fea2646970667358221220de5a74a72b0093e2d7695070c6b58f9a769af11aebbf60426be6830a24cd4b9664736f6c63430008090033";

type DefiConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DefiConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Defi__factory extends ContractFactory {
  constructor(...args: DefiConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _totalBandwidth: PromiseOrValue<BigNumberish>,
    _reservePrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Defi> {
    return super.deploy(
      _totalBandwidth,
      _reservePrice,
      overrides || {}
    ) as Promise<Defi>;
  }
  override getDeployTransaction(
    _totalBandwidth: PromiseOrValue<BigNumberish>,
    _reservePrice: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _totalBandwidth,
      _reservePrice,
      overrides || {}
    );
  }
  override attach(address: string): Defi {
    return super.attach(address) as Defi;
  }
  override connect(signer: Signer): Defi__factory {
    return super.connect(signer) as Defi__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DefiInterface {
    return new utils.Interface(_abi) as DefiInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Defi {
    return new Contract(address, _abi, signerOrProvider) as Defi;
  }
}