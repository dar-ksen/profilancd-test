import About from "../pages/About";
import News from "../pages/News";

export const routers = [
  { path: "/", component: About, exact: true },
  { path: "/news", component: News, exact: true },
];
