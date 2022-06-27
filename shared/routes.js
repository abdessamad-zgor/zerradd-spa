const About = require("../pages/About").default;
const Home = require("../pages/Home").default;

module.exports = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
];
