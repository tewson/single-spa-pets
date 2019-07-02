import React from "react";
import ReactDOM from "react-dom";
import * as singleSpa from "single-spa";
import SystemJS from "systemjs";

import App from "./App";

singleSpa.registerApplication(
  "cat",
  async () => {
    return SystemJS.import("http://localhost:8080/catSingleSpaBundle.js");
  },
  () => {
    return window.location.pathname.startsWith("/cat");
  }
);

singleSpa.registerApplication(
  "dog",
  async () => {
    await SystemJS.import("https://unpkg.com/zone.js");
    return SystemJS.import("http://localhost:8081/main.js");
  },
  () => {
    return window.location.pathname.startsWith("/dog");
  },
  {
    // Passing base href for Dog's routing.
    baseHref: "/dog"
  }
);

singleSpa.start();

ReactDOM.render(<App />, document.getElementById("app"));
