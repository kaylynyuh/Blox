import React, { useContext } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import { ThemeContext } from "../../../theme/ThemeProvider";
import "./button.scss";

export const Button = ({
  backgroundColor = null,
  color = "inherit",
  elevation = false,
  disabled = false,
  variant = "contained",
  size = "medium",
  children,
}) => {
  const theme = useContext(ThemeContext);
  console.log({ theme});
  return (
    <button
      type="button"
      className={classnames(
        "blox-button",
        `blox-button--${color}`,
        `blox-button--${backgroundColor}`,
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
  /** What background color to use */
  backgroundColor: PropTypes.string,
  /** Button contents */
  children: PropTypes.oneOfType(
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ),
  /** What text color to use */
  color: PropTypes,
  /** Should the button be elevated */
  elevation: PropTypes.bool,
  /** Optional click handler */
  onClick: PropTypes.func,
  /** How large should the button be? */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /** Is this the principal call to action on the page? */
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
};
