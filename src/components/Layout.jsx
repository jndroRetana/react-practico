import React, { Children } from "react";
import Header from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
