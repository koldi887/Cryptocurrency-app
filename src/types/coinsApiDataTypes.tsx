export type CoinsApiResponseType = {
    data: {
        coins: CoinType[]
        stats: StatsType
    }
}

export type CoinType = {
    uuid: string,
    ['24hVolume']: string,
    allTimeHigh: {
        price: number
        timestamp: number
    },
    numberOfExchanges: number,
    numberOfMarkets: number,
    supply: {
        circulating: number,
        confirmed: boolean
        total: number
    }
    description: string
    slug: string,
    links: [ {
        name: string
        url: string
        type: string
    } ]
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