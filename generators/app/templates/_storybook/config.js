import { configure, setAddon, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withA11y } from '@storybook/addon-a11y';
import { withConsole } from '@storybook/addon-console';
import JSXAddon from 'storybook-addon-jsx';
import customTheme from './theme';

addDecorator(
  withInfo({
    info: {
      // Make a default for all stories in this book,
      inline: true, // where the components are inlined
      styles: {
        header: {
          h1: {
            color: 'red', // and the headers of the sections are red.
          },
        },
      },
    },
  })
);

addDecorator(withKnobs);

addDecorator(withA11y);

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

addParameters({
  backgrounds: [
    {
      name: 'Snazzy',
      value: '#f0f2f5',
      default: true,
    },
    {
      name: 'Twitter',
      value: '#00aced',
    },
    {
      name: 'Facebook',
      value: '#3b5998',
    },
  ],
  options: {
    showAddonPanel: true,
    theme: customTheme,
  },
});

setAddon(JSXAddon);

const req = require.context('../stories', true, /.stories.tsx$/);

function loadStories() {
  require('./welcomeStory');
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
