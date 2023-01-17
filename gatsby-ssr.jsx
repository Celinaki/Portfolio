const React = require("react")

export const onRenderBody = ({ setHtmlAttributes }) => {
    return setHtmlAttributes({ lang: 'en' });
  };
  //Not working