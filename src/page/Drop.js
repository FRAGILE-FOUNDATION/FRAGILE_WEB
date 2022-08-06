import { Row, Col } from 'antd';
import React from 'react';
import ShowCollection from '../components/ShowCollection/ShowCollection';


const Drop = () => {


  return (
    <Row>
      <Col span={14} offset={5}>
        <ShowCollection/>
      </Col>
    </Row>
  );
}

export default Drop;