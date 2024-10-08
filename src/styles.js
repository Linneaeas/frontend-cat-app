import { css } from "@emotion/react";

export const colors = {
  orange: "#d86d6e",
  orangeLight: "#f3bdbe",
};

export const globalStyles = css`
 
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;

  }

  a {
    text-decoration: none;
  }

  button {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

   input {
    cursor: pointer;
  }

  ul, ol {
    list-style-type: none;
  }

   h1, h2, h4, span {
    color: ${colors.orange};
  }
`;
