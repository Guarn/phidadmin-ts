import { ReactEditor } from "slate-react";
import ReactDOM from "react-dom";
import { Editor, Location } from "slate";
import { useSelector } from "react-redux";
import { GlobalState } from "../../reducers";
import { LEAF_TYPES } from "./Slate.types";

/**
 * Returns true if `format` type is applied to the current selection
 ************
 * @param editor `ReactEditor` The actual ReactEditor
 * @param format `string` The block type to test
 */
export const isBlockActive = (editor: ReactEditor, format: string) => {
  const [match] = Editor.nodes(editor, {
    match: (n) => n.type === format,
  });

  return !!match;
};

/**
 * Returns the max `offset` of the given location
 * ******************
 * @param editor The actual ReactEditor
 * @param range
 */
export const getMaxOffset = (editor: ReactEditor, range: Location) => {
  const maxOffset = Editor.node(editor, range)[0].text as string;
  return maxOffset.length;
};

/**
 * Returns true if `format` type is applied to the current selection
 ************
 * @param editor `ReactEditor` The actual ReactEditor
 * @param format `string` The `leaf` type to test
 */
export const isMarkActive = (editor: ReactEditor, format: LEAF_TYPES) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

interface PortalProps {
  children: React.ReactNode;
}
/**
 * Returns a simple Portal in body
 */
export const Portal = ({ children }: PortalProps) => {
  return ReactDOM.createPortal(children, document.body);
};
