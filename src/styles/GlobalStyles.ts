"use client"
import { createGlobalStyle } from "styled-components";
import ResetStyles from "./ResetStyles";

const GlobalStyles = createGlobalStyle`
    ${ResetStyles}
    * {
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
    }

    body {
        font-size: 16px;
    }

    h2 {
        font-size: 1.8em;
    }

    h3 {
        font-size: 1.6em;
    }

    h4 {
        font-size: 1.4em;
    }
    
    strong {
        font-weight: 700;
    }

    a,a:link,a:visited,a:hover,a:focus,a:active {
        -webkit-text-decoration: none;
        text-decoration: none;
    }
    a:hover {
        transition: all 0.3s;
    }

    input,button,select,textarea {
        display: inline-block;
        margin: 0;
        padding: 0;
        background-color: transparent;
        border: 0;
        border-radius: 0;
        font-family: inherit;
        font-size: inherit;
        color: inherit;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
        -webkit-text-size-adjust: none;
        -moz-text-size-adjust: none;
        -ms-text-size-adjust: none;
        text-size-adjust: none;
    }

    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        appearance: none;
    }

    button {
        text-align: center;
    }

    button:not(:disabled) {
        cursor: pointer;
    }

    :root {
        -webkit-print-color-scheme: light only;
        color-scheme: light only;
    }
    
    .login-link {
        display: inline-block;
        height: 32px;
        border: 1px solid #cecece;
        border-radius: 8px;
        padding: 0 8px;
        font-size: 13px;
        letter-spacing: 0;
        color: #000000 !important;
        font-weight: 700;
        
        &:hover {
            opacity: 0.6;
            transition: all 0.3s;
        }
    }

    .signup-link {
        display: inline-block;
        height: 32px;
        border: 1px solid #cecece;
        border-radius: 8px;
        padding: 0 8px;
        font-size: 13px;
        letter-spacing: 0;
        color: #FFFFFF !important;
        font-weight: 700;
        background: linear-gradient(45deg, rgba(203,33,189,1) 0%, rgba(92,30,237,1) 100%);

        &:hover {
            opacity: 0.8;
            transition: all 0.3s;
        }
    }
`;

export default GlobalStyles;
