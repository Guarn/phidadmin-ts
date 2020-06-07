import { Node } from "slate";
import {
  SlateEditorActions,
  SlateEditorActionsTypes,
} from "../actions/slateEditor";

export interface SlateEditorState {
  value: Node[];
}

const slateEditor = (
  state: SlateEditorState = { value: initialValue },
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
          { type: "td", children: [{ text: "test1" }] },
          { type: "td", children: [{ text: "test2" }] },
          { type: "td", children: [{ text: "test3" }] },
          { type: "td", children: [{ text: "test4" }] },
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
  {
    type: "paragraph",
    children: [{ text: "hahafqsf qslfkjsqldkmfj mlsqdfj lmsdfjqmsl" }],
  },
  //   {
  //     type: "newTable",
  //     children: [
  //       {
  //         text: "",
  //       },
  //     ],
  //     dataTable: [
  //       { head: "Entete", content: [{ case: "test" }, { case: " de numero" }] },
  //       {
  //         head: "Entete",
  //         content: [{ case: "tterertertest" }, { case: " de numero" }],
  //       },
  //       {
  //         head: "Entete",
  //         content: [{ case: "tedfgdst" }, { case: " de numero" }],
  //       },
  //       {
  //         head: "Entete",
  //         content: [{ case: "t fgd gfgd dest" }, { case: " de numero" }],
  //       },
  //     ],
  //   },
];

export default slateEditor;
