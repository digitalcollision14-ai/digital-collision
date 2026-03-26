/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global.style';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
    </>
  );
}

