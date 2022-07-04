const { matchRoutes } = require("react-router");
const { renderToString } = require("react-dom/server");
const {initI18nObj} =require("../../i18n")
const App = require("../../App").default;
let { getPreferredLanguage, getInitialProps} = require("../utils")
const HTML = require("../../components/HTML.jsx").default;

const renderViewMiddleware = async (req, res, next) => {
  let helmetContext = {};
  let i18n = initI18nObj().cloneInstance()
  i18n.language = getPreferredLanguage(req)
    const app = renderToString(
      <App
        location={req.url}
        i18n={i18n}
        context={helmetContext}
        server
      />
    );
    let { helmet } = helmetContext;
    let i18nStore = i18n.store
    const html = renderToString(
      <HTML html={app} i18n={i18nStore} />
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
