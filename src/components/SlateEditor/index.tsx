import React, { useCallback, useMemo } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { connect, ConnectedProps } from "react-redux";
import { GlobalState } from "../../reducers";
import actions from "../../actions";
import withTables from "./withTables";
import userInputsHandle from "./userInputsHandle";
import Leaf from "./renderLeafs";
import Element from "./renderBlocks";

type SlateEditorProps = ConnectedProps<typeof connector>;

const SlateEditor = ({ slateState, dispatch }: SlateEditorProps) => {
  const editor = useMemo(
    () => withTables(withHistory(withReact(createEditor()))),
    []
  );
  const renderElement = useCallback((props) => <Element {...props} />, []);
  const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

  const updateValue = (value: Node[]) => {
    dispatch(actions.slate.update({ value }));
  };

  console.log(editor.selection);

  return (
    <Slate editor={editor} value={slateState.value} onChange={updateValue}>
      <Editable
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        spellCheck
        onKeyDown={(e) => userInputsHandle(editor, e)}
      />
    </Slate>
  );
};

const mapStateToProps = (state: GlobalState) => {
  return { slateState: state.slateEditor };
};

const connector = connect(mapStateToProps);

export default connector(SlateEditor);
