/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { render } from 'enzyme';
import { ActiveLink } from '@root/components/activeLink';

const defaultComponent = (
  <ActiveLink router={{ pathname: '/home' }} href="/home" className="link">
    Home
  </ActiveLink>
);

test('ActiveLink is rendered', () => {
  expect(toJson(render(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
