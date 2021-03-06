import { ChainId } from '../enums'
import JSBI from 'jsbi'

export * from './addresses'
export * from './kashi'
export * from './natives'
export * from './numbers'
export * from './tokens'

export const INIT_CODE_HASH: { [chainId: number]: string } = {
  [ChainId.SMARTBCH]:       '0x28d8756968641faf7a2f839c3d5edd45fd7c65319c0488ccb1c455a4d851cd80',
  [ChainId.SMARTBCH_AMBER]: '0x28d8756968641faf7a2f839c3d5edd45fd7c65319c0488ccb1c455a4d851cd80',
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}

export const LAMBDA_URL = 'https://9epjsvomc4.execute-api.us-east-1.amazonaws.com/dev'

export const SOCKET_URL = 'wss://hfimt374ge.execute-api.us-east-1.amazonaws.com/dev'
