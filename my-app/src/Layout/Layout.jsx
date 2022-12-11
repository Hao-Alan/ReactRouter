import React from "react";
import Footer from "../components/CommonComponent/Footer";
import Header from "../components/CommonComponent/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
