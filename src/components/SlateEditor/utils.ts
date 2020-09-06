import { ReactEditor } from "slate-react";
import ReactDOM from "react-dom";
import { Editor, Location, Point } from "slate";
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
 * @param range `Location` The range concerned
 */
export const getMaxOffset = (editor: ReactEditor, range: Location) => {
  const maxOffset = Editor.node(editor, range)[0].text as string;
  return maxOffset.length;
};

/**
 * Returns true if `format` type is applied to the current selection
 ************
 * @param editor `ReactEditor` The actual ReactEditor
 * @param format `LEAF_TYPES` The `leaf` type to test
 */
export const isMarkActive = (editor: ReactEditor, format: LEAF_TYPES) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

interface PortalProps {
  children: React.ReactNode;
  node?: HTMLElement | null;
}
/**
 * Returns a simple Portal in specified `node` or in `document.body` by default
 */
export const Portal = ({ node, children }: PortalProps) => {
  return ReactDOM.createPortal(children, node || document.body);
};

/**
 * Returns the top level base `Node` from a editor. Usefull for Table components (it can avoid selecting `TR` or `TD`)
 */
export const getTopLevelParent = (editor: ReactEditor) => {
  try {
    return {
      found: true,
      node: Editor.node(editor, [Editor.above(editor)![1][0]]),
    };
  } catch (err) {
    return { found: false };
  }
};

/**
 * Checks if a selection exists and if there is only one top level Node selected or not.
 */
export const areMultipleBaseNodesSelected = (editor: ReactEditor) => {
  const { selection } = editor;
  return selection && selection?.anchor.path[0] !== selection?.focus.path[0];
};

/**
 * Checks if two points are the same and return boolean.
 * @param a `Point`
 * @param b `Point`
 */
export const areSameLocation = (a?: Point, b?: Point) => {
  if (
    a &&
    b &&
    a.offset === 0 &&
    b.offset === 0 &&
    JSON.stringify(a.path) === JSON.stringify(b.path)
  ) {
    return true;
  } else {
    return false;
  }
};
