import { BrowserRouter, Routes, Route } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";

function App(props) {
  let Router = process.env.BROWSER ? BrowserRouter : StaticRouter;

  let routerProps = process.env.BROWSER
    ? { basename: "/" }
    : { location: props.location };
  let helmetProps = process.env.BROWSER ? {} : { context: props.context };

  return (
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
  );
}

export default App;
