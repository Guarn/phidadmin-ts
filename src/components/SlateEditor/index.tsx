import React, { useCallback, useMemo } from "react";
import { Editable, withReact, Slate } from "slate-react";
import { createEditor, Node } from "slate";
import { withHistory } from "slate-history";
import { connect, ConnectedProps } from "react-redux";
import { GlobalState } from "../../reducers";
import actions from "../../actions";
import withTables from "./withTables";
import userInputsHandle from "./userInputsHandle";
import { MarkButton, BlockButton } from "./Toolbar";
import Leaf, { LEAF_TYPES } from "./renderLeafs";
import Element, {
  ELEMENT_TYPES,
  componentH1,
  componentH2,
  componentH3,
  setComponentThemeType,
  componentP,
} from "./renderBlocks";

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
      <MarkButton format={LEAF_TYPES.bold} />
      <BlockButton format={ELEMENT_TYPES.h1} />
      <button onClick={() => setComponentThemeType(editor, componentH1)}>
        H1
      </button>
      <button onClick={() => setComponentThemeType(editor, componentH2)}>
        H2
      </button>
      <button onClick={() => setComponentThemeType(editor, componentH3)}>
        H3
      </button>
      <button onClick={() => setComponentThemeType(editor, componentP)}>
        para
      </button>
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
