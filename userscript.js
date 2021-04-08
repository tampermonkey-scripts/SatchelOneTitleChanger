// ==UserScript==
// @name         SatchelOne Title Changer
// @namespace    https://dev.azure.com/tampermonkey-scripts
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://satchelone.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
  "use strict";

  function runProgram() {
    if (window.location == "https://www.satchelone.com/todos/issued") {
      document.title = "SMHW - Todos";
    }
  }

  setTimeout(runProgram, 6000);
})();
