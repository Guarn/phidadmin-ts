import * as actions from ".";

describe("todo actions", () => {
  it("addTodo should create adequate action", () => {
    expect(actions.addTodo("COCO")).toEqual({
      type: actions.ActionTypes.ADD_TODO,
      id: 0,
      text: "COCO",
    });
  });
  it("setVisibilityFilter should create adequate action", () => {
    expect(
      actions.setVisibilityFilter(actions.VisibilityFiltersTypes.SHOW_ALL)
    ).toEqual({
      type: actions.ActionTypes.SET_VISIBILITY_FILTER,
      filter: actions.VisibilityFiltersTypes.SHOW_ALL,
    });
  });
  it("toggleTodo should create adequate action", () => {
    expect(actions.toggleTodo(5)).toEqual({
      type: actions.ActionTypes.TOGGLE_TODO,
      id: 5,
    });
  });
});
