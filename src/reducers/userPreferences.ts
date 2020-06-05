import { ThemeActionTypes, ThemeActions } from "../actions/theme";

export enum ThemeType {
  LIGHT = "light",
  DARK = "dark",
}

export interface UserPreferencesState {
  theme: ThemeType;
}

export interface userPreferencesProps {
  state: UserPreferencesState;
  action: any;
}

export const userPreferences = (
  state: UserPreferencesState = defaultUserPreferences,
  action: ThemeActions
) => {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_DAY_NIGHT:
      return {
        ...state,
        theme:
          state.theme === ThemeType.LIGHT ? ThemeType.DARK : ThemeType.LIGHT,
      };
    default:
      return state;
  }
};

const defaultUserPreferences = {
  theme: ThemeType.LIGHT,
};

export default userPreferences;
