import * as React from 'react';
import Layout from './../../components/layout/index';
import {withI18next} from '../../lib/withI18next';
import config from 'config';

interface Props {
  t: (val: string, val2?: any) => any;
}

export const Home: React.SFC<Props> = ({t}) =>
  <Layout title={t('home:pageTitle')} className="home-page">
    <div className="container pt-4 pb-4">
      <h1 className="title text-center pb-3">
        {t('home:title', {env: config.get('env').toUpperCase()})}
      </h1>
      <img src="static/images/the-team.jpg" className="w-100" />
    </div>
  </Layout>;

export default withI18next(['common', 'home'])(Home);
