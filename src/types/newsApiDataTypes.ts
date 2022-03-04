export type NewsApiType = {
    webSearchUrl: string,
    value: NewsType[]
}

export type NewsType = {
    _type: string,
    name: string,
    url: string,
    image: NewsImageType,
    description: string,
    provider: NewsProviderType[],
    datePublished: string,
}

type NewsImageType = {
    thumbnail: {
        contentUrl: string
    }
}

type NewsProviderType = {
    image: NewsImageType
    name: string
}