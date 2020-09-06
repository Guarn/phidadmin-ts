import React, { useEffect, useRef, useCallback } from "react";
import * as S from "./OptionsBar.styled";
import { useSlate, ReactEditor } from "slate-react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../reducers";
import { getTopLevelParent, areMultipleBaseNodesSelected } from "./utils";

const OptionsBar = () => {
  const editor = useSlate();
  const refContainer = useRef<HTMLElement>();
  const refVerticalBar = useRef<HTMLElement>();
  const { selection } = editor;
  const components = useSelector(
    (state: GlobalState) => state.slateEditor.theme.components
  );

  const slateRef = document.getElementById("SlateEditor");

  /**
   * Handle the info box alignment when scrolling
   */
  const handleScroll = useCallback(() => {
    const el = slateRef;

    if (el && selection && !areMultipleBaseNodesSelected(editor)) {
      const domSelection = window.getSelection();
      const domRange = domSelection?.getRangeAt(0);
      const rect = domRange?.getBoundingClientRect();

      if (rect) {
        refContainer.current!.style.top = `${rect.top}px`;
        el.style.left = `${
          rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
        }px`;
      }
    }
  }, [editor, selection, slateRef]);

  useEffect(() => {
    const container: HTMLElement | undefined = refContainer.current;
    const verticalBar: HTMLElement | undefined = refVerticalBar.current;
    const parentElement = getTopLevelParent(editor);

    if (selection && container && verticalBar && parentElement.found) {
      const rectParent = ReactEditor.toDOMNode(
        editor,
        parentElement.node![0]
      ).getBoundingClientRect();

      if (rectParent) {
        container.style.top = `${rectParent.top}px`;
        verticalBar.style.height = `${rectParent.height}px`;
      }
    }

    if (slateRef) {
      slateRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      slateRef?.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <S.SousMenuContainer ref={refContainer as any}>
      {!areMultipleBaseNodesSelected(editor) &&
        getTopLevelParent(editor).node &&
        components[getTopLevelParent(editor).node![0].type as any].name}
      {!areMultipleBaseNodesSelected(editor) &&
        getTopLevelParent(editor).node && (
          <S.VerticalBar ref={refVerticalBar as any} />
        )}
    </S.SousMenuContainer>
  );
};

export default OptionsBar;
