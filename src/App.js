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
import About from "./pages/frontend/About";
import SignIn from "./pages/authentication/Login";
import SignUp from "./pages/authentication/Register";
import NotFoundPage from "./components/NotFound";
import Contact from "./pages/frontend/Contact";
import AboutUs from "./pages/frontend/About";
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="auth" children={<SignIn />}>
          <Route path="signin" element={<SignIn />} />
          <Route path="signup" element={<SignUp />} />
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
