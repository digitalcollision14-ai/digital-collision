import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;600;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #f8fafc;
    color: #1e293b;
    overflow-x: hidden;
  }

  h1, h2, h3, h4 {
    font-family: 'Outfit', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    font-family: inherit;
  }

  section {
    padding: 80px 20px;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    section {
      padding: 60px 15px;
    }
  }
`;
