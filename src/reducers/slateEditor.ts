import { Node } from "slate";
import {
  SlateEditorActions,
  SlateEditorActionsTypes,
} from "../actions/slateEditor";
import {
  ElementHtmlTypes,
  CustomElement,
  ContentAlignment,
} from "../components/SlateEditor/Slate.types";

export interface SlateTheme {
  id: string;
  name: string;
  description: string;
  /**
   * Object containing all the elements used in the slate theme. access by `components[NAME]`.
   * @example
   * components["SOUS_CHAPITRE"]
   *
   */
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
  name: "Chapitre",
  styleLight: {
    backgroundColor: "salmon",
    contentAlignment: ContentAlignment.center,
  },
  styleDark: {},
  children: [],
};
const SOUSTITRE_CHAPITRE: CustomElement = {
  baseElement: ElementHtmlTypes.h3,
  name: "Sous chapitre",
  styleLight: { padding: 30, contentAlignment: ContentAlignment.center },
  styleDark: {},
  children: [],
};
const PARAGRAPH: CustomElement = {
  baseElement: ElementHtmlTypes.paragraph,
  name: "Paragraphe",
  styleLight: { indentLevel: 2 },
  styleDark: {},
  children: [],
};
const BLOCK_QUOTE: CustomElement = {
  baseElement: ElementHtmlTypes.blockQuote,
  name: "Code",
  styleLight: {},
  styleDark: {},
  children: [],
};
const TABLE: CustomElement = {
  baseElement: ElementHtmlTypes.table,
  name: "Tableau",
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
