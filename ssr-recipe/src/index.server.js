import React from "react";
import ReactDOMServer from "react-dom/server";

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Rendering!!</div>
)

console.log("index.server.js > html");
console.log(html);
