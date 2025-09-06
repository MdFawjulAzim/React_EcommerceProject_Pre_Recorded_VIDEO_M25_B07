import React from "react";

import Footer from "./Footer";
import toast, { Toaster } from 'react-hot-toast';
import AppNavBar from './appNavBar';

const Layout = (props) => {
  return (
    <>
      <AppNavBar />
      {props.children}
      <Toaster position="bottom-center" />
      <Footer />
    </>
  );
};

export default Layout;
