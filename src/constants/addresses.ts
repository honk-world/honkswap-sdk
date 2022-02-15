import { AddressMap } from '../types'
import { ChainId } from '../enums'

export const FLEXUSD_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72' 
}

export const FACTORY_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xaB37aC1583C319d785788E35005f25BDb7BA8550',  
  [ChainId.SMARTBCH_AMBER]: '0x581f3a291A7687315355aeDA1C575d376ADD7713'  
}

export const ROUTER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xdaAe035e76550497A35715a2c9A5b0Cc1aa95b1B',  
  [ChainId.SMARTBCH_AMBER]: '0xE2C3Db2Ab87AcD13715F5eb1ee5fc9DbFC732180'  
}

export const HONKROLL_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x5487B0BeD06DB0e9635bB2c6D37638809f5bf8ca',  
  [ChainId.SMARTBCH_AMBER]: '0xf3bC3A9ef16DFB442a0fec21e03E724942Fa5B7d'  
}

export const HONK_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xF2d4D9c65C2d1080ac9e1895F6a32045741831Cd', 
  [ChainId.SMARTBCH_AMBER]: '0xA5aB09b837F6d69D936DFcE15470a2E5E8a1140a' 
}

export const MASTERCHEF_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x5c1f095f96A89a13e586bD3CcC932C17ec8B0CB0', 
  [ChainId.SMARTBCH_AMBER]: '0xe38932C546879e67843E1eB64fd4415EbA4BD6b4' 
}

export const BAR_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0xC723893965befe183d1924A2D78a4B6fC210Ef3d', 
  [ChainId.SMARTBCH_AMBER]: '0xcCA9e67D376c4d3976e8256790C47CEab5868aac' 
}

export const MAKER_ADDRESS: AddressMap = {
  [ChainId.SMARTBCH]: '0x6737e748D3FdBD751b127124246907e445466fBF', 
  [ChainId.SMARTBCH_AMBER]: '0x6b8e07a998694a50D8b36a14A311941DFC178D25' 
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
  [ChainId.SMARTBCH_AMBER]: '0xAF15A45d934a83b95daCFEbaACCaED8cF97e8200', 
}

export const BORING_HELPER_ADDRESS: AddressMap = {}
