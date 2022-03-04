export type CoinsApiResponseType = {
    data: {
        coins: CoinsTypes[]
        stats: StatsType
    }
}

export type CoinsTypes = {
    "24hVolume": string,
    btcPrice: string,
    change: string,
    coinrankingUrl: string,
    color: string,
    iconUrl: string,
    listedAt: number,
    lowVolume: boolean,
    marketCap: string,
    name: string,
    price: string,
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