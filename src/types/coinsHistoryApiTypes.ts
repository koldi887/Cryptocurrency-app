export type CoinsHistoryApiType = {
    data: {
        change: string
        history: [
            {
                price: string
                timestamp: number
            }
        ]
    }
}