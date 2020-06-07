import React from "react";
import { RenderLeafProps, ReactEditor } from "slate-react";
import { isMarkActive } from "./utils";
import { Editor } from "slate";

export enum LEAF_TYPES {
  bold = "bold",
  code = "code",
  italic = "italic",
  underline = "underline",
  span = "span",
}

const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = <code>{children}</code>;
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};

export const toggleMark = (editor: ReactEditor, format: LEAF_TYPES) => {
  const isActive = isMarkActive(editor, format);

  if (isActive) {
    Editor.removeMark(editor, format);
  } else {
    Editor.addMark(editor, format, true);
  }
};

export default Leaf;
