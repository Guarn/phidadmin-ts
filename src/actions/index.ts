import { modalActions as modal, ModalActionsTypes } from "./modal";
import { ThemeActionTypes, themesActions as theme } from "./theme";

export interface ActionTypes {
  modal: ModalActionsTypes;
  theme: ThemeActionTypes;
}

export default { modal, theme };
