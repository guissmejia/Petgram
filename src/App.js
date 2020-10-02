import React from 'react';
import { Logo } from './components/Logo';
import { Home } from './pages/Home';
import { Router } from '@reach/router';
import { GlobalStyle } from './styles/GlobalStyles';
import { Detail } from './pages/Detail';

export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
    </div>
  );
};
