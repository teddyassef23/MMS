import React from 'react';
import { Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, Member) => console.log(Member?._id, value);
const SearchCom = () => (
  <Space direction="vertical">

  
    {/* <Search placeholder="input search text" onSearch={onSearch} enterButton /> */}
    <Search
      placeholder="input search text"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch()}
    />

  </Space>
);
export default SearchCom;