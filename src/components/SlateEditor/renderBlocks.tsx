import React from "react";
import { RenderElementProps } from "slate-react";
import { CustomElement, ElementHtmlTypes } from "../../reducers/slateEditor";
import { useSelector } from "react-redux";
import { GlobalState } from "../../reducers";
import { ThemeType } from "../../reducers/userPreferences";

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

interface GetJSXElementFromNameProps {
  attributes: SlateAttributes;
  type: string;
  children?: any;
}

type SlateAttributes = {
  "data-slate-node": "element";
  "data-slate-inline"?: true;
  "data-slate-void"?: true;
  dir?: "rtl";
  ref: any;
};

interface SlateElementStyleProps {
  element: CustomElement;
  theme: ThemeType;
}

const getSlateElementStyle = ({ element, theme }: SlateElementStyleProps) => {
  const {
    backgroundColor,
    border,
    margin,
    padding,
    indentLevel,
    contentAlignment,
    transition,
    marginBlockStart,
    marginBlockEnd,
    borderCollapse,
  } = theme === ThemeType.LIGHT ? element.styleLight : element.styleDark;
  const textIndent = ((indentLevel || 0) * 5).toString() + "%";
  return {
    backgroundColor,
    border,
    margin,
    padding,
    transition,
    textAlign: contentAlignment,
    marginBlockStart,
    marginBlockEnd,
    borderCollapse,
    textIndent,
  };
};

const GetJSXElementFromProps: React.FC<GetJSXElementFromNameProps> = ({
  attributes,
  type,
  children,
}) => {
  const components = useSelector(
    (state: GlobalState) => state.slateEditor.theme.components
  );
  const theme = useSelector(
    (state: GlobalState) => state.userPreferences.theme
  );
  const element = components[type];

  console.log(element.baseElement);
  if (element.baseElement) {
    switch (element.baseElement) {
      case ElementHtmlTypes.h1:
        return (
          <h1 {...attributes} style={getSlateElementStyle({ element, theme })}>
            {children}
          </h1>
        );
      case ElementHtmlTypes.h2:
        return (
          <h2 {...attributes} style={getSlateElementStyle({ element, theme })}>
            {children}
          </h2>
        );
      case ElementHtmlTypes.h3:
        return (
          <h3 {...attributes} style={getSlateElementStyle({ element, theme })}>
            {children}
          </h3>
        );
      case ElementHtmlTypes.paragraph:
        return (
          <p {...attributes} style={getSlateElementStyle({ element, theme })}>
            {children}
          </p>
        );
      case ElementHtmlTypes.blockQuote:
        return (
          <blockquote
            {...attributes}
            style={getSlateElementStyle({ element, theme })}
          >
            {children}
          </blockquote>
        );
      case ElementHtmlTypes.table:
        return (
          <table
            {...attributes}
            style={getSlateElementStyle({ element, theme })}
          >
            <tbody>{children}</tbody>
          </table>
        );
      case ElementHtmlTypes.tr:
        return (
          <tr {...attributes} style={getSlateElementStyle({ element, theme })}>
            {children}
          </tr>
        );
      case ElementHtmlTypes.td:
        return (
          <td {...attributes} style={getSlateElementStyle({ element, theme })}>
            {children}
          </td>
        );
    }
  }

  return <div>Not found element</div>;
};

const Element = ({ attributes, children, element }: RenderElementProps) => {
  return (
    <GetJSXElementFromProps
      attributes={attributes}
      type={element.type as string}
    >
      {children}
    </GetJSXElementFromProps>
  );
};

// export const toggleBlock = (
//   editor: ReactEditor,
//   format: ELEMENT_TYPES,
//   style?: BlockStyle
// ) => {
//   const isActive = isBlockActive(editor, format);
//   const isList = LIST_TYPES.includes(format);

//   Transforms.unwrapNodes(editor, {
//     match: (n) => LIST_TYPES.includes(n.type as string),
//     split: true,
//   });

//   Transforms.setNodes(editor, {
//     type: isActive
//       ? ELEMENT_TYPES.paragraph
//       : isList
//       ? ELEMENT_TYPES.listItem
//       : format,
//     style: !isActive
//       ? {
//           backgroundColor: style?.backgroundColor || "transparent",
//           margin: style?.margin + "px" || 0,
//           padding: style?.padding + "px" || 0,
//         }
//       : undefined,
//   });

//   if (!isActive && isList) {
//     const block = { type: format, children: [] };
//     Transforms.wrapNodes(editor, block);
//   }
// };

enum TEXT_ALIGNS {
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
}

// interface ThemeComponent {
//   themeId: string;
//   name: string;
//   type: ELEMENT_TYPES;
//   style: BlockStyle;
// }

// export const setComponentThemeType = (
//   editor: ReactEditor,
//   type: ThemeComponent
// ) => {
//   const indexOfSelectedBlock = editor.selection?.anchor.path[0];
//   const currentSelection = { ...editor.selection };
//   let typePreviousBlock: string | null = null;
//   if (editor.selection) {
//     typePreviousBlock = Editor.parent(editor, editor.selection.anchor)[0]
//       .type as string;
//     console.log(typePreviousBlock);
//   }

//   if (
//     typeof indexOfSelectedBlock === "number" &&
//     typePreviousBlock !== ELEMENT_TYPES.table &&
//     typePreviousBlock !== ELEMENT_TYPES.tr &&
//     typePreviousBlock !== ELEMENT_TYPES.td
//   ) {
//     Transforms.setNodes(editor, {
//       ...editor.children[indexOfSelectedBlock],
//       ...type,
//     });
//     Transforms.setSelection(editor, currentSelection);
//   }
// };

export default Element;
