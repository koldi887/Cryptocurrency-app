import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CoinsApiResponseType, CoinType } from "../types/coinsApiDataTypes";
import { CoinsHistoryApiType } from "../types/coinsHistoryApiTypes";
import { strict } from "assert";

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'b9b33bf3e2msh5745505800bbc14p18a319jsn3c1aab4c26cb'
};
const createRequest = (url: string) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://coinranking1.p.rapidapi.com' }),
    endpoints: (builder) => ({
        getCryptos: builder.query<CoinsApiResponseType, number>({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),

        getCryptoDetails: builder.query<{ data: { coin: CoinType } }, string | undefined>({
            query: (coinId) => createRequest(`/coin/${coinId}`),
        }),

        getCryptoHistory: builder.query<{ data: CoinsHistoryApiType[] }, { coinId: string | undefined, timeperiod: string }>({
            query: ({
                        coinId,
                        timeperiod
                    }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),

        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
    }),
});

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetExchangesQuery,
    useGetCryptoHistoryQuery,
} = cryptoApi;