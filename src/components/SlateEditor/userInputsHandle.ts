import { ReactEditor } from "slate-react";
import { Range, Editor, Transforms } from "slate";
import { getMaxOffset } from "./utils";

const userInputsHandle = (editor: ReactEditor, event: React.KeyboardEvent) => {
  const { selection } = editor;

  console.log(event);
  if (selection && Range.isCollapsed(selection)) {
    const tableRowsCount = Editor.parent(editor, selection, { depth: 2 })[0]
      .children.length;

    const [cell] = Editor.nodes(editor, {
      match: (n) => n.type === "TD",
    });
    if (cell) {
      let currentRow = [...editor.selection?.anchor.path];

      const currentOffset = editor.selection?.anchor.offset || 0;

      if (event.key === "ArrowDown") {
        if (currentRow && currentRow[1] < tableRowsCount - 1) {
          event.preventDefault();
          currentRow[1] += 1;
          const offset = getMaxOffset(editor, currentRow);
          Transforms.setSelection(editor, {
            anchor: {
              path: currentRow,
              offset: currentOffset <= offset ? currentOffset : offset,
            },
            focus: {
              path: currentRow,
              offset: currentOffset <= offset ? currentOffset : offset,
            },
          });
        }
        if (currentRow[1] === tableRowsCount - 1) {
          event.preventDefault();
        }
      }
      if (event.key === "ArrowUp") {
        if (currentRow && currentRow[1] > 0) {
          event.preventDefault();

          currentRow[1] -= 1;
          const offset = getMaxOffset(editor, currentRow);

          Transforms.setSelection(editor, {
            anchor: {
              path: currentRow,
              offset: currentOffset <= offset ? currentOffset : offset,
            },
            focus: {
              path: currentRow,
              offset: currentOffset <= offset ? currentOffset : offset,
            },
          });
        }
        if (currentRow[1] === 0) {
          event.preventDefault();
        }
      }
      if (event.key === "Enter") {
        event.preventDefault();

        Transforms.insertText(editor, "\n");
      }
    }
  }
};

export default userInputsHandle;
