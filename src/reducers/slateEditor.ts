import { Node, Element } from "slate";
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

export interface CustomElementStyle {
  backgroundColor?: string;
  border?: string;
  margin?: number;
  padding?: number;
  indentLevel?: number;
  contentAlignment?: ContentAlignment;
  transition?: string;
  marginBlockStart?: number;
  marginBlockEnd?: number;
  borderCollapse?:
    | "-moz-initial"
    | "inherit"
    | "initial"
    | "revert"
    | "unset"
    | "collapse"
    | "separate"
    | undefined;
}

export interface CustomElement extends Element {
  baseElement: ElementHtmlTypes | CustomHtmlTypes;
  name: string;
  styleLight: CustomElementStyle;
  styleDark: CustomElementStyle;
}

export interface SlateTheme {
  id: string;
  name: string;
  description: string;
  components: Record<string, CustomElement>;
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
  { type: "TITRE_CHAPITRE", children: [{ text: "Titre de Chapitre" }] },
  {
    type: "SOUSTITRE_CHAPITRE",
    children: [{ text: "Sous-titre de Chapitre" }],
  },
  {
    type: "PARAGRAPH",
    children: [
      {
        text:
          "Paragraphe simple.... Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple.. Paragraphe simple..    ",
      },
    ],
  },
  {
    type: "TABLE",
    children: [
      {
        type: "TR",
        children: [
          {
            type: "TD",
            children: [{ text: "" }],
          },
          {
            type: "TD",
            children: [{ text: "Titre 1" }],
          },
          {
            type: "TD",
            children: [{ text: "Titre 2" }],
          },
          {
            type: "TD",
            children: [{ text: "Titre 3" }],
          },
        ],
      },
      {
        type: "TR",
        children: [
          {
            type: "TD",
            children: [{ text: "Ligne 1" }],
          },
          {
            type: "TD",
            children: [{ text: "1" }],
          },
          {
            type: "TD",
            children: [{ text: "2" }],
          },
          {
            type: "TD",
            children: [{ text: "3" }],
          },
        ],
      },
    ],
  },
];
const TITRE_CHAPITRE: CustomElement = {
  baseElement: ElementHtmlTypes.h2,
  name: "TITRE_CHAPITRE",
  styleLight: {
    backgroundColor: "salmon",
    contentAlignment: ContentAlignment.center,
  },
  styleDark: {},
  children: [],
};
const SOUSTITRE_CHAPITRE: CustomElement = {
  baseElement: ElementHtmlTypes.h3,
  name: "SOUSTITRE_CHAPITRE",
  styleLight: { padding: 30, contentAlignment: ContentAlignment.center },
  styleDark: {},
  children: [],
};
const PARAGRAPH: CustomElement = {
  baseElement: ElementHtmlTypes.paragraph,
  name: "PARAGRAPH",
  styleLight: { indentLevel: 2 },
  styleDark: {},
  children: [],
};
const BLOCK_QUOTE: CustomElement = {
  baseElement: ElementHtmlTypes.blockQuote,
  name: "BLOCK_QUOTE",
  styleLight: {},
  styleDark: {},
  children: [],
};
const TABLE: CustomElement = {
  baseElement: ElementHtmlTypes.table,
  name: "TABLE",
  styleLight: { border: "1px solid grey", borderCollapse: "collapse" },
  styleDark: {},
  children: [],
};
const TR: CustomElement = {
  baseElement: ElementHtmlTypes.tr,
  name: "TR",
  styleLight: { border: "1px solid grey", borderCollapse: "collapse" },
  styleDark: {},
  children: [],
};
const TD: CustomElement = {
  baseElement: ElementHtmlTypes.td,
  name: "TD",
  styleLight: { border: "1px solid grey", borderCollapse: "collapse" },
  styleDark: {},
  children: [],
};

const defaultTheme: SlateTheme = {
  id: "0",
  name: "defaultTheme",
  description: "This theme is the default theme.",
  components: {
    TITRE_CHAPITRE,
    SOUSTITRE_CHAPITRE,
    PARAGRAPH,
    BLOCK_QUOTE,
    TABLE,
    TR,
    TD,
  },
};

export default slateEditor;
