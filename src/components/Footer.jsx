import React from 'react';

import styled from 'styled-components';

import { Link } from './Generic';

const FooterContainer = styled.footer`
  gridcolumn: 1 / -1;
`;

const Footer = () => (
  <FooterContainer>
    built by <Link href="https://github.com/ghargrove">ghargrove</Link>
  </FooterContainer>
);

export default Footer;
