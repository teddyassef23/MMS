import React from 'react';
import { DatePicker, Space } from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const DatePick = () => (
  <Space direction="vertical" size={12}>
    <DatePicker onChange={onChange} needConfirm />
  
  </Space>
);
export default DatePick;