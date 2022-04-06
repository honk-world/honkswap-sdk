import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const FLEXUSD_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72',
  [ChainId.SMARTBCH_AMBER]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72'
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x34D7ffF45108De08Ca9744aCdf2e8C50AAC1C73C',  
  [ChainId.SMARTBCH_AMBER]: '0x5119E295110331061664C178415B50066a5231C0'  
}
 
export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x15Fa3A7EFd8122859473Ea3ABd1ABEAAF32f50DC',  
  [ChainId.SMARTBCH_AMBER]: '0x270f6ffBa28834EC3E30e567A6070C7bEB27C8A9'  
}

export const HONKROLL_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xA5aB09b837F6d69D936DFcE15470a2E5E8a1140a',  
  [ChainId.SMARTBCH_AMBER]: '0xEAbf5890dD379a1dB7A1b387E68dE46EF5216Af6'  
}

export const HONK_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xF2d4D9c65C2d1080ac9e1895F6a32045741831Cd', 
  [ChainId.SMARTBCH_AMBER]: '0x163F11fA69B1a012C849f796c4D41f6a3a478841' 
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xa46864318749b477bb579D924A8FDc34465163c5', 
  [ChainId.SMARTBCH_AMBER]: '0xAd8E75f3d94E41803e5F4B7bCC7513B7aE8f31a3' 
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xbE30834C394a8db13F38487d4A71f6AC26859b05', 
  [ChainId.SMARTBCH_AMBER]: '0x312b0B9F7705Abf1AbBD245A1A0a089F1c5FA042' 
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x581f3a291A7687315355aeDA1C575d376ADD7713', 
  [ChainId.SMARTBCH_AMBER]: '0x81921Ae7518B65cC8d35E10f194Ead9d0E1cdf7d' 
}

export const BENTOBOX_ADDRESS: AddressMap = {}
export const KASHI_ADDRESS: AddressMap = {}
export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {}

export const WBCH_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04', 
  [ChainId.SMARTBCH_AMBER]: '0x17F4FCF5b6E0A95D4eE331c8529041896A073F9b' 
}

export const WNATIVE_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: WBCH_ADDRESS[ChainId.SMARTBCH],
  [ChainId.SMARTBCH_AMBER]: WBCH_ADDRESS[ChainId.SMARTBCH_AMBER],
}

export const MASTERCHEF_V2_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '',
  [ChainId.SMARTBCH_AMBER]: '',
}

export const ENS_REGISTRAR_ADDRESS: AddressMap = {}

export const MULTICALL2_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3718e9C405D0bC779870355C34fb5624196A1cAA', 
  [ChainId.SMARTBCH_AMBER]: '0x22502969accD9fA4654aA87C17b44825E02BdC6a', 
}

export const BORING_HELPER_ADDRESS: AddressMap = {}
