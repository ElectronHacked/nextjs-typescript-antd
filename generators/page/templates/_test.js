/* eslint-disable no-undef */

import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import { <%= component %> } from '@root/pages/<%= nameWithLowerCase %>';

const defaultComponent = <<%= component %> t={() => {}} />;

test('<%= component %> is rendered', () => {
  expect(toJson(shallow(defaultComponent))).toMatchSnapshot();
});

/* eslint-enable no-undef */
