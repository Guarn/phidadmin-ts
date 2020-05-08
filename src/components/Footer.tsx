import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFiltersTypes } from "../actions";

const Footer = () => (
  <p>
    Show: <FilterLink filter={VisibilityFiltersTypes.SHOW_ALL}>All</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFiltersTypes.SHOW_ACTIVE}>Active</FilterLink>
    {", "}
    <FilterLink filter={VisibilityFiltersTypes.SHOW_COMPLETED}>
      Completed
    </FilterLink>
  </p>
);

export default Footer;
