import * as React from 'react';
import uuid from 'uuid/v4';
import { Layout, Menu, Breadcrumb } from 'antd';
import Link from 'next/link';
import Head from './head';
import NProgress from 'components/global/customNProgress';
import { compose } from 'recompose';
import { withRouter, RouterProps } from 'next/router';
import '../../../styles/main.scss';

const { Header, Content, Footer } = Layout;
const MenuItem = Menu.Item;

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
  readonly description?: string;
  readonly ogImage?: string;
  readonly url?: string;
  readonly router?: RouterProps;
}

const activeClass = 'ant-menu-item-selected';

const MainLayout: React.SFC<Props> = ({
  title,
  description,
  ogImage,
  url,
  router,
  children,
}) => {
  const { asPath } = router;

  return (
    <>
      <NProgress />
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
            <MenuItem
              key={uuid()}
              className={asPath === '/' ? activeClass : ''}
            >
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItem>

            <MenuItem
              key={uuid()}
              className={asPath === '/about' ? activeClass : ''}
            >
              <Link href="/about">
                <a>About Us</a>
              </Link>
            </MenuItem>

            <MenuItem
              key={uuid()}
              className={asPath === '/posts' ? activeClass : ''}
            >
              <Link href="/posts">
                <a>Posts</a>
              </Link>
            </MenuItem>

            {/* new-menu-item */}
          </Menu>
        </Header>
        <Content>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="content-body">
            {children}
          </div>
        </Content>
        <Footer>
          <%= displayName %> @{new Date().getFullYear()} Created by <%= fullName %>
        </Footer>
      </Layout>
    </>
  );
}

export default compose<Props, Props>(withRouter)(MainLayout);
