import React from "react";
import App from "./App";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { rootReducer } from "./reducers";
import { themeLight, themeDark } from "./App.styled";

const store = createStore(rootReducer);

describe("App component", () => {
  it("render happpens", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText(/fj/i)).toBeInTheDocument();
  });

  it("text uses by default LIGHT theme color", () => {
    render(
      <Provider store={store}>
        <App />
        <div id="modal-root"></div>
      </Provider>
    );
    const stylesAsString = Array.from(document.querySelectorAll("style"))
      .map((el) => el.innerHTML)
      .join("\n");

    expect(stylesAsString).toContain(`color:${themeLight.color}`);
    expect(stylesAsString).toContain(
      `background-color:${themeLight.backgroundColor}`
    );
  });

  it("toggle text color and background Color when users changes theme", () => {
    const { getByTitle } = render(
      <Provider store={store}>
        <App />
        <div id="modal-root"></div>
      </Provider>
    );
    fireEvent.click(getByTitle("ThemeColor"));

    const stylesAsString = Array.from(document.querySelectorAll("style"))
      .map((el) => el.innerHTML)
      .join("\n");

    expect(stylesAsString).toContain(`color:${themeDark.color}`);
    expect(stylesAsString).toContain(
      `background-color:${themeDark.backgroundColor}`
    );
  });
});
