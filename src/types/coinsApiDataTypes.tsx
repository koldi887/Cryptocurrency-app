export type CoinsApiResponseType = {
    data: {
        coins: CoinType[]
        stats: StatsType
    }
}

export type CoinType = {
    uuid: string,
    "24hVolume": string,
    btcPrice: number,
    change: number,
    coinrankingUrl: string,
    color: string,
    iconUrl: string,
    listedAt: number,
    lowVolume: boolean,
    marketCap: number,
    name: string,
    price: number,
    rank: number,
}

export type StatsType = {
    total: number
    total24hVolume: number
    totalCoins: number
    totalExchanges: number
    totalMarketCap: number
    totalMarkets: number
}