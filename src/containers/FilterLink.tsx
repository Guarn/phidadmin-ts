import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";
import { TodoClass } from "../components/Classes";
import { GlobalState } from "../reducers";
import { VisibilityAction } from "../reducers/visibilityFilter";

const mapStateToProps = (state: GlobalState, ownProps: any) => {
  return {
    active: ownProps.filter === state.visibilityFilter,
  };
};

const mapDispatchToProps = (
  dispatch: (val: VisibilityAction) => void,
  ownProps: any
) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    },
  };
};

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default FilterLink;
