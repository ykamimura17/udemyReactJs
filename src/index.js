import React from "react";
//React18から仮想DOMの宣言の仕方が変化
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

import { App } from "./App";

// ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
