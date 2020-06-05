import { combineReducers } from "redux";
import userPreferences, { UserPreferencesState } from "./userPreferences";
import modal, { ModalState } from "./modal";

export interface GlobalState {
  userPreferences: UserPreferencesState;
  modal: ModalState;
}

export const rootReducer = combineReducers({
  userPreferences,
  modal,
});

export type RootState = ReturnType<typeof rootReducer>;
