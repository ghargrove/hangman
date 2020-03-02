import React from 'react';

import { PrimaryHeadline, PrimaryText, SecondaryText } from './Text';

export default {
  title: 'Text',
};

export const primaryHeadline = () => (
  <PrimaryHeadline>Primary Headline</PrimaryHeadline>
);

export const primaryText = () => <PrimaryText>This is normal text</PrimaryText>;

export const secondaryText = () => (
  <SecondaryText>This is supporting text</SecondaryText>
);
