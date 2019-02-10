import * as React from 'react';
import uuid from 'uuid/v4';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import Link from 'next/link';
import Head from './head';
import '../../styles/main.scss';

const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
}

const MainLayout: React.SFC<Props> = ({
  title,
  description,
  ogImage,
  url,
  children,
}) => (
  <>
    <Head title={title} description={description} ogImage={ogImage} url={url} />
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <MenuItem key={uuid()}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </MenuItem>
          <MenuItem key={uuid()}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </MenuItem>
          {/* new-menu-item */}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
          <Button type="primary">Primary Button</Button>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <%= displayName %> @{new Date().getFullYear()} Created by <%= fullName %>
      </Footer>
    </Layout>
  </>
);

export default MainLayout;
