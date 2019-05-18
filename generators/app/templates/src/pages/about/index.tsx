import React from 'react';
import Layout from 'components/global/layout';
import './styles.scss';

export const About = () => (
  <Layout title="About Us" description="This is About Page">
    <p className="about-page">
      This is the <strong>About Us</strong> page
    </p>
  </Layout>
);

export default About;
