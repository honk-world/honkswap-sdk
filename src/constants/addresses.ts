import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const FLEXUSD_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72' // verify
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x6008247F53395E7be698249770aa1D2bfE265Ca0',  // verify
  [ChainId.SMARTBCH_AMBER]: '0x82eA7784D25Ca2d7526f8D7A9fa37B1d30b7a2a0'  
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x5d0bF8d8c8b054080E2131D8b260a5c6959411B8',  // verify
  [ChainId.SMARTBCH_AMBER]: '0x129477679C9A46fa3ed97a4FFdC407e76affF9f5'  
}

export const HONKROLL_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x719288288C7a5390206FA7F4fD51baDFd5CbF28A',  // verify
  [ChainId.SMARTBCH_AMBER]: '0x979010961acCa7684e1c479f54D72033d68b77E4'  
}

export const HONK_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xF2d4D9c65C2d1080ac9e1895F6a32045741831Cd', // verify
  [ChainId.SMARTBCH_AMBER]: '0x4693e8635011252dF8Bb689681A22Bd74c572147' 
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3A7B9D0ed49a90712da4E087b17eE4Ac1375a5D4', // verify
  [ChainId.SMARTBCH_AMBER]: '0x12b768d3469298Eed4eF4550dB4CD0dE02d6588c' 
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xC41C680c60309d4646379eD62020c534eB67b6f4', // verify
  [ChainId.SMARTBCH_AMBER]: '0x9e63D78D2542365099aC6b99702C6c7b7240Ac01' 
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7D1d91E59D1DA60E3ECC5701a4bc669Ab182DaE8', // verify
  [ChainId.SMARTBCH_AMBER]: '0xC723893965befe183d1924A2D78a4B6fC210Ef3d' 
}

export const BENTOBOX_ADDRESS: AddressMap = {}
export const KASHI_ADDRESS: AddressMap = {}
export const STOP_LIMIT_ORDER_ADDRESS: AddressMap = {}

export const WBCH_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04', // verify
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
  [ChainId.SMARTBCH]: '0x3718e9C405D0bC779870355C34fb5624196A1cAA', // verify 
  [ChainId.SMARTBCH_AMBER]: '0xAF15A45d934a83b95daCFEbaACCaED8cF97e8200', 
}

export const BORING_HELPER_ADDRESS: AddressMap = {}
