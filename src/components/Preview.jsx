import { useSelector } from "react-redux";
import React from "react";

const Preview = () => {
  const tabs = useSelector((state) => state.tabs);

  function getCode(lang) {
    return tabs.find((obj) => obj.lang === lang).code;
  }

  const srcDoc = `
<!DOCTYPE html>
<html>
  <head>
  <style>${getCode("css")}</style>
  </head>
  <body>
  ${getCode("html")}
  <script>${getCode("javascript")}</script>
  </body>
  </html>`;

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-zinc-900">
      <iframe
        srcDoc={srcDoc}
        sandbox="allow-scripts"
        className="block w-full h-full"
      ></iframe>
    </div>
  );
};

export default Preview;
