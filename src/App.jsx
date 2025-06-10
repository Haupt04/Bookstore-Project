import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AllBooks from "./components/AllBooks";
import Homepage from "./components/Homepage";
import SingleBook from "./components/pages/SingleBook";
import CartPage from "./components/pages/CartPage";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="all-products" element={<AllBooks />} />
        <Route path="/book/:id" element={<SingleBook />} />
      </Route>
    </Routes>
  );
}

export default App
