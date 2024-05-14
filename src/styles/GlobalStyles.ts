"use client"
import { createGlobalStyle } from "styled-components";
import ResetStyles from "./ResetStyles";

const GlobalStyles = createGlobalStyle`
    ${ResetStyles}
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;