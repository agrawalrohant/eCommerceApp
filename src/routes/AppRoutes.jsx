import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/header/Header";
import useFetchData from "../hooks/useFetchData";
import Loader from "../components/loader/Loader";
import ProductList from "../pages/productList";
import NotFound from "../pages/notFound/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import CartDetails from "../pages/cartDetails/CartDetails";

const AppRoutes = () => {
  const { data: categories, isLoading } = useFetchData(
    "https://fakestoreapi.com/products/categories",
    []
  );

  return (
    <>
      <Router>
        {/* <Loader /> */}
        <Header categories={categories} />
        {isLoading ? (
          <Loader />
        ) : (
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products/:categoryName" element={<ProductList />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart-details" element={<CartDetails />} />
          </Routes>
        )}

        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default AppRoutes;
