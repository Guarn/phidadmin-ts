import React, { useRef, useEffect } from "react";
import { useSlate, ReactEditor } from "slate-react";
import { Range, Editor } from "slate";
import * as S from "./Toolbar.styled";
import { Portal, isMarkActive } from "./utils";
import { toggleMark } from "./renderLeafs";
import { LEAF_TYPES } from "./Slate.types";

const Toolbar = () => {
  const ref = useRef<HTMLDivElement>();
  const editor = useSlate();

  useEffect(() => {
    const el: HTMLDivElement | undefined = ref.current;
    const { selection } = editor;

    if (!el) {
      return;
    }

    if (
      !selection ||
      !ReactEditor.isFocused(editor) ||
      Range.isCollapsed(selection) ||
      Editor.string(editor, selection) === ""
    ) {
      el.removeAttribute("style");

      return;
    } else {
      const domSelection = window.getSelection();
      const domRange = domSelection?.getRangeAt(0);
      const rect = domRange?.getBoundingClientRect();
      if (rect) {
        el.style.opacity = "1";
        el.style.top = `${rect.top + window.pageYOffset - el.offsetHeight}px`;
        el.style.left = `${
          rect.left + window.pageXOffset - el.offsetWidth / 2 + rect.width / 2
        }px`;
      }
    }
  });

  return (
    <Portal>
      <S.Menu ref={ref as any}>
        <ButtonToolBar displayContent="G" type={LEAF_TYPES.bold} />
        <S.Separateur />
        <ButtonToolBar displayContent="I" type={LEAF_TYPES.italic} />
      </S.Menu>
    </Portal>
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
