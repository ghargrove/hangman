import React from 'react';

import { PrimaryHeadline, SecondaryText } from './Text';

export default {
  title: 'Text',
};

export const primaryHeadline = () => (
  <PrimaryHeadline>Primary Headline</PrimaryHeadline>
);

export const secondaryText = () => (
  <SecondaryText>This is supporting text</SecondaryText>
);
