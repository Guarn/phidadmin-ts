import { VisibilityFiltersTypes, ActionTypes } from "../actions";

export interface VisibilityAction {
  filter: VisibilityFiltersTypes;
  type: ActionTypes;
}

const visibilityFilter = (
  state = VisibilityFiltersTypes.SHOW_ALL,
  action: VisibilityAction
) => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
