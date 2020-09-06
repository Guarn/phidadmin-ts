import React, { useCallback, useMemo } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Node, Transforms, Editor as SlEditor } from "slate";
import { withHistory } from "slate-history";
import { connect, ConnectedProps } from "react-redux";
import { GlobalState } from "../../reducers";
import actions from "../../actions";
import withTables from "./withTables";
import userInputsHandle from "./userInputsHandle";
import Leaf from "./renderLeafs";
import Element from "./renderBlocks";
import Toolbar from "./Toolbar";
import OptionsBar from "./OptionsBar";
import { areSameLocation } from "./utils";

type SlateEditorProps = ConnectedProps<typeof connector>;

const SlateEditor = ({ slateState, dispatch }: SlateEditorProps) => {
  const editor = useMemo(
    () => withTables(withHistory(withReact(createEditor()))),
    []
  );
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const updateSlateValue = (value: Node[]) => {
    dispatch(actions.slate.update({ value }));
  };

  const selectTextNode = (event: React.MouseEvent) => {
    const previousNode = SlEditor.before(editor, editor.selection!.focus);
    const nextNode = SlEditor.after(editor, editor.selection!.anchor);

    // Prevents a double click selection from selecting white space between two `Node`.
    if (
      event.detail === 2 &&
      areSameLocation(nextNode, editor.selection?.focus)
    ) {
      event.stopPropagation();
      Transforms.setSelection(editor, {
        anchor: editor.selection!.anchor,
        focus: editor.selection!.anchor,
      });
    }
    // Prevents a bug with tripple click selecting 2 Nodes instead of 1. Replaces the original selection with the correct one.
    if (event.detail === 3)
      Transforms.setSelection(editor, {
        anchor: editor.selection!.anchor,
        focus: previousNode,
      });
  };

  return (
    <Slate editor={editor} value={slateState.value} onChange={updateSlateValue}>
      <Toolbar />
      <OptionsBar />
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        spellCheck
        onKeyDown={(e) => userInputsHandle(editor, e)}
        onClick={selectTextNode}
      />
    </Slate>
  );
};

const mapStateToProps = (state: GlobalState) => {
  return { slateState: state.slateEditor };
};

const connector = connect(mapStateToProps);

export default connector(SlateEditor);
