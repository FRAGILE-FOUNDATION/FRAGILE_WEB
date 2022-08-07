import { Row, Col } from 'antd';
import React from 'react';
import ShowCollection from '../components/ShowCollection/ShowCollection';
import DropLeaderboard from '../components/DropLeaderboard/DropLeaderboard';


const Drop = () => {


  return (
    <>
      <Row>
        <Col span={14} offset={5}>
          <ShowCollection/>
        </Col>
      </Row>
      <DropLeaderboard/>
    </>
    
  );
}

export default Drop;