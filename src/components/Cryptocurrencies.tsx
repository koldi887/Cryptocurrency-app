import React, { ChangeEvent, useEffect, useState } from 'react';
import millify from "millify";
import { Link } from 'react-router-dom'
import { Card, Col, Input, Row } from 'antd'

import { useGetCryptosQuery } from "../api/cryptoApi";
import { PreLoader } from "../common/Preloader/Preloader";
import { CoinType } from "../types/coinsApiDataTypes";

type PropsType = {
    simplified?: boolean
}

const Cryptocurrencies: React.FC<PropsType> = ({ simplified }) => {
    const count = simplified ? 10 : 100
    const { data: cryptosList, isFetching } = useGetCryptosQuery(count)
    const [ cryptos, setCryptos ] = useState<CoinType[] | undefined>([])
    const [ searchTerm, setSearchTerm ] = useState('')

    useEffect(() => {
        const filteredData = cryptosList?.data.coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))

        setCryptos(filteredData)
    }, [ cryptosList, searchTerm ])

    const searchHandler
        = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value)
    }

    if (isFetching) return <PreLoader/>
    return (
        <>
            {!simplified &&
                <div className='search-crypto'>
                    <Input placeholder='Search Cryptocurrency'
                           onChange={searchHandler}/>
                </div>
            }
            <Row gutter={[ 32, 32 ]} className='crypto-card-container'>
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6}
                         className='crypto-card'
                         key={currency.uuid}
                    >
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                extra={<img className='crypto-image'
                                            src={currency.iconUrl}/>}
                                hoverable
                            >
                                <p>Price: {millify(currency.price)}</p>
                                <p>Market Cap: {millify(currency.marketCap)}</p>
                                <p>Daily Change: {millify(currency.change)}%</p>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Cryptocurrencies;