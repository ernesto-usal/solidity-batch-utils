/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface BatchCallerInterface extends Interface {
  functions: {
    batchCalls: TypedFunctionDescription<{
      encode([_calls]: [{ recipient: string; data: Arrayish }[]]): string;
    }>;
  };

  events: {};
}

export class BatchCaller extends Contract {
  connect(signerOrProvider: Signer | Provider | string): BatchCaller;
  attach(addressOrName: string): BatchCaller;
  deployed(): Promise<BatchCaller>;

  on(event: EventFilter | string, listener: Listener): BatchCaller;
  once(event: EventFilter | string, listener: Listener): BatchCaller;
  addListener(eventName: EventFilter | string, listener: Listener): BatchCaller;
  removeAllListeners(eventName: EventFilter | string): BatchCaller;
  removeListener(eventName: any, listener: Listener): BatchCaller;

  interface: BatchCallerInterface;

  functions: {
    batchCalls(
      _calls: { recipient: string; data: Arrayish }[]
    ): Promise<{ success: boolean; data: string }[]>;
  };

  batchCalls(
    _calls: { recipient: string; data: Arrayish }[]
  ): Promise<{ success: boolean; data: string }[]>;

  filters: {};

  estimate: {
    batchCalls(
      _calls: { recipient: string; data: Arrayish }[]
    ): Promise<BigNumber>;
  };
}