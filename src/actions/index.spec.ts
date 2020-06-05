import actions from ".";
import { ThemeActionTypes } from "./theme";
import { modalOperations } from "../reducers/modal";
import { ModalActionsTypes } from "./modal";

describe("Theme Actions", () => {
  const { toggleDayNight } = actions.theme;

  it("toggleDayNight should create adequate action", () => {
    expect(toggleDayNight()).toEqual({
      type: ThemeActionTypes.TOGGLE_DAY_NIGHT,
    });
  });
});

describe("Modal Actions", () => {
  const { cancel, confirmation } = actions.modal;

  it("confirmation should create adequate action", () => {
    expect(
      confirmation({ operation: modalOperations.create, target: "test" })
    ).toEqual({
      type: ModalActionsTypes.CONFIRMATION,
      operation: modalOperations.create,
      target: "test",
    });
  });
  it("cancel should create adequate action", () => {
    expect(cancel()).toEqual({
      type: ModalActionsTypes.CANCEL,
    });
  });
});
