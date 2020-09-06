import { Element } from "slate";

// HTML TYPES

export const LIST_TYPES = ["numbered-list", "bulleted-list"];

export type PositionArgs =
  | "-moz-initial"
  | "inherit"
  | "initial"
  | "revert"
  | "unset"
  | "absolute"
  | "-webkit-sticky"
  | "fixed"
  | "relative"
  | "static"
  | "sticky"
  | undefined;

/**
 * Contains base HTML elements to use to create a `CustomElement`
 */
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

/**
 * Contains Slate custom types to use in document. Update this for every new custom component.
 */
export const accessiblesHTMLElements = [
  "TABLEAU",
  "PARAGRAPH",
  "CHAPITRE",
  "TITRE_CHAPITRE",
  "SOUSTITRE_CHAPITRE",
];

/**
 * Contains Slate custom subelements. Usefull to be sure to select a block and not a sub part.
 */
export const accessiblesHTMLSubElements = ["TD", "TR"];

/**
 * Contains custom HTML elements to use to create a `CustomElement`
 */
export enum CustomHtmlTypes {
  img = "img",
}

/**
 * Contains the alignment possibilities for text alignment
 */
export enum ContentAlignment {
  left = "left",
  right = "right",
  center = "center",
  justify = "justify",
}

// SLATE TYPES

/**
 * Slate default types for `attributes` props (didn't exists)
 */
export type SlateAttributes = {
  "data-slate-node": "element";
  "data-slate-inline"?: true;
  "data-slate-void"?: true;
  dir?: "rtl";
  ref: any;
};

/**
 * Interface of all style elements a `CustomElement` can act on.
 * Most of these elements can directly apply the css, except for :
 *
 * `indentLevel` : takes a number and apply `number * 5 + "%"`
 */
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

/**
 * Interface based on `Element` from Slate, adds name and styles for theme dark/light
 *
 * `baseElement` : the HTML component used for this `CustomElement`
 *
 * `name` : Component's name
 *
 * `styleLight` : styles for light theme
 *
 * `styleDark` : styles for dark theme. Takes all the style from light thme except for colors parts
 *
 */
export interface CustomElement extends Element {
  baseElement: ElementHtmlTypes | CustomHtmlTypes;
  name: string;
  styleLight: CustomElementStyle;
  styleDark: CustomElementStyle;
}

// LEAF TYPES

export enum LEAF_TYPES {
  bold = "bold",
  code = "code",
  italic = "italic",
  underline = "underline",
  span = "span",
}
