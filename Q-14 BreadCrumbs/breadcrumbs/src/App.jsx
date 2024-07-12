import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetail from "./pages/Product-Detail";
import ProductListing from "./pages/Product-Listing";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {

  return (
    <>
      <Router>
        <div className="app">
          <h1>Shila Online Store</h1>
          <Breadcrumbs />
          <hr />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<ProductListing />} />
            <Route path="/products/:id" element={<ProductDetail />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
