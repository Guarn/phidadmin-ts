import React from "react";
import styled from "styled-components/macro";
import AddTodo from "./containers/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import Footer from "./components/Footer";

function App() {
  return (
    <GlobalContainer>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </GlobalContainer>
  );
}

export default App;

const GlobalContainer = styled.div``;
