import React from 'react';

import GlobalStyles from '../../src/components/GlobalStyles';

export const withGlobalStyles = storyFn => (
  <React.Fragment>
    <GlobalStyles />
    {storyFn()}
  </React.Fragment>
);
