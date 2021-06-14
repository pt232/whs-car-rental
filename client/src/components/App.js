import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CarExtrasPage from "../pages/listing/extras/CarExtrasPage";
import HomePage from "../pages/home/HomePage";
import ListingPage from "../pages/listing/ListingPage";
import Footer from "./footer/Footer";
import Navbar from "./nav/Navbar";
import CarCheckoutPage from "../pages/listing/checkout/CarCheckoutPage";
import LoginPage from "../pages/login/LoginPage";
import AccountPage from "../pages/account/AccountPage";
import { CarProvider } from "../context/car/CarState";
import { FilterProvider } from "../context/filter/FilterState";
import ForgotPasswordPage from "../pages/password/ForgotPasswordPage";

const App = () => {
  return (
    <FilterProvider>
      <CarProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/listing" exact component={ListingPage} />
            <Route path="/listing/extras" component={CarExtrasPage} />
            <Route path="/listing/checkout/:id" component={CarCheckoutPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route
              path="/login/forgot-password"
              component={ForgotPasswordPage}
            />
            <Route path="/account" component={AccountPage} />
          </Switch>
          <Footer />
        </Router>
      </CarProvider>
    </FilterProvider>
  );
};

export default App;
