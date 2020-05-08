import Footer from "./Footer";
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../reducers";

const store = createStore(rootReducer);

describe("Footer Component should render Filters", () => {
  it("Filter All is viible", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(getByText("All")).toBeInTheDocument();
  });
  it("Filter Active is viible", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(getByText("Active")).toBeInTheDocument();
  });
  it("Filter Completed is viible", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Footer />
      </Provider>
    );
    expect(getByText("Completed")).toBeInTheDocument();
  });
});
