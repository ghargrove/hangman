import styled, { css } from 'styled-components';

import { onMediumScreens } from '../../Layout';

const LetterGrid = styled.div`
  cursor: pointer;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(4, 1fr);

  ${onMediumScreens(css`
    grid-template-columns: repeat(3, 1fr);
  `)}
`;

export default LetterGrid;
