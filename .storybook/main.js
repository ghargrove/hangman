module.exports = {
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions/register',
    '@storybook/addon-links/register',
    '@storybook/addon-knobs/register',
    'storybook-addon-styled-component-theme/dist/register',
  ],
  stories: ['../src/**/*.stories.jsx'],
};
