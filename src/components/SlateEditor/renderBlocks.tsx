import React from "react";
import { Transforms, Element as SlateElement, Editor } from "slate";
import { RenderElementProps, ReactEditor } from "slate-react";
import { isBlockActive } from "./utils";

interface BlockStyle {
  backgroundColor?: string;
  border?: string;
  margin?: number;
  padding?: number;
  indentLevel?: number;
  textAlign?: TEXT_ALIGNS;
  transition?: string;
  marginBlockStart?: number;
  marginBlockEnd?: number;
}

interface ElementWithStyle extends SlateElement {
  style: BlockStyle;
  type: ELEMENT_TYPES;
}

interface RenderElementPropsWithStyle extends RenderElementProps {
  element: ElementWithStyle;
}

const LIST_TYPES = ["numbered-list", "bulleted-list"];
export enum ELEMENT_TYPES {
  table = "table",
  tr = "tr",
  td = "td",
  blockQuote = "block-quote",
  bulletedList = "bulleted-list",
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  listItem = "list-item",
  numberedList = "numbered-list",
  paragraph = "paragraph",
}

const Element = ({
  attributes,
  children,
  element,
}: RenderElementPropsWithStyle) => {
  switch (element.type) {
    case ELEMENT_TYPES.table:
      return (
        <table style={element.style}>
          <tbody {...attributes}>{children}</tbody>
        </table>
      );
    case ELEMENT_TYPES.tr:
      return (
        <tr style={element.style} {...attributes}>
          {children}
        </tr>
      );
    case ELEMENT_TYPES.td:
      return (
        <td style={element.style} {...attributes}>
          {children}
        </td>
      );
    case ELEMENT_TYPES.blockQuote:
      return (
        <blockquote style={element.style} {...attributes}>
          {children}
        </blockquote>
      );
    case ELEMENT_TYPES.bulletedList:
      return (
        <ul style={element.style} {...attributes}>
          {children}
        </ul>
      );
    case ELEMENT_TYPES.h1:
      return (
        <h1 style={element.style} {...attributes}>
          {children}
        </h1>
      );
    case ELEMENT_TYPES.h2:
      return (
        <h2 style={element.style} {...attributes}>
          {children}
        </h2>
      );
    case ELEMENT_TYPES.h3:
      return (
        <h3 style={element.style} {...attributes}>
          {children}
        </h3>
      );
    case ELEMENT_TYPES.listItem:
      return (
        <li style={element.style} {...attributes}>
          {children}
        </li>
      );
    case ELEMENT_TYPES.numberedList:
      return (
        <ol style={element.style} {...attributes}>
          {children}
        </ol>
      );
    default:
      return (
        <p style={element.style} {...attributes}>
          {children}
        </p>
      );
  }
};

export const toggleBlock = (
  editor: ReactEditor,
  format: ELEMENT_TYPES,
  style?: BlockStyle
) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(n.type as string),
    split: true,
  });

  Transforms.setNodes(editor, {
    type: isActive
      ? ELEMENT_TYPES.paragraph
      : isList
      ? ELEMENT_TYPES.listItem
      : format,
    style: !isActive
      ? {
          backgroundColor: style?.backgroundColor || "transparent",
          margin: style?.margin + "px" || 0,
          padding: style?.padding + "px" || 0,
        }
      : undefined,
  });

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

enum TEXT_ALIGNS {
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
}

interface ThemeComponent {
  themeId: string;
  name: string;
  type: ELEMENT_TYPES;
  style: BlockStyle;
}

export const setComponentThemeType = (
  editor: ReactEditor,
  type: ThemeComponent
) => {
  const indexOfSelectedBlock = editor.selection?.anchor.path[0];
  const currentSelection = { ...editor.selection };
  let typePreviousBlock: string | null = null;
  if (editor.selection) {
    typePreviousBlock = Editor.parent(editor, editor.selection.anchor)[0]
      .type as string;
    console.log(typePreviousBlock);
  }

  if (
    typeof indexOfSelectedBlock === "number" &&
    typePreviousBlock !== ELEMENT_TYPES.table &&
    typePreviousBlock !== ELEMENT_TYPES.tr &&
    typePreviousBlock !== ELEMENT_TYPES.td
  ) {
    Transforms.setNodes(editor, {
      ...editor.children[indexOfSelectedBlock],
      ...type,
    });
    Transforms.setSelection(editor, currentSelection);
  }
};

export default Element;

export const componentH1: ThemeComponent = {
  themeId: "1",
  name: "Titre de chapitre",
  type: ELEMENT_TYPES.h1,
  style: {
    backgroundColor: "salmon",
    border: "1px solid grey",
    margin: 20,
    padding: 50,
    indentLevel: 0,
    textAlign: TEXT_ALIGNS.right,
  },
};

export const componentH2: ThemeComponent = {
  themeId: "1",
  name: "Titre de sous chapitre",
  type: ELEMENT_TYPES.h2,
  style: {
    backgroundColor: "salmon",
    border: "1px solid grey",
    margin: 20,
    padding: 50,
    indentLevel: 0,
    textAlign: TEXT_ALIGNS.right,
  },
};
export const componentH3: ThemeComponent = {
  themeId: "1",
  name: "Titre de sous sous chapitre",
  type: ELEMENT_TYPES.h3,
  style: {
    backgroundColor: "salmon",
    border: "1px solid grey",
    padding: 50,
    indentLevel: 0,
    textAlign: TEXT_ALIGNS.right,

    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
};

export const componentP: ThemeComponent = {
  themeId: "1",
  name: "paragraphe",
  type: ELEMENT_TYPES.paragraph,
  style: {
    textAlign: TEXT_ALIGNS.left,
  },
};
