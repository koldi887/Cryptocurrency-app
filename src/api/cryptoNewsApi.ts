import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {NewsApiType} from "../types/newsApiDataTypes";

const cryptoNewsHeaders = {
    'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'b9b33bf3e2msh5745505800bbc14p18a319jsn3c1aab4c26cb'
};

const createRequest = (url: string) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://bing-news-search1.p.rapidapi.com'}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query<NewsApiType, { newsCategory: string, count: number }>({
            query: ({
                        newsCategory,
                        count
                    }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        }),
    }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;