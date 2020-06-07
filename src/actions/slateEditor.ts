import { Node } from "slate";

export enum SlateEditorActionsTypes {
  UPDATE = "UPDATE",
}

export interface UpdateProps {
  value: Node[];
}

const update = ({ value }: UpdateProps) => ({
  type: SlateEditorActionsTypes.UPDATE,
  value,
});

export type SlateEditorActions = ReturnType<typeof update>;

export const slateEditorActions = {
  update,
};
