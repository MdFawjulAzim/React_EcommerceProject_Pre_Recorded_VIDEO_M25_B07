import React from "react";


import toast, { Toaster } from 'react-hot-toast';
import AppNavBar from './appNavBar';
import Footer from './footer';

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
