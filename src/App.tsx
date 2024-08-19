import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFound from "./pages/notfound";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<DocsPage />} path="/men" />
      <Route element={<PricingPage />} path="/women" />
      <Route element={<BlogPage />} path="/sale" />
      <Route element={<AboutPage />} path="/jordan" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
