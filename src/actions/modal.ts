import { modalOperations } from "../reducers/modal";

export enum ModalActionsTypes {
  CONFIRMATION = "CONFIRMATION",
  CANCEL = "CANCEL",
}

export interface confirmationModalProps {
  operation: modalOperations;
  target: string;
}

/**
 * Shows the modal window
 * @param param0
 */
const confirmation = ({ operation, target }: confirmationModalProps) => ({
  type: ModalActionsTypes.CONFIRMATION,
  operation,
  target,
});

const cancel = () => ({
  type: ModalActionsTypes.CANCEL,
});

export type ModalActions =
  | ReturnType<typeof confirmation>
  | ReturnType<typeof cancel>;

export const modalActions = {
  confirmation,
  cancel,
};
