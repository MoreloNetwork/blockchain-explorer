var config = {
    testnet: false, // this is adjusted page.h if needed. dont need to change manually
    stagenet: false, // this is adjusted page.h if needed. dont need to change manually
    coinUnitPlaces: 9,
    txMinConfirms: 4, // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
    txCoinbaseMinConfirms: 18, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
    coinSymbol: 'MRL',
    openAliasPrefix: "mrl",
    coinName: 'Morelo',
    coinUriPrefix: 'morelo:',
    addressPrefix: 0x786e, // gx...MainNET
    integratedAddressPrefix: 0x1cf46e, // mrl...MainNET
    subAddressPrefix: 0x77ee, // gxx...MainNET
    addressPrefixTestnet: 0x186d, // gg...testnet
    integratedAddressPrefixTestnet: 0x72ee, // gxa...testnet
    subAddressPrefixTestnet: 0x1132ee, // gxb...testnet
    addressPrefixStagenet: 0x36ee, // gt...stageNet
    integratedAddressPrefixStagenet: 0x1102ee, // gtx...stageNet
    subAddressPrefixStagenet: 0x41ee, // gts...stageNet
    feePerKB: new JSBigInt('20000'),//20^10 - for testnet its not used, as fee is dynamic.
    dustThreshold: new JSBigInt('10000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
    txChargeRatio: 0.5,
    defaultMixin: 11, // minimum mixin for hardfork v5
    txChargeAddress: '',
    idleTimeout: 30,
    idleWarningDuration: 20,
    maxBlockNumber: 500000000,
    avgBlockTime: 120,
    debugMode: false
};
