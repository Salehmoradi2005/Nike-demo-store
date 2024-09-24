import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFound from "./pages/notfound";
import Women from "./pages/women";
import Men from "./pages/men";
import Cart from "./pages/cart";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<Men />} path="/men" />
      <Route element={<Women />} path="/women" />
      <Route element={<Cart />} path="/cart" />
      <Route element={<BlogPage />} path="/sale" />
      <Route element={<AboutPage />} path="/jordan" />
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
