import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --color-brand-600: #4f46e5;

    --color-green-700: #7ccf88;

    --border-radius-tiny: 3px;
    --border-radius-sm: 5px;
    --border-radius-md: 7px;
    --border-radius-lg: 9px;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: var(--color-grey-700);
    min-height: 100vh;
    line-height: 1.5;
  }

  div[id="root"] {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex-grow: 1;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: 1px solid var(--color-grey-300);
    background-color: var(--color-grey-0);
    border-radius: 0.5rem;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-600);
    outline-offset: -1px;
  }

  button:has(svg) {
    line-height: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    display: block;
    width: 100%;
    max-height: 100%;
    max-width: 100%;
    object-fit: contain;
  }

  .ReactModal__Overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
`;

export default GlobalStyles;
