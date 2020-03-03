import React from 'react';
import { ThemeProvider } from 'styled-components';

import Directions from './components/Directions';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Layout from './components/Layout';
import RandomWordProvider from './components/RandomWordProvider';

import theme from './theme';

import GlobalStyles from './components/GlobalStyles';

const App = () => (
  <RandomWordProvider>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Layout>
        <Directions />
        <Gameboard />
        <Footer />
      </Layout>
    </ThemeProvider>
  </RandomWordProvider>
);

export default App;
