import "styled-components";
import { themeLight } from "./App.styled";

// Useful for theme autocompletion
declare module "styled-components" {
  type Theme = typeof themeLight;
  export interface DefaultTheme extends Theme {}
}
