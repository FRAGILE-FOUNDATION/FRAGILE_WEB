import { Avatar, Row } from 'antd';
import React from 'react'

const Contributor = ({number, address, nfts = {}})=> {

    const contributorType = 'Rhodium contributor'; // Need to be replace by a function in the future
    nfts.render = (<div></div>); // Need to be replace by a function in the future
    const amount = 1; // Need to be replace by a function in the future
    
    return (
        <Row>
            <Col span={2}>#{number}</Col>
            <Col span={2}>
                <Avatar/>
            </Col>
            <Col span={10}>
                <div>{address}</div>
                <div>{contributorType}</div>
            </Col>
            <Col>
                {nfts.render}
            </Col>
            <Col>
                <img/>
                <div>{amount}</div>
            </Col>

        </Row>
    )
}

export default Contributor;
