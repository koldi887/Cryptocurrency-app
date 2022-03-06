import React from 'react';
import { Chart } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';
import { CoinsHistoryApiType } from "../types/coinsHistoryApiTypes";
import 'chart.js/auto';

const { Title } = Typography;
type PropsType = {
    coinHistory: CoinsHistoryApiType | undefined
    currentPrice: string
    coinName: string | undefined
}

const LineChart: React.FC<PropsType> = ({ coinHistory, currentPrice, coinName }) => {
    const coinPrice: string[] = [];
    const coinTimestamp: string[] = [];

    if (coinHistory) {
        for (let i = 0; i < coinHistory.data.history.length; i++) {
            coinPrice.push(coinHistory.data.history[i].price);
        }

        for (let i = 0; i < coinHistory.data.history.length; i++) {
            coinTimestamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
        }
    }

    const data = {
        labels: coinTimestamp,
        datasets: [
            {
                label: 'Price In USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '#0071bd',
            },
        ],
    };

    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title">
                    {coinName} Price Chart
                </Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        Change: {coinHistory?.data?.change}%
                    </Title>
                    <Title level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
            </Row>
            <Chart type='line' data={data}/>
        </>
    );
};

export default LineChart;