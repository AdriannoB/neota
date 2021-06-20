import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family:  'sans-serif';
    font-size: 16px;
    line-height: 1.5;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
  }

  body {
    margin: 0;
    padding: 0;
    color: black;
  }

  body::-webkit-scrollbar, div::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.4rem;
}

  body::-webkit-scrollbar-track, div::-webkit-scrollbar-track {
    -webkit-box-shadow: none !important;
    background: #E7EBEE !important;
  }

  body::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb {
    background-color: #FF7558 !important;
    border-radius: 0.2rem !important;
  }

  input:-internal-autofill-selected {
    background-color: transparent !important;
    background-image: none !important;
    color: inherit !important;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active  {
      -webkit-box-shadow: 0 0 0 1.875rem #f8775f inset !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button,
  input::-webkit-calendar-picker-indicator {
    display: none;
    -webkit-appearance: none;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  * {
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }
`
