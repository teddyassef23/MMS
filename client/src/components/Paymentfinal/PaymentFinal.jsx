import React from 'react';
import { Col, Row } from 'antd';
import Payment from '../../pages/Payment';
import CardComp from '../Card/Card';
const PaymentFinal = () => (
    <>
        <div className=' App'>

            <h1>Payment </h1>
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    <CardComp />
                </Col>
                <Col xs={30} sm={26} md={22} lg={4} xl={4}>

                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                    <Payment />
                </Col>
            </Row>
        </div>
    </>

);
export default PaymentFinal;