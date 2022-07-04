import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { I18nextProvider, useSSR } from "react-i18next";

import { HelmetProvider } from "react-helmet-async";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import {initI18nObj} from "./i18n"
import About from "./pages/About";


function App(props) {
  let Router = process.env.BROWSER ? BrowserRouter : StaticRouter;
 process.env.BROWSER? useSSR(window.__I18N_STORE__,"fr"):(()=>{})()


  let routerProps = process.env.BROWSER
    ? { basename: "/" }
    : { location: props.location };
  let helmetProps = process.env.BROWSER ? {} : { context: props.context };
  let i18nProps = process.env.BROWSER ? {i18n: initI18nObj()} : { i18n: props.i18n }

  return (
    <I18nextProvider {...i18nProps}>
      <HelmetProvider {...helmetProps}>

        <Router {...routerProps}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
            </Route>
          </Routes>
        </Router>
      </HelmetProvider>
    </I18nextProvider>

  );
}

export default App;
