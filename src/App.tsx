import React from "react";
import styled, { ThemeProvider } from "styled-components/macro";
import { connect, ConnectedProps } from "react-redux";
import { ThemeType } from "./reducers/userPreferences";
import { themeLight, themeDark, GlobalStyle } from "./App.styled";
import { GlobalState } from "./reducers";
import Menu from "./components/menu/Menu";
import Modal from "./components/Modal";
import SlateEditor from "./components/SlateEditor";
import Editor from "./components/pages/Editor";

export type AppProps = ConnectedProps<typeof connector>;

function App({ theme }: AppProps) {
  return (
    <ThemeProvider theme={theme === ThemeType.LIGHT ? themeLight : themeDark}>
      <GlobalStyle />
      <GlobalContainer>
        <Menu />
        <Editor
          titreLecon="Présentation du programme et des épreuves"
          titreChapitre="Leçon 1 - Bien commencer"
        />
        <Modal />
      </GlobalContainer>
    </ThemeProvider>
  );
}

const mapStateToProps = (state: GlobalState) => {
  return { theme: state.userPreferences.theme };
};

const connector = connect(mapStateToProps);
export default connector(App);

const GlobalContainer = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
`;
