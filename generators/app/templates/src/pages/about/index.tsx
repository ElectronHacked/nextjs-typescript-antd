import * as React from 'react';
import Layout from './../../components/layout/index';
import {withI18next} from '../../lib/withI18next';

interface Props {
  t: (val: string) => any;
}

export const About: React.SFC<Props> = ({t}) =>
  <Layout title={t('about:pageTitle')} className="about-page">
    <div className="container pt-4 pb-4">
      <h1 className="title text-center pb-3">
        {t('about:title')}
      </h1>
      <blockquote className="blockquote text-center">
        {t('about:goal')}
      </blockquote>
      <p className="text-center">
        {t('about:how')}
      </p>
    </div>
  </Layout>;

export default withI18next(['common', 'about'])(About);
