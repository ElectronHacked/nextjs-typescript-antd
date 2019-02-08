import * as React from 'react';
import Head from './head';
import '@root/styles/main.scss';
import Footer from '../footer';

interface Props extends React.HTMLAttributes<any> {
  readonly children?: React.ReactNode;
}

const Layout: React.SFC<Props> = ({title, children}) =>
  <div className="">
    <Head title={title} />
    <main>
      {children}
    </main>
    <Footer />
  </div>;

export default Layout;
