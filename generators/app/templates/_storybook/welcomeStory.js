import React from 'react';
import { storiesOf } from '@storybook/react';

storiesOf('Home|Welcome', module)
  .addParameters({ options: { showAddonPanel: false } })
  .add('Home', () => <h1>Welcome to your Storybook </h1>);
