import { Node } from "slate";
import {
  SlateEditorActions,
  SlateEditorActionsTypes,
} from "../actions/slateEditor";

export enum CustomHtmlTypes {
  img = "img",
}

export enum ElementHtmlTypes {
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
  custom = "custom",
}

export enum ContentAlignment {
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
}

export interface SlateComponentStyle {
  backgroundColor?: string;
  border?: string;
  margin?: number;
  padding?: number;
  indentLevel?: number;
  contentAlignment?: ContentAlignment;
  transition?: string;
  marginBlockStart?: number;
  marginBlockEnd?: number;
}

export interface SlateComponent {
  baseElement: ElementHtmlTypes | CustomHtmlTypes;
  name: string;
  styleLight: SlateComponentStyle;
  styleDark: SlateComponentStyle;
}

export interface SlateTheme {
  id: string;
  name: string;
  description: string;
  components: SlateComponent[];
}

export interface SlateEditorState {
  value: Node[];
  theme: SlateTheme;
}

const slateEditor = (
  state: SlateEditorState = { value: initialValue, theme: defaultTheme },
  action: SlateEditorActions
) => {
  switch (action.type) {
    case SlateEditorActionsTypes.UPDATE:
      return { ...state, value: action.value };
    default:
      return state;
  }
};

const initialValue = [
  {
    type: "table",
    children: [
      {
        type: "tr",
        children: [
          { type: "td", children: [{ text: "test" }] },
          { type: "td", children: [{ text: "test" }] },
          { type: "td", children: [{ text: "test" }] },
          { type: "td", children: [{ text: "test" }] },
        ],
      },
      {
        type: "tr",
        children: [
          { type: "td", children: [{ text: "test" }] },
          { type: "td", children: [{ text: "test" }] },
          { type: "td", children: [{ text: "test" }] },
          { type: "td", children: [{ text: "test" }] },
        ],
      },
    ],
  },
];

const defaultTheme: SlateTheme = {
  id: "0",
  name: "defaultTheme",
  description: "This theme is the default theme.",
  components: [],
};

export default slateEditor;
