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
import About from "./pages/restaurant/CreateRestaurant";
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
import TypeOfBusiness from "./pages/restaurant/TypeOfBusiness";
import BasicInfo from "./pages/restaurant/BasicInfo";
import RestaurantList from "./pages/admin/Restaurants/RestaurantList";
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
        <Route path="admin" children={<CreateRestaurant />}>
          <Route path="user" element={<UsersList />} />
          <Route path="restaurant" element={<RestaurantList />} />
        </Route>
        <Route path="restaurant" children={<CreateRestaurant />}>
          <Route path="management" element={<CreateRestaurant />} />
          {/* <Route path="type-of-business" element={<TypeOfBusiness />} /> */}
          <Route path="basic-info" element={<BasicInfo />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
