import { ModalActionsTypes, ModalActions } from "../actions/modal";

export enum modalOperations {
  create = "create",
  update = "update",
  delete = "delete",
}

export interface ModalState {
  isActive: boolean;
  operation: modalOperations;
}

const modal = (state: ModalState = initialValue, action: ModalActions) => {
  // console.log(action);

  switch (action.type) {
    case ModalActionsTypes.CANCEL:
      return { ...state, isActive: false };
    case ModalActionsTypes.CONFIRMATION:
      return { ...state, isActive: true };
    default:
      return state;
  }
};

export default modal;

const initialValue: ModalState = {
  isActive: false,
  operation: modalOperations.create,
};
