import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Information from "./pages/Information";
import AuthLayout from "./pages/AuthLayout";
import Payment from "./pages/Payment";
import TrackYourOrder from "./pages/TrackYourOrder";
import ForgotPass from "./pages/ForgotPass";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckOut from "./pages/CheckOut";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-[url('/images/Noisy-bg.jpg')] bg-cover bg-center opacity-15"></div>
      {/* Content Layer */}
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductDetailsPage />} />
          <Route path="cart" element={<Cart />} />

          <Route element={<CheckOut />}>
            <Route path="information" element={<Information />} />
            <Route path="payment" element={<Payment />} />
            <Route path="track-your-order" element={<TrackYourOrder />} />
          </Route>
          <Route element={<AuthLayout />}>
            <Route path="sign-in" element={<SignIn />} />
            <Route path="register" element={<Register />} />
            <Route path="forgot-pass" element={<ForgotPass />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
