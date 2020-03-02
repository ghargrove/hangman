import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: ${props => props.theme.spacing.medium};
  margin: 0 auto;
  max-width: 1200px;
  padding: ${props => props.theme.spacing.large} 0;
`;

export default Layout;
