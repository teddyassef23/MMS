import React, { useState} from 'react';
import { Link } from 'react-router-dom';

import { DollarCircleOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import {  Layout, Menu, theme , Table, Row, Col, Space} from 'antd';
// import MemberForm from './Form';
// import Detail from '../../components/Accordion.jsx';
import './style.css';
import { useQuery, gql } from '@apollo/client'; 
const { Content, Sider } = Layout;
import { GET_ALL_MEMBERS } from '../../utils/mutations.js'; 
import "./MemberForm.css";



// const items = [
//   {
//     key: 'sub1',
//     label: 'Member',
//     icon: <UserOutlined />,
//     children: [
//       { key: '3', label: 'Members', url: '/members' },
//       { key: '4', label: 'Add New', url: '/add-member' },
//       { key: '5', label: 'Edit', url: '/edit' },
//     ],
//   },
//   {
//     key: 'sub2',
//     label: 'Payment',
//     icon: <DollarCircleOutlined />,
//     children: [
//       { key: '6', label: 'New payment', url: '/new-payment' },
//       { key: '8', label: 'Check Status', url: '/check-status' },
//     ],
//   },
//   {
//     key: 'sub3',
//     label: 'Setting',
//     icon: <SettingOutlined />,
//     url: '/settings',
//   },
// ];

const Member = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { loading, error, data } = useQuery(GET_ALL_MEMBERS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const renderMenuItems = (menuItems) =>
    menuItems.map((item) => {
      if (item.children) {
        return (
          <Menu.SubMenu key={item.key} icon={item.icon} title={item.label}>
            {renderMenuItems(item.children)}
          </Menu.SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <a href={item.url}>{item.label}</a>
        </Menu.Item>
      );
    });
    const columns = [
      {
        title: 'Member Number',
        dataIndex: 'memberNumber',
        key: 'memberNumber',
      },
      {
        title: 'First Name',
        dataIndex: 'firstName',
        key: 'firstName',
      },
      {
        title: 'Last Name',
        dataIndex: 'lastName',
        key: 'lastName',
      },
      {
        title: 'Baptismal Name',
        dataIndex: 'baptismalName',
        key: 'baptismalName',
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
      },
      {
        title: 'Start Date',
        dataIndex: 'startDate',
        key: 'startDate',
        render: (startDate) => new Date(parseInt(startDate)).toLocaleDateString(),
      },
      {
        title: 'End Date',
        dataIndex: 'endDate',
        key: 'endDate',
        render: (endDate) => new Date(parseInt(endDate)).toLocaleDateString(),
      },
      {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
      },
      {
        title: 'Primary Phone',
        dataIndex: 'primaryPhone',
        key: 'primaryPhone',
      },
      {
        title: 'Action',
        key: 'action',
        // render: (text, record) => (
        //   <Space size="middle">
        //     <Link to={`/edit-member/${record._id}`}>Edit</Link>
        // <Link to={`/delete/${record._id}`}>Delete</Link>

        //   </Space>
        // ),
      },

      // Add more columns as needed
    ];
    
  return (
    <Layout className='App'>
    <div className='container'>
      <Row gutter={[24, 24]}>
        {/* Left Sidebar - Uncomment if needed */}
        <Col span={6}> 
          <Sider className="sideMenu" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
            <div className="demo-logo-vertical " />
            <Menu theme="dark" className="sideMenu" defaultSelectedKeys={['1']} mode="inline">
              {/* {renderMenuItems(items)} */}
            </Menu>
          </Sider>
        </Col>
        <Col span={24}>
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Table dataSource={data.getAllMembers} columns={columns} />
            </div>
          </Content>
        </Col>
      </Row>
    </div> 
  </Layout>
  );
};

export default Member;
