import React, { CSSProperties } from "react";
import { RenderElementProps } from "slate-react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../reducers";
import { ThemeType } from "../../reducers/userPreferences";
import {
  SlateAttributes,
  ElementHtmlTypes,
  CustomElement,
  PositionArgs,
} from "./Slate.types";
import { SousMenuContainer, VerticalBar } from "./SlateEditor.styled";

export interface SlateElementStyleProps {
  element: CustomElement;
  theme: ThemeType;
}
/**
 * Takes a `CustomElement` and a `ThemeType`and returns a valid css object for `style={}`
 */
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
  const position: PositionArgs = "relative";
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
    position,
  };
};

export interface GetJSXElementFromNameProps {
  attributes: SlateAttributes;
  type: string;
  children?: any;
}
/**
 * Returns the correct `HTMLElement` to use for a `CustomElement`
 */
const GetJSXElementFromProps: React.FC<GetJSXElementFromNameProps> = ({
  attributes,
  type,
  children,
}) => {
  // List all components available in selected theme
  const components = useSelector(
    (state: GlobalState) => state.slateEditor.theme.components
  );

  // Get the current user global theme choice, can be dark or light
  const theme = useSelector(
    (state: GlobalState) => state.userPreferences.theme
  );
  const element = components[type];

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

interface SousMenuProps {
  element: CustomElement;
}

const SousMenu = ({ element }: SousMenuProps) => {
  return (
    <SousMenuContainer contentEditable={false}>
      {element.name}
      <VerticalBar />
    </SousMenuContainer>
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
