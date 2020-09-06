import React, { useRef, useEffect, useState, useCallback } from "react";
import { useSlate, ReactEditor } from "slate-react";
import { Range, Editor } from "slate";
import * as S from "./Toolbar.styled";
import { isMarkActive } from "./utils";
import { toggleMark } from "./renderLeafs";
import { LEAF_TYPES } from "./Slate.types";

const Toolbar = () => {
  const ref = useRef<HTMLDivElement>();
  const editor = useSlate();
  const [isVisible, setIsVisible] = useState(false);
  const { selection } = editor;
  const slateRef = document.getElementById("SlateEditor");

  const handleScroll = useCallback(() => {
    const el: HTMLDivElement | undefined = ref.current;

    if (
      el &&
      selection &&
      ReactEditor.isFocused(editor) &&
      !Range.isCollapsed(selection) &&
      Editor.string(editor, selection) !== ""
    ) {
      const domSelection = window.getSelection();
      const domRange = domSelection?.getRangeAt(0);
      const rect = domRange?.getBoundingClientRect();

      if (rect) {
        el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
        el.style.left = `${
          rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
        }px`;
      }
    }
  }, [editor, selection]);

  useEffect(() => {
    const el: HTMLDivElement | undefined = ref.current;

    if (slateRef) {
      slateRef.addEventListener("scroll", handleScroll);
    }

    if (
      el &&
      selection &&
      ReactEditor.isFocused(editor) &&
      !Range.isCollapsed(selection) &&
      Editor.string(editor, selection) !== ""
    ) {
      const domSelection = window.getSelection();
      const domRange = domSelection?.getRangeAt(0);
      const rect = domRange?.getBoundingClientRect();

      if (rect) {
        el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
        el.style.left = `${
          rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
        }px`;
      }
    }

    if (
      selection &&
      ReactEditor.isFocused(editor) &&
      !Range.isCollapsed(selection) &&
      Editor.string(editor, selection) !== ""
    ) {
      !isVisible && setIsVisible(true);
    } else {
      isVisible && setIsVisible(false);
    }

    return () => {
      slateRef?.removeEventListener("scroll", handleScroll);
    };
  }, [editor, selection, isVisible, slateRef, handleScroll]);

  return (
    <S.Menu ref={ref as any} isVisible={isVisible}>
      <ButtonToolBar displayContent="G" type={LEAF_TYPES.bold} />
      <S.Separateur />
      <ButtonToolBar displayContent="I" type={LEAF_TYPES.italic} />
    </S.Menu>
  );
};

export default Toolbar;

interface ButtonToolBarProps {
  displayContent: string;
  type: LEAF_TYPES;
}
export const ButtonToolBar = ({ displayContent, type }: ButtonToolBarProps) => {
  const editor = useSlate();
  let style;
  switch (type) {
    case LEAF_TYPES.italic:
      style = { fontStyle: "italic" };
  }
  return (
    <S.Outils
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, type);
      }}
      style={style}
    >
      {displayContent}
      <S.RectSelect selected={isMarkActive(editor, type)} />
    </S.Outils>
  );
};
