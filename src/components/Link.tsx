import React from "react";
import PropTypes from "prop-types";

export interface LinkProps {
  active: boolean;
  onClick: () => void;
}
const Link: React.FC<LinkProps> = ({ active, onClick, children }) => {
  if (active) {
    return <span>{children}</span>;
  }

  return (
    <button
      onClick={onClick}
      disabled={active}
      style={{
        marginLeft: "4px",
      }}
    >
      {children}
    </button>
  );
};

export default Link;
