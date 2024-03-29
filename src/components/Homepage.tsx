import React from 'react';
import millify from "millify";
import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptosQuery } from "../api/cryptoApi";
import { Link } from "react-router-dom";
import { Cryptocurrencies, News } from "../components";
import { PreLoader } from "../common/Preloader/Preloader";

const { Title } = Typography

const Homepage = () => {
    const { data, isFetching } = useGetCryptosQuery(100)
    const globalStats = data?.data.stats

    if (isFetching) return <PreLoader/>
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies"
                               value={millify(globalStats?.total)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Exchanges"
                               value={millify(globalStats?.totalExchanges)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap:"
                               value={millify(globalStats?.totalMarketCap)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume"
                               value={millify(globalStats?.total24hVolume)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets"
                               value={millify(globalStats?.totalMarkets)}/>
                </Col>
            </Row>

            <div className='home-heading-container'>
                <Title level={2} className='home-title'>
                    Top 10 Cryptocurrencies in the world
                </Title>
                <Title level={3} className='show-more'>
                    <Link to='/cryptocurrencies'> Show More</Link>
                </Title>
            </div>
            <Cryptocurrencies simplified/>

            <div className='home-heading-container'>
                <Title level={2} className='home-title'>
                    Latest Crypto News
                </Title>
                <Title level={3} className='show-more'>
                    <Link to='/news'> Show More</Link>
                </Title>
            </div>
            <News simplified/>
        </>
    );
};

export default Homepage;