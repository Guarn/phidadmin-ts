import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ theme: ThemeProperties }>`
:root {
    background-color: ${({ theme }) => theme.backgroundColor};
    color: ${({ theme }) => theme.color};
    transition: color 500ms ,background-color 500ms;
    fill:${({ theme }) => theme.color};
    font-family: century-gothic, sans-serif;
    font-weight: 400;
    font-style: normal;

    & div,main {
      transition: background-color 500ms width 500ms border 500ms;
    }
    
}
`;
export interface ThemeProperties {
  color: string;
  backgroundColor: string;
  borderColor: string;
  modalBackgroundColor: string;
  modalColor: string;
  shadowColor: string;
}
export const themeLight: ThemeProperties = {
  color: "#707070",
  backgroundColor: "#E2E0D8",
  borderColor: "#CCCCCC",
  modalBackgroundColor: "#82817B",
  modalColor: "#E2E0D8",
  shadowColor: "rgba(0,0,0,0.2)",
};

export const themeDark: ThemeProperties = {
  color: "#E2E0D8",
  backgroundColor: "#707070",
  borderColor: "#8B8B8B",
  modalBackgroundColor: "#82817B",
  modalColor: "#E2E0D8",
  shadowColor: "rgba(1,1,1,0.2)",
};
