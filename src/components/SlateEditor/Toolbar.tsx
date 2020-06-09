import React from "react";
import { useSlate } from "slate-react";
import { isMarkActive, isBlockActive } from "./utils";
import * as S from "./SlateEditor.styled";
import { ELEMENT_TYPES } from "./renderBlocks";
import { toggleMark, LEAF_TYPES } from "./renderLeafs";

interface MarkButtonProps {
  format: LEAF_TYPES;
}
export const MarkButton = ({ format }: MarkButtonProps) => {
  const editor = useSlate();
  return (
    <S.Button
      active={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
    >
      B
    </S.Button>
  );
};

interface BlockButtonProps {
  format: ELEMENT_TYPES;
}

export const BlockButton = ({ format }: BlockButtonProps) => {
  const editor = useSlate();
  return (
    <S.Button
      active={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        // toggleBlock(editor, format, {
        //   backgroundColor: "red",
        //   margin: 20,
        //   padding: 20,
        // });
      }}
    >
      H1
    </S.Button>
  );
};
