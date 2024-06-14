import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createContext } from "react";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";
import products from "./data/products.js";

export const UserContext = createContext({});
export const ProductsContext = createContext({});

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <div className="App">
      <UserContext.Provider value={userData}>
        <ProductsContext.Provider value={products}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/view/:id" element={<ViewProductPage />} />
            </Routes>
          </Router>
        </ProductsContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
