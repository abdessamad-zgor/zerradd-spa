const { matchRoutes } = require("react-router");
const { renderToString } = require("react-dom/server");
const App = require("../../App").default;

const HTML = require("../../components/HTML.jsx").default;

const renderViewMiddleware = async (req, res, next) => {
  let helmetContext = {};
  
    const app = renderToString(
      <App
        location={req.url}
        context={helmetContext}
        server
      />
    );
    let { helmet } = helmetContext;
    const html = renderToString(
      <HTML html={app}  />
    );
    let htmlArr = html.split("</head>");
    res.send(
      `<!DOCTYPE html>${
        htmlArr[0] +
        helmet.title.toString() +
        helmet.meta.toString() +
        "</head>" +
        htmlArr[1]
      }`
    );
};

module.exports = renderViewMiddleware;
