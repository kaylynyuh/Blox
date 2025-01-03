import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './button.css';

export const Button = ({ backgroundColor, variant, size, label }) => {
    return (
        <button
            type="button"
            className={classnames('blox-button', `blox-button--${size}`, `blox-button--${variant}`)}
            style={backgroundColor && { backgroundColor }}
        >
            {label}
        </button>
    );
};


Button.propTypes = {
    /** Is this the principal call to action on the page? */
    variant: PropTypes.oneOf(['contained', 'outlined', 'text']),
    /** What background color to use */
    backgroundColor: PropTypes.string,
    /** How large should the button be? */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Button contents */
    label: PropTypes.string.isRequired,
    /** Optional click handler */
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: null,
    variant: 'contained',
    size: 'medium',
    onClick: undefined,
};
