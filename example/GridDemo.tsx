import { Grid } from '$src/index';
import * as React from 'react';

const { Row, Col } = Grid;

export default function GridDemo() {
  return (
    <div>
      <Row>
        <Col span={10}>Col</Col>
        <Col span={10}>Col</Col>
        <Col span={4}>Col</Col>
      </Row>
      <Row gutter={4}>
        <Col span={10}>Col</Col>
        <Col span={10}>Col</Col>
        <Col span={4}>Col</Col>
      </Row>
      <Row>
        <Col span={4} offset={2}>Col3</Col>
        <Col span={8} push={10}>Col1</Col>
        <Col span={10} pull={8}>Col2</Col>
      </Row>
    </div>

  );
}
