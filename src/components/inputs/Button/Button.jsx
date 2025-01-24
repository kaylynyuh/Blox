import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./button.scss";

export const Button = ({
  elevation = false,
  disabled = false,
  variant = "contained",
  size = "medium",
  children,
}) => {
  return (
    <button
      type="button"
      className={classnames(
        "blox-button",
        `blox-button--${size}`,
        `blox-button--${variant}`,
        {
          ["blox-button--disabled"]: disabled,
          ["blox-button--elevation"]: elevation,
        }
      )}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  /** Button contents */
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ),
  /** Should the button be elevated */
  elevation: PropTypes.bool,
  /** Optional click handler */
  onClick: PropTypes.func,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Is this the principal call to action on the page? */
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
};
