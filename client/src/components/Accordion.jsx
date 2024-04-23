import React from 'react';
import { Collapse, Space } from 'antd';
import Family from '../pages/family/Family'
import Address from '../pages/Address/Address'
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Accordion = () => (
  <Space direction="vertical">

    <Collapse

  
      collapsible="icon"
      defaultActiveKey={['1']}
      items={[
        {
          key: '1',
          label: 'List of Family',
          children: <Family/>,
        },
      ]}
    />

  </Space>
);
export default Accordion;