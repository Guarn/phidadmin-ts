import modal from "./modal";
import { modalOperations } from "./modal";
import { ModalActionsTypes } from "../actions/modal";
import { userPreferences } from "./userPreferences";
import { ThemeActions, ThemeActionTypes } from "../actions/theme";
import { ThemeType } from "./userPreferences";

describe("Modal reducer", () => {
  it("should return the initial state", () => {
    expect(modal(undefined, {})).toEqual({
      isActive: false,
      operation: "create",
    });
  });
  it("should update store correctly with cancel Action", () => {
    expect(
      modal(
        { isActive: true, operation: modalOperations.create },
        { type: ModalActionsTypes.CANCEL }
      )
    ).toEqual({
      isActive: false,
      operation: "create",
    });
  });
  it("should update store correctly with confirmation Action", () => {
    expect(
      modal(
        { isActive: false, operation: modalOperations.create },
        {
          type: ModalActionsTypes.CONFIRMATION,
          operation: modalOperations.create,
          target: "test",
        }
      )
    ).toEqual({
      isActive: true,
      operation: "create",
    });
  });
});

describe("UserPreferences reducer", () => {
  it("should return the initial state", () => {
    expect(userPreferences(undefined, {} as ThemeActions)).toEqual({
      theme: ThemeType.LIGHT,
    });
  });
  it("TOGGLE_DAY_NIGHT should toggle theme type", () => {
    expect(
      userPreferences(
        { theme: ThemeType.LIGHT },
        { type: ThemeActionTypes.TOGGLE_DAY_NIGHT }
      )
    ).toEqual({ theme: ThemeType.DARK });
    expect(
      userPreferences(
        { theme: ThemeType.DARK },
        { type: ThemeActionTypes.TOGGLE_DAY_NIGHT }
      )
    ).toEqual({ theme: ThemeType.LIGHT });
  });
});
