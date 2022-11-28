import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --white: #FFF;

    --gray-900: #111827;
    --gray-800: #1F2937;
    --gray-700: #374151;
    --gray-600: #4B5563;
    --gray-500: #6B7280;
    --gray-400: #9CA3AF;
    --gray-300: #D1D5DB;
    --gray-200: #E5E7EB;
    --gray-100: #F3F4F6;
    --gray-050: #F9FAFB;

    --blue-900: #233876;
    --blue-800: #1E429F;
    --blue-700: #1A56DB;
    --blue-600: #1C64F2;
    --blue-500: #3F83F8;
    --blue-400: #76A9FA;
    --blue-300: #A4CAFE;
    --blue-200: #C3DDFD;
    --blue-100: #E1EFFE;
    --blue-050: #EBF5FF;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--gray-100);
  }

  body, input, button, textarea, li, ul, h1, h2, h3, h4, h5, h6, span, text, p{
    font-family: 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
