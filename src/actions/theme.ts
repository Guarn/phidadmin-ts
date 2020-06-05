export enum ThemeActionTypes {
  TOGGLE_DAY_NIGHT = "TOGGLE_DAY_NIGHT",
}

const toggleDayNight = () => ({
  type: ThemeActionTypes.TOGGLE_DAY_NIGHT,
});

export type ThemeActions = ReturnType<typeof toggleDayNight>;

export const themesActions = {
  toggleDayNight,
};
