import React from 'react';

import { withKnobs, boolean } from '@storybook/addon-knobs';

import { PrimaryHeadline, PrimaryText, SecondaryText } from './Text';

export default {
  decorators: [withKnobs],
  title: 'Text',
};

export const primaryHeadline = () => (
  <PrimaryHeadline
    alignCenter={boolean('Align center', false)}
    alignLeft={boolean('Align left', false)}
    alignRight={boolean('Align right', false)}
  >
    Primary Headline
  </PrimaryHeadline>
);

export const primaryText = () => <PrimaryText>This is normal text</PrimaryText>;

export const secondaryText = () => (
  <SecondaryText>This is supporting text</SecondaryText>
);
