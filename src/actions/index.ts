import { modalActions as modal, ModalActionsTypes } from "./modal";
import { ThemeActionTypes, themesActions as theme } from "./theme";
import {
  slateEditorActions as slate,
  SlateEditorActionsTypes,
} from "./slateEditor";

export interface ActionTypes {
  modal: ModalActionsTypes;
  theme: ThemeActionTypes;
  slate: SlateEditorActionsTypes;
}

export default { modal, theme, slate };
