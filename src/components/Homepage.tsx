import React, {useEffect} from 'react';
import millify from "millify";
import {Typography, Row, Col, Statistic} from "antd";

const {Title} = Typography

const Homepage = () => {
    return (
        <>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row gutter={[32, 32]}>
                <Col span={12}>
                    <Statistic
                        title="Total Cryptocurrencies"
                        value={5}/>
                </Col>
                <Col span={12}>
                    <Statistic
                        title="Total Exchanges"
                        value={millify(5)}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Market Cap:"
                               value={`$${millify(5)}`}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total 24h Volume"
                               value={`$${millify(5)}`}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Cryptocurrencies"
                               value={5}/>
                </Col>
                <Col span={12}>
                    <Statistic title="Total Markets"
                               value={millify(5)}/>
                </Col>
            </Row>
        </>
    );
};

export default Homepage;