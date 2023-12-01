import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Link,
  Outlet,
  RouterProvider,
  Routes,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import SignIn from "./pages/authentication/Login";
import Register from "./pages/authentication/Register";
import NotFoundPage from "./components/NotFound";
import Contact from "./pages/frontend/Contact";
import AboutUs from "./pages/restaurant/CreateRestaurant";
import { ToastProvider } from 'react-toast-notifications';
import RegistrationForm from "./pages/authentication/RegistrationForm";
import MapDefault from "./pages/map/MapDefault";
import UsersList from "./pages/admin/Users/UserList"
import CreateRestaurant from "./pages/restaurant/CreateRestaurant";
import RestaurantList from "./pages/admin/Restaurants/RestaurantList";
import FormRegister from "./pages/restaurant/FormRegister";
import Products from "./pages/restaurant/Products";
import HomePage from "./pages/user/HomePage";
import RestaurantDetails from "./pages/user/RestaurantDetails";
const App = () => {
  const { phoenixTheme } = useSelector((state) => state);
  useEffect(() => {
    if (phoenixTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [phoenixTheme]);

  return (
    <ToastProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" children={<SignIn />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<Register />} />
          <Route path="registration" element={<RegistrationForm />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="map" element={<MapDefault />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="admin" children={<UsersList />}>
          <Route path="user" element={<UsersList />} />
          <Route path="restaurant" element={<RestaurantList />} />
        </Route>
        <Route path="restaurant" children={<CreateRestaurant />}>
          <Route path="management" element={<CreateRestaurant />} />
          <Route path="basic-info" element={<FormRegister />} />
          <Route path="products/:id" element={<Products />} />
        </Route>
        <Route path="home-page" element={<HomePage />} />
        <Route path="restaurant-detail/:id" element={<RestaurantDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
