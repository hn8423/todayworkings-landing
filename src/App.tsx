import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";

import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Service from "./pages/service/Service";
import Document from "./pages/document/Document";
import Sign from "./pages/sign/Sign";
import Backoffice from "./pages/backoffice/Backoffice";
import Contact from "./pages/contact/Contact";
import FAQ from "./pages/faq/FAQ";
import Price from "./pages/price/Price";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/document" element={<Document />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/backoffice" element={<Backoffice />} />
        <Route path="/price" element={<Price />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
      </Routes>
    </Layout>
  );
}

export default App;
