import { combineReducers } from "redux";
import userPreferences, { UserPreferencesState } from "./userPreferences";
import modal, { ModalState } from "./modal";
import slateEditor, { SlateEditorState } from "./slateEditor";

export interface GlobalState {
  userPreferences: UserPreferencesState;
  modal: ModalState;
  slateEditor: SlateEditorState;
}

export const rootReducer = combineReducers({
  userPreferences,
  modal,
  slateEditor,
});

export type RootState = ReturnType<typeof rootReducer>;
