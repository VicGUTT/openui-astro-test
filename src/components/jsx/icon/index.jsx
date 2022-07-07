import * as React from "react";

import bars from "./_bars";

const icons = {
  bars,
};

// TODO: There's probably a more Reacty/JSXy wait of doing this 🤷‍♂️
export default ({ name, ...rest }) => icons[name]?.(rest);
