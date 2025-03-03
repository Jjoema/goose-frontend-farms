import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 37,
    risk: 5,
    lpSymbol: 'TREAT-USDC LP',
    lpAddresses: {
      97: '',
      250: '0x4f24aaddac1b93e5419caf992eeee57cfcc09644',
    },
    tokenSymbol: 'TREAT',
    tokenAddresses: {
      97: '',
      250: '0x484f2ff94a7790759D56Fb1eFbAce8075aBA5e06',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 36,
    risk: 5,
    lpSymbol: 'TREAT-FTM LP',
    lpAddresses: {
      97: '',
      250: '0x9cb99a48bf83fd724b9e94972170eeef745bc73b',
    },
    tokenSymbol: 'TREAT',
    tokenAddresses: {
      97: '',
      250: '0x484f2ff94a7790759D56Fb1eFbAce8075aBA5e06',
    },
    quoteTokenSymbol: QuoteToken.FTM,
    quoteTokenAdresses: contracts.ftm,
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'USDC-FTM LP',
    lpAddresses: {
      97: '',
      250: '0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c',
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      250: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'EGG',
    lpAddresses: {
      97: '',
      250: '0x4f24aaddac1b93e5419caf992eeee57cfcc09644', // EGG-BUSD LP
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      250: '0x484f2ff94a7790759D56Fb1eFbAce8075aBA5e06',
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  
]

export default farms
