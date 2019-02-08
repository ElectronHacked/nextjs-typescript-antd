import * as React from 'react';
import {Trans} from 'react-i18next';

export const Footer = () =>
  <footer className="footer">
    <div>
      <Trans i18nKey="common:copyright">
        Analytics Fire, 507 Homer Ave, Palo Alto, California 94301 <br /> <span>© 2016 New Dawn Analytics Inc</span>
      </Trans>
    </div>
  </footer>;

export default Footer;
