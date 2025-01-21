/* 
Generate CSS variables from the theme object. These are then 
attached to the root and become available to the entire application
as global CSS variables.
*/

const generateCSSVars = (theme = {}, prefix = "") => {
  let cssVars = {};

  for (const key in theme) {
    const value = theme[key];

    if (typeof value === "object") {
      Object.assign(cssVars, generateCSSVars(value, `${prefix}${key}-`));
    } else {
      cssVars[`--${prefix}${key}`] = value;
    }
  }
  return cssVars;
};

export default generateCSSVars;
