import { addDecorator } from '@storybook/react';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import theme from '../src/theme';
import { withGlobalStyles } from './decorators/withGlobalStyles';

addDecorator(withGlobalStyles);
addDecorator(withThemesProvider([theme]));
