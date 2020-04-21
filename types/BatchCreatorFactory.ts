/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { TransactionOverrides } from ".";
import { BatchCreator } from "./BatchCreator";

export class BatchCreatorFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: TransactionOverrides): Promise<BatchCreator> {
    return super.deploy(overrides) as Promise<BatchCreator>;
  }
  getDeployTransaction(overrides?: TransactionOverrides): UnsignedTransaction {
    return super.getDeployTransaction(overrides);
  }
  attach(address: string): BatchCreator {
    return super.attach(address) as BatchCreator;
  }
  connect(signer: Signer): BatchCreatorFactory {
    return super.connect(signer) as BatchCreatorFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchCreator {
    return new Contract(address, _abi, signerOrProvider) as BatchCreator;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_contract",
        type: "address"
      }
    ],
    name: "ContractCreated",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "_bytecodes",
        type: "bytes[]"
      },
      {
        internalType: "bytes[]",
        name: "_args",
        type: "bytes[]"
      }
    ],
    name: "batchCreate",
    outputs: [
      {
        internalType: "address[]",
        name: "_contracts",
        type: "address[]"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610435806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80636df4b39214610030575b600080fd5b61004361003e366004610281565b610059565b6040516100509190610324565b60405180910390f35b606081518351146100855760405162461bcd60e51b815260040161007c90610371565b60405180910390fd5b825167ffffffffffffffff8111801561009d57600080fd5b506040519080825280602002602001820160405280156100c7578160200160208202803683370190505b50905060005b8351811015610132576101068482815181106100e557fe5b60200260200101518483815181106100f957fe5b6020026020010151610139565b82828151811061011257fe5b6001600160a01b03909216602092830291909101909101526001016100cd565b5092915050565b6000606083836040516020016101509291906102e2565b60405160208183030381529060405290508051602082016000f09150813b61017757600080fd5b7fcf78cf0d6f3d8371e1075c69c492ab4ec5d8cf23a1a239b6a51a1d00be7ca312826040516101a69190610310565b60405180910390a15092915050565b6000601f83818401126101c6578182fd5b823567ffffffffffffffff808211156101dd578384fd5b60206101ec81828502016103a8565b838152945080850186820160005b8581101561027457813589018a603f82011261021557600080fd5b848101358681111561022657600080fd5b610237818a01601f191687016103a8565b81815260408d8184860101111561024d57600080fd5b828185018984013750600091810187019190915284525091830191908301906001016101fa565b5050505050505092915050565b60008060408385031215610293578182fd5b823567ffffffffffffffff808211156102aa578384fd5b6102b6868387016101b5565b935060208501359150808211156102cb578283fd5b506102d8858286016101b5565b9150509250929050565b600083516102f48184602088016103cf565b83519083016103078282602088016103cf565b01949350505050565b6001600160a01b0391909116815260200190565b6020808252825182820181905260009190848201906040850190845b818110156103655783516001600160a01b031683529284019291840191600101610340565b50909695505050505050565b6020808252601b908201527f494e434f4e53495354454e545f42595445434f4445535f415247530000000000604082015260600190565b60405181810167ffffffffffffffff811182821017156103c757600080fd5b604052919050565b60005b838110156103ea5781810151838201526020016103d2565b838111156103f9576000848401525b5050505056fea264697066735822122049e8b95534090b83bd64edc456ccf60b32c3ff60a4050a64037039ac5f1295b864736f6c63430006060033";
