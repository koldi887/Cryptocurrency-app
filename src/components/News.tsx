import React, {useState} from 'react';
import {Select, Typography, Row, Col, Avatar, Card} from "antd";
import moment from "moment";

import {useGetCryptoNewsQuery} from "../api/cryptoNewsApi";
import {PreLoader} from "../common/Preloader/Preloader";
import {useGetCryptosQuery} from "../api/cryptoApi"
import demoImage from '../images/gettyimages-917454386.jpg'

const {Text, Title} = Typography
const {Option} = Select

type PropsType = {
    simplified?: boolean
}

const News: React.FC<PropsType> = ({simplified}) => {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
    const {data} = useGetCryptosQuery(100);
    const {data: cryptoNews, isFetching} = useGetCryptoNewsQuery({
        newsCategory,
        count: simplified ? 6 : 12
    });

    if (isFetching) return <PreLoader/>
    return (
        <Row gutter={[24, 24]}>
            {!simplified && (
                <Col span={24}>
                    <Select
                        showSearch
                        className="select-news"
                        placeholder="Select a Crypto"
                        optionFilterProp="children"
                        onChange={(value) => setNewsCategory(value)}
                        value={newsCategory}
                    >
                        <Option value="Cryptocurency">Cryptocurrency</Option>
                        {data?.data.coins.map((currency,) => (
                            <Option value={currency.name} key={currency.uuid}>
                                {currency.name}
                            </Option>
                        ))}
                    </Select>
                </Col>
            )}
            {cryptoNews?.value.map((news, index) => (
                <Col xs={24} sm={12} lg={8} key={index + news.name}>
                    <Card hoverable className="news-card">
                        <a href={news.url} target="_blank" rel="noreferrer">
                            <div className="news-image-container">
                                <Title className="news-title"
                                       level={4}>{news.name}</Title>
                                <img
                                    src={news.image?.thumbnail.contentUrl || demoImage}
                                    alt=""
                                    style={{width: '100px', height: '100px'}}
                                />
                            </div>
                            <p>{news.description.length > 100
                                ? `${news.description.substring(0, 100)}...`
                                : news.description}
                            </p>
                            <div className="provider-container">
                                <div>
                                    <Avatar
                                        src={news.provider[0].image?.thumbnail.contentUrl || demoImage}
                                        alt=""
                                        style={{width: '32px', height: '32px'}}
                                    />
                                    <Text
                                        className="provider-name">{news.provider[0]?.name}</Text>
                                </div>
                                <Text>{moment(news.datePublished).startOf("minutes").fromNow()}</Text>
                            </div>
                        </a>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default News;