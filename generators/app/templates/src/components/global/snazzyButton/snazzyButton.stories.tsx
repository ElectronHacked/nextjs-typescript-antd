import React from 'react';
import { storiesOf } from '@storybook/react';
import SnazzyButton from './index';
import { text, color, boolean, number } from '@storybook/addon-knobs/react';

storiesOf('Components|SnazzyButton', module).addWithJSX(
  'with knobs',
  () => {
    return (
      <SnazzyButton
        text={text('text', 'Hello World')}
        borderRadius={number('border radius', 6)}
        fontSize={number('font size', 15)}
        padding={text('border radius', '6px 6px')}
        background={color('background', '#f28c07')}
        disabled={boolean('disabled', false)}
      />
    );
  },
  // tslint:disable-next-line:trailing-comma
  { notes: 'A very simple component', info: { inline: true } }
);
