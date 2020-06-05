import React from "react";
import ReactDOM from "react-dom";
import { Modal, CreateModal } from ".";
import { createStore } from "redux";
import { rootReducer } from "../../reducers";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { modalOperations } from "../../reducers/modal";

const store = createStore(rootReducer);

describe("CreateModal ui component", () => {
  it("shoulnd't render anything if !isActive", () => {
    const { queryByTestId } = render(
      <CreateModal cancelModal={() => {}} isActive={false} />
    );
    expect(queryByTestId("Modal")).not.toBeInTheDocument();
  });
  it("should render modal if isActive", () => {
    const { queryByTestId } = render(
      <CreateModal cancelModal={() => {}} isActive={true} />
    );
    expect(queryByTestId("Modal")).toBeInTheDocument();
  });
  it("should fire cancelModal if click on grey part", () => {
    const cancelModal = jest.fn();
    const { getByTestId } = render(
      <CreateModal cancelModal={cancelModal} isActive={true} />
    );
    fireEvent.click(getByTestId("Modal"));
    expect(cancelModal).toHaveBeenCalledTimes(1);
  });
  it("shouldn't fire cancelModal when icon is clicked", () => {
    const cancelModal = jest.fn();
    const { getByTitle } = render(
      <CreateModal cancelModal={cancelModal} isActive={true} />
    );
    fireEvent.click(getByTitle("Trash icon"));
    expect(cancelModal).not.toHaveBeenCalled();
  });
});

describe("Modal ui component", () => {
  it("shoulnd't appear on init", () => {
    const dispatch = jest.fn();
    const { queryByTestId } = render(
      <>
        <Provider store={store}>
          <Modal
            modalState={{ isActive: false, operation: modalOperations.create }}
            dispatch={dispatch}
          />
        </Provider>
        <div id="modal-root"></div>
      </>
    );
    expect(queryByTestId("Modal")).not.toBeInTheDocument();
  });
  it("should show modal window when isActive is true", async () => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element as React.ReactPortal;
    });

    const dispatch = jest.fn();
    const { getByTitle } = render(
      <>
        <Provider store={store}>
          <Modal
            modalState={{
              isActive: true,
              operation: modalOperations.create,
            }}
            dispatch={dispatch}
          />
        </Provider>
        <div id="modal-root"></div>
      </>
    );
    expect(getByTitle("Trash icon")).toBeInTheDocument();
  });
  it("modal window should disappear when grey part is clicked", async () => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element as React.ReactPortal;
    });

    const dispatch = jest.fn();
    const { getByTestId } = render(
      <>
        <Provider store={store}>
          <Modal
            modalState={{
              isActive: true,
              operation: modalOperations.create,
            }}
            dispatch={dispatch}
          />
        </Provider>
        <div id="modal-root"></div>
      </>
    );

    fireEvent.click(getByTestId("Modal"));
    expect(dispatch).toBeCalled();
  });
});
